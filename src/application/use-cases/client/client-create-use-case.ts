import { Client } from '../../entities/client';
import { IClientRepository } from '../../repositories/client-repository';

interface ClientCreateRequest {
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  phone: string;
}

interface ClientCreateResponse {
  client: Client;
}

export class ClientCreate {
  constructor(private clientRepository: IClientRepository) {}

  async execute(request: ClientCreateRequest): Promise<ClientCreateResponse> {
    const { firstName, lastName, password, phone, username } = request;

    const client = new Client({
      firstName,
      lastName,
      password,
      phone,
      username,
    });

    await this.clientRepository.create(client);

    return { client };
  }
}
