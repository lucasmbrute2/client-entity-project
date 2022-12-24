import { IClientRepository } from 'src/application/repositories/client-repository';
import { compare } from 'bcrypt';
import { sign } from 'jsonwebtoken';
import { inject, injectable } from 'tsyringe';

interface AuthClientUseCaseRequest {
  username: string;
  password: string;
}

interface AuthClientUseCaseResponse {
  token: string;
}

@injectable()
export class AuthClientUseCase {
  constructor(
    @inject('ClientRepository')
    private clientRepository: IClientRepository
  ) {}

  async execute(
    data: AuthClientUseCaseRequest
  ): Promise<AuthClientUseCaseResponse> {
    const { password, username } = data;

    const client = await this.clientRepository.findByUsername(username);
    if (!client) throw new Error("Client didn't find");

    const isClientValid = compare(password, client.password);
    if (!isClientValid) throw new Error('Password or username not valid');

    const token = sign(
      {
        id: client.id,
      },
      process.env.MD5_HASH,
      {
        expiresIn: '1d',
      }
    );

    return { token };
  }
}
