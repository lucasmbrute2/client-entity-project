import { makeClient } from 'test/factories/client-factory';
import { describe, expect, it } from 'vitest';
import { InMemoryClientRepository } from '../../../../test/repositories/in-memory-client';
import { ClientCreate } from './client-create-use-case';

describe('Client creation', () => {
  it('should be able to create a clinet', async () => {
    const clientRepository = new InMemoryClientRepository();
    const clientCreateUseCase = new ClientCreate(clientRepository);
    const olderLength = clientRepository.clients.length;

    const client = makeClient();
    await clientCreateUseCase.execute(client);

    expect(clientRepository.clients).toHaveLength(olderLength + 1);
  });
});
