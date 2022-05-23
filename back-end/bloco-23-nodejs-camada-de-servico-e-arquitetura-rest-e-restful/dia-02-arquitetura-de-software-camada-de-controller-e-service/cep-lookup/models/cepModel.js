const connection = require('../db');

const getCepData = async (cep) => {
  const [cepData] = await connection.execute(
    'SELECT * FROM cep_lookup.ceps WHERE cep = ?',
    [cep],
  );
  return cepData;
};

module.exports = {
  getCepData,
};
