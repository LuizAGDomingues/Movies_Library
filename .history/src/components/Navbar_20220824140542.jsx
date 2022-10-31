import { Link, useNavigate } from 'react-router-dom';
import { BiCameraMovie, BiSearchAlt2 } from 'react-icons/bi';
import { useState } from 'react';
import { FcGoogle } from "react-icons/fc";
import { GoogleAuthProvider, signInWithPopup, User } from 'firebase/auth';
import { auth } from '../services/firebase';
import './Navbar.css';

const Navbar = () => {
  const [search, setSearch] = useState("");
  const [user, setUser] = useState<User>(null);
  const navigate = useNavigate();

  function handleGoogleSignIn(){
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.log(error);
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!search) return;
    navigate(`/search?q=${search}`);
    setSearch("");
  }
  return (
    <nav id="navbar">
        <h2>
          <Link to='/'><BiCameraMovie />MoviesLib</Link>
        </h2>
        <div id="login">
          <button onClick={handleGoogleSignIn}> <FcGoogle/> Login via Google</button>
        </div>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder='Busque um filme' onChange={(e) => setSearch(e.target.value)} value={search}/>
            <button type='submit'><BiSearchAlt2/></button>
        </form>
    </nav>
  )
}

export default Navbar;