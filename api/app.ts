import 'reflect-metadata';

import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import 'express-async-errors';

import routes from 'routes/router';
import ErrorHandler from 'middlewares/ErrorsHandler';

const app = express();

app.use((req: Request, res: Response, nextFuc : NextFunction) => {
  console.log(req.method, ': ', req.url);
  nextFuc();
});

app.use(cors());
app.use(express.json());
app.use(routes);

app.use(ErrorHandler);

export default app;
