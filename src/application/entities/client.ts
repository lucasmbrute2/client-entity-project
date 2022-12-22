import { randomUUID } from 'node:crypto';

export class Client {
  id: string;
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  phone: string;
  createdAt: Date;
  modifiedAt: string;

  constructor(id?: string) {
    this.id = id ?? randomUUID();
    this.createdAt = new Date();
  }
}
