const express = require('express');

const DefaultController = require('./controllers/DefaultController');

const routes = express.Router();

routes.get('/', DefaultController.index);

module.exports = routes;