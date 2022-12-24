import { makeClient } from 'test/factories/client-factory';
import { beforeEach, describe, expect, it } from 'vitest';
import { InMemoryClientRepository } from '../../../../test/repositories/in-memory-client';
import { ClientCreate } from './client-create-use-case';

let clientRepository: InMemoryClientRepository;
let clientCreateUseCase: ClientCreate;

describe('Client creation', () => {
  beforeEach(() => {
    clientRepository = new InMemoryClientRepository();
    clientCreateUseCase = new ClientCreate(clientRepository);
  });

  it('should be able to create a client', async () => {
    const olderLength = clientRepository.clients.length;

    const client = makeClient();
    await clientCreateUseCase.execute({
      ...client,
      confirmPassword: client.password,
    });

    expect(clientRepository.clients).toHaveLength(olderLength + 1);
  });

  it('should not be able to create a user with differents passwords', async () => {});
});
