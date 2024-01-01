// Datei: src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Stellen Sie sicher, dass die CSS-Datei erstellt wird

function Navbar() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/projects">Projekte</Link></li>
        <li><Link to="/cv">Lebenslauf</Link></li>
        <li><Link to="/skills">Kenntnisse</Link></li>
        <li><Link to="/philosophy">Philosophie</Link></li>
        <li><Link to="/contact">Kontakt</Link></li>
        <li><Link to="/legal">Impressum & Datenschutz</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
