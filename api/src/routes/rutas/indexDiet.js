const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const { getAllDiets } = require('../funciones/fnDiet')

const routerDiet = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

routerDiet.get("/", getAllDiets)


module.exports = {routerDiet};


