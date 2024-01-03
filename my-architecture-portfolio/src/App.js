import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Projekte from './components/Projekte';
import Lebenslauf from './components/Lebenslauf';
import Kenntnisse from './components/Kenntnisse';
import Philosophie from './components/Philosophie';
import Kontakt from './components/Kontakt';
import Impressum from './components/Impressum';
import Datenschutz from './components/Datenschutz';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar /> {/* Hinzufügen der Navbar über den Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projekte" element={<Projekte />} />
        <Route path="/lebenslauf" element={<Lebenslauf />} />
        <Route path="/kenntnisse" element={<Kenntnisse />} />
        <Route path="/philosophie" element={<Philosophie />} />
        <Route path="/kontakt" element={<Kontakt />} />
        <Route path="/impressum" element={<Impressum />} />
        <Route path="/datenschutz" element={<Datenschutz />} />
      </Routes>
    </Router>
  );
}

export default App;

