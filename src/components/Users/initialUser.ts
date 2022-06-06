import { IUser } from './IUser';
import { v4 as uuid4 } from 'uuid';

export const initialUser: IUser = {
  id: uuid4(),
  name: '',
  username: '',
  email: '',
  phone: '',
  website: '',
};