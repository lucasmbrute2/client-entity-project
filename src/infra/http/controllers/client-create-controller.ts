import { Request, Response } from 'express';
import { ClientCreate } from '../../../application/use-cases/client/client-create-use-case';
import { container } from 'tsyringe';

export class ClientSignInController {
  async handle(req: Request, res: Response) {
    const clientCreateUseCase = container.resolve(ClientCreate);
    const { confirmPassword, firstName, lastName, password, phone, username } =
      req.body;

    const { client } = await clientCreateUseCase.execute({
      confirmPassword,
      firstName,
      lastName,
      password,
      phone,
      username,
    });

    //TODO MAP VIEW
    return res.send(client);
  }
}
