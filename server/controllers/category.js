const router = require('express').Router();
const Category = require('mongoose').model('Category');

const jsonResponseOnError = (res, statusCode, error) =>
    res
        .status(statusCode)
        .json({ error });


const jsonResponseOnSuccess = (res, statusCode, data) =>
    res
        .status(statusCode)
        .json({ data, message });

const onCategories = async (req, res) => {
    try {
        const categories = Category
            .find();

        return jsonResponseOnSuccess(res, 200, { categories });
    } catch (error) {
        return jsonResponseOnError(500, error);
    }
}

const onCategoryByName = async (req, res) => {
    try {
        const { params: { name } } = req;

        const category = Category
            .findOne({ name })
            .populate('products');

        return jsonResponseOnSuccess(res, 200, { category });
    } catch (error) {
        return jsonResponseOnError(500, error);
    }
}

module.exports = router
    .get('/categories', onCategories)
    .get('/categories/:name', onCategoryByName)