const Joi = require('joi');

const validateCep = async (req, res, next) => {
  const { cep } = req.params;

  const { error } = Joi.string()
    .pattern(/^\d{5}-?\d{3}$/, 'cep')
    .validate(cep);

  if (error) {
    next({ code: 'invalidData', message: 'CEP inválido' });
  }

  next();
};

module.exports = validateCep;
