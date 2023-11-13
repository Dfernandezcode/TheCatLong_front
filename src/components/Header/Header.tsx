import "./Header.scss";
import logo from "../../assets/logo 2.png";
import { NavLink } from "react-router-dom";
import { IoIosCart, IoMdPerson } from "react-icons/io";
import NavBar from "../NavBar/NavBar";
import { useContext } from "react";
import { LanguageSelector } from "../../App";

const Header = () => {
  const { setLanguage } = useContext(LanguageSelector);
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__menu">
          <NavBar></NavBar>
          <div className="header__lang">
            <button onClick={() => setLanguage("es-ES")} className="header__lang-btn">
              ES
            </button>
            <button onClick={() => setLanguage("en-EN")} className="header__lang-btn">
              EN
            </button>
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
