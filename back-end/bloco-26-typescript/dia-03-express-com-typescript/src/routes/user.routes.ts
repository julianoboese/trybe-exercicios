import { Router } from 'express';
import connection from '../database/connection';
import UserModel from '../models/user.model';
import UserService from '../services/user.service';
import UserController from '../controllers/user.controller';

const router = Router();

const userModel = new UserModel(connection);
const userService = new UserService(userModel);
const userController = new UserController(userService);

router.get('/user', userController.getAll);

export default router;
