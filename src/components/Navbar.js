/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { NavLink, withRouter } from "react-router-dom";
import ShareButton from "./ShareButton";

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
  function MenuLink(props) {
    return (
      <NavLink
        {...props}
        exact
        onClick={toggleMenu}
        className="navbar-item"
        activeClassName="has-text-link"
      />
    );
  }
  return (
    <div className="navbar-start">
      <MenuLink to="/">Home</MenuLink>
      <MenuLink to="/about">About</MenuLink>
      <MenuLink to="/geolocation">Geolocation</MenuLink>
      <MenuLink to="/notifications">Notifications</MenuLink>
      <div className="navbar-item has-dropdown is-hoverable">
        <a className="navbar-link" tabIndex="0">
          Device
        </a>
        <div className="navbar-dropdown is-boxed">
          <MenuLink to="/device/orientation">Orientation</MenuLink>
          <MenuLink to="/device/motion">Motion</MenuLink>
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

function BackButton({ onClick }) {
  if (navigator.standalone) {
    return (
      <a className="navbar-item" tabIndex="0" onClick={onClick}>
        <span className="icon">
          <i className="fas fa-arrow-left" />
        </span>
      </a>
    );
  }
  return null;
}

function Navbar(props) {
  const [menuOpen, setMenuOpen] = useState(false);
  function toggleMenu() {
    setMenuOpen(!menuOpen);
  }
  return (
    <NavbarFixed>
      <div className="navbar-brand">
        <BackButton onClick={props.history.goBack} />
        <NavLink to="/" className="navbar-item">
          PWA Tester
        </NavLink>
        <NavHamburger menuOpen={menuOpen} toggleMenu={toggleMenu} />
      </div>
      <NavMenu menuOpen={menuOpen}>
        <NavbarStart toggleMenu={toggleMenu} />
        <NavbarEnd />
      </NavMenu>
    </NavbarFixed>
  );
}

export default withRouter(Navbar);
