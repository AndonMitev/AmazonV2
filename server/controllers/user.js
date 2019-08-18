const router = require('express').Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('mongoose').model('User');
const env = require('../config/envoirment');

const onSignUp = async (req, res) => {
    const { body: { email, password, role, address, firstName, lastName } } = req;

    try {
        const isExistingUser = await User.findOne({ email });

        if (isExistingUser) {
            return res.status(409)
                .json({
                    message: 'User already exists'
                });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await User
            .create({ email, password: hashedPassword, roles: role, address, firstName, lastName });

        return res.status(201)
            .json({
                message: 'User successfully created ' + user.email,
                email: user.email
            });
    } catch (error) {
        return res.status(500)
            .json({ error });
    }


}

const onSignIn = async (req, res) => {
    const { body: { email, password } } = req;

    try {
        const user = await User.findOne({ email });

        // If user do not exists
        if (!user) {
            return res.status(401)
                .json({
                    message: 'Authentication failed!'
                });
        }

        const isPasswordMatching = await bcrypt.compare(password, user.password);

        if (isPasswordMatching) {
            const { email, _id, roles } = user;
            const isAdmin = roles.indexOf('admin') !== -1;

            const encodedToken = await jwt.sign({ email, _id, isAdmin }, env.dev.jwtKey, { expiresIn: '2 days' });

            return res.status(200)
                .json({
                    message: 'Authentication successful!',
                    token: encodedToken,
                    email,
                    _id
                });
        }

        // If user exists but password is incorrect
        return res.status(401)
            .json({
                message: 'Authentication failed!'
            });

    } catch (error) {
        return res.status(500)
            .json({ error });
    }
}

module.exports = router
    .post('/signup', onSignUp)
    .post('/signin', onSignIn);