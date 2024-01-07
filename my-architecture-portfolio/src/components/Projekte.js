// Projekte.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Projekte.css'; // Stellen Sie sicher, dass die CSS-Datei existiert

function Projekte() {
  return (
    <div className="projekte-container">
      <h2>Projektübersicht</h2>
      <div className="projekte-grid">
        <div className="projekt-item">
          <Link to="/projekte/1">
          <div className="projekt-image" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/beispiel1.jpg)` }}>
              <div className="overlay">Projekt 1</div>
            </div>
          </Link>
        </div>
        <div className="projekt-item">
          <Link to="/projekte/2">
          <div className="projekt-image" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/beispiel2.jpeg)` }}>
              <div className="overlay">Projekt 2</div>
            </div>
          </Link>
        </div>
        <div className="projekt-item">
          <Link to="/projekte/3">
            <div className="projekt-image" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/akro.jpg)` }}>
              <div className="overlay">Projekt 3</div>
            </div>
          </Link>
        </div>
        <div className="projekt-item">
          <Link to="/projekte/4">
            <div className="projekt-image" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/jimmy.png)` }}>
              <div className="overlay">Projekt 4</div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Projekte;
