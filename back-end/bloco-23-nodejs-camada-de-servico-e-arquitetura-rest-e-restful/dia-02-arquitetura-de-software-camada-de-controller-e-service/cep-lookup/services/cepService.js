const cepModel = require('../models/cepModel');

const getCep = async (cep) => {
  const cepData = await cepModel.getCep(cep);

  if (!cepData) {
    return { error: { code: 'notFound', message: 'CEP não encontrado' } };
  }

  return cepData;
};

module.exports = {
  getCep,
};
