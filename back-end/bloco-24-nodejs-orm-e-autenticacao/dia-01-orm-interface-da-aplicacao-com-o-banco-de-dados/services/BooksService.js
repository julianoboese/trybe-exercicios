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

const update = async (id, { title, author, pageQuantity }) => {
  const [updatedUser] = await Book.update({ title, author, pageQuantity }, { where: { id } });

  return updatedUser;
};

const remove = async (id) => {
  const deletedUser = await Book.destroy({ where: { id } });

  return deletedUser;
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
};
