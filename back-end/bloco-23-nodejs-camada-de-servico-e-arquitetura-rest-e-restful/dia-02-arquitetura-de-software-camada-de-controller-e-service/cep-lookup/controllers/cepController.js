const Joi = require('joi');
const { getCepData } = require('../models/cepModel');

const getCep = async (req, res) => {
  const { cep } = req.params;

  const { error } = Joi.string()
    .pattern(/^\d{5}-?\d{3}$/, 'cep')
    .validate(cep);

  if (error) {
    return res
      .status(400)
      .json({ error: { code: 'invalidData', message: 'CEP inválido' } });
  }

  const cepData = await getCepData(cep);

  return res.status(200).json(cepData);
};

module.exports = {
  getCep,
};
