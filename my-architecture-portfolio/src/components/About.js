import React from 'react';
import './About.css'; // Importieren Sie die About.css-Datei

function About() {
  return (
    <div className="about-container">
      <h2 className="about-title">Über mich</h2>
      
      <section className="about-section">
        <h3 className="about-subtitle">Wer bin ich?</h3>
        <p>Mein Name ist Melike Koc, und ich bin eine engagierte und leidenschaftliche Architektin mit umfangreicher Erfahrung in verschiedenen Bereichen der Architektur und des Bauwesens. Mit einer starken technischen Grundlage und einem kreativen Herangehen an Designprozesse strebe ich danach, innovative Lösungen zu entwickeln, die sowohl ästhetisch ansprechend als auch funktional sind.</p>
      </section>
      
      <section className="about-section">
        <h3 className="about-subtitle">Beruflicher Werdegang</h3>
        <div className="professional-experience">
          <div className="experience-entry">
            <h4>02/2020 - 02/2021: Werkstudentin - Tempelbau GmbH</h4>
            <ul>
              <li>Bauleiter Assistenz</li>
              <li>Aufmaß</li>
              <li>Rechnungsprüfung</li>
              <li>Qualitätskontrolle</li>
              <li>Sonderwunschmanagement</li>
            </ul>
          </div>
          <div className="experience-entry">
            <h4>11/2020 - 08/2022: Gründerin - Koc Consulting</h4>
            <ul>
              <li>Planung und Durchführung von Sanierungsarbeiten</li>
              <li>Detailzeichnung</li>
              <li>Grundrisszeichnungen</li>
            </ul>
          </div>
          <div className="experience-entry">
            <h4>07/2021 - 07/2022: Werkstudentin - Key Consulting</h4>
            <ul>
              <li>Änderungen von Grundrisszeichnungen</li>
              <li>Sonderwunschmanagement</li>
              <li>Bauleitung Assistenz</li>
              <li>Qualitätskontrolle</li>
            </ul>
          </div>
          <div className="experience-entry">
            <h4>11/2022 - heute: Werkstudentin - NM-Architekten</h4>
            <ul>
              <li>Bauen im Bestand für die öffentliche Hand</li>
              <li>Erstellung von Zeichnungen und Details</li>
            </ul>
          </div>
        </div>
      </section>
      
      <section className="about-section">
        <h3 className="about-subtitle">Kenntnisse</h3>
        <p>Meine technischen Fähigkeiten umfassen fortgeschrittene Kenntnisse in ArchiCAD, Photoshop, InDesign, Lumion und Rhinoceros. Diese Werkzeuge habe ich genutzt, um präzise architektonische Entwürfe zu erstellen, visuelle Präsentationen zu verbessern und immersive 3D-Modelle und Renderings zu entwickeln.</p>
      </section>
      
      {/* Fügen Sie hier weitere Abschnitte nach Bedarf ein */}

    </div>
  );
}

export default About;
