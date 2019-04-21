/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import ShareButton from "./ShareButton";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  function toggleMenu() {
    setMenuOpen(!menuOpen);
  }
  return (
    <NavbarFixed>
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">
          PWA Tester
        </Link>
        <NavHamburger menuOpen={menuOpen} toggleMenu={toggleMenu} />
      </div>
      <NavMenu menuOpen={menuOpen}>
        <NavbarStart toggleMenu={toggleMenu} />
        <NavbarEnd />
      </NavMenu>
    </NavbarFixed>
  );
}

function NavbarFixed({ children }) {
  return (
    <nav
      className="navbar is-transparent is-fixed-top"
      role="navigation"
      aria-label="main navigation"
    >
      {children}
    </nav>
  );
}

function NavMenu({ children, menuOpen }) {
  return (
    <div className={"navbar-menu " + (menuOpen ? "is-active" : "")}>
      {children}
    </div>
  );
}

function NavHamburger({ menuOpen, toggleMenu }) {
  return (
    <a
      tabIndex="0"
      role="button"
      className={"navbar-burger burger " + (menuOpen ? "is-active" : "")}
      onClick={toggleMenu}
      aria-label="menu"
      aria-expanded={menuOpen}
    >
      <span aria-hidden="true" />
      <span aria-hidden="true" />
      <span aria-hidden="true" />
    </a>
  );
}

function NavbarStart({ toggleMenu }) {
  return (
    <div className="navbar-start">
      <Link to="/" onClick={toggleMenu} className="navbar-item">
        Home
      </Link>
      <Link to="/about" onClick={toggleMenu} className="navbar-item">
        About
      </Link>
      <Link to="/geolocation" onClick={toggleMenu} className="navbar-item">
        Geolocation
      </Link>
      <Link to="/notifications" onClick={toggleMenu} className="navbar-item">
        Notifications
      </Link>
      <div className="navbar-item has-dropdown is-hoverable">
        <a className="navbar-link" tabIndex="0">
          Device
        </a>
        <div className="navbar-dropdown is-boxed">
          <Link
            to="/device/orientation"
            onClick={toggleMenu}
            className="navbar-item"
          >
            Orientation
          </Link>
          <Link
            to="/device/motion"
            onClick={toggleMenu}
            className="navbar-item"
          >
            Motion
          </Link>
        </div>
      </div>
    </div>
  );
}

function NavbarEnd() {
  return (
    <div className="navbar-end">
      <div className="navbar-item">
        <div className="buttons">
          <ShareButton />
        </div>
      </div>
    </div>
  );
}
