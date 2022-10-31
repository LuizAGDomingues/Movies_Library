import { useState, useEffect } from "react";

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const Home = () => {
  const [topMovies, setTopMovies] = useState([]);

  const getTopRatedMovies = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
  };

  useEffect(() => {
    const topRatedUrl = `${moviesURL}top_rated?${apiKey}`
    getTopRatedMovies
  }, [])

  return (
    <div>home</div>
  )
}

export default Home