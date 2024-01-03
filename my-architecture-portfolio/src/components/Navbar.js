// Datei: src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Stellen Sie sicher, dass die CSS-Datei erstellt wird

function Navbar() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/projekte">Projekte</Link></li>
        <li><Link to="/lebenslauf">Lebenslauf</Link></li>
        <li><Link to="/kenntnisse">Kenntnisse</Link></li>
        <li><Link to="/philosophie">Philosophie</Link></li>
        <li><Link to="/kontakt">Kontakt</Link></li>
        <li><Link to="/impressum">Impressum</Link></li>
        <li><Link to="/datenschutz">Datenschutz</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
