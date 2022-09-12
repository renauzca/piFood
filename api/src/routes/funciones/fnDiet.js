require("dotenv").config();

const { TypeDiet, Recipe } = require("../../db");
const { mix } = require("../funciones/fnRecipe");

const getAllDiets = async (req, res) => {
  const recipes = await mix();
 // console.log(recipes);
  const diets = recipes.map((el) => el.typeDiets);

  diets.map((el) => {
    el.forEach((name) => {
      TypeDiet.findOrCreate({
        where: { name: name },
      });
    });
  });

  const info = await TypeDiet.findAll();
  const dietsInfo = info.map((el) => el.name);
  res.send(dietsInfo);
};

module.exports = { getAllDiets };
