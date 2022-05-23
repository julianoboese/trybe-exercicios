const connection = require('../db');

const getCep = async (cep) => {
  const [cepData] = await connection.execute(
    'SELECT * FROM cep_lookup.ceps WHERE cep = ?',
    [cep],
  );

  if (cepData.length === 0) return null;

  return cepData;
};

module.exports = {
  getCep,
};
