const mongoose = require('mongoose');
const env = require('./envoirment');
mongoose.Promise = global.Promise;

require('../models/ProductModel');

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