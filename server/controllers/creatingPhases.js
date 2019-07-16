const router = require('express').Router();
const mongoose = require('mongoose');
const CreatingPhases = mongoose.model('CreatingPhases');
const TempProduct = mongoose.model('TempProduct');
const verifyToken = require('../middleware/verify-token');
const upload = require('../config/multer');

const jsonResponseOnError = (res, statusCode, error) =>
    res
        .status(statusCode)
        .json({ error });


const jsonResponseOnSuccess = (res, statusCode, data) =>
    res
        .status(statusCode)
        .json(data);

const addImages = imagesData => {
    const imagePaths = [];
    imagesData.forEach(image => imagePaths.push(image.path));
    return imagePaths;
}

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

const completeThirdStep = async (req, res) => {
    try {
        const userId = req.userData._id;
        const images = req.files;

        const productData = await CreatingPhases.findOne({ userId })
            .populate('tempProductId');
        productData.tempProductId.images = [...productData.tempProductId.images, ...addImages(images)];

        productData.currentStep++;

        await productData.save();

        const productNewState = await CreatingPhases.findOne({ userId })
            .populate('tempProductId');

        return jsonResponseOnSuccess(res, 200, { productNewState });
    } catch (error) {
        console.log(error);
        return jsonResponseOnError(res, 500, { message: 'Something went wrong with upload on images' });
    }
}



module.exports = router
    .post('/step/first/complete', verifyToken, completeFirstStep)
    .post('/step/second/complete', verifyToken, completeSecondStep)
    .post('/step/three/complete', verifyToken, upload.array('images', 10), completeThirdStep)
    .post('/step', verifyToken, getStateForStep);