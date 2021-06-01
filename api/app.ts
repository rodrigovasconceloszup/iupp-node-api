import 'reflect-metadata';

import express from 'express';
import cors from 'cors';
import 'express-async-errors';

import routes from 'routes/router';
import ErrorHandler from 'middlewares/ErrorsHandler';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.use(ErrorHandler);

export default app;
