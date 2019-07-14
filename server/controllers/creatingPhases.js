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

const completeStep = async (req, res) => {
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

const getStateForStep = async (req, res) => {
    try {
        const userId = req.userData._id;

        const currentPhase = await CreatingPhases.findOne({ userId })
            .populate('tempProductId');

        if (!currentPhase) {
            return jsonResponseOnSuccess(res, 200, { currentPhase: { currentStep: 1 } });
        } else {
            return jsonResponseOnSuccess(res, 200, { currentPhase });
        }
    } catch (error) {
        return jsonResponseOnError(res, 500, { error });
    }
}

module.exports = router
    .post('/step/complete', verifyToken, completeStep)
    .post('/step', verifyToken, getStateForStep);