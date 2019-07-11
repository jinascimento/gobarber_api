import { Router } from 'express';
import AuthMiddleware from './app/middlewares/auth';
import UserController from './app/controllers/UserController';
import SessionsController from './app/controllers/SessionController';

const routes = new Router();
routes.post('/users', UserController.store);
routes.post('/sessions', SessionsController.store);

routes.use(AuthMiddleware);
routes.put('/users', UserController.update);

export default routes;
