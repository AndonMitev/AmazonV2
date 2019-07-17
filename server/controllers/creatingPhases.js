const router = require('express').Router();
const mongoose = require('mongoose');
const CreatingPhases = mongoose.model('CreatingPhases');
const TempProduct = mongoose.model('TempProduct');
const verifyToken = require('../middleware/verify-token');
const upload = require('../aws-config');


const jsonResponseOnError = (res, statusCode, error) =>
    res
        .status(statusCode)
        .json({ error });


const jsonResponseOnSuccess = (res, statusCode, data) =>
    res
        .status(statusCode)
        .json(data);

const getCurrentPhase = async userId => {
    const currentPhase = await CreatingPhases.findOne({ userId })
    const productId = currentPhase.tempProductId;
    return [currentPhase, productId];
}

const getProduct = async productId =>
    await TempProduct.findById(productId);


const getImagesLocation = imagesData => {
    const imagesLocation = [];
    imagesData.forEach(image => imagesLocation.push(image.location));
    return imagesLocation;
}

const saveUpdatedItems = async (currentPhase, product) => {
    await product.save();
    await currentPhase.save();
}

const completeFirstStep = async (req, res) => {
    try {
        const userId = req.userData._id;
        const { name, price, quantity, state, description } = req.body.product;
        let { step } = req.body;

        const tempProduct = await TempProduct.create({
            owner: userId,
            name,
            price,
            quantity,
            state,
            description
        });

        ++step;

        const currentPhase = await CreatingPhases.create({
            userId,
            currentStep: step,
            tempProductId: tempProduct._id,
        });

        return jsonResponseOnSuccess(res, 201, {
            currentPhase,
            tempProduct,
            step,
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

        const [currentPhase, productId] = await getCurrentPhase(userId);
        const product = await getProduct(productId);

        product.categories = [... new Set([...product.categories, ...categories])];
        currentPhase.currentStep = ++currentStep;

        saveUpdatedItems(currentPhase, product);

        return jsonResponseOnSuccess(res, 201, {
            currentPhase,
            message: 'Categories successfully added!'
        });

    } catch (error) {
        console.log(error);
        return jsonResponseOnError(res, 500, { error });
    }
}

const completeThirdStep = async (req, res) => {
    try {
        const userId = req.userData._id;
        const images = req.files;
        console.log(req.files);
        const [currentPhase, productId] = await getCurrentPhase(userId);
        const productToUpdate = await getProduct(productId);

        productToUpdate.images = [...productToUpdate.images, ...getImagesLocation(images)];

        if (currentPhase.currentStep !== 4) {
            currentPhase.currentStep = ++currentPhase.currentStep;
        }


        await saveUpdatedItems(currentPhase, productToUpdate);

        const product = await CreatingPhases.findOne({ userId })
            .populate('tempProductId');
        const tempProduct = product.tempProductId;

        return jsonResponseOnSuccess(res, 200, { tempProduct, currentPhase });
    } catch (error) {
        console.log(error);
        return jsonResponseOnError(res, 500, { message: 'Something went wrong with upload on images' });
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
    .post('/step/three/complete', verifyToken, upload.array('images', 10), completeThirdStep)
    .post('/step', verifyToken, getStateForStep);