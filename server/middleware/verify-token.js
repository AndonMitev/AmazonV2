const jwt = require('jsonwebtoken');
const env = require('../config/envoirment');

module.exports = async (req, res, next) => {
   
    try {
        const { headers: { authorization } } = req;
        // Remove Bearer from the begging of the authorization value;
        const token = authorization.split(' ')[1];
        const decoded = await jwt.verify(token, env.dev.jwtKey, null);
        req.userData = decoded;
        next();
    } catch (error) {
        return res.status(401)
            .json({
                message: 'Authentication failed!'
            });
    }
}