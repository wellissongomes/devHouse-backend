import express, { json } from 'express';
import mongoose from 'mongoose';
import routes from './routes';

const server = express();

mongoose.connect('mongodb+srv://devhouse:devhouse@devhouse-xszia.mongodb.net/devhouse?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

server.use(json());
server.use(routes);

server.listen(3333);