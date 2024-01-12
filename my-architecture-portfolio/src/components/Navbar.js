import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <NavLink to="/" className="navbar-logo">
          <img src={process.env.PUBLIC_URL + '/testlogo.png'} alt="Logo" height="60" />
        </NavLink>
        <button
          className="hamburger"
          onClick={() => setIsNavExpanded(!isNavExpanded)}
        >
          {/* Icon für Hamburger-Menü */}
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>
        <div className={`navbar-menu ${isNavExpanded ? "expanded" : ""}`}>
          <NavLink to="/" className="navbar-item" activeClassName="active">Home</NavLink>
          <NavLink to="/projekte" className="navbar-item" activeClassName="active">Projekte</NavLink>
          <NavLink to="/about" className="navbar-item" activeClassName="active">Über mich</NavLink>
          <NavLink to="/kontakt" className="navbar-item" activeClassName="active">Kontakt</NavLink>
          <NavLink to="/impressum" className="navbar-item" activeClassName="active">Impressum</NavLink>
          <NavLink to="/datenschutz" className="navbar-item" activeClassName="active">Datenschutz</NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
