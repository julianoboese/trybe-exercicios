const cepService = require('../services/cepService');

const getCep = async (req, res, next) => {
  const { cep } = req.params;

  const cepData = await cepService.getCep(cep);

  if (cepData.error) return next(cepData.error);

  return res.status(200).json(cepData);
};

const postCep = async (req, res, next) => {
  const newCepData = req.body;

  const newCep = await cepService.postCep(newCepData);

  if (newCep.error) return next(newCep.error);

  return res.status(201).json(newCep);
};

module.exports = {
  getCep,
  postCep,
};
