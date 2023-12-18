import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Home from './components/Home';
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
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/projects">Projekte</Link></li>
          <li><Link to="/cv">Lebenslauf</Link></li>
          <li><Link to="/skills">Kenntnisse & Fähigkeiten</Link></li>
          <li><Link to="/philosophy">Philosophie</Link></li>
          <li><Link to="/contact">Kontakt</Link></li>
          <li><Link to="/legal">Impressum & Datenschutz</Link></li>
        </ul>
      </nav>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/projects" component={Projects} />
        <Route path="/cv" component={CV} />
        <Route path="/skills" component={Skills} />
        <Route path="/philosophy" component={Philosophy} />
        <Route path="/contact" component={Contact} />
        <Route path="/legal" component={Legal} />
      </Switch>
    </Router>
  );
}

export default App;
