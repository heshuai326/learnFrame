import { ReflectMetadata } from '@nestjs/common';

export const Users = (...args: string[]) => ReflectMetadata('users', args);
