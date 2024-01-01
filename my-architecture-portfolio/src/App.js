import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import Projects from './components/Projects';
import CV from './components/CV';
import Skills from './components/Skills';
import Philosophy from './components/Philosophy';
import Contact from './components/Contact';
import Legal from './components/Legal';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar /> {/* Hinzufügen der Navbar über den Routes */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/cv" element={<CV />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/philosophy" element={<Philosophy />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/legal" element={<Legal />} />
      </Routes>
    </Router>
  );
}

export default App;

