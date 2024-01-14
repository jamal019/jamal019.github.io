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
        <div className="projekt-item">
          <Link to="/projekte/innovationszentrum">
            <div className="projekt-image" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/innovationszentrum1.jpg)` }}>
              <div className="overlay">Innovationszentrum Cottbus</div>
            </div>
          </Link>
        </div>
        <div className="projekt-item">
          <Link to="/projekte/hang">
            <div className="projekt-image" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/hang1.png)` }}>
              <div className="overlay">Ausstellung am Hang</div>
            </div>
          </Link>
        </div>
        <div className="projekt-item">
          <Link to="/projekte/busbahnhof">
            <div className="projekt-image" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/busbahnhof1.jpg)` }}>
              <div className="overlay">Busbahnhof Cottbus Ostsee</div>
            </div>
          </Link>
        </div>
        <div className="projekt-item">
          <Link to="/projekte/skandale">
            <div className="projekt-image" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/skandale1.jpg)` }}>
              <div className="overlay">Diskothek Skandale</div>
            </div>
          </Link>
        </div>
        <div className="projekt-item">
          <Link to="/projekte/qasrnaous">
            <div className="projekt-image" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/qasrnaous1.png)` }}>
              <div className="overlay">Nachbau vom Tempel Qasr Naous</div>
            </div>
          </Link>
        </div>
        <div className="projekt-item">
          <Link to="/projekte/unsichtbarestadt">
            <div className="projekt-image" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/unsichtbarestadt1.jpg)` }}>
              <div className="overlay"> Unsichtbare Stadt Fedora</div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
export default Projekte;
