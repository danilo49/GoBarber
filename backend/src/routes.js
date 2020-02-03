import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import FileController from './app/controllers/FileController';
import ProviderController from './app/controllers/ProviderController';
import AppointmentController from './app/controllers/AppointmentController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();
const upload = multer(multerConfig);

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

routes.use(authMiddleware); // Middleware GLOBAL as rotas abaixo desta linha passaram pelo middleware
// routes.put('/users', authMiddleware, UserController.update); Middleware LOCAL
routes.put('/users', UserController.update);

routes.get('/providers', ProviderController.index);

routes.post('/appointments', AppointmentController.store);

routes.post('/files', upload.single('file'), FileController.store);

export default routes;

// *********** Atalhos ******************************
// Ctrl + enter / adiciona comentarios
// Ctrl k Ctrl C comenta a linha atual
// Ctrl k Ctrl u descomenta a linha atual
// Ctrl k Ctrl s show keyboards shotcuts
// Ctrl Alt k copia a linha atual na de baixo
// Ctrl Shift k apaga linha atual
// **************************************************
