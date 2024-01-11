import React from 'react';
import { useParams } from 'react-router-dom';
import './Projektdetails.css';

function ProjektDetails() {
  const { projektTitel } = useParams();

  // Hier ist ein Beispiel, wie Sie die Projektinformationen anzeigen könnten:
  const projectInfo = {
    hivegarden: {
      title: "Hive Garden",
      description: "Hier ist der Text für Hive Garden.",
      images: ["/my-architecture-portfolio/hivegarden1.jpg", "/my-architecture-portfolio/hivegarden2.jpg", "/my-architecture-portfolio/hivegarden3.jpg", "/my-architecture-portfolio/hivegarden4.jpg", "/my-architecture-portfolio/hivegarden5.jpg", "/my-architecture-portfolio/hivegarden6.jpg"]
    },
    2: {
      title: "Rothaar-Piratenbande",
      description: "Die Rothaar-Piratenbande, geführt von Shanks, ist eine der mächtigsten Piratengruppen in 'One Piece'. Hier sind einige ihrer bemerkenswerten Mitglieder aufgelistet: ...",
      image: "crew.jpg"
    },
    3: {
      title: "Projekt 3",
      description: "Beschreibung für Projekt 3",
      image: "akro.jpg"
    },
    4: {
      title: "Projekt 4",
      description: "Beschreibung für Projekt 4",
      image: "jimmy.png"
    }
  };

  const project = projectInfo[projektTitel.toLowerCase()] || projectInfo['default']; // 'default' kann durch den Titel eines Standardprojekts ersetzt werden

  return (
    <div className="projekt-details-container">
      <h2>{project.title}</h2>
      {project.images.map((img, index) => (
        <img key={index} src={img} alt={`Bild ${index + 1} von ${project.title}`} style={{ maxWidth: '100%', height: 'auto' }} />
      ))}
      <p className="projekt-description">{project.description}</p>
    </div>
  );
}

export default ProjektDetails;