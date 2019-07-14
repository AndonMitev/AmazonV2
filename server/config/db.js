const mongoose = require('mongoose');
const env = require('./envoirment');
mongoose.Promise = global.Promise;

require('../models/Product');
require('../models/User');
require('../models/Category');
require('../models/Cart');
require('../models/Comment');
require('../models/CreatingPhases');
require('../models/TempProduct');

const dbConnection = mongoose.connect(
  env.dev.connectionString,
  {
    useNewUrlParser: true,
    useFindAndModify: false
  },
  err => {
    if (err) {
      console.log(err);
      return;
    }

    console.log(`Mongoose is ready!`);
  }
);

module.exports = dbConnection;