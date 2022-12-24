import 'reflect-metadata';
import express from 'express';
import { createConnection } from 'src/infra/database/typeorm/data-source';
createConnection();
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(3000);
