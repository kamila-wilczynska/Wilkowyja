import logo from "../images/logo.png";
import { FaAlignRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState } from "react";

function NavBar() {
  const [show, setShow] = useState(false);

  function handleToggle() {
    setShow(!show);
  }

  function handleLinkClick() {
    setShow(false);
  }

  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            <img className="logo" src={logo} alt="wylkowyja logo" />
          </Link>
          <button type="button" className="nav-btn" onClick={handleToggle}>
            <FaAlignRight className="nav-icon" />
            <span>Menu</span>
          </button>
        </div>
        <ul className={show ? "nav-links show-nav" : "nav-links"}>
          <li>
            <Link to="/" onClick={handleLinkClick}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/gallery" onClick={handleLinkClick}>
              Galeria
            </Link>
          </li>
          <li>
            <Link to="/attractions" onClick={handleLinkClick}>
              Atrakcje
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
