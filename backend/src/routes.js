import { Router } from 'express';

// import User from './app/models/User';

import UserController from './app/controllers/UserController';

const routes = new Router();

routes.post('/users', UserController.store);

/* routes.get('/', async (req, res) => {
  const user = await User.create({
    name: 'Danilo Pereira',
    email: 'danilopx@gmail.com',
    password_hash: '1231423',
  });

  return res.json(user);
});
*/
export default routes;

// *********** Atalhos ******************************
// Ctrl + enter / adiciona comentarios
// Ctrl k Ctrl C comenta a linha atual
// Ctrl k Ctrl u descomenta a linha atual
// Ctrl k Ctrl s show keyboards shotcuts
// Ctrl Alt k copia a linha atual na de baixo
// Ctrl Shift k apaga linha atual
// **************************************************
