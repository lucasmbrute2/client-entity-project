import { randomUUID } from 'node:crypto';
import { Replace } from 'src/helpers/Replace';
import { ClientProps } from './abstract-client';
import { hash } from 'bcrypt';

export class Client extends ClientProps {
  private _id: string;

  constructor(props: Replace<ClientProps, { createdAt?: Date }>, id?: string) {
    super();
    this._id = id ?? randomUUID();
    this.createdAt = this.createdAt ?? new Date();
    this.firstName = props.firstName;
    this.lastName = props.lastName;
    this.password = props.password;
    this.phone = props.phone;
    this.username = props.username;
  }

  public get id(): string {
    return this._id;
  }

  public set _modifiedAt(modifiedAt: Date) {
    this.modifiedAt = modifiedAt;
  }

  public get _modifiedAt(): Date {
    return this.modifiedAt;
  }
}
