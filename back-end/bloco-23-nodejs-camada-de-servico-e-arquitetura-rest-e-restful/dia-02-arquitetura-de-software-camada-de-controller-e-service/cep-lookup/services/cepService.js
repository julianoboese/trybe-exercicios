const cepModel = require('../models/cepModel');

const getCep = async (cep) => {
  const standardCep = cep.includes('-') ? cep : `${cep.slice(0, 5)}-${cep.slice(5)}`;

  const cepData = await cepModel.getCep(standardCep);

  if (cepData.length === 0) {
    return { error: { code: 'notFound', message: 'CEP não encontrado' } };
  }

  return cepData;
};

const postCep = async (newCepData) => {
  const { cep } = newCepData;
  const cepData = await cepModel.getCep(cep);

  if (cepData.length !== 0) {
    return { error: { code: 'alreadyExists', message: 'CEP já existente' } };
  }

  if (!cep.includes('-')) {
    newCepData.cep = `${cep.slice(0, 5)}-${cep.slice(5)}`;
  }

  await cepModel.postCep(newCepData);

  return newCepData;
};

module.exports = {
  getCep,
  postCep,
};
