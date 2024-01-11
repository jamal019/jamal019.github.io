import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Projekte from './components/Projekte';
import About from './components/About';
import Kontakt from './components/Kontakt';
import Impressum from './components/Impressum';
import Datenschutz from './components/Datenschutz';
import ProjektDetails from './components/Projektdetails';


import './App.css';

function App() {
  return (
    <Router>
      <Navbar /> {/* Hinzufügen der Navbar über den Routes */}
      <div className="main-content"> {/* Hinzufügen der main-content Klasse für den Abstand */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projekte" element={<Projekte />} />
          <Route path="/about" element={<About />} />
          <Route path="/kontakt" element={<Kontakt />} />
          <Route path="/impressum" element={<Impressum />} />
          <Route path="/datenschutz" element={<Datenschutz />} />
          <Route path="/projekte/:projektTitel" element={<ProjektDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
