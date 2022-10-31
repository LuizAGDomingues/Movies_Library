import { useState, useEffect } from "react";
import {useParams} from 'react-router-dom';
import {
  BsGraphUp,
  BsWallet2,
  BsHourglassSplit,
  BsFillFileEarmarkTextFill
} from 'react-icons/bs';
import MovieCard from '../components/MovieCard';
import './MovieGrid.css'

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const Movies = () => {
  const {id} = useParams()
  const [movie, setMovie] = useState(null)
  const getMovie = async(url) => {
    const res = await fetch(url);
    const data = await res.json();
    setMovie(data);
  }

  useEffect(() => {
    const movieUrl = `${moviesURL}${id}?${apiKey}`
    getMovie(movieUrl)
  },[])
  return (
    <div className="movie-page">
      {movie && (<>
        <MovieCard movie={movie} showLink={false} />
        <p className="tagline">{movie.tagline}</p>
        <div className="info">
          <h3><BsWallet2/> Orçamento</h3>
          <p>{movie.budget}</p>
        </div>
        <div className="info">
          <h3><BsGraphUp/> Faturamento</h3>
          <p>{movie.revenue}</p>
        </div>
        <div className="info">
          <h3><BsHourglassSplit/> Duração</h3>
          <p>{movie.runtime} minutos</p>
        </div>
        <div className="info">
          <h3><BsWallet2/> Orçamento</h3>
          <p>{movie.budget}</p>
        </div>
      </>)};
    </div>
  )
}
  
export default Movies