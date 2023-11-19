import "./Header.scss";
import logo from "../../assets/logo 2.png";
import { NavLink } from "react-router-dom";
import { IoIosCart, IoMdPerson } from "react-icons/io";
import NavBar from "../NavBar/NavBar";
import { useContext } from "react";
import { langContext } from "../Context/langContext";

const Header = () => {
  const idioma = useContext(langContext);
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__menu">
          <NavBar></NavBar>
          <div className="header__lang">
            <button onClick={() => idioma.establecerLenguaje("es-ES")}>ES</button>
            <button onClick={() => idioma.establecerLenguaje("en-EN")}>EN</button>
          </div>
        </div>
        <NavLink to="/">
          <img className="header__logo" src={logo} alt="logo" />
        </NavLink>
        <div className="header__links-pages">
          <NavLink className="header__links-link" to="/profile">
            <IoMdPerson fontSize={30}></IoMdPerson>
          </NavLink>
          <NavLink className="header__links-link" to="/cart">
            <IoIosCart fontSize={30}></IoIosCart>
          </NavLink>
        </div>
      </div>
      <div>
        <input className="header__search" placeholder="Buscar..." alt="buscador"></input>
      </div>
    </header>
  );
};

export default Header;
