import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import './Home.css'; 
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function Home() {
  const [activeSlide, setActiveSlide] = useState(0);

  // Funktion, die die Slider-Einstellungen anpasst
  const getSliderSettings = (isMobile) => ({
    dots: false,
    infinite: true,
    centerMode: true,
    centerPadding: isMobile ? '0px' : '20%',
    slidesToShow: 1,
    speed: 500,
    focusOnSelect: true,
    cssEase: 'linear',
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    beforeChange: (current, next)=> setActiveSlide(next),
  });

  const [sliderSettings, setSliderSettings] = useState(getSliderSettings(window.innerWidth < 768));

  useEffect(() => {
    function handleResize() {
      setSliderSettings(getSliderSettings(window.innerWidth < 768));
    }

    // Event Listener beim Laden des Components hinzufügen
    window.addEventListener('resize', handleResize);

    // Clean-up Funktion, entfernt den Event Listener beim Unmounten des Components
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Benutzerdefinierte Pfeil-Komponenten
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} custom-arrow next`}
        style={{ ...style, display: "block" }}
        onClick={onClick}
      >
        <i className="fa fa-chevron-right" aria-hidden="true"></i>
      </div>
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} custom-arrow prev`}
        style={{ ...style, display: "block" }}
        onClick={onClick}
      >
        <i className="fa fa-chevron-left" aria-hidden="true"></i>
      </div>
    );
  }
  
  return (
    <div className="home-container">
      <Slider {...sliderSettings}>
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
      <section className="welcome-message">
  <h1>Willkommen auf meiner Website!</h1>
  <p>
    Willkommen auf meiner Website, einem Schaufenster meiner architektonischen Visionen und Entwürfe. Als Architekturstudentin aus Berlin Neukölln habe ich es mir zur Aufgabe gemacht, nicht nur Räume, sondern auch Lebensgefühle zu kreieren. Von den lehrreichen Erfahrungen des Hausbaus meiner Eltern bis hin zu den herausfordernden Projekten meines Studiums, jede Linie auf dem Papier und jedes Modell im Raum ist für mich ein Schritt auf einer spannenden Reise durch die Welt der Architektur.
  </p>
  <p>
    Ich lade dich ein, auf dieser Seite einige meiner bisherigen Arbeiten zu erkunden. Du wirst Projekte finden, die aus meiner tiefen Wertschätzung für nachhaltiges und sozial engagiertes Design hervorgegangen sind. Von innovativen Konzepten, die urbanes Grün in den Alltag integrieren, über Räume, die Gemeinschaft fördern, bis hin zu Interventionen, die bestehende Strukturen neu interpretieren – jedes Projekt ist ein Zeugnis meiner Leidenschaft für Architektur, die funktionell, ästhetisch und sozial verantwortlich ist.
  </p>
  <p>
    Auf meiner Website präsentiere ich dir den "Hive Garden", ein Projekt, das eine verlassene Stadtecke in einen blühenden sozialen Treffpunkt verwandelt. Es spiegelt meine Vision wider, städtische Räume zu beleben und sie zu Orten des Zusammenkommens und der Gemeinschaft zu machen. Dann gibt es das "Village House Goldbeck", ein Projekt, das zeigt, wie moderne Wohnkonzepte und nachhaltige Bauweisen harmonisch miteinander verschmelzen können.
  </p>
  <p>
    In der "Cotti Intervention" siehst du, wie ich einen städtischen Raum in Cottbus durch kreative Eingriffe verwandelt habe, um ihn lebenswerter und einladender zu machen. Und beim "Platz der Zeit" erkunden wir, wie historische und zeitgenössische Elemente in der Städteplanung aufeinandertreffen können, um einzigartige und lebendige öffentliche Plätze zu schaffen.
  </p>
  <p>
    Diese und viele weitere Projekte sind das Ergebnis meiner akademischen Reise und meines persönlichen Engagements für Architektur. Jedes Projekt ist eine neue Gelegenheit, zu lernen, zu wachsen und die Grenzen dessen zu erweitern, was durch kreatives und nachhaltiges Design möglich ist.
  </p>
</section>
</div>
);
}

export default Home;