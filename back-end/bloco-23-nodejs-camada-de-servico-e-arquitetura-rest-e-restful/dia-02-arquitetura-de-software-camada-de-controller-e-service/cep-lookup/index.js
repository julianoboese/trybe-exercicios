require('dotenv').config();
const express = require('express');
const { error } = require('./middlewares');
const { cepRoutes } = require('./routes');

const app = express();

app.use(express.json());

app.get('/ping', (_req, res) => res.status(200).json({ message: 'pong!' }));

app.use(cepRoutes);

app.use(error);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}!`));
