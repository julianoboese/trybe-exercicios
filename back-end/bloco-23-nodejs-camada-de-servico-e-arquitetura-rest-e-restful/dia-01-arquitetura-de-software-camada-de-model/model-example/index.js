const express = require('express');
const { userRoutes } = require('./routes');

const app = express();

app.use(express.json());

app.use('/user', userRoutes);

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Listening on port ${port}!`));
