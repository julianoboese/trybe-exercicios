const express = require('express');
const { validation } = require('../middlewares');
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

routes.post('/', validation, async (req, res) => {
  const {
    firstName, lastName, email, password,
  } = req.body;

  const newUser = await UserModel.postUser(firstName, lastName, email, password);

  return res.status(201).json(newUser);
});

module.exports = routes;
