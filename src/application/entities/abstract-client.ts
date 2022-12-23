export abstract class ClientProps {
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  phone: string;
  createdAt?: Date;
  modifiedAt?: Date | null;
}
