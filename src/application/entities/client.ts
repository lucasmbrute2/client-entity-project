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
export class Client extends ClientProps {
  private _id: string;
  private props: ClientProps;

  constructor(props: Replace<ClientProps, { createdAt?: Date }>, id?: string) {
    super();
    this._id = id ?? randomUUID();
    this.props = {
      ...props,
      createdAt: new Date(),
    };
  }

  public get id(): string {
    return this._id;
  }
}
