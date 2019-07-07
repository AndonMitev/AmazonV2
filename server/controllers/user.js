const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const User = require('mongoose').model('User');
const router = require('express').Router();

const onSignUp = async (req, res) => {
    const { email, password } = req.body;

    try {
        const isExistingUser = await User.findOne({ email });

        if (isExistingUser) {
            return res.status(409)
                .json({
                    message: 'User already exists'
                });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await User.create({ email, password: hashedPassword });

        return res.status(201)
                .json({
                    message: 'User successfully created ' + user.email,
                    email: user.email
                });
    } catch (error) {
        console.error(error);
    }


}

const onSignIn = (req, res) => {

}

module.exports = router
    .post('/signup', onSignUp)
    .post('/signin', onSignIn);