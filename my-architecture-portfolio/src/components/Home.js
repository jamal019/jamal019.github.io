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
          <Link to="/projekte/1">
            <div className={`slide ${activeSlide === 0 ? 'active' : ''}`} style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/beispiel1.jpg)` }}>
              <div className="overlay">Projekt 1</div>
            </div>
          </Link>
        </div>
        <div>
          <Link to="/projekte/2">
            <div className={`slide ${activeSlide === 1 ? 'active' : ''}`} style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/beispiel2.jpeg)` }}>
              <div className="overlay">Projekt 2</div>
            </div>
          </Link>
        </div>
        <div>
          <Link to="/projekte/3">
            <div className={`slide ${activeSlide === 2 ? 'active' : ''}`} style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/akro.jpg)` }}>
              <div className="overlay">Projekt 3</div>
            </div>
          </Link>
        </div>
        <div>
          <Link to="/projekte/4">
            <div className={`slide ${activeSlide === 3 ? 'active' : ''}`} style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/jimmy.PNG)` }}>
              <div className="overlay">Projekt 4</div>
            </div>
          </Link>
        </div>
      </Slider>
    </div>
  );
}

export default Home;
