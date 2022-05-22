const express = require('express');
const { getCep } = require('../controllers/cepController');

const routes = express.Router();

routes.get('/cep/:cep', getCep);

module.exports = routes;
