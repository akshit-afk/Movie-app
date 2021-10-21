//{
  //  type :Add_Movies,
    //movies : []
//}
  export const ADD_MOVIES = 'ADD_MOVIES'
  export const ADD_FAVOURITES = 'ADD_FAVOURITES'
  export const REMOVE_FAVOURITES = 'REMOVE_FAVOURITES'
  export const SETSHOW_FAVOURITES = 'SETSHOW_FAVOURITES'



 export function addmovies(movies){
   return {
     type : ADD_MOVIES,
     movies
   }

 }
 export function addfavourites(movie){
   return {
     type : ADD_FAVOURITES,
     movie
   }

 }
 export function removefavourites(movie){
  return {
    type : REMOVE_FAVOURITES,
    movie
  }

}
export function setshowfavourites(val){
  return {
    type : SETSHOW_FAVOURITES,
    val
  }

}