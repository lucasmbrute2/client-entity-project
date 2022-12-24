import { IClientRepository } from 'src/application/repositories/client-repository';
import { container } from 'tsyringe';
import { ClientRepository } from '../database/typeorm/repositories/client-repository';

container.registerSingleton<IClientRepository>(
  'ClientRepository',
  ClientRepository
);
