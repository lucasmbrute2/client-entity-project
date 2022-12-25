import { Request, Response } from 'express';
import { AuthClientUseCase } from '../../../application/use-cases/client/auth-client';
import { container } from 'tsyringe';

export class ClientAuthController {
  async handle(req: Request, res: Response) {
    const userAuthUseCase = container.resolve(AuthClientUseCase);
    const { username, password } = req.body;

    const { token } = await userAuthUseCase.execute({
      username,
      password,
    });

    //TODO VIEW MAPPER
    return res.send(token);
  }
}
