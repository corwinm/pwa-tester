/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  function toggleMenu() {
    setMenuOpen(!menuOpen)
  }
  return (
    <nav className="navbar is-transparent is-fixed-top" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">PWA Tester</Link>
        <a
          tabIndex="0"
          role="button"
          className={"navbar-burger burger " + (menuOpen ? "is-active" : "")}
          onClick={toggleMenu}
          aria-label="menu"
          aria-expanded={menuOpen}
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </a>
      </div>
      <div id="navbarBasicExample" className={"navbar-menu" + (menuOpen ? "is-active" : "")}>
        <div className="navbar-start">
          <Link to="/" onClick={toggleMenu} className="navbar-item">Home</Link>
          <Link to="/about" onClick={toggleMenu} className="navbar-item">About</Link>
          <Link to="/geolocation" onClick={toggleMenu} className="navbar-item">Geolocation</Link>
          <Link to="/notifications" onClick={toggleMenu} className="navbar-item">Notifications</Link>
        </div>
      </div>
    </nav>
  );
}
