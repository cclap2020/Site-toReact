import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";
import logo from "../../images/logo.svg";

export default function Nav() {
  return (
    <nav className="nav">
      <img className="nav__logo" src={logo} alt="logo" />
      <ul className="nav__ul">
        <li className="nav__ul__li">
          <Link className="li__link" to="/home">
            Home
          </Link>
        </li>
        <li className="nav__ul__li">
          <Link className="li__link" to="/portfolio">
            Portfolio
          </Link>
        </li>
        <li className="nav__ul__li">
          <Link className="li__link" to="/contact">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}
