const router = require('express').Router();
const mongoose = require('mongoose');
const CreatingPhases = mongoose.model('CreatingPhases');
const TempProduct = mongoose.model('TempProduct');
const verifyToken = require('../middleware/verify-token');

const jsonResponseOnError = (res, statusCode, error) =>
    res
        .status(statusCode)
        .json({ error });


const jsonResponseOnSuccess = (res, statusCode, data) =>
    res
        .status(statusCode)
        .json(data);

const completeFirstStep = async (req, res) => {
    try {
        const userId = req.userData._id;
        const { name, price, quantity, state, description } = req.body.product;
        let { currentStep } = req.body;

        const tempProduct = await TempProduct.create({
            owner: userId,
            name,
            price,
            quantity,
            state,
            description
        });

        ++currentStep;

        const currentPhase = await CreatingPhases.create({
            currentStep,
            userId,
            tempProductId: tempProduct._id,
        });

        return jsonResponseOnSuccess(res, 201, {
            currentPhase,
            tempProduct,
            currentStep,
            message: 'First step successfully completed!'
        });
    } catch (error) {
        console.log(error);
        return jsonResponseOnError(res, 500, { error });
    }
}

const completeSecondStep = async (req, res) => {
    try {
        const userId = req.userData._id;
        const categories = req.body.categories;
        let currentStep = req.body.step;

        const currentPhase = await CreatingPhases.findOne({ userId })
        const productId = currentPhase.tempProductId;

        const product = await TempProduct.findById(productId);
        product.categories = [... new Set([...product.categories, ...categories])];
        await product.save();

        ++currentStep;
        currentPhase.currentStep = currentStep;

        await currentPhase.save();

        return jsonResponseOnSuccess(res, 201, {
            currentStep,
            message: 'Categories successfully added!'
        });

    } catch (error) {
        console.log(error);
        return jsonResponseOnError(res, 500, { error });
    }

}

const getStateForStep = async (req, res) => {
    try {
        const userId = req.userData._id;

        const currentPhase = await CreatingPhases.findOne({ userId })
            .populate('tempProductId');

        if (!currentPhase) {
            return jsonResponseOnSuccess(res, 200, { currentPhase: { currentStep: 1 } });
        } else {
            const product = currentPhase.tempProductId;
            return jsonResponseOnSuccess(res, 200, { currentPhase, product });
        }
    } catch (error) {
        return jsonResponseOnError(res, 500, { error });
    }
}

module.exports = router
    .post('/step/first/complete', verifyToken, completeFirstStep)
    .post('/step/second/complete', verifyToken, completeSecondStep)
    .post('/step', verifyToken, getStateForStep);