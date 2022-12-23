import { ClientProps } from 'src/application/entities/abstract-client';
import { Client } from '../../src/application/entities/client';

type Override = Partial<ClientProps>;

export function makeClient(override?: Override): Client {
  return new Client({
    firstName: 'Lucas',
    lastName: 'Dantas',
    password: 'Adkad!321321',
    phone: '31975464383',
    username: 'lucasmbrute2',
    ...override,
  });
}
