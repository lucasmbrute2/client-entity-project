import { randomUUID } from 'node:crypto';
import { Replace } from '../../helpers/Replace';

abstract class UserProps {
  id: string;
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  phone: string;
  createdAt: Date;
  modifiedAt: string;
}

export class Client {
  props: UserProps;

  constructor(props: Replace<UserProps, { createdAt: Date }>, id?: string) {
    this.props = {
      ...props,
      createdAt: props.createdAt ?? new Date(),
      id: id ?? randomUUID(),
    };
  }
}
