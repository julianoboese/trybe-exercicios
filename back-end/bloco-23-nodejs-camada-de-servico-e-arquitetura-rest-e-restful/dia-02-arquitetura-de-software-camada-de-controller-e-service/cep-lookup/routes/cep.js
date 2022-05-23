const express = require('express');
const { getCep } = require('../controllers/cepController');
const { cepValidation } = require('../middlewares');

const routes = express.Router();

routes.get('/cep/:cep', cepValidation, getCep);

module.exports = routes;
