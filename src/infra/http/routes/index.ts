import { Router } from 'express';
import { clientRouter } from './client.routes';

const router = Router();

router.use('/client', clientRouter);

export { router };
