import { Client } from '../../src/application/entities/client';
import { IClientRepository } from '../../src/application/repositories/client-repository';

export class InMemoryClientRepository implements IClientRepository {
  public clients: Client[] = [];

  async create(data: Client): Promise<void> {
    this.clients.push(data);
  }

  async findByID(id: string): Promise<Client | null> {
    return this.clients.find(client => client.id === id);
  }

  async findByUsername(username: string): Promise<Client | null> {
    return this.clients.find(client => client.username === username);
  }
}
