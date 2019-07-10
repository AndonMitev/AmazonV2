const router = require('express').Router();
const Cart = require('mongoose').model('Cart');
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
            .populate('products');

        return jsonResponseOnSuccess(res, 200, { cart });
    } catch (error) {
        return jsonResponseOnError(res, 500, error);
    }
}

const onAddToCart = async (req, res) => {
    try {
        const userId = req.userData._id;
        const productId = req.body.productId;

        const cart = await Cart
            .findOne({ userId });

        if (!cart) {
            await Cart.create({ userId, productId });
        } else {
            cart.productsId.push(productId);
            await cart.save();
        }

        return jsonResponseOnSuccess(res, 200, { message: 'Product successfully added!' });
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
        const productId = req.body;
        const cartId = req.params.id;
        const cart = await Cart.findById(cartId);
        cart.productsId.filter(existingProductId => existingProductId !== productId);
        await cart.save();
        const newStateOfCart = await Cart.findById(cartId);
        return jsonResponseOnSuccess(res, 200, { message: 'Item successfully removed', newStateOfCart });
    } catch (error) {
        return jsonResponseOnError(res, 500, error);
    }
}

module.exports = router
    .get('/cart', verifyToken, onGettingCart)
    .post('/cart', verifyToken, onAddToCart)
    .delete('/cart/:cardId', verifyToken, onDeleteCart)
    .put('/cart/:cardId', verifyToken, onRemoveItemFromCart);