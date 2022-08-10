const { Router } = require('express');

const {routerRecipe} = require("../rutas/indexRecipe")
const {routerDiet}= require("../rutas/indexDiet")


const router = Router();

router.use("/diets",  routerDiet)

router.use("/recipes", routerRecipe)


module.exports = router;


