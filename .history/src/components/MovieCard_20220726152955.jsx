import { Link } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';

const imageUrl = import.meta.env.VITE_IMG;

const MovieCard = ({movie, showLink = true}) => {
  return (
    <div className='movie-card'>
        <img src={imageUrl + movie.poster_path} alt={movie.title} />
        <h2></h2>
    </div>
  );
};

export default MovieCard;