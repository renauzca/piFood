require("dotenv").config();
const axios = require('axios');
const e = require("express");
const APIKEY3 = process.env.APIKEY3;
const { TypeDiet, Recipe} = require('../../db')
const {mix} = require("../funciones/fnRecipe")

 const getAllDiets = async (req, res)=>{
    const typeDiets = await TypeDiet.findAll()
    const dietsType = typeDiets.map(el => el.name)
    if (!typeDiets.length > 0) {
        const recipes = await mix()
        const diets = recipes.map(el => el.typeDiets)
        diets.map(el => {
            el.forEach(name => {
                TypeDiet.findOrCreate({
                    where: { name: name }
                })
            });
        })
        const info = await TypeDiet.findAll()
        const dietsInfo = info.map(el => el.name)
        res.send(dietsInfo)
    } else {
        res.send(dietsType)
    }
}








module.exports = { getAllDiets }