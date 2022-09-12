require("dotenv").config();
const axios = require("axios");
const { TypeDiet, Recipe } = require("../../db");

const linkApi = 'https://apimocha.com/renato/info';

const getAllRecipes = async () => {
  return axios
    .get(linkApi)
    .then((resp) => resp)
    .then((respuesta) =>
      respuesta.data.results.map((e) => {
        return {
          id: e.id,
          name: e.title,
          image: e.image,
          typeDiets: e.diets,
          dishTypes: e.dishTypes,
          summary: e.summary,
          healthScore: e.healthScore,
          instructions: e.analyzedInstructions
            .map((e) => {
              return e.steps.map((e) => {
                return e.step;
              });
            })
            .flat(),
        };
      })
    )
    .then(function (ress) {
      const guardoPromesas = Promise.all(ress);
      return guardoPromesas;
    })
    .then((retorno) => {
      try {
        return retorno;
      } catch (error) {
        console.log(error);
      }
    });
};

const callDb = async () => {
  try {
    const db = Recipe.findAll({
      include: {
        model: TypeDiet,
        attributes: ["name"],
        through: {
          attributes: [],
        },
      },
    });
    return db;
  } catch (error) {
    console.log(error + " error al traer todo de la base de datos");
  }
};

const arreglo = async () => {
  try {
    const baseDeDatos = await callDb();
    let reordenado = [];
    for (let i = 0; i < baseDeDatos.length; i++) {
      reordenado.push({
        id: baseDeDatos[i].id,
        image: baseDeDatos[i].image,
        name: baseDeDatos[i].name,
        dishTypes: baseDeDatos[i].dishTypes,
        typeDiets: baseDeDatos[i].typeDiets.map((e) => e.name),
        summary: baseDeDatos[i].summary,
        healthScore: baseDeDatos[i].healthScore,
        instructions: baseDeDatos[i].instructions,
      });
    }
    return reordenado;
  } catch (error) {
    console.log(error + "aw");
  }
};

const mix = async () => {
  try {
    
    const api = await getAllRecipes();
    const db1 = await arreglo();
    const all = [...api,...db1];
    return all;
  } catch (error) {
    console.log(error + " error al juntar todo");
  }
};

const createDiet = async (req, res) => {
  const {
    name,
    image,
    typeDiets,
    dishTypes,
    healthScore,
    instructions,
    summary,
  } = req.body;

  try {
    const create = await Recipe.create({
      name,
      image,
      dishTypes,
      healthScore,
      instructions,
      summary,
    });

    const dietsDb = await TypeDiet.findAll({
      where: { name: typeDiets },
    });

    await create.addTypeDiet(dietsDb);

    res.send("Receta creada con exito");
  } catch (error) {
    console.log(error) + "error al creaer ";
  }
};


const googleMaps = async (req, res)=>{
  const apikey = "AIzaSyA2n20DWwKySEFlMNhAeii-anc_AZUL2uA"
  const link = `https://maps.googleapis.com/maps/api/js?=${apikey}`
  return axios
    .get(link)
    .then((resp) => resp)
    .then((respuesta) =>
      res.send(respuesta.data))


}

module.exports = { mix, createDiet, googleMaps};
