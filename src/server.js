import express, { json } from 'express';
import mongoose from 'mongoose';
import routes from './routes';
import config from './config/db';

const { mongoURL } = config.mongoDB;

const server = express();

mongoose.connect(mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

server.use(json());
server.use(routes);

server.listen(3333);