import { useState, useEffect } from "react";
import {useSearchParams} from 'react-router-dom';
import MovieCard from '../components/MovieCard';

const searchURL = import.meta.env.VITE_SEARCH;
const apiKey = import.meta.env.VITE_API_KEY;

const Search = () => {
    return (
      <div>Search</div>
    )
  }
  
  export default Search