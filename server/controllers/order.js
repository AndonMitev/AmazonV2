const router = require('express').Router();
const mongoose = require('mongoose');
const verifyToken = require('../middleware/verify-token');
const Order = mongoose.model('Order');


const finishOrder = async (req, res) => {
    try {
        
    } catch (error) {
        console.log(error);
        return jsonResponseOnError(res, 500, error);
    }
}

module.exports = router
    .post('/order', verifyToken, finishOrder)