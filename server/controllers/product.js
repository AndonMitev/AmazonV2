const router = require('express').Router();
const mongoose = require('mongoose');
const Product = mongoose.model('Product');
const TempProduct = mongoose.model('TempProduct');
const CreatingPhases = mongoose.model('CreatingPhases');
const verifyToken = require('../middleware/verify-token');
const Category = mongoose.model('Category');


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

const removeFromCreatingPhases = async owner => {
    const creatingPhase = await CreatingPhases.findOne({ userId: owner })
        .populate('tempProductId');
    const tempProductId = creatingPhase.tempProductId._id;
    await CreatingPhases.findByIdAndDelete(creatingPhase._id);
    await TempProduct.findByIdAndDelete(tempProductId);
}

const addToCategories = (categories, productId) => {
    categories.forEach(async selectedCategory => {
        const category = await Category.findOne({ name: selectedCategory });
        category.products.push(productId);
        await category.save();
    })
}


const onCreateProduct = async (req, res) => {
    try {
        const owner = req.userData._id;

        await removeFromCreatingPhases(owner);

        const productData = { ...req.body };
        const product = await Product.create({ owner, ...productData });

        await addToCategories(productData.categories, product._id);

        return jsonResponseOnSuccess(res, 201,
            {
                product,
                message: 'Product added'
            });
    } catch (error) {
        console.log(error);
        if (error.errors && error.errors.state) {
            return jsonResponseOnError(res, 400, error.errors.state.message);
        }

        return jsonResponseOnError(res, 500, error);
    }
}

const onGettingAllProducts = async (req, res) => {
    try {
        const products = await Product.find();

        return jsonResponseOnSuccess(res, 202, { products });
    } catch (error) {
        console.log(error);
        return jsonResponseOnError(res, 500, error);
    }
}

const onEditProduct = async (req, res) => {
    try {
        const userId = req.userData._id;
        const productId = req.params.productId;
        const productData = { ...req.body };
        const product = await Product.findById(productId);

        if (product.owner !== userId) {
            return jsonResponseOnError(res, 403, { error: 'Not allowed!' });
        }

        productData.images = [...productData.images, ...addImages(req.files)];

        product = { ...productData };
        await product.save();

        const { categories } = productData;
        addToCategory(categories, product._id);

        const newStateOfProduct = await Product.findById(productId);

        return jsonResponseOnSuccess(res, 200, { newStateOfProduct, message: 'Product edited' });
    } catch (error) {
        console.log(error);
        return jsonResponseOnError(res, 500, error);
    }
}

const getProductById = async (req, res) => {
    try {
        const id = req.params.id;

        const product = await Product.findById(id);

        jsonResponseOnSuccess(res, 200, { product });
    } catch (error) {
        jsonResponseOnSuccess(res, 404, { message: 'Not found' });
        console.log(error);
    }
}

module.exports = router
    .get('/', onGettingAllProducts)
    .get('/product/:id', getProductById)
    .post('/product/add', verifyToken, onCreateProduct)
    .put('/product/edit/:productId', verifyToken, onEditProduct);


