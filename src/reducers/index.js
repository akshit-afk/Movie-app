import { ADD_MOVIES, REMOVE_FAVOURITES, SETSHOW_FAVOURITES } from "../actions";
import { ADD_FAVOURITES } from "../actions";
import { combineReducers } from "redux";
const initialMoviestate = {
    list : [],
    favourites : [],
    showfavourite :false
}
export  function movies(state=initialMoviestate ,action){
    // if(action.type===ADD_MOVIES){
    //    return {
    //        ...state,
    //        list :action.movies
    //    }
    // }
    // return state;
    switch(action.type){
        case ADD_MOVIES:
            return {
                ...state,
                list : action.movies
            }
            case ADD_FAVOURITES :
                return {
                    ...state,
                    favourites : [action.movie ,...state.favourites]
                }
            case REMOVE_FAVOURITES :
                const newfavourites = state.favourites.filter(movie => movie.Title !== action.movie.Title)
               return { ...state,
                favourites: newfavourites

               }
               case SETSHOW_FAVOURITES:
                   return {
                       ...state,
                       showfavourite : action.val
                   }

                default: return state
    }
}

const initialSearchstate= {
    result :{}
}
export function search(state = initialSearchstate,action){
    return state
}
const initialRootstate = {
    movies : initialMoviestate,
    search : initialSearchstate
}
// export default function rootReducer(state = initialRootstate ,action){
//     return {
//         movies: movies(state.movies,action),
//         search : search(state.search,action)
//     }
// }
export default combineReducers({
    movies,
    search 
})