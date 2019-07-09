const jwt = require('jsonwebtoken');
const env = require('../config/envoirment');

module.exports = async (req, res, next) => {
  try {
    const { headers: { authorization } } = req;

    // Remove Bearer from the begging of the authorization value;
    const token = authorization.split(' ')[1];
    const decodedToken = await jwt.verify(token, env.dev.jwtKey, null);
    req.userData = decodedToken;

    if (req.userData.roles.indexOf('admin') !== -1) {
      next();

    }
  } catch (error) {
    return res.status(403)
      .json({
        message: 'Admin only!'
      });
  }
}