import { Connection } from 'mongoose';
import { UserSchema } from './schemas/user.schemas';

export const usersProviders = [
  {
    provide: 'UserModelToken',
    useFactory: (connection: Connection) => connection.model('User', UserSchema),
    inject: ['DbConnectionToken'],
  },
];
