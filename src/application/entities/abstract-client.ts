export abstract class ClientProps {
  public username: string;
  public password: string;
  public firstName: string;
  public lastName: string;
  public phone: string;
  public createdAt?: Date;
  public modifiedAt?: Date | null;
}
