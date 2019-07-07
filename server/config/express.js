const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const routes = require('./routes');


const expressSetup = app => {

    // Setup cors
    app.use(cors({ origin: 'http://localhost:8080' }));
    app.use((req, res, next) => {
        res.header('Access-Control-Allow-Origin', '*');
        res.header(
            'Access-Control-Allow-Headers',
            'Origin, X-Requested-With, Content-Type, Accept, Authorization'
        );
        if (req.method === 'OPTIONS') {
            res.header(
                'Access-Control-Allow-Methods',
                'PUT, POST, PATCH, DELETE, GET'
            );
            return res.status(200).json({});
        }
        next();
    });

    // Setup body parser
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());

    // Setup static files
    app.use('/photos', express.static('photos'));

    // Setup routes
    app.use(routes);
}

module.exports = expressSetup;
