import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  logging: true,
  entities: [],
  migrations: [],
});

export async function createConnection() {
  try {
    await AppDataSource.initialize();
  } catch (error) {
    console.log('Fail to connect with Typeorm - Error:', error);
  }
}
