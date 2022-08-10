const { Router } = require('express');
const {createDiet} = require('../funciones/fnRecipe')
const {allOrQuery, getById} = require('../controlers/recipes');
const {googleMaps} = require('../funciones/fnRecipe')



const routerRecipe = Router();

routerRecipe.get("/buscarMaps", googleMaps)

routerRecipe.get("/", allOrQuery);

routerRecipe.get("/:id", getById);

routerRecipe.post("/", createDiet)






module.exports = {routerRecipe};


