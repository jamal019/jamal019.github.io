// Footer.js
import React from 'react';
import { FaInstagram, FaXing, FaLinkedin, FaPinterest } from 'react-icons/fa';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="social-media-links">
        <a href="https://www.instagram.com/deinBenutzername" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
        <a href="https://www.xing.com/profile/deinBenutzername" target="_blank" rel="noopener noreferrer">
          <FaXing />
        </a>
        <a href="https://www.linkedin.com/in/deinBenutzername" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://www.pinterest.de/deinBenutzername" target="_blank" rel="noopener noreferrer">
          <FaPinterest />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
