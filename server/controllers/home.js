const router = require('express').Router();

const home = (req, res) => {
    res.json({ 'test': 'hello' });
}

module.exports = router.get('/home', home);