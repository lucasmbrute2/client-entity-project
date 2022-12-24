import 'reflect-metadata';
import * as dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import { createConnection } from '../infra/database/typeorm/data-source';
const app = express();
createConnection();

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(3000);
