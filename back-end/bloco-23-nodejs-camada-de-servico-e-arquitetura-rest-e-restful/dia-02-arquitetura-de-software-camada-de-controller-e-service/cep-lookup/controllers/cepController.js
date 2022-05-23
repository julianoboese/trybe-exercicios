const { getCepData } = require('../models/cepModel');

const getCep = async (req, res) => {
  const { cep } = req.params;

  const cepData = await getCepData(cep);

  return res.status(200).json(cepData);
};

module.exports = {
  getCep,
};
