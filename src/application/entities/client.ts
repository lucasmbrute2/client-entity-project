import { randomUUID } from 'node:crypto';
import { Replace } from 'src/helpers/Replace';
import { ClientProps } from './abstract-client';

interface props {
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  phone: string;
  createdAt?: Date;
  modifiedAt?: Date | null;
}

export class Client extends ClientProps {
  private _id: string;
  private props: props;

  constructor(props: Replace<props, { createdAt?: Date }>, id?: string) {
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
