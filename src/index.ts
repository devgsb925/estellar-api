import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

import http from 'http';
import bodyParser from 'body-parser';
import cors from 'cors';
import cookieParser from 'cookie-parser';

import compression from 'compression';
import router from './router';
import morganMiddleware from './config/morganMiddleware';
import errorHandler from './middleware/errorHandler';

const app = express();

app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  cors({
    credentials: true,
  }),
);

app.use(morganMiddleware);
app.use('/', router());

app.use(errorHandler);

const server = http.createServer(app);
server.listen(process.env.PORT, () => console.log(`app listening on port ${process.env.PORT}`));
