import { Router } from 'express';
import { clientRouter } from './client.routes';

const router = Router();

router.use('/user', clientRouter);

export { router };
