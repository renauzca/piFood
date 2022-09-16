require("dotenv").config();

const { TypeDiet, Recipe } = require("../../db");
const { mix } = require("../funciones/fnRecipe");

const getAllDiets = async (req, res) => {
  const recipes = await mix();
  const diets = recipes.map((el) => el.typeDiets);
  let nombre = await TypeDiet.findAll()
  let no = nombre.map(el => el.name)

 diets.map((el) => {
  if(no.length === 0){
    el.forEach((name) => {
      TypeDiet.findOrCreate({
        where: { name: name },
      });
    });
  }
    
  });
  
  const info = await TypeDiet.findAll();
  const dietsInfo = info.map((el) => el.name);
  res.send(dietsInfo);
};

module.exports = { getAllDiets };
