const { Book } = require('../models');

const getAll = async () => {
  const allBooks = await Book.findAll();

  return allBooks;
};

module.exports = {
  getAll,
};
