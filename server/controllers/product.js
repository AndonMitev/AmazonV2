const router = require('express').Router();
const Product = require('mongoose').model('Product');
const Category = require('mongoose').model('Category');
const verifyToken = require('../middleware/verify-token');

const home = (req, res) => {
    res.json({ 'test': 'hello' });
}

const onCreateProduct = async (req, res) => {
    try {
        const owner = req.userData._id;
        const productData = { ...req.body };

        const product = await Product.create({ owner, ...productData });

        let { categories } = productData;

        if (!Array.isArray(categories)) {
            categories = [categories];
        }

        categories.forEach(async category => {
            const foundedCategory = await Category.findOne({ name: category });

            if (!foundedCategory) {
                await Category.create({ name: category, products: product._id })
            } else {
                foundedCategory.products.push(product._id);
                await foundedCategory.save();
            }
        });

        return res.status(201)
            .json({
                message: 'Product added',
                product
            });

    } catch (error) {
        console.log(error);

        if (error.errors && error.errors.state) {
            return res.status(400)
                .json({
                    message: 'error.errors.state.message',
                    failed: true
                });
        }

        return res.status(500)
            .json({
                message: 'Server error',
            });
    }
}

module.exports = router
    .get('/', verifyToken, home)
    .post('/product/add', verifyToken, onCreateProduct);