import 'reflect-metadata';
import 'express-async-errors';
import express, { Express } from 'express';
import cors from 'cors';
import loadEnv from './config/envs';
import { connectDb, disconnectDB } from './config/database';

loadEnv();

const app = express();

app.use(cors()).use(express.json());

export async function init(): Promise<Express> {
  connectDb();
  //   await connectRedis();
  return Promise.resolve(app);
}

export async function close(): Promise<void> {
  await disconnectDB();
}

export default app;
