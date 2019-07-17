const router = require('express').Router();
const Product = require('mongoose').model('Product');
const Category = require('mongoose').model('Category');
const verifyToken = require('../middleware/verify-token');
const upload = require('../config/multer');
const verifyRole = require('../middleware/verify-role');

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

// const addToCategory = (categories, productId) => {
//     if (!Array.isArray(categories)) {
//         categories = [categories];
//     }

//     categories.forEach(async category => {
//         const foundedCategory = await Category.findOne({ name: category });

//         if (!foundedCategory) {
//             await Category.create({ name: category, products: productId })
//         } else {
//             foundedCategory.products.push(productId);
//             await foundedCategory.save();
//         }
//     });
// }

const onCreateProduct = async (req, res) => {
    try {
        const owner = req.userData._id;
        const productData = { ...req.body };
        const product = await Product.create({ owner, ...productData });
        console.log(product);
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

module.exports = router
    .get('/', onGettingAllProducts)
    .post('/product/add', verifyToken, upload.array('images', 10), onCreateProduct)
    .put('/product/edit/:productId', verifyToken, upload.array('images', 10), onEditProduct);