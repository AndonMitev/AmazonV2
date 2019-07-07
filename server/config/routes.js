const router = require('express').Router();

const homeServices = require('../controllers/home');
const userServices = require('../controllers/user');

router
    .use('', homeServices)
    .use('', userServices);

module.exports = router;