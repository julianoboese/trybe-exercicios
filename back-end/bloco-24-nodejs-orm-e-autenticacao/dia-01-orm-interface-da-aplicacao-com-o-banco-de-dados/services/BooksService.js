const { Book } = require('../models');

const getAll = async () => {
  const allBooks = await Book.findAll();

  return allBooks;
};

const getById = async (id) => {
  const book = await Book.findByPk(id);

  return book;
};

const create = async ({ title, author, pageQuantity }) => {
  const newBook = await Book.create({ title, author, pageQuantity });

  return newBook;
};

module.exports = {
  getAll,
  getById,
  create,
};
