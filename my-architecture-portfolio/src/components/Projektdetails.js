import React from 'react';
import { useParams } from 'react-router-dom';
import './Projektdetails.css';

function ProjektDetails() {
  const { projektTitel } = useParams();

  const projectInfo = {
    hivegarden: {
      title: "Hive Garden",
      description: [
        "In Cottbus-Schmellwitz, gelegen im nördlichen Teil von Cottbus, prägte der intensive Rückbau von leerstehenden Plattenbauten das Viertel und schuf offene Baulücken sowie Brachflächen, die der Natur überlassen wurden. Durch die Anbindung an das Stadtzentrum von Cottbus mittels Tram, kleine Restaurants, eine Bar und Einkaufsmöglichkeiten für den täglichen Bedarf bietet Schmellwitz eine vielfältige Infrastruktur.",
        "Das Ziel des Projekts bestand darin, nicht nur die entstandenen Lücken zu schließen, sondern auch hochwertige Wohnräume zu schaffen, die die Lebensqualität der Bewohner verbessern. Dabei sollte ein Ort entstehen, der zum Verweilen und für verschiedene Aktivitäten genutzt werden kann. Die übliche Planung von Plattenbauten mit einem isolierten Hinterhof wurde umgekehrt, und die Schaffung von offenen Freiräumen sowie die Förderung sozialer Integration durch Gemeinschaftsflächen und öffentliche Plätze standen im Mittelpunkt der Projektziele.",
        "Die Umsetzung begann mit Umfragen unter den Bewohnern, um ihre Wünsche und Vorstellungen fürdas neu gestaltete Schmellwitz zu erfahren. Die Bewohner betonten ihre starke Gemeinschaft, was zu einem Konzept führte, das mit einem Bienenvolk verglichen wurde. Eine Verbindung von Norden nach Süden wurde geschaffen, mit einem Begegnungszentrum als Herzstück für bereits vorhandene soziale Einrichtungen.",
        "Im Bestand wurden Hinterhöfe geschlossen und kleinere, privatere Gärten hinzugefügt, wobei halböffentliche Flächen mit Spielplätzen und Gemeinschaftsgärten entstanden. Historische Pläne und das bestehende Straßennetz dienten als Referenz für die Planung neuer Gebäudestandorte, wobei die Verbindung in die östlich grünen Bereiche und den zukünftigen Ostsee als formleitend betrachtet wurden.",
        "Der nördliche Teil des Fokusgebiets wurde als Entwurfsgebiet definiert, mit einem durchquerbaren und erlebbaren Gartenweg als zentralem Element. Verschieden hohe Plattformen schufen eine multifunktionale Fläche für Spiele, Erholung, Aufführungen oder Märkte. Der Pfad wurde von den Fassaden weggerückt und höher gelegt, um den Bewohnern im Erdgeschoss mehr Privatsphäre zu bieten und barrierefreie Durchquerungsmöglichkeiten zu schaffen.",
        "Das gesamte Gebiet legte großen Wert auf Biodiversität und qualitativen Grünraum. Versiegelte Flächen sollten durch integrierte Beete ersetzt werden, die von Bewohnern und der Community bepflanzt und gepflegt werden konnten. Dieser ganzheitliche Ansatz zielte darauf ab, nicht nur bauliche Lücken zu schließen, sondern ein lebendiges, sozial integriertes Viertel mit einem facettenreichen Grünraum zu schaffen."
      ],

      images: [
        `${process.env.PUBLIC_URL}/hivegarden1.jpg`,
        `${process.env.PUBLIC_URL}/hivegarden2.jpg`,
        `${process.env.PUBLIC_URL}/hivegarden3.jpg`,
        `${process.env.PUBLIC_URL}/hivegarden4.jpg`,
        `${process.env.PUBLIC_URL}/hivegarden5.jpg`,
        `${process.env.PUBLIC_URL}/hivegarden6.jpg`
      ]
    },

    goldbeck: {
      title: "Village House Goldbeck",
      description: [
        "Im Fokus des Projekts stand die Entwicklung und Umsetzung von Wohn- und Freiraumprojekten in Ummeln, südwestlich von Bielefeld, durch das renommierte deutsche Unternehmen Goldbeck. Als Experte im gewerblichen und industriellen Immobilienbau konzentriert sich Goldbeck auf Architektur, Ingenieurwesen und Bauausführung, wobei ihre modulare Bauweise durch vorgefertigte Bauelemente und innovative Technologien bekannt ist.",
        "Das spezifische Vorhaben zielte darauf ab, in Ummeln Wohnraum für die Mitarbeiter von Goldbeck zu schaffen, einschließlich Tagesunterkünften. Gleichzeitig strebte man die Gestaltung offener Freiräume an, die für alle zugänglich sind und als Orte zum Spielen, Erholen und Leben dienen. Ein weiteres wichtiges Ziel war die Förderung sozialer Integration durch die Schaffung von Gemeinschaftsflächen und öffentlichen Plätzen, die von den Mitarbeitern für Freizeitaktivitäten oder Pausen genutzt werden können.",
        "Die Lage in Ummeln, umgeben von viel Grün und gewerblichen Gebäuden, wurde mittels digitaler Methoden analysiert, um den Bedarf und die optimale Anordnung der Gebäude zu ermitteln. Dabei wurde besonderer Wert auf die Verbindung zwischen dem Grün und dem geplanten Gebiet gelegt. Durch geschicktes Verschieben und Anordnen der Gebäudeteile entstanden zahlreiche Grünflächen, die nicht nur für Spielplätze, sondern auch für Treffpunkte und Urban Gardening genutzt werden können.",
        "Die Umsetzung integrierte digitale Analysemethoden, die die typischen Bauweisen von Goldbeck in drei verschiedenen Typen wiedergaben und mit dem eigenen Entwurf verglichen wurden. Die modulare Bauweise von Goldbeck wurde aufgegriffen und weiterentwickelt, wobei kreisförmige Module geschaffen wurden. Der Flur, der zuvor nur zum Durchqueren genutzt wurde, wurde zu einem zentralen Aufenthaltsort umgestaltet. Die Wände der Module integrieren Einrichtungsgegenstände, um eine effiziente und ansprechende Nutzung des Wohnraums zu gewährleisten. Dieser innovative Ansatz zielt darauf ab, nicht nur den Wohnraum zu optimieren, sondern auch soziale Interaktion und Nachhaltigkeit in den Mittelpunkt des Bauprojekts zu stellen."
      ],

      images: [
        `${process.env.PUBLIC_URL}/goldbeck1.jpg`,
        `${process.env.PUBLIC_URL}/goldbeck2.jpg`,
        `${process.env.PUBLIC_URL}/goldbeck3.jpg`,
        `${process.env.PUBLIC_URL}/goldbeck4.jpg`,
        `${process.env.PUBLIC_URL}/goldbeck5.jpg`,
        `${process.env.PUBLIC_URL}/goldbeck6.jpg`,
        `${process.env.PUBLIC_URL}/goldbeck7.jpg`,
        `${process.env.PUBLIC_URL}/goldbeck8.jpg`,
        `${process.env.PUBLIC_URL}/goldbeck9.jpg`
      ]
    },

    cotti: {
      title: "Cotti Intervention",
      description: [
        "Der Fokus dieses Entwurfes war einen Ort in Cottbus zu finden, welches durch Interventionen ertüchtigt werden kann. In einer 3er- Gruppe sind wir durch die Stadt gelaufen und haben den Platz vor dem Wohnheim Prima Wohnen entdeckt. Das Ensemble besteht aus dem Wohnheim und einem Anbau. Im EG sind die Büros und die Verwaltung des Wohnheimes. Im UG ist ein Eventraum, wo regelmäßig Veranstaltungen stattfinden.",
        "Beim Anblicken dieses Ortes erkennt man sofort, dass es Unstimmigkeiten gibt. Der Eingang des Wohnheimes führt vier Stufen runter und dann sechs Stufen nach oben. Neben den Stufen und um den Vorplatz des Eventraumes herum, wurde ein Zaun errichtet. Um zum Eventraum zu gelangen, muss man um den Platz herumlaufen und den Haupteingang der Umzäunung nutzen. Gleichzeitig gibt es bei den Stufen beim Wohnheim nochmals drei Stufen, die runter zum Eventraumplatz führen. Neben dem Haupteingang des Eventraumes wurde nochmals eine Fläche umzäunt, welches kein Nutzen hat. Auf dem Platz steht eine Litfaßsäule.",
        "Die erste Intervention ist es den Zaun zu demontieren. Das Abgebaute Material soll wiederverwendet werden als Brücke für das Studentenwohnheim, sodass ein barrierefreier Zugang möglich ist, als neue Überdachung für den Eventraum und Sitz- und Gestaltungselemente für den unbenutzten Platz. Venedig 1"
      ],
      images: [
        `${process.env.PUBLIC_URL}/cotti1.jpg`,
        `${process.env.PUBLIC_URL}/cotti2.jpg`
      ]
    },

    platzderzeit: {
      title: "Platz der Zeit",
      description: [
        "Der Cottbusser Platz an der Sonnenuhr weist ein komplexes baukulturelles Erbe auf. Neben der gründerzeitlichen Randbebauung, findet sich die Klosterkirche von 1300 als städtebauliche Markante. Die zahlreichen Kriegslücken der dreiseitig geschlossenen Bebauung wurden in der DDR-Zeit durch Modulbauten geschlossen, die Elemente der ursprünglichen Geschossbauten adaptieren. Auf dem Platz selbst findet sich die Skulptur “Der Wassermann und seine Töchter”, sowie eine als Pflanzung angelegte Sonnenuhr, deren Zeiger von einer zerstörten Fassade stammt.",
        "Auf historischen Bildern sieht man einen offenen, einladenden Platz, mit der Klosterkirche deutlich sichtbar im Hintergrund. Mit der Zeit wurden neue Hecken gepflanzt und nördlich sowie westlich Parkplätze errichtet. Dadurch sind sowohl die Grünfläche in der Mitte, als auch die Fassaden visuell abgeschnitten. Unser Ziel ist es den offenen, klaren Raum wieder herzustellen und einen diversen Ort mit Spiel und Erholung zu erstellen.",
        "Dazu werden mehrere Bereiche mit jeweils eigenem Charakter ausgebildet, um vielfältige Nutzer:innengruppen aufzunehmen. Strukturiert durch einen diagonal verlaufenden Weg und ein Wasserelement entstehen ein kleiner Birkenhain, ein gepflasterter Stadtplatz und eine Spielwiese. Zusätzlich Ankerpunkte sind die beiden Hauptelemente des Bestandes, die Sonnenuhr und die Skulptur, ergänzt um eine Gruppe von Spielsteinen.",
        "Im Zentrum steht die Sonnenuhr, die von der Berliner Straße auf die Platzmitte verlegt wird. Die beliebte Uhr trägt so zur Nutzung des Platzes bei, indem sie Besucher:innen anlockt. Zudem erhält sie mehr Raum zu wirken und wird nicht mehr durch die umliegende Bebauung verschattet. Eine große geschwungene Bank an der Sonnenuhr lädt zum Verweilen ein.",
        "Die Hauptverbindung über den Platz führt von der Berliner Straße vorbei an der Sonnenuhr zur gegenüberliegenden Platzecke vor der Klosterkirche. Diese Verbindung existiert bereits im Bestand, allerdings wird der Weg selbst in seinem Verlauf angepasst, um den Raum stärker für Passant:innen auf der Berliner Str. zu öffnen. Dieser Weg wird gepflastert und die zweite, im Bestand angelegte Diagonale entfernt, um Fahrradfahrer:innen an den Platzrändern entlang zu leiten und die Hauptfläche des Platzes zu beruhigen. Verstärkt wird dieser Effekt durch eine leichte Erhöhung, bepflanzt mit einem Birkenhain auf der neu gewonnen Fläche der ehemaligen Parkplätze. Topographie und Bäume schaffen eine optische und akustische Trennung zwischen den umliegenden Straßen und dem Platz. Sie bieten eine deutliche Abkühlung im Sommer und speichern Regenwasser, außerdem bildet sich ein, für die Innenstadtlage, eher umgewöhnlicher Raum, mit vielerlei Möglichkeiten der Aneignung. Besonders Kinder und Teenager können sich zu einem geringen Grad Blicken entziehen, ohne das gleichzeitig ein Angstraum ausgebildet wird. Das lineare Wasserbecken teilt den Raum in den Park und den Platz. Letzterer greift die bestehende Wendenstraße auf und erweitert diese, um den unauffälligen Haupteingang der Klosterkirche zu betonen. Gleichzeitig entsteht ein städtischer Raum, der mit Möbeln versehen vielfältige Nutzungen ermöglicht und auch von den anliegenden Gastronomiebetrieben genutzt werden kann. Im Bereich des Platzes wir die Klosterstraße durch wechselnden Pflasterbelag abgebildet und mit Bremsschwellen entschleunigt. Dies ermöglicht der Kirchengemeinde den Raum beiderseits der Straße zu nutzen, um auch sozial stärker präsent zu sein.",
        "Die Laternenreihe gibt eine subtile Struktur in die Bewegungsfläche von der Klosterstraße zur Berliner Straße, entlang der Fassaden und den Platzbereich zwischen Wasserspiel und Leuchten vor. Die „Wassermann- Skulptur“ wird in ein kleines Wasserbecken verlegt, worin er nochmals sichtbarer wird. Er ist umgeben von plätscherndem Wasser.",
        "Am südlichen Platzrand befindet sich schließlich eine kleine Spielfläche aus Hügeln, welches Besucher:innen animieren soll eigene Spielweisen zu entwickeln oder die eine Sitzgelegenheit zu bieten. Zusätzlich werden hier weitere Sitzgelegenheiten für Passant:innen angeboten und die Beleuchtung verbessert. Bepflanzungen auf der Hauptfläche des Platzes schaffen wechselnde Blickbeziehungen, mal zwischen den historischen Fassaden, mal zwischen den Gebäuden der Nachkriegszeit. Diese werden durch den Einsatz von Betonplattenpflaster in den Boden eingeschrieben und vermittelt. Einige der Platten werden entnommen, sodass Bepflanzung möglich ist. Hier sollen Wildpflanzen und Pflanzen für Bienen gepflanzt werden, um dem Bild der bunten, blumigen Sonnenuhr gerecht zu werden und dieses über den ganzen Platz weiterzuführen."
      ],
      images: [
        `${process.env.PUBLIC_URL}/platzderzeit1.jpg`,
        `${process.env.PUBLIC_URL}/platzderzeit2.jpg`,
        `${process.env.PUBLIC_URL}/platzderzeit3.jpg`,
        `${process.env.PUBLIC_URL}/platzderzeit4.jpg`,
        `${process.env.PUBLIC_URL}/platzderzeit5.jpg`,
        `${process.env.PUBLIC_URL}/platzderzeit6.jpg`
      ]
    },

    venedig: {
      title: "Venedig",
      description: {
        venedig1: [
          "Dieser Entwurf sollte die Vorbereitung für die Zusammenarbeit mit dem deutschen Pavillon in Venedig sein. Die Studierenden wurden in Gruppen unterteilt mit verschiedenen Themen. Mein Entwurf sollte eine Bank sein.",
          "Es handelt sich hier um eine Grünfläche in Santa Marta, die vermutlich als Restfläche neben dem neu errichtete Studentenwohnheim entstand. Dieser ist mit einer hohenWand getrennt. Auf der gegenüberliegenden Seite der Wand befinden sich Wohngebäude. Auf der kleinen Grünfläche befindet sich eine Betonfläche. Zuvor war da ein Spielplatz, welches abmontiert wurde. Anwohner erzählten uns, dass diese Restfläche sehr wichtig für sie sei, da sie ich mit der Community hier treffen und ihre Kinder auf der Betonfläche spielen lassen.",
          "Der Ansatz war es eine größere Plattform zu haben, sodass die Bewohner diesen als Tribüne und als Bank mitbenutzen können. Die verschiedenen Materialien stammen aus verschiedenen Pavillons. Dabei sollte die bereits vorhandene Funktion der Betonfläche nicht eingeschränkt werden und wird außerhalb dieser plaziert."
        ],
       venedig2: [
        "Venedig 2 ist der Entwurf der vor Ort entstanden ist. Diesmal wurden wir in Orte eingeteilt. Meine Gruppe bekam die Betonflächengestaltung. Daher dass wir uns in Italien befanden, haben wir uns von dem italienischen Architekten Gio Ponti inspirieren lassen. Wir haben eines seiner Fliesenmuster vereinfacht und ihn auf die Betonfläche aufgemalt. Durch willkürliches drehen der Dreiecke, entstand ein Muster.",
        "Im nächsten Schritt sollte das Muster mit anderen Elementen wiederholt werden und weiterentwickelt werden."
      ]
    },
      images: [
        `${process.env.PUBLIC_URL}/venedig1.jpg`,
        `${process.env.PUBLIC_URL}/venedig2.jpg`
      ]
    },

  innovationszentrum: {
    title: "Innovationszentrum Cottbus",
    description: [
        "Das Innovationszentrum besteht aus drei Volumen, die auseinander gezogen, geschoben und erhöht worden sind. Unsere Hauptkörper sind die Halle und der Bürokomplex. Als Zwischengang bzw. Fuge dient der vergrößerte Flur in der Mitte. Das Büro und der Zwischengang sind höher, als die Halle. Durch die Fuge gibt es eine permanente sicht in die Halle aber auch in die Büroräume oder den Ausstellungsbereich. Somit haben wir ein Zusammenspiel zwischen der Verwaltung und der Produktion.",
        "Durch das rein versetzten der Fuge, wird der eingangsbereich als eine große Geste empfungen. Beim Eintreten bei den Volumen, wird man langsam in das Gebäude eingeführt und umschlossen. Im Gebäude gelangt man dann in alle Räumlichkeiten durch den Flur. Dieser muss benutzt werden um auf andere Etagen zu gelangen und auch in die Halle.",
        "Alle drei Teile haben verschiedene Fassaden, jedoch mit Elementen des anderen Volumens. Während die Halle undurchsichtig gestaltet worden ist, ist der Flur oen und mit Glas verkleidet. Das Bürogebäude hat von beiden Fassaden Elemente angebracht. Hier gibt es eine Abwechslung mit offenen und geschlossenen Elementen. Die offenen Elemente sind Glas und die geschlossenen sind milchiges Polycarbonat. Durch das Polycarbonat an der Fassade der Halle, ist sie permanent mit natürlichem Licht versorgt. Nachts hingegen leuchtet die Halle und teile der Bürofassade, wie eine Laterne."
      ],
    images: [
      `${process.env.PUBLIC_URL}/innovationszentrum1.jpg`,
      `${process.env.PUBLIC_URL}/innovationszentrum2.jpg`,
      `${process.env.PUBLIC_URL}/innovationszentrum3.png`,
      `${process.env.PUBLIC_URL}/innovationszentrum4.png`,
      `${process.env.PUBLIC_URL}/innovationszentrum5.jpg`,
      `${process.env.PUBLIC_URL}/innovationszentrum6.png`
    ]
  },

  hang: {
    title: "Ausstellung am Hang",
    description: [
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
      "Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
      "Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet."
      ],
    images: [
      `${process.env.PUBLIC_URL}/hang1.png`,
      `${process.env.PUBLIC_URL}/hang2.png`,
      `${process.env.PUBLIC_URL}/hang3.png`,
      `${process.env.PUBLIC_URL}/hang4.png`,
      `${process.env.PUBLIC_URL}/hang5.png`,
      `${process.env.PUBLIC_URL}/hang6.png`,
      `${process.env.PUBLIC_URL}/hang7.png`

    ]
  },

  busbahnhof: {
    title: "Busbahnhof Cottbus Ostsee",
    description: [
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
      "Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
      "Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet."
      ],
    images: [
      `${process.env.PUBLIC_URL}/busbahnhof1.jpg`,
      `${process.env.PUBLIC_URL}/busbahnhof2.png`,
      `${process.env.PUBLIC_URL}/busbahnhof3.png`,
      `${process.env.PUBLIC_URL}/busbahnhof4.png`,
      `${process.env.PUBLIC_URL}/busbahnhof5.png`,
      `${process.env.PUBLIC_URL}/busbahnhof6.png`
    ]
  },

  skandale: {
    title: "Diskothek Skandale",
    description: [
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
      "Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
      "Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet."
      ],
    images: [
      `${process.env.PUBLIC_URL}/skandale1.jpg`,
      `${process.env.PUBLIC_URL}/skandale2.png`,
      `${process.env.PUBLIC_URL}/skandale3.png`
    ]
  },

  qasrnaous: {
    title: "Nachbau vom Tempel Qasr Naous",
    description: [
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
      "Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
      "Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet."
      ],
    images: [
      `${process.env.PUBLIC_URL}/qasrnaous1.png`,
      `${process.env.PUBLIC_URL}/qasrnaous2.png`,
      `${process.env.PUBLIC_URL}/qasrnaous3.png`,
      `${process.env.PUBLIC_URL}/qasrnaous4.png`
    ]
  },

  unsichtbarestadt: {
    title: "Nachbau vom Tempel Qasr Naous",
    description: [
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
      "Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
      "Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet."
      ],
    images: [`${process.env.PUBLIC_URL}/unsichtbarestadt1.jpg`
    ]
    }
};

  
  const project = projectInfo[projektTitel.toLowerCase()] || projectInfo['default'];

  const renderDescription = (description) => {
    if (Array.isArray(description)) {
      return description.map((paragraph, index) => <p key={index}>{paragraph}</p>);
    } else if (typeof description === 'object') {
      return Object.entries(description).map(([key, value]) => (
        <div key={key}>
          <h3>{key.replace(/_/g, ' ')}</h3>
          {value.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
        </div>
      ));
    }
  };

  return (
    <div className="projekt-details-container">
      <h2>{project.title}</h2>
      <div className="projekt-header">
        {project.images && project.images[0] && (
          <img src={project.images[0]} alt={`Hauptbild von ${project.title}`} style={{ maxWidth: '100%', height: 'auto' }} />
        )}
        <div className="projekt-intro">
          {renderDescription(project.description)}
        </div>
      </div>
      {project.images && project.images.slice(1).map((img, index) => (
        <img key={index} src={img} alt={`Bild ${index + 2} von ${project.title}`} style={{ maxWidth: '100%', height: 'auto' }} />
      ))}
    </div>
  );
}

export default ProjektDetails;
