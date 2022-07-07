import express from 'express';
import dotenv from 'dotenv';
import userRouter from './routes/user.routes';

dotenv.config();

const app = express();

app.use(express.json());

app.use(userRouter);

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Listening on port ${port}`));
