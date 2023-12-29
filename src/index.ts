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
app.use(bodyParser.urlencoded({ extended: false }));

// const whitelist = ['http://localhost:4200'];
// const corsOptionsDelegate = function (req: any, callback: any) {
//   let corsOptions;
//   if (whitelist.indexOf(req.header('Origin')) !== -1) {
//     corsOptions = { origin: true }; // reflect (enable) the requested origin in the CORS response
//   } else {
//     corsOptions = { origin: false }; // disable CORS for this request
//   }
//   callback(null, corsOptions); // callback expects two parameters: error and options
// };

app.use(cors());

app.use(morganMiddleware);
app.use('/', router());

app.use(errorHandler);

const server = http.createServer(app);
server.listen(process.env.PORT, () => console.log(`app listening on port ${process.env.PORT}`));
