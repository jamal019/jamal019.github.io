import React from 'react';
import { Link } from 'react-router-dom';
import './Projekte.css';

function Projekte() {
  return (
    <div className="projekte-container">
      <h2>Projektübersicht</h2>
      <div className="projekte-grid">
        <div className="projekt-item">
          <Link to="/projekte/hivegarden">
            <div className="projekt-image" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/hivegarden1.jpg)` }}>
              <div className="overlay">Hive Garden</div>
            </div>
          </Link>
        </div>
        <div className="projekt-item">
          <Link to="/projekte/rothaarpiratenbande">
            <div className="projekt-image" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/crew.jpg)` }}>
              <div className="overlay">Rothaar-Piratenbande</div>
            </div>
          </Link>
        </div>
        <div className="projekt-item">
          <Link to="/projekte/projekt3">
            <div className="projekt-image" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/akro.jpg)` }}>
              <div className="overlay">Projekt 3</div>
            </div>
          </Link>
        </div>
        <div className="projekt-item">
          <Link to="/projekte/projekt4">
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
