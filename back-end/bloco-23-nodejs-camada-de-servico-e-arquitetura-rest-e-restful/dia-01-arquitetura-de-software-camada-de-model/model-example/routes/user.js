const express = require('express');
const UserModel = require('../models/User');

const routes = express.Router();

routes.get('/', async (_req, res) => {
  const users = await UserModel.getAllUsers();

  res.status(200).json(users);
});

routes.get('/:id', async (req, res) => {
  const { id } = req.params;

  const user = await UserModel.getUser(id);

  if (!user) {
    return res.status(404).json({
      error: true,
      message: 'Usuário não encontrado',
    });
  }

  return res.status(200).json(user);
});

routes.post('/', async (req, res) => {
  const {
    firstName, lastName, email, password,
  } = req.body;

  if (!firstName || !lastName || !email || !password) {
    return res.status(400).json({
      error: true,
      message: 'Insira todos os dados.',
    });
  }

  if (password.length < 6) return res.status(400).json('O campo "password" deve ter pelo menos 6 caracteres');

  const newUser = await UserModel.postUser(firstName, lastName, email, password);

  return res.status(201).json(newUser);
});

module.exports = routes;
