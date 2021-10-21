
import React from "react";
import { data } from "../data";
import Navbar from "./Navbar";
import MovieCard from "./MovieCard";
import { addmovies } from "../actions";
import {setshowfavourites} from "../actions";
 class App extends React.Component {
  componentDidMount(){
   const {store} = this.props;
    store.subscribe(()=>{
      console.log('updated')
      console.log('updted state',this.props.store.getState());
      this.forceUpdate();
    })
    store.dispatch(addmovies(data))
    console.log('State',this.props.store.getState());
    
  }
  isMoviefavourite = (movie)=>{
     const {movies} = this.props.store.getState();
     const {favourites} = movies;
      const index = favourites.indexOf(movie);
      if(index!==-1){
        return true
      }
      return false
  }
  onChangetab = (val)=>{
    this.props.store.dispatch(setshowfavourites(val))
  }

  render(){

    const {movies} = this.props.store.getState();
  const {list,favourites,showfavourite} = movies;
  const displaymovie = showfavourite ? favourites : list
  return (
    <div className="App">
     <Navbar />
     <div className="main">
       <div className ="tabs">
         <div className = {`tab ${showfavourite ? '' : 'active-tabs'}`} onClick  = {()=>this.onChangetab(false)}>Movies</div>
         <div className = {`tab ${showfavourite ? 'active-tabs' : ''}`} onClick = {() =>this.onChangetab(true)}>Favourites</div>
       </div>
       <div className = "list">
         {displaymovie.map((movie,index) => (
        <MovieCard isMoviefavourite = {this.isMoviefavourite(movie)} movie = {movie} key = {index} dispatch = {this.props.store.dispatch}/>
         ))}
        
       </div>
       {displaymovie.length ===0 ? <div className ="no-movies">No Movies to show!</div> : null}
     </div>
    </div>
  );
         }
}

export default App;
