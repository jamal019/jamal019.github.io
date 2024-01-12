import React, { useState } from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import './Home.css'; 
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function Home() {
  const [activeSlide, setActiveSlide] = useState(0);
  const settings = {
    dots: true,
    infinite: true,
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 3,
    speed: 500,
    focusOnSelect: true,
    cssEase: 'linear',
    beforeChange: (current, next) => setActiveSlide(next),
  };

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
          <Link to="/projekte/rothaarpiratenbande">
            <div className={`slide ${activeSlide === 1 ? 'active' : ''}`} style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/crew.jpg)` }}>
              <div className="overlay">Rothaar-Piratenbande</div>
            </div>
          </Link>
        </div>
        <div>
          <Link to="/projekte/projekt3">
            <div className={`slide ${activeSlide === 2 ? 'active' : ''}`} style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/akro.jpg)` }}>
              <div className="overlay">Projekt 3</div>
            </div>
          </Link>
        </div>
        <div>
          <Link to="/projekte/projekt4">
            <div className={`slide ${activeSlide === 3 ? 'active' : ''}`} style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/jimmy.png)` }}>
              <div className="overlay">Projekt 4</div>
            </div>
          </Link>
        </div>
      </Slider>
    </div>
  );
}

export default Home;
