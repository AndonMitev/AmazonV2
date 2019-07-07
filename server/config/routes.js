const router = require('express').Router();

const homeServices = require('../controllers/product');
const userServices = require('../controllers/user');

router
    .use('', homeServices)
    .use('', userServices);

module.exports = router;