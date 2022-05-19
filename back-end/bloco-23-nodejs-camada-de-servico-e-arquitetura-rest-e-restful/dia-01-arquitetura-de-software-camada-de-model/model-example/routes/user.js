const express = require('express');
const UserModel = require('../models/User');

const routes = express.Router();

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
