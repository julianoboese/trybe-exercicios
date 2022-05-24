const fetch = require('node-fetch');

const connection = require('../db');

const getCep = async (cep) => {
  const [cepData] = await connection.execute(
    'SELECT * FROM cep_lookup.ceps WHERE cep = ?',
    [cep],
  );

  return cepData;
};

const getCepFromApi = async (reqCep) => {
  const apiCep = await (await fetch(`https://viacep.com.br/ws/${reqCep}/json/`)).json();

  if (apiCep.erro) return apiCep;

  const { cep, logradouro, bairro, localidade, uf } = apiCep;

  return { cep, logradouro, bairro, localidade, uf };
};

const postCep = async (newCepData) => {
  const [newCep] = await connection.execute(
    'INSERT INTO cep_lookup.ceps VALUES (?,?,?,?,?)',
    Object.values(newCepData),
  );

  return newCep;
};

module.exports = {
  getCep,
  getCepFromApi,
  postCep,
};
