import express, { json, static } from 'express';
import mongoose from 'mongoose';
import routes from './routes';
import config from './config/db';
import path from 'path';
import cors from 'cors';

const { mongoURL } = config.mongoDB;

const server = express();

mongoose.connect(mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

server.use(cors());
server.use('/files', static(path.resolve(__dirname, '../uploads')));
server.use(json());
server.use(routes);

server.listen(3333);