import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

import http from 'http';
import bodyParser from 'body-parser';
import cors from 'cors';
import cookieParser from 'cookie-parser';

import compression from 'compression';
import Logger from './lib/logger/logger';
import morganMiddleware from './config/morganMiddleware';

const app = express();

app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({
    credentials: true
}));                

app.use(morganMiddleware);

app.get("/logger", (_, res) => {
    Logger.info("This is a info log");
    res.send("Hello world");
  });


const server = http.createServer(app);
server.listen(process.env.PORT, () => console.log(`app listening on port ${process.env.PORT}`));