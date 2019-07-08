const router = require('express').Router();

const homeServices = require('../controllers/product');
const userServices = require('../controllers/user');
const categoryServices = require('../controllers/category');
const commentServices = require('../controllers/comment');
const cartServices = require('../controllers/cart');

router
    .use('', homeServices)
    .use('', userServices)
    .use('', categoryServices)
    .use('', commentServices)
    .use('', cartServices);

module.exports = router;