const express = require('express');

const app = express();

app.use(express.json());

app.get('/ping', (_req, res) => res.status(200).json({ message: 'pong!' }));

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}!`));
