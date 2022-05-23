const cepModel = require('../models/cepModel');

const getCep = async (cep) => {
  const cepData = await cepModel.getCep(cep);

  if (cepData.length === 0) {
    return { error: { code: 'notFound', message: 'CEP não encontrado' } };
  }

  return cepData;
};

const postCep = async (newCepData) => {
  const cepData = await cepModel.getCep(newCepData.cep);

  if (cepData.length !== 0) {
    return { error: { code: 'alreadyExists', message: 'CEP já existente' } };
  }

  await cepModel.postCep(newCepData);

  return newCepData;
};

module.exports = {
  getCep,
  postCep,
};
