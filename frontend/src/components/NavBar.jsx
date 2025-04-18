import { Link } from "react-router-dom";
import "../css/NavBar.css";
function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">Show App</Link>
      </div>
      <div clasName="navbar-links">
        <Link to="/" className="nav-link">
          Home
        </Link>
        <Link to="/anime" className="nav-link">
          Anime
        </Link>
        <Link to="/favorites" className="nav-link">
          Favorties
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;
