import { Route, Switch, NavLink } from "react-router-dom";
import { movies } from "../../data/movieData";
import MovieDetails from "../MovieDetails";

function Movies({ movies: { id, title, description } }) {

  const handleClick = () => {
    console.log('Thanks');
  };

  return (
    <div className='comp orange'>
      <h1>Movies Component</h1>
      <nav>
        {movies.map(movie => (
          <NavLink 
            to={`/movies/${movie.id}`} 
            key={movie.id} 
            exact={true} 
            onClick={handleClick}
          >
            {movie.title}
          </NavLink>
        ))}
      </nav>
      <Switch>
        <Route path='/movies/:movieId'>
          <MovieDetails />
        </Route>
      </Switch>
    </div>
  );
}

export default Movies;