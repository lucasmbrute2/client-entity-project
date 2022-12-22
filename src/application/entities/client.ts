import { randomUUID } from 'node:crypto';

abstract class ClientProps {
  id: string;
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  phone: string;
  createdAt: Date;
  modifiedAt: string;
}

export class Client extends ClientProps {
  constructor(id?: string) {
    super();
    this.id = id ?? randomUUID();
    this.createdAt = new Date();
  }
}
