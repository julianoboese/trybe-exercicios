import { Pool, ResultSetHeader } from 'mysql2/promise';
import IUser from '../interfaces/user.interface';

export default class UserModel {
  private connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public getAll = async (): Promise<IUser[]> => {
    const [users] = await this.connection.execute('SELECT * FROM Users');

    return users as IUser[];
  };

  public create = async (newUser: IUser): Promise<IUser> => {
    const { name, email, password } = newUser;

    const [result] = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Users (name, email, password) VALUES (?, ?, ?)',
      [name, email, password],
    );

    const { insertId } = result;

    return { id: insertId, ...newUser };
  };
}
