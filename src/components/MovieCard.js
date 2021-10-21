
import React  from "react";
import { addfavourites, removefavourites } from "../actions";


class MovieCard extends React.Component {
    handleFavouriteClick = ()=>{
       const{movie} = this.props
            
       this.props.dispatch(addfavourites(movie))
   }
   handleUnFavouriteClick = ()=>{
    const{movie} = this.props
    this.props.dispatch(removefavourites(movie));

   }
  render() {
      const { movie ,isMoviefavourite} = this.props;
      //const ans = isMoviefavourite(movie);
      return(
       <div className ="movie-card">
           <div className="left">
               <img alt ="movie-poster" src={movie.Poster}></img>
           </div>
           <div className="right">
           <div className ="title">{movie.Title}</div>
           <div className ="plot">{movie.Plot}</div>
           <div className ="footer">
              <div className="rating"> imdb rating :{movie.imdbRating}</div>
               { /*ans*/isMoviefavourite
              ?  <button className = "unfavourite-btn" onClick = {this.handleUnFavouriteClick}>UnFavourite</button> :
     <button className = "favourite-btn" onClick = {this.handleFavouriteClick}>Favourite</button>}
              
           </div>


           </div>
           

       </div>

      );
  }
}

export default MovieCard;
