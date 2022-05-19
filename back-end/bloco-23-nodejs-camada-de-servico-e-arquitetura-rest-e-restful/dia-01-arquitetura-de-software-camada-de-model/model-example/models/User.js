const connection = require('../db');

const postUser = async (firstName, lastName, email, password) => {
  const [result] = await connection.execute(
    'INSERT INTO model_example.users (first_name, last_name, email, password) VALUES (?,?,?,?)',
    [firstName, lastName, email, password],
  );

  return ({
    id: result.insertId, firstName, lastName, email,
  });
};

module.exports = {
  postUser,
};
