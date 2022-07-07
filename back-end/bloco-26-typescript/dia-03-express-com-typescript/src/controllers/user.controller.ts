import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import UserService from '../services/user.service';

export default class UserController {
  private service: UserService;

  constructor(service: UserService) {
    this.service = service;
  }

  public getAll = async (_req: Request, res: Response): Promise<void> => {
    const users = await this.service.getAll();

    res.status(StatusCodes.OK).json(users);
  };

  public create = async (req: Request, res: Response): Promise<void> => {
    const user = await this.service.create(req.body);

    res.status(StatusCodes.CREATED).json(user);
  };
}
