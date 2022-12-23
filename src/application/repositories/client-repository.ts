import { Client } from '../entities/client';

export interface IClientRepository {
  create(data: Client): Promise<void>;
}
