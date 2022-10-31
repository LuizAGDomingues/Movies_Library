import { Link } from 'react-router-dom';
import { BiCameraMovie, BiSearchAlt2 } from 'react-icons/bi';
import { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [search, setSearch] = useState("");
  return (
    <nav id="navbar">
        <h2>
          <Link to='/'><BiCameraMovie />MoviesLib</Link>
        </h2>
        <form>
            <input type="text" placeholder='Busque um filme' onChange={(e) => setSearch(e.target.value)} />
            <button type='submit'><BiSearchAlt2/></button>
        </form>
    </nav>
  )
}

export default Navbar;