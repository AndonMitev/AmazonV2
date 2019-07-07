const router = require('express').Router();

const homeServices = require('../controllers/home');

router.use('', homeServices);

module.exports = router;