import React from 'react';
import { useParams } from 'react-router-dom';
import './Projektdetails.css';

function ProjektDetails() {
  const { projektTitel } = useParams();

  const projectInfo = {
    hivegarden: {
      title: "Hive Garden",
      description: "Hier ist der Text für Hive Garden.",
      images: [
        `${process.env.PUBLIC_URL}/hivegarden1.jpg`,
        `${process.env.PUBLIC_URL}/hivegarden2.jpg`,
        `${process.env.PUBLIC_URL}/hivegarden3.jpg`,
        `${process.env.PUBLIC_URL}/hivegarden4.jpg`,
        `${process.env.PUBLIC_URL}/hivegarden5.jpg`,
        `${process.env.PUBLIC_URL}/hivegarden6.jpg`
      ]
    },
    rothaarpiratenbande: {
      title: "Rothaar-Piratenbande",
      description: "Die Rothaar-Piratenbande, geführt von Shanks, ist eine der mächtigsten Piratengruppen in 'One Piece'. Hier sind einige ihrer bemerkenswerten Mitglieder aufgelistet: ...",
      images: [`${process.env.PUBLIC_URL}/crew.jpg`]
    },
    projekt3: {
      title: "Projekt 3",
      description: "Beschreibung für Projekt 3",
      images: [`${process.env.PUBLIC_URL}/akro.jpg`]
    },
    projekt4: {
      title: "Projekt 4",
      description: "Beschreibung für Projekt 4",
      images: [`${process.env.PUBLIC_URL}/jimmy.png`]
    }
  };

  const project = projectInfo[projektTitel.toLowerCase()] || projectInfo['default'];

  return (
    <div className="projekt-details-container">
      <h2>{project.title}</h2>
      {project.images && project.images.map((img, index) => (
        <img key={index} src={img} alt={`Bild ${index + 1} von ${project.title}`} style={{ maxWidth: '100%', height: 'auto' }} />
      ))}
      <p className="projekt-description">{project.description}</p>
    </div>
  );
}

export default ProjektDetails;
