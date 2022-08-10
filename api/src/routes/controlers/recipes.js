const axios = require("axios");

const { mix } = require("../funciones/fnRecipe");


const allOrQuery = async (req, res) => {

  try {
    const name = req.query.name;
    const allRecipes = await mix();
    if(name) {
      const results = allRecipes.filter((receta) => receta.name.toLowerCase().includes(name.toLowerCase()));
      results.length? 
      res.status(200).send(results) :
      res.send("no se encontro nada")
    } else{
      return res.send(allRecipes);
    }
  } catch (error) {
    console.log(error);
  }
};


const getById = async (req, res) => {
  const id = req.params.id;
  const solicitud = await mix();
  const b = await solicitud.find((e) => e.id == id);
  if (b) {
     res.send(b) 
  } else{
    res.send("error al filtrar por id")
  }
};

module.exports = { allOrQuery, getById };
