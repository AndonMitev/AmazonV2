const router = require('express').Router();
const Category = require('mongoose').model('Category');

const onCategories = async (req, res) => {
    try {
        const categories = Category.find();

        return res.
            status(200)
            .json(categories);
    } catch (error) {
        return res.
            status(500)
            .json({ error });
    }
}

const onCategoryByName = async (req, res) => {
    try {
        const { params: { name } } = req;

        const category = Category.findOne({ name })
            .populate('products');

        return res
            .status(200)
            .json(category);

    } catch (error) {
        return res
            .status(500)
            .json({ error });
    }
}

module.exports = router
    .get('/categories', onCategories)
    .get('/categories/:name', onCategoryByName)