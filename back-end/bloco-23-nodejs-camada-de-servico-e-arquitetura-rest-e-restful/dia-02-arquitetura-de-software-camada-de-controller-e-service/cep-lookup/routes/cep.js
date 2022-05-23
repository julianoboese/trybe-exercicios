const express = require('express');
const { getCep, postCep } = require('../controllers/cepController');
const { cepValidation, newCepValidation } = require('../middlewares');

const routes = express.Router();

routes.get('/cep/:cep', cepValidation, getCep);

routes.post('/cep', newCepValidation, postCep);

module.exports = routes;
