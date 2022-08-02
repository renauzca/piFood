import { GET_RECIPES , GET_QUERY, FILTER_GET_TYPE, ORDER_FOR_NAME, ORDER_FOR_SCORE, CREATE_RECIPE, GET_DETAIL, BORRAR_DETAIL, GET_DIETS, DELETE_ERROR } from "../actions/actions";



const incialState = {
 allRecipes: [],
 receta:[],
 recetaDetail:{},
 diets:[],
 errores:[]

};

const Reducer = (state = incialState, action) => {
 switch (action.type) {
    case GET_RECIPES:
        return {
            ...state, 
            allRecipes: action.payload,
            receta: action.payload,
            //copyName: action.payload
        }
    case GET_QUERY: 

        if(action.payload === "no se encontro nada"){
            return {
                ...state,
                errores: action.payload
            }
        } else{
            return {
                ...state, 
                receta: action.payload
            }
        }

       
    case FILTER_GET_TYPE:
       
        const copyRecipes =[ ...state.allRecipes]
        const a = copyRecipes.filter(e=> e.typeDiets.includes(action.payload))
      
        return {
            ...state,
            receta: a
        }

           case ORDER_FOR_NAME: 
        const actName = action.payload
        const names = state.allRecipes
        //console(score)
        if(actName === "des") names.sort((a, b) => a.name.localeCompare(b.name))
        if(actName === "asc") names.sort((a, b)=> b.name.localeCompare(a.name))

        return {
            ...state, 
            receta: names
            
        }

    case ORDER_FOR_SCORE: 
        //let actScore = action.payload
        const score = [...state.receta]
        const retorno = action.payload === "de + a -"? score.sort((a,b)=>{
            if(a.healthScore>b.healthScore) return 1
            if(b.healthScore>a.healthScore) return -1
            return 0
        }) 
        : score.sort((a,b) =>{
            if(a.healthScore>b.healthScore) return -1
            if(b.healthScore>a.healthScore) return 1
            return 0
        })
        
        return {
            ...state,
            receta: retorno
        }

    case CREATE_RECIPE:
        return {
            ...state
        }

    case GET_DETAIL:
        return {
            ...state,
            recetaDetail: action.payload
        }

    case BORRAR_DETAIL:
        return {
            ...state,
            recetaDetail:{}
        }

    case GET_DIETS:
        return {
            ...state,
            diets: action.payload
        }
    case DELETE_ERROR:
        return {
            ...state,
            errores: ""
        }
    
    default: return state
    
 }
};
export default Reducer;
