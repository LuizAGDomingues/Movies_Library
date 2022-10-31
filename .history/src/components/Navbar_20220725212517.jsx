import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav id="navbar">
        <h2>
          <Link to='/'>MoviesLib</Link>
        </h2>
        <form>
            <input type="text" />
        </form>
    </nav>
  )
}

export default Navbar;