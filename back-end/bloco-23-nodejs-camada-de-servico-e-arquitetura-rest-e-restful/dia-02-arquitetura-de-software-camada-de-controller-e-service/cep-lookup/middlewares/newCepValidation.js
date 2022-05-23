const Joi = require('joi');

const validateNewCep = async (req, _res, next) => {
  const { error } = Joi.object({
    cep: Joi.string()
      .pattern(/^\d{5}-?\d{3}$/, 'cep')
      .required(),
    logradouro: Joi.string().required(),
    bairro: Joi.string().required(),
    localidade: Joi.string().required(),
    uf: Joi.string().required(),
  })
    .messages({
      'any.required': 'Campo {{#label}} é obrigatório',
      'string.pattern.name': 'CEP inválido',
    })
    .validate(req.body);

  if (error) {
    next({ code: 'invalidData', message: error.details[0].message });
  }

  next();
};

module.exports = validateNewCep;
