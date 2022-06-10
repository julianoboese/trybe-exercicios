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

const update = async (req, res) => {
  const { id } = req.params;

  const updatedBook = await BooksService.update(id, req.body);

  if (!updatedBook) return res.status(404).json({ message: 'Book not found' });

  return res.status(200).json({ message: 'Book updated!' });
};

const remove = async (req, res) => {
  const { id } = req.params;

  const removedBook = await BooksService.remove(id);

  if (!removedBook) return res.status(404).json({ message: 'Book not found' });

  return res.status(200).json({ message: 'Book removed!' });
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
};
