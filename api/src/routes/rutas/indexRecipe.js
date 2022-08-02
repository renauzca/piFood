const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const {createDiet} = require('../funciones/fnRecipe')
const {allOrQuery, getById} = require('../controlers/recipes')


const routerRecipe = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

routerRecipe.get("/", allOrQuery);

routerRecipe.get("/:id", getById);

routerRecipe.post("/", createDiet)



module.exports = {routerRecipe};


