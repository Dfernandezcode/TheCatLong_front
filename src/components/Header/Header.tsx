import "./Header.scss";
import logo from "../../assets/logo.png";
import { NavLink } from "react-router-dom";
import { IoIosCart, IoIosMenu, IoMdPerson } from "react-icons/io";

const Header = () => {
  const isLogged = false;
  return (
    <header className="header">
      <div className="header__container">
        <NavLink className="header__links-link" to="/">
          <IoIosMenu fontSize={30}></IoIosMenu>
        </NavLink>
        <NavLink className="header__links-link" to="/">
          <img className="header__logo" src={logo} alt="logo" />
        </NavLink>
        <div className="header__links-pages">
          {isLogged ? (
            <NavLink className="header__links-link" to="/profile">
              <IoMdPerson fontSize={30}></IoMdPerson>
            </NavLink>
          ) : (
            <IoMdPerson fontSize={30}></IoMdPerson>
          )}
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
