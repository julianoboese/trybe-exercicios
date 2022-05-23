const connection = require('../db');

const getCep = async (cep) => {
  const [cepData] = await connection.execute(
    'SELECT * FROM cep_lookup.ceps WHERE cep = ?',
    [cep],
  );

  return cepData;
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
  postCep,
};
