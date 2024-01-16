import React from 'react';
import { FaInstagram, FaTwitter, FaLinkedin, } from 'react-icons/fa';
import './Kontakt.css';

function Kontakt() {
  return (
    <div className="container">
      <h2>Kontakt</h2>
      <h3>Anschrift:</h3>
      <p>Melike Koc<br />
         Seidelbastweg 115<br />
         12357 Berlin<br />
      </p>

      <h3>Kontaktdaten:</h3>
      <p>Telefon: +49 1575 8864333<br />
         E-Mail: <a href="mailto:melikekoc10@hotmail.com">melikekoc10@hotmail.com</a>
      </p>

      <h3>Social Media</h3>
      <p>Du kannst mich auch über verschiedene Social-Media-Kanäle erreichen. Ich freue mich über Nachrichten, Anfragen und den Austausch über Projekte und Ideen. Folge und kontaktiere mich gerne über:</p>
      <ul className="social-media-list">
        <li><a href="https://www.instagram.com/DeinInstagramHandle" target="_blank" rel="noopener noreferrer"><FaInstagram /> Instagram</a></li>
        <li><a href="https://www.twitter.com/DeinTwitterHandle" target="_blank" rel="noopener noreferrer"><FaTwitter /> Twitter (X)</a></li>
        <li><a href="https://www.linkedin.com/in/DeinLinkedInHandle" target="_blank" rel="noopener noreferrer"><FaLinkedin /> LinkedIn</a></li>
      </ul>
    </div>
  );
}

export default Kontakt;