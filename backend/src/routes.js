import { Router } from 'express';

const routes = new Router();

routes.get('/', (req, res) => {
    return res.json({message: "Hello Bootcamp!!!"});
});

export default routes;

// *********** Atalhos ******************************
    // Ctrl + enter / adiciona comentarios
    // Ctrl k Ctrl C comenta a linha atual
    // Ctrl k Ctrl u descomenta a linha atual
    // Ctrl k Ctrl s show keyboards shotcuts
    // Ctrl Alt k copia a linha atual na de baixo
    // Ctrl Shift k apaga linha atual
// **************************************************