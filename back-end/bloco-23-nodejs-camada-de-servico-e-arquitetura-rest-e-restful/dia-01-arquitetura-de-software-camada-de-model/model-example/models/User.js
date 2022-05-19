const connection = require('../db');

const serialize = (user) => ({
  id: user.id,
  firstName: user.first_name,
  lastName: user.last_name,
  email: user.email,
});

const getAllUsers = async () => {
  const [result] = await connection.execute(
    'SELECT id, first_name, last_name, email FROM model_example.users',
  );

  return result.map(serialize);
};

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
  getAllUsers,
  postUser,
};
