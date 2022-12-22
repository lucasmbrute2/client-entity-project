import { Replace } from '../../helpers/Replace';
import { randomUUID } from 'node:crypto';

type UserProps = {
  id: string;
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  phone: string;
  createdAt: Date;
  modifiedAt: string;
};

export class User {
  private props: UserProps;
  private _id: string;

  constructor(props: Replace<UserProps, { createdAt: Date }>, id?: string) {
    this.props = {
      ...props,
      createdAt: props.createdAt ?? new Date(),
    };

    this._id = id ?? randomUUID();
  }

  public get id(): string {
    return this._id;
  }

  public set username(username: string) {
    this.props.username = username;
  }

  public get username(): string {
    return this.props.username;
  }

  public set password(password: string) {
    this.props.password = password;
  }

  public get password(): string {
    return this.props.password;
  }

  public get firstName(): string {
    return this.props.firstName;
  }

  public set firstName(firstName: string) {
    this.props.firstName = firstName;
  }

  public get lastName(): string {
    return this.props.lastName;
  }

  public set lastName(lastName: string) {
    this.props.lastName = lastName;
  }

  public get phone(): string {
    return this.props.phone;
  }

  public set phone(phone: string) {
    this.props.phone = phone;
  }

  public get modifiedAt(): string {
    return this.props.modifiedAt;
  }

  public set modifiedAt(modifiedAt: string) {
    this.props.modifiedAt = modifiedAt;
  }
}
