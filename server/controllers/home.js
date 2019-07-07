const router = require('express').Router();
const verifyToken = require('../middleware/verify-token');

const home = (req, res) => {
    res.json({ 'test': 'hello' });
}

module.exports = router.get('/home', verifyToken, home);