import { Client } from '../../entities/client';
import { IClientRepository } from '../../repositories/client-repository';
import { hash } from 'bcrypt';
import { inject, injectable } from 'tsyringe';

interface ClientCreateRequest {
  username: string;
  password: string;
  confirmPassword: string;
  firstName: string;
  lastName: string;
  phone: string;
}

interface ClientCreateResponse {
  client: Client;
}

@injectable()
export class ClientCreate {
  constructor(
    @inject('ClientRepository')
    private clientRepository: IClientRepository
  ) {}

  async execute(request: ClientCreateRequest): Promise<ClientCreateResponse> {
    const { firstName, lastName, password, phone, username, confirmPassword } =
      request;

    if (password !== confirmPassword) {
      throw new Error("Password didn't match.");
    }

    const hashedPassword = await hash(password, 5);

    const client = new Client({
      firstName,
      lastName,
      password: hashedPassword,
      phone,
      username,
    });

    await this.clientRepository.create(client);

    return { client };
  }
}
