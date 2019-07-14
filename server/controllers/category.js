const router = require('express').Router();
const Category = require('mongoose').model('Category');
const verifyToken = require('../middleware/verify-token');

const jsonResponseOnError = (res, statusCode, error) =>
    res
        .status(statusCode)
        .json({ error });


const jsonResponseOnSuccess = (res, statusCode, data) =>
    res
        .status(statusCode)
        .json(data);

const getCategories = async (req, res) => {
    try {
        const categories = Category
            .find();

        return jsonResponseOnSuccess(res, 200, { categories });
    } catch (error) {
        return jsonResponseOnError(res, 500, error);
    }
}

const getCategoryByName = async (req, res) => {
    try {
        const { params: { name } } = req;

        const category = Category
            .findOne({ name })
            .populate('products');

        return jsonResponseOnSuccess(res, 200, { category });
    } catch (error) {
        return jsonResponseOnError(res, 500, error);
    }
}

const addNewCategory = async (req, res) => {
    try {
        const name = req.body.name;
        await Category.create({ name });

        return jsonResponseOnSuccess(res, 201, ({ message: 'Created' }));
    } catch (error) {
        return jsonResponseOnError(res, 500, error);
    }
}

const addProductToCategories = async (req, res) => {
    try {
        const productId = req.params.productId;
        let categories = req.body.categories;

        if (!Array.isArray(categories)) {
            categories = [categories];
        }
        console.log(categories)
        categories.forEach(async category => {
            const foundedCategory = await Category.findOne({ name: category });
            if (foundedCategory) {
                foundedCategory.products.push(productId);
                await foundedCategory.save();
            }

        });

        return jsonResponseOnSuccess(res, 201, ({ message: 'Product successfully added.' }));
    } catch (error) {
        console.log(error);
        return jsonResponseOnError(res, 500, error);
    }
}

module.exports = router
    .get('/categories', getCategories)
    .get('/categories/:name', getCategoryByName)
    .put('/categories/add/:productId', verifyToken, addProductToCategories)
    .post('/categories/add', verifyToken, addNewCategory)
