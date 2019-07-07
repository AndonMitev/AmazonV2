const router = require('express').Router();
const Product = require('mongoose').model('Product');
const Category = require('mongoose').model('Category');
const verifyToken = require('../middleware/verify-token');
const upload = require('../config/multer');

const addImages = (imagesData) => {
    const imagePaths = [];
    imagesData.forEach(image => imagePaths.push(image.path));
    return imagePaths;
}

const addToCategory = (categories, productId) => {
    if (!Array.isArray(categories)) {
        categories = [categories];
    }

    categories.forEach(async category => {
        const foundedCategory = await Category.findOne({ name: category });

        if (!foundedCategory) {
            await Category.create({ name: category, products: productId })
        } else {
            foundedCategory.products.push(productId);
            await foundedCategory.save();
        }
    });
}

const onCreateProduct = async (req, res) => {
    try {
        const owner = req.userData._id;
        const productData = { ...req.body };
        productData.images = addImages(req.files);
        const product = await Product.create({ owner, ...productData });

        const { categories } = productData;
        addToCategory(categories, product._id)

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

const onGettingAllProducts = async (req, res) => {
    try {
        const products = await Product.find();

        return res
            .status(200)
            .json(products);
    } catch (error) {
        console.log(error);
        return res
            .status(500)
            .json({ error });
    }
}

module.exports = router
    .get('/', onGettingAllProducts)
    .post('/product/add', verifyToken, upload.array('images', 10), onCreateProduct);