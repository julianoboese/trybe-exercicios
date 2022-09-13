import IUser from '../interfaces/user.interface';
import UserModel from '../models/user.model';

export default class UserService {
  private model: UserModel;

  constructor(model: UserModel) {
    this.model = model;
  }

  public getAll = async (): Promise<IUser[]> => {
    const users = await this.model.getAll();

    return users;
  };

  public create = async (newUser: IUser): Promise<IUser> => {
    const user = await this.model.create(newUser);

    return user;
  };
}
