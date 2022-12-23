import { randomUUID } from 'node:crypto';
import { Replace } from 'src/helpers/Replace';

abstract class ClientProps {
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  phone: string;
  createdAt?: Date;
  modifiedAt?: Date | null;
}

// find how to get optional props
export class Client {
  private props: ClientProps;
  private _id: string;

  constructor(props: Replace<ClientProps, { createdAt?: Date }>, id?: string) {
    this.props = {
      ...props,
      createdAt: new Date(),
    };

    this._id = id ?? randomUUID();
  }
}
