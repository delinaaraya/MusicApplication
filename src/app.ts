import express from 'express';
import collectionsRouter from './collections/collections.routes';
import artistsRouter from './artists/artists.routes';
import songsRouter from './songs/songs.routes';
import logger from '../middleware/logger.middleware';
import cors from 'cors';
import helmet from 'helmet';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

const port = 3003;

if (process.env.NODE_ENV == 'development') {
    //add logger middleware
    app.use(logger);
    console.log(process.env.GREETING + ' in dev mode')
}

//Parse JSON bodies
app.use(express.json());
//Parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));

//enable all CORS request
//needs to be installed:
//npm install cors
app.use(cors());

//adding set of security middleware
//needs to be installed:
//npm install helmet
app.use(helmet());

app.use('/', [collectionsRouter, artistsRouter, songsRouter]);

app.listen(port, () => {  
    console.log(`Example app listening at http://localhost:${port}`)
});