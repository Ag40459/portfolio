import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../../contexts/GlobalContext";
import { slide as Menu } from "react-burger-menu";
import "./navBar.css";

const Navbar = () => {
  const { user } = useContext(GlobalContext);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="logo-container">
          <a href="#" className="logo">
            Logo
          </a>
        </div>
        <div className="menu-container">
          <ul className="menu">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="button-container">
          <a href="#" className="button">
            Button
          </a>
        </div>
      </div>
      <Menu right disableAutoFocus>
        <ul className="menu-vertical">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <a href="#" className="button" id="buttonHamburguer">
              Button
            </a>
          </li>
        </ul>
      </Menu>
    </nav>
  );
};

export default Navbar;

