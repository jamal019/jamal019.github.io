import React from 'react';
import './About.css';

function About() {
  return (
    <div className="about-container">
      <h2 className="about-title">Über mich</h2>

      <div className="about-portrait-container">
        <img
          src={`${process.env.PUBLIC_URL}/ich.png`}
          alt="Melike Koc"
          className="about-portrait"
        />
      </div>
      {/* Portrait Bild einfügen */}
      <section className="about-section">
        <h3 className="about-subtitle">Wer bin ich?</h3>
        <p>Mein Name ist Melike Koc, und ich bin eine engagierte und leidenschaftliche Architekturstudentin mit umfangreicher Erfahrung in verschiedenen Bereichen der Architektur und des Bauwesens. Mit einer starken technischen Grundlage und einem kreativen Herangehen an Designprozesse strebe ich danach, innovative Lösungen zu entwickeln, die sowohl ästhetisch ansprechend als auch funktional sind. Mein besonderes Interesse gilt der Erhaltung und Wiederbelebung denkmalgeschützter Gebäude, wobei ich stets darauf bedacht bin, deren historischen Charme zu bewahren, während ich moderne Lebensstandards integriere.</p>
        <p>Die Architektur ist für mich nicht nur eine technische Disziplin, sondern auch ein Mittel, um das Leben der Menschen positiv zu beeinflussen. Ich glaube fest daran, dass gut durchdachte Architektur nicht nur Räume schafft, sondern auch Gemeinschaften stärkt und zur Verbesserung der Lebensqualität beiträgt. Mein Ansatz ist es, durch kreative und nachhaltige Konzepte Menschen und ihre Bedürfnisse in den Mittelpunkt meiner Arbeit zu stellen.</p>
      </section>
      
      <section className="about-section">
        <h3 className="about-subtitle">Lebenslauf</h3>
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
        <h3 className="about-subtitle">Meine Philosophie</h3>
        <p>Ich bin überzeugt, dass Architektur mehr ist als das Zeichnen von Gebäuden. Sie ist eine Kunst, die es vermag, Geschichten zu erzählen und historische Kontexte zu bewahren. In meiner Arbeit lege ich großen Wert auf den respektvollen Umgang mit historischen Strukturen und bin stets bestrebt, ihre Geschichten in die moderne Welt zu übertragen. Gleichzeitig liegt mir am Herzen, durch umweltfreundliche und energieeffiziente Designs einen Beitrag zum Schutz unseres Planeten zu leisten.</p>
        <p>Ich freue mich darauf, auch in Zukunft Projekte zu realisieren, die sowohl die kulturelle Vergangenheit wertschätzen als auch den heutigen und zukünftigen Bedürfnissen gerecht werden. Mein Ziel ist es, Räume zu schaffen, die nicht nur ästhetisch ansprechend sind, sondern auch die Lebensqualität verbessern und zum sozialen Wohlbefinden beitragen.</p>
        </section>
      
    </div>
  );
}

export default About;
