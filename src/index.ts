import express from 'express';
import http from 'http';
import bodyParser from 'body-parser';
import cors from 'cors';
import cookieParser from 'cookie-parser';

import compression from 'compression';

const app = express();

app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({
    credentials: true
}));                


app.get('/test', (req: express.Request, res: express.Response)=>{
    console.log('hello world');
    
    res.send('Hello World');
    });


const server = http.createServer(app);
server.listen(8080, () => console.log(`app listening on port http://localhost:8080`));