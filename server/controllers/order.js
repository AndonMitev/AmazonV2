const router = require('express').Router();
const mongoose = require('mongoose');
const verifyToken = require('../middleware/verify-token');
const Order = mongoose.model('Order');
const Cart = mongoose.model('Cart');
const User = mongoose.model('User');

const jsonResponseOnError = (res, statusCode, error) =>
    res.status(statusCode).json({ error });


const jsonResponseOnSuccess = (res, statusCode, data) =>
    res.status(statusCode).json(data);

const finishOrder = async (req, res) => {
    try {
        const userId = req.userData._id;
        const products = req.body;
        const productsId = [];

        products.forEach(product => productsId.push(product._id));

        const order = await Order.create({ userId, productsId });
        await Cart.findOneAndRemove({ userId });
        const user = await User.findById(userId);
        user.orders.push(order);
        await user.save();
        const updatedUser = await User.findById(userId);
        const updatedOrder = await Order.findById(order._id)
            .populate('Product');
        return jsonResponseOnSuccess(res, 200, { user: updatedUser, order: updatedOrder, message: 'Order was successfull' })
    } catch (error) {
        console.log(error);
        return jsonResponseOnError(res, 500, error);
    }
}

module.exports = router
    .post('/order', verifyToken, finishOrder)