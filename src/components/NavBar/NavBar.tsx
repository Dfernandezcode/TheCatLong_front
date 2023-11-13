import { useState } from "react";
import "./NavBar.scss";
import { Link } from "react-router-dom";
import { FormattedMessage } from "react-intl";

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
            <Link to="/deportes">
              <FormattedMessage id="general:sports" />
            </Link>
          </li>
          <li>
            <Link to="/hombre">
              <FormattedMessage id="general:men" />
            </Link>
          </li>
          <li>
            <Link to="/mujer">
              <FormattedMessage id="general:woman" />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
