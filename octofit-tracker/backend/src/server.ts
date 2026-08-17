import 'dotenv/config';

import cors from 'cors';
import express from 'express';

import { apiBaseUrl, port } from './config/apiUrl.ts';
import './config/database.ts';
import apiRouter from './routes/index.ts';

const app = express();

app.use(cors());
app.use(express.json());

app.get('/api/health', (_request, response) => {
  response.json({ status: 'ok', apiBaseUrl });
});

app.use('/api', apiRouter);

app.listen(port, '0.0.0.0', () => {
  console.log(`OctoFit Tracker API listening at ${apiBaseUrl}`);
});