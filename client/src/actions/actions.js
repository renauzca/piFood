import axios from "axios";
export const GET_DIETS = "GET_DIETS";
export const GET_RECIPES = "GET_RECIPES";
export const GET_QUERY = "GET_QUERY";
export const FILTER_GET_TYPE = "FILTER_GET_TYPE";
export const ORDER_FOR_NAME = "ORDER_FOR_NAME";
export const ORDER_FOR_SCORE = "ORDER_FOR_SCORE";
export const CREATE_RECIPE = "CREATE_RECIPE";
export const GET_DETAIL = "GET_DETAIL";
export const BORRAR_DETAIL = "BORRAR_DETAIL";
export const DELETE_ERROR = "DELETE_ERROR";


export const getDiets = () => {
  return function (distatch) {
    return fetch("http://localhost:3001/diets")
      .then((res) => res.json())
      .then((json) => distatch({ type: GET_DIETS, payload: json }));
  };
};

export default function getAllRecipes() {
  return async function (distatch) {
    var json = await axios.get("http://localhost:3001/recipes");
    return distatch({ type: GET_RECIPES, payload: json.data });
  };
}

export function getQuery(name) {
  return async function (distatch) {
    var resul = await axios.get(`http://localhost:3001/recipes/?name=${name}`);
    return distatch({ type: GET_QUERY, payload: resul.data });
  };
}

export function filterGetType(value) {
  return { type: FILTER_GET_TYPE, payload: value };
}

export function ordenForName(value) {
  return { type: ORDER_FOR_NAME, payload: value };
}

export function orderForScore(value) {
  return { type: ORDER_FOR_SCORE, payload: value };
}

export function createRecipe(value) {
  return async function (distatch) {
    let json = await axios.post("http://localhost:3001/recipes", value);
    return json;
  };
}

export function getDetail(id) {
  return async function (distatch) {
    let json = await axios.get(`http://localhost:3001/recipes/${id}`);
    return distatch({ type: GET_DETAIL, payload: json.data });
  };
}

export function borrarDetail() {
  return function (distatch) {
    return distatch({ type: BORRAR_DETAIL });
  };
}

export function deleteError() {
  return function (distatch) {
    return distatch({ type: DELETE_ERROR });
  };
}

