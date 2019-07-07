const User = require('mongoose').model('User');
const router = require('express').Router();

const onSignUp = (req, res) => {

}

const onSignIn = (req, res) => {

}

module.exports = router
    .post('/signup', onSignUp)
    .post('/signin', onSignIn);