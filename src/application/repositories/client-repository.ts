import { ClientCreateDTO } from '../../infra/dtos/client-create-dto';

export interface IClientRepository {
  create(data: ClientCreateDTO): Promise<void>;
}
