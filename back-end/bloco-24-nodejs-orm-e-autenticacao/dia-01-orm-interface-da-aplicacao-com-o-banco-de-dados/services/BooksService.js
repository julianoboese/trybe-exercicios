const { Book } = require('../models');

const getAll = async () => {
  const allBooks = await Book.findAll();

  return allBooks;
};

const getById = async (id) => {
  const book = await Book.findByPk(id);

  return book;
};

module.exports = {
  getAll,
  getById,
};
