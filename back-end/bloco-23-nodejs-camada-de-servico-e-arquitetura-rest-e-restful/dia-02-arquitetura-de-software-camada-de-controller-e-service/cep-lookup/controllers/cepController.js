const Joi = require('joi');

const getCep = (req, res) => {
  const { cep } = req.params;

  const { error } = Joi.string()
    .pattern(/^\d{5}-?\d{3}$/, 'cep')
    .validate(cep);

  if (error) {
    return res
      .status(400)
      .json({ error: { code: 'invalidData', message: 'CEP inválido' } });
  }

  return res.status(200).json({ message: 'CEP válido' });
};

module.exports = {
  getCep,
};
