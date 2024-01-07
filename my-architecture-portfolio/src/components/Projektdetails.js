// ProjektDetails.js
import React from 'react';
import { useParams } from 'react-router-dom';
import './Projektdetails.css'; // Stellen Sie sicher, dass Sie eine entsprechende CSS-Datei erstellen

function ProjektDetails() {
  let { projektId } = useParams();

  // Hier ist ein Beispiel, wie Sie die Projektinformationen anzeigen könnten:
  const projectInfo = {
    1: {
      title: "Projekt 1",
      description: "Beschreibung für Projekt 1",
      image: "/beispiel1.jpg"
    },
    2: {
      title: "Rothaar-Piratenbande",
      description: "Die Rothaar-Piratenbande, geführt von Shanks, ist eine der mächtigsten Piratengruppen in 'One Piece'. Hier sind einige ihrer bemerkenswerten Mitglieder aufgelistet: ...",
      image: "/crew.jpg"
    },
    3: {
      title: "Projekt 3",
      description: "Beschreibung für Projekt 3",
      image: "/akro.jpg"
    },
    4: {
      title: "Projekt 4",
      description: "Beschreibung für Projekt 4",
      image: "/jimmy.png"
    }
  };

  const project = projectInfo[projektId] || projectInfo[1]; // Fallback auf Projekt 1, falls keine ID passt

  return (
    <div className="projekt-details-container">
      <h2>{project.title}</h2>
      <div className="projekt-image-container">
      <img src={process.env.PUBLIC_URL + project.image} alt={project.title} width="960" height="540" />
      </div>
      <p className="projekt-description">{project.description}</p>
      {/* Weitere Projektinformationen könnten hier hinzugefügt werden */}
    </div>
  );
}

export default ProjektDetails;
