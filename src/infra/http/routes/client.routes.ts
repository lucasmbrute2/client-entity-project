import { Router } from 'express';
import { ClientAuthController } from '../controllers/client-auth-controller';
import { ClientSignInController } from '../controllers/client-create-controller';
const clientRouter = Router();

const authClientController = new ClientAuthController();
const signInClientUseCase = new ClientSignInController();

clientRouter.post('/auth', authClientController.handle);
clientRouter.post('/create', signInClientUseCase.handle);

export { clientRouter };
