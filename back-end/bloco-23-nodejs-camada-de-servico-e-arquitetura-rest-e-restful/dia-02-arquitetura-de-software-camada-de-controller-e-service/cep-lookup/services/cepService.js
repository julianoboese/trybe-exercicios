const cepModel = require('../models/cepModel');

const getCep = async (reqCep) => {
  const standardCep = reqCep.includes('-') ? reqCep : `${reqCep.slice(0, 5)}-${reqCep.slice(5)}`;

  const cepData = await cepModel.getCep(standardCep);

  if (cepData.length === 0) {
    const apiCep = await cepModel.getCepFromApi(reqCep);

    if (apiCep.erro) {
      return { error: { code: 'notFound', message: 'CEP não encontrado' } };
    }

    await cepModel.postCep(apiCep);

    return apiCep;
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
