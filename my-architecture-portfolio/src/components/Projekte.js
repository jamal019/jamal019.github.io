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
          <Link to="/projekte/goldbeck">
            <div className="projekt-image" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/goldbeck1.jpg)` }}>
              <div className="overlay">Village House Goldbeck</div>
            </div>
          </Link>
        </div>
        <div className="projekt-item">
          <Link to="/projekte/cotti">
            <div className="projekt-image" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/cotti1.jpg)` }}>
              <div className="overlay">Cotti Intervention</div>
            </div>
          </Link>
        </div>
        <div className="projekt-item">
          <Link to="/projekte/platzderzeit">
            <div className="projekt-image" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/platzderzeit1.jpg)` }}>
              <div className="overlay">Platz der Zeit</div>
            </div>
          </Link>
        </div>
        <div className="projekt-item">
          <Link to="/projekte/venedig">
            <div className="projekt-image" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/venedig1.jpg)` }}>
              <div className="overlay">Venedig</div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Projekte;
