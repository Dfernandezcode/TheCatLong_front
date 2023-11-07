import { useState } from "react";
import "./NavBar.scss";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="hamburger-icon" onClick={toggleMenu}>
        <div className={isOpen ? "bar top" : "bar"}></div>
        <div className={isOpen ? "bar middle" : "bar"}></div>
        <div className={isOpen ? "bar bottom" : "bar"}></div>
      </div>
      <div className={`menu ${isOpen ? "open" : ""}`}>
        <ul>
          <li>
            <Link to="/deportes">Deportes</Link>
          </li>
          <li>
            <Link to="/hombre">Hombre</Link>
          </li>
          <li>
            <Link to="/mujer">Mujer</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
