import { useParams } from 'react-router-dom';
//import { movies } from "../../data/movieData";

function MovieDetails({ id, title, description }) {
  const { movieId } = useParams();
  console.log(`${movieId}`);


  //movies.find(item => item.id === movieId)


  return (
    <div className='comp purple' key={id}>
      
      <p>Title: {title}</p>
      <p>Description: {description}</p>      
    </div>
  );
}

export default MovieDetails;