const mongoose = require('mongoose');
const env = require('./envoirment');
mongoose.Promise = global.Promise;

require('../models/Product');
require('../models/User');
require('../models/Category');
require('../models/Cart');
require('../models/Comment');

const dbConnection = mongoose.connect(
  env.dev.connectionString,
  { useNewUrlParser: true },
  err => {
    if (err) {
      console.log(err);
      return;
    }

    console.log(`Mongoose is ready!`);
  }
);

module.exports = dbConnection;