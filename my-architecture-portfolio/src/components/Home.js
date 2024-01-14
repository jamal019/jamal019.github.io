import React, { useState } from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import './Home.css'; 
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function Home() {
  const [activeSlide, setActiveSlide] = useState(0);
  const settings = {
    dots: false,
    infinite: true,
    centerMode: true,
    centerPadding: '20%', // Erhöht den Wert, um mehr von den benachbarten Bildern zu zeigen
    slidesToShow: 1, // Zeigt drei Slides auf einmal, mittlerer Slide wird zentral angezeigt
    speed: 500,
    focusOnSelect: true,
    cssEase: 'linear',
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    beforeChange: (current, next) => setActiveSlide(next),
  };

  // Benutzerdefinierte Pfeil-Komponenten
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} custom-arrow next`}
        style={{ ...style, display: "block", background: "#333", borderRadius: "50%" }}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} custom-arrow prev`}
        style={{ ...style, display: "block", background: "#333", borderRadius: "50%" }}
        onClick={onClick}
      />
    );
  }
  
  return (
    <div className="home-container">
      <Slider {...settings}>
        <div>
          <Link to="/projekte/hivegarden">
            <div className={`slide ${activeSlide === 0 ? 'active' : ''}`} style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/hivegarden1.jpg)` }}>
              <div className="overlay">Hive Garden</div>
            </div>
          </Link>
        </div>
        <div>
          <Link to="/projekte/goldbeck">
            <div className={`slide ${activeSlide === 1 ? 'active' : ''}`} style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/goldbeck1.jpg)` }}>
              <div className="overlay">Village House Goldbeck</div>
            </div>
          </Link>
        </div>
        <div>
          <Link to="/projekte/cotti">
            <div className={`slide ${activeSlide === 2 ? 'active' : ''}`} style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/cotti1.jpg)` }}>
              <div className="overlay">Cotti Intervention</div>
            </div>
          </Link>
        </div>
        <div>
          <Link to="/projekte/platzderzeit">
            <div className={`slide ${activeSlide === 3 ? 'active' : ''}`} style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/platzderzeit1.jpg)` }}>
              <div className="overlay">Platz der Zeit</div>
            </div>
          </Link>
        </div>
        <div>
          <Link to="/projekte/innovationszentrum">
            <div className={`slide ${activeSlide === 4 ? 'active' : ''}`} style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/innovationszentrum1.jpg)` }}>
              <div className="overlay">Innovationszentrum Cottbus</div>
            </div>
          </Link>
        </div>
        <div>
          <Link to="/projekte/hang">
            <div className={`slide ${activeSlide === 5 ? 'active' : ''}`} style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/hang1.png)` }}>
              <div className="overlay">Ausstellung am Hang</div>
            </div>
          </Link>
        </div>
        <div>
          <Link to="/projekte/busbahnhof">
            <div className={`slide ${activeSlide === 6 ? 'active' : ''}`} style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/busbahnhof1.jpg)` }}>
              <div className="overlay">Busbahnhof Cottbus Ostsee</div>
            </div>
          </Link>
        </div>
        <div>
          <Link to="/projekte/skandale">
            <div className={`slide ${activeSlide === 7 ? 'active' : ''}`} style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/skandale1.jpg)` }}>
              <div className="overlay">Diskothek Skandale</div>
            </div>
          </Link>
        </div>
        <div>
          <Link to="/projekte/qasrnaous">
            <div className={`slide ${activeSlide === 8 ? 'active' : ''}`} style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/qasrnaous1.png)` }}>
              <div className="overlay">Tempel Qasr Naous</div>
            </div>
          </Link>
        </div>
        <div>
          <Link to="/projekte/unsichtbarestadt">
            <div className={`slide ${activeSlide === 9 ? 'active' : ''}`} style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/unsichtbarestadt1.jpg)` }}>
              <div className="overlay">Unsichtbare Stadt Fedora</div>
            </div>
          </Link>
        </div>

      </Slider>
    </div>
  );
}

export default Home;
