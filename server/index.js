const express = require('express');
const app = express();
const envoirment = require('./config/envoirment');
require('./config/db');
require('./config/express')(app);

app.listen(envoirment.dev.port, () => console.log(`Server is running on port ${envoirment.dev.port}...`));
