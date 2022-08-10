const { Router } = require('express');

const { getAllDiets } = require('../funciones/fnDiet')

const routerDiet = Router();


routerDiet.get("/", getAllDiets)


module.exports = {routerDiet};


