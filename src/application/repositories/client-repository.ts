import { Client } from '../entities/client';

export interface IClientRepository {
  create(data: Client): Promise<void>;
  findByID(id: string): Promise<Client | null>;
  findByUsername(username: string): Promise<Client | null>;
}
