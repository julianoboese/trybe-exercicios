const express = require('express');
const UserModel = require('./models/User');

const app = express();

app.use(express.json());

app.post('/user', async (req, res) => {
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

const port = process.env.PORT || 3001;

app.listen(port, () => console.log(`Listening on port ${port}!`));
