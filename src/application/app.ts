import 'reflect-metadata';
import * as dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import { createConnection } from '../infra/database/typeorm/data-source';
import '../infra/container';
import { router } from '../infra/http/routes';

const app = express();
app.use(express.json());
app.use(router);
createConnection();

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(3000);
