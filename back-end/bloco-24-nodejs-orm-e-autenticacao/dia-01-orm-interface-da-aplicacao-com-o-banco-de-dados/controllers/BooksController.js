const BooksService = require('../services/BooksService');

const getAll = async (_req, res) => {
  const allBooks = await BooksService.getAll();

  res.status(200).json(allBooks);
};

const getById = async (req, res) => {
  const { id } = req.params;

  const book = await BooksService.getById(id);

  if (!book) return res.status(404).json({ message: 'Book not found' });

  return res.status(200).json(book);
};

const create = async (req, res) => {
  const newBook = await BooksService.create(req.body);

  res.status(201).json(newBook);
};

module.exports = {
  getAll,
  getById,
  create,
};
