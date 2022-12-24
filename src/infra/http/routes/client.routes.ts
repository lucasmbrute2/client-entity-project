import { Router } from 'express';
import { ClientAuthController } from '../controllers/user-auth-controller';
const clientRouter = Router();

const authClientController = new ClientAuthController();

clientRouter.post('/auth', authClientController.handle);

export { clientRouter };
