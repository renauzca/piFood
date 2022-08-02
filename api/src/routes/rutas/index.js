const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
//const {routerDiet} = require("../rutas/indexDiet")
const {routerRecipe} = require("../rutas/indexRecipe")
const {routerDiet}= require("../rutas/indexDiet")


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use("/diets",  routerDiet)

router.use("/recipes", routerRecipe)


module.exports = router;


