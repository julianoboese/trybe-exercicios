const cepService = require('../services/cepService');

const getCep = async (req, res, next) => {
  const { cep } = req.params;

  const cepData = await cepService.getCep(cep);

  if (cepData.error) return next(cepData.error);

  return res.status(200).json(cepData);
};

module.exports = {
  getCep,
};
