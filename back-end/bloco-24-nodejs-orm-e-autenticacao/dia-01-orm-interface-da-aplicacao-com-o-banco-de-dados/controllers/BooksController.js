const BooksService = require('../services/BooksService');

const getAll = async (_req, res) => {
  const allBooks = await BooksService.getAll();

  res.status(200).json(allBooks);
};

module.exports = {
  getAll,
};
