import { Router } from 'express';
import multer from 'multer';
import uploadImg from './config/uploadImg';

import SessionController from './controllers/SessionController';
import HouseController from './controllers/HouseController'

const routes = new Router();
const upload = multer(uploadImg);

routes.post('/sessions', SessionController.store);

routes.post('/houses', upload.single('thumbnail'), HouseController.store);


export default routes;