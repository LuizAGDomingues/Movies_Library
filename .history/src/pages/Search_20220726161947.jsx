import { useState, useEffect } from "react";
import {useSearchParams} from 'react-router-dom';
import MovieCard from '../components/MovieCard';
import './MovieGrid.css';

const searchURL = import.meta.env.VITE_SEARCH;
const apiKey = import.meta.env.VITE_API_KEY;

const Search = () => {
  const searchParams = useSearchParams();
  const [movies, setovies] = useState([]);
  return (
    <div className="container">
      <h2 className="title">Resultados: <span className="text-query">{query}</span></h2>
      <div className="movies-container">
        {topMovies.length === 0 && <p>Carregando...</p>}
        {topMovies.length > 0 && topMovies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
      </div>
    </div>
  )
}
  
export default Search