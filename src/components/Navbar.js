// components/Navbar.js
import { Heart, Home, ListMusic, Info } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import "../App.scss";

export default function Navbar() {
  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="nav-logo">
        <Heart color="#F38BA0" size={22} />
        <span className="nav-title">VibraList</span>
      </div>

      <div className="nav-links">
        <Link to="/" className={location.pathname === "/" ? "active" : ""}>
          <Home size={18} />
          Inicio
        </Link>
        <Link to="/lista" className={location.pathname === "/lista" ? "active" : ""}>
          <ListMusic size={18} />
          Mi Lista
        </Link>
        <Link to="/about" className={location.pathname === "/about" ? "active" : ""}>
          <Info size={18} />
          Acerca
        </Link>
      </div>
    </nav>
  );
}
