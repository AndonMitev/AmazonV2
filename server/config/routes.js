const router = require('express').Router();

const homeServices = require('../controllers/product');
const userServices = require('../controllers/user');
const categoryServices = require('../controllers/category');
const commentServices = require('../controllers/comment');
const cartServices = require('../controllers/cart');
const creatingPhasesServices = require('../controllers/creatingPhases');
const orderServices = require('../controllers/order');

router
    .use('', homeServices)
    .use('', userServices)
    .use('', categoryServices)
    .use('', commentServices)
    .use('', cartServices)
    .use('', creatingPhasesServices)
    .use('', orderServices);

module.exports = router;