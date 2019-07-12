import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

import AuthMiddleware from './app/middlewares/auth';
import UserController from './app/controllers/UserController';
import SessionsController from './app/controllers/SessionController';

const routes = new Router();
const upload = multer(multerConfig);

routes.post('/users', UserController.store);
routes.post('/sessions', SessionsController.store);

routes.use(AuthMiddleware);
routes.put('/users', UserController.update);

routes.post('/files', upload.single('file'), (req, res) => {
  return res.json({ ok: true });
})

export default routes;
