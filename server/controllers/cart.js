const router = require('express').Router();
const mongoose = require('mongoose');
const Cart = mongoose.model('Cart');
const Product = mongoose.model('Product');
const verifyToken = require('../middleware/verify-token');

const jsonResponseOnError = (res, statusCode, error) =>
    res
        .status(statusCode)
        .json({ error });


const jsonResponseOnSuccess = (res, statusCode, data) =>
    res
        .status(statusCode)
        .json(data);


const onGettingCart = async (req, res) => {
    try {
        const userId = req.userData._id;

        const cart = await Cart
            .findOne({ userId })
            .populate({
                path: 'productsId.product',
                model: 'Product'
            });
        return jsonResponseOnSuccess(res, 200, { cart });
    } catch (error) {
        return jsonResponseOnError(res, 500, error);
    }
}

const onAddToCart = async (req, res) => {
    try {
        const userId = req.userData._id;
        const productId = req.body.productId;
        const quantity = +req.body.quantity;

        const cart = await Cart
            .findOne({ userId });

        if (!cart) {
            await Cart.create({ userId, productsId: [{ product: productId, quantity }] });
        } else {
            const existingProduct = cart.productsId.find(prd => prd.product == productId);
            if (existingProduct) {
                existingProduct.quantity += quantity;
            } else {
                cart.productsId.push({ product: productId, quantity });
            }
            await cart.save();
        }

        const product = await Product.findById(productId);
        product.quantity -= quantity;
        await product.save();

        const updatedCart = await Cart
            .findOne({ userId });
        return jsonResponseOnSuccess(res, 200, { message: 'Product successfully added!', cart: updatedCart.productsId, product });
    } catch (error) {
        return jsonResponseOnError(res, 500, error);
    }
}

const onDeleteCart = async (req, res) => {
    try {
        const cardId = req.params.cardId;

        await Cart.findByIdAndRemove(cardId);

        return jsonResponseOnSuccess(res, 200, { message: 'Cart successfully deleted!' });
    } catch (error) {
        return jsonResponseOnError(res, 500, error);
    }
}

const onRemoveItemFromCart = async (req, res) => {
    try {

        const productId = req.body.productId;
        const userId = req.userData._id;
        const cart = await Cart.findOne({ userId });

        cart.productsId = cart.productsId.filter(existingProductId => existingProductId != productId);

        await cart.save();
        const newStateOfCart = await Cart.findOne({ userId })
            .populate({
                path: 'productsId',
                model: 'Product'
            });;
        return jsonResponseOnSuccess(res, 200, { message: 'Item successfully removed', cart: newStateOfCart });
    } catch (error) {
        console.log(error);
        return jsonResponseOnError(res, 500, error);
    }
}

module.exports = router
    .get('/cart', verifyToken, onGettingCart)
    .post('/cart/remove', verifyToken, onRemoveItemFromCart)
    .post('/cart', verifyToken, onAddToCart)
    .delete('/cart/:cardId', verifyToken, onDeleteCart);
