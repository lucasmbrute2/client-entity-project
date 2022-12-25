import { Client } from '../../../../application/entities/client';
import { IClientRepository } from 'src/application/repositories/client-repository';
import { Repository } from 'typeorm';
import { AppDataSource } from '../data-source';

export class ClientRepository implements IClientRepository {
  public repository: Repository<Client>;
  constructor() {
    this.repository = AppDataSource.getRepository(Client);
  }

  async create(data: Client): Promise<void> {
    const user = this.repository.create(data);
    await this.repository.save(user);
  }

  async findByID(id: string): Promise<Client> {
    return await this.repository.findOneBy({
      id,
    });
  }

  async findByUsername(username: string): Promise<Client> {
    return await this.repository.findOneBy({
      username,
    });
  }
}
