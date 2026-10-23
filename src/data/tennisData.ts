export interface Program {
  id: string;
  category: "kids" | "juniors" | "adults" | "camps" | "private";
  title: string;
  age: string;
  level: string;
  description: string;
  features: string[];
  groupSize: string;
  badge?: string;
  priceWinter?: string;
  priceSummer?: string;
}

export interface Location {
  id: string;
  name: string;
  badge: string;
  badgeColor: string;
  address: string;
  city: string;
  courts: string;
  indoor: string;
  hours: string;
  description: string;
  contactEmail: string;
  contactPhone: string;
  highlights: string[];
}

export interface Announcement {
  id: string;
  title: string;
  tag: string;
  date: string;
  description: string;
  image: string;
  ctaText: string;
  badge: string;
}

export interface CoachCredential {
  title: string;
  issuer: string;
  description: string;
  highlight?: boolean;
}

export interface Achievement {
  player: string;
  title: string;
  competition: string;
  details: string;
}

export interface Partner {
  id: string;
  name: string;
  role: string;
  description: string;
  logo: string;
  category: "equipment" | "sponsor" | "academy" | "club";
  url?: string;
}

export const TENNIS_DATA = {
  general: {
    schoolName: "Tennisschule Amir",
    legalName: "Tennisschule Amir Reza",
    owner: "Amir Reza",
    phone: "0162 - 420 76 61",
    email: "info@ts-amir.de",
    clubEmail: "tennis@sg-weiterstadt.de",
    address: "Gerlachshöhe 28a, 64367 Mühltal",
    taxNumber: "0786032189",
    mainLocation: "SG Weiterstadt Tennis",
    social: {
      instagram: "https://www.instagram.com/tennisschuleamir/",
      facebook: "https://www.facebook.com/amiracademy/?locale=de_DE",
    },
    tagline: "LEIDENSCHAFT · PRÄZISION · ERFOLG",
    heroHeading: "Tennistraining, das dein Spiel auf das nächste Level hebt.",
    heroSubheading:
      "ATP A-Level zertifiziertes Training unter Leitung von Davis-Cup-Spieler Amir Reza und seinem 10-köpfigen Trainerteam. Vom ersten Schlag der Ballschule bis zur Turnierreife – mit Leidenschaft, Spaß und modernster Methodik.",
  },
  coach: {
    name: "Amir Reza",
    role: "Cheftrainer & Akademieleiter",
    bio: "Amir kann als ehemaliger Weltranglistenspieler und Davis-Cup-Spieler auf hochkarätige Profierfahrung zurückblicken. Er trat auf Challenger-Ebene gegen Top-Stars wie Thomas Johansson (ATP 7), Andrej Pavel (ATP 13), Hernan Gumy (ATP 39) und Sjeng Schalken (ATP 11) an. Heute verbindet er seine internationale Turniererfahrung mit modernster Trainingslehre und ist offizieller Talent Scout der Rafa Nadal Academy.",
    quote: "Ohne Spaß am Sport bleibt jede Motivation auf der Strecke. Unser Anspruch ist es, jeden Spieler individuell auf sein persönliches Bestniveau zu bringen – technisch sauber, mental stark und mit Freude.",
    credentials: [
      {
        title: "GPTCA / ATP A-Level Lizenz",
        issuer: "ATP & Global Professional Tennis Coach Association",
        description: "Höchste weltweite Zertifizierung, ausgebildet u.a. durch Alberto Castellani und Wolfgang Thiem.",
        highlight: true,
      },
      {
        title: "Davis Cup Nationalspieler",
        issuer: "International Tennis Federation",
        description: "Ehemaliges Nationalmannschaftsmitglied im Davis Cup und Weltranglistenspieler.",
        highlight: true,
      },
      {
        title: "Offizieller Talent Scout",
        issuer: "Rafa Nadal Academy Mallorca",
        description: "Scouting und direkte Förderung von Nachwuchstalenten für internationale Spitzenakademien.",
        highlight: true,
      },
      {
        title: "USTA A-Lizenz & Diplom-Trainer",
        issuer: "United States Tennis Association",
        description: "Zertifizierter Master Professional der amerikanischen Trainerausbildung.",
      },
      {
        title: "DTB Lizenztrainer / Leistungssport",
        issuer: "Deutscher Tennis Bund & HTV",
        description: "Offizielle DTB-Trainerlizenz für Leistungs- und Breitensportförderung.",
      },
      {
        title: "Offizieller Yonex Partner",
        issuer: "Yonex Tennis Germany",
        description: "Ausstattungspartner, Testschläger-Stützpunkt und professioneller Besaitungsservice.",
      },
    ],
    studentSuccesses: [
      {
        player: "Sam Pazoki",
        title: "1. Platz ITF Kish & Junior Davis Cup",
        competition: "ITF World Tennis Tour Juniors",
        details: "Sieger der Qualifikation und Repräsentant im Junior Davis Cup Asia/Oceania.",
      },
      {
        player: "Patrice Flügge",
        title: "3. Platz Bezirksmeisterschaften & 2. Platz DTB-Turnier",
        competition: "U13 DTB-Ranglistenturnier Schriesheim",
        details: "Hervorragende Podiumsplatzierungen auf Landesebene.",
      },
      {
        player: "David Medic",
        title: "Kreispokalsieger & 3. Platz Bezirksmeisterschaften",
        competition: "U14 Kreismeisterschaften",
        details: "Mehrfacher Titelträger aus der Talentschmiede der Tennisschule Amir.",
      },
      {
        player: "Stella Schweizer",
        title: "Merck Cup Pokalsiegerin U12",
        competition: "Darmstadt Merck-Turnier",
        details: "Bereits nach nur 12 Monaten Trainingsbeginn im Halbfinale und Pokalsieg.",
      },
    ],
  },
  locations: [
    {
      id: "weiterstadt",
      name: "SG Weiterstadt Tennis",
      badge: "Hauptstandort & Leistungszentrum",
      badgeColor: "bg-lime-400 text-slate-900",
      address: "Am Aulberg 2",
      city: "64331 Weiterstadt",
      courts: "12 Sandplätze (Außenanlage)",
      indoor: "Moderne Tennishalle (Ganzjahresbetrieb)",
      hours: "Mo–So: 08:00 – 21:00 Uhr",
      description:
        "Seit der Wintersaison 2025/26 ist die Tennisschule Amir offizieller Trainingspartner der SG Weiterstadt. Hier bieten wir ganzjähriges Training für alle Spielstärken, Schnupperkurse und Camps.",
      contactEmail: "tennis@sg-weiterstadt.de",
      contactPhone: "0162 - 420 76 61",
      highlights: [
        "Beheizte Tennishalle für den Winter",
        "Gepflegte Außen-Sandplätze im Sommer",
        "Clubhaus & Gastronomie",
        "Kostenlose Parkplätze direkt vor Ort",
      ],
    },
  ],
  programs: [
    {
      id: "kids",
      category: "kids",
      title: "Kids Ballschule & Schnupper-Tennis",
      age: "5 – 8 Jahre",
      level: "Einsteiger & Anfänger",
      description:
        "Spielerischer Einstieg nach modernem Play & Stay Konzept mit druckreduzierten Methodikbällen (Red & Orange Ball). Förderung von Motorik, Hand-Auge-Koordination und purem Spaß am Spiel.",
      features: [
        "Play & Stay Methodikbälle & kindgerechte Schläger",
        "Koordination, Wendigkeit und Reaktionsspiele",
        "Feste 4er-Gruppen für maximale Betreuung",
        "Leihschläger für Schnupperkinder kostenfrei",
      ],
      groupSize: "Max. 4 Kinder (ab 5 Kindern 2 Trainer)",
      badge: "Empfohlen für Minis",
      priceWinter: "295 €",
      priceSummer: "150 €",
    },
    {
      id: "juniors",
      category: "juniors",
      title: "Jugendförderung & Nachwuchstraining",
      age: "9 – 17 Jahre",
      level: "Anfänger bis Fortgeschrittene",
      description:
        "Systematischer Aufbau aller Grund- und Spezialschläge (Topspin Vorhand, slice/zweihändige Rückhand, Aufschlag und Volley). Taktische Grundlagen für Medenspiele und Schulturniere.",
      features: [
        "Technikschulung nach Rafa Nadal Academy Standards",
        "Taktischer Spielaufbau & Matchsituationen",
        "Vorbereitung auf Medenrunde und Turniere",
        "Gezieltes Konditions- und Schnelligkeitstraining",
      ],
      groupSize: "Max. 4 Spieler pro Court",
      badge: "Bestseller",
      priceWinter: "395 €",
      priceSummer: "220 €",
    },
    {
      id: "adults",
      category: "adults",
      title: "Erwachsenentraining (After Work & Meden)",
      age: "Ab 18 Jahre",
      level: "Anfänger, Wiedereinsteiger & Mannschaftsspieler",
      description:
        "Ob Sie als Neuling die Faszination Tennis entdecken oder als erfahrener Mannschaftsspieler Ihre LK verbessern wollen: Individuelles Coaching abgestimmt auf Ihre Spielziele.",
      features: [
        "Flexible Abendkurse & Wochenend-Einheiten",
        "Schlagrhythmus, Beinarbeit und Stabilität",
        "Doppel- und Einzeltaktik für Wettkämpfe",
        "Ausgleich zum Alltag mit tollem Teamspirit",
      ],
      groupSize: "Max. 4 Spieler pro Gruppe",
      priceWinter: "415 €",
      priceSummer: "250 €",
    },
    {
      id: "private",
      category: "private",
      title: "Individuelles Privattraining & 10er-Karten",
      age: "Alle Altersklassen",
      level: "Individuell nach Wunsch",
      description:
        "Exklusives 1-zu-1 oder 1-zu-2 Coaching bei Cheftrainer Amir Reza und seinem qualifizierten Trainerteam. Tiefgehende Videoanalyse, biomechanische Schlagoptimierung und individuelles Match-Coaching.",
      features: [
        "100% maßgeschneiderter Trainingsplan",
        "Flexible Terminabsprache nach Ihrem Kalender",
        "Optionale 10er-Karte mit Preisvorteil",
        "Bevorzugte Hallen- und Court-Reservierung",
      ],
      groupSize: "1 bis 2 Personen",
      badge: "Höchste Intensität",
      priceWinter: "550 € (10er-Karte)",
      priceSummer: "550 € (10er-Karte)",
    },
    {
      id: "camps",
      category: "camps",
      title: "Intensiv-Feriencamps (Ostern, Sommer, Herbst & Winter)",
      age: "6 – 16 Jahre & Erwachsene",
      level: "Alle Spielstärken",
      description:
        "Unsere legendären Feriencamps mit über 100 Teilnehmern pro Saison! Mehrere Tage intensives Training, Matchpraxis, Abschlussturnier mit Pokalen und gemeinsame Mittagspausen.",
      features: [
        "4 bis 5 Tage Vollzeit-Tennispower",
        "Inklusive warmem Mittagessen & Snacks",
        "Abschlussturnier mit Medaillen & Preisen",
        "Perfekt für enorme Sprünge in kurzer Zeit",
      ],
      groupSize: "Kleingruppen nach Alter & Spielstärke",
      badge: "Jetzt anmelden",
      priceWinter: "Ab 180 €",
      priceSummer: "Ab 190 €",
    },
  ],
  pricingTable: {
    winter: [
      {
        title: "Kids (5 – 8 Jahre)",
        price: "295",
        period: "Saison Wintersaison",
        features: [
          "Feste 4er-Gruppe",
          "Ab 5 Kids: 2 Trainer parallel",
          "Inklusive vollständiger Hallengebühr",
          "Inklusive Methodikbälle & Leihschläger",
          "Ort: SG Weiterstadt Tennishalle",
        ],
        popular: false,
      },
      {
        title: "Jugendtraining",
        price: "395",
        period: "Saison Wintersaison",
        features: [
          "Feste 4er-Gruppe mit LK-Homogenität",
          "Ab 5 Spielern: 2 Trainer auf 2 Plätzen",
          "Inklusive aller Hallenkosten & Lichtgeld",
          "Technik-, Taktik- & Athletikanteil",
          "Ort: SG Weiterstadt Tennishalle",
        ],
        popular: true,
      },
      {
        title: "Erwachsenentraining",
        price: "415",
        period: "Saison Wintersaison",
        features: [
          "Feste 4er-Gruppe",
          "After-Work & Vormittagszeiten wählbar",
          "Inklusive vollständiger Hallengebühr",
          "Match- & Doppeltaktik inklusive",
          "Ort: SG Weiterstadt Tennishalle",
        ],
        popular: false,
      },
    ],
    summer: [
      {
        title: "Kids (5 – 8 Jahre)",
        price: "150",
        period: "Saison Sommersaison",
        features: [
          "Feste 4er-Gruppe",
          "Ab 5 Kids: 2 Trainer",
          "Auf gepflegten Sandplätzen",
          "Schlechtwetter-Hallenoption falls nötig",
          "Ort: SG Weiterstadt Tennis",
        ],
        popular: false,
      },
      {
        title: "Jugendtraining",
        price: "220",
        period: "Saison Sommersaison",
        features: [
          "Feste 4er-Gruppe",
          "Matchpraxis für Medenspiele",
          "Inklusive Turnierbetreuung",
          "Schlechtwetter-Garantie",
          "Ort: SG Weiterstadt Tennis",
        ],
        popular: true,
      },
      {
        title: "Erwachsenentraining",
        price: "250",
        period: "Saison Sommersaison",
        features: [
          "Feste 4er-Gruppe",
          "After-Work Gruppentraining",
          "Schlagrhythmus auf roter Asche",
          "Club-Atmosphäre & Geselligkeit",
          "Ort: SG Weiterstadt Tennis",
        ],
        popular: false,
      },
    ],
    packages: [
      {
        title: "Privattraining 10er-Karte",
        price: "550",
        period: "10 Trainerstunden à 60 Min.",
        features: [
          "1-zu-1 Intensivcoaching bei Amir Reza & Trainerteam",
          "Freie Trainer- & Terminauswahl",
          "Bevorzugte Hallen- & Platzreservierung",
          "Detaillierte Video- & Schlaganalyse",
          "Gültig über 12 Monate",
        ],
        popular: true,
      },
      {
        title: "Kostenloses Schnuppertraining",
        price: "0",
        period: "Einmalige 45-Minuten Session",
        features: [
          "Kostenlose Einstufung Ihrer Spielstärke",
          "Training bei Cheftrainer Amir & seinem Trainerteam",
          "Schläger- und Ballmaterial gratis gestellt",
          "Unverbindliche Beratung für Folgekurse",
          "Für Kids, Jugendliche und Erwachsene",
        ],
        popular: false,
      },
    ],
  },
  announcements: [
    {
      id: "weiterstadt-winter",
      title: "Wintersaison bei der SG Weiterstadt",
      tag: "Offizielle Kooperation",
      date: "Jetzt anmelden",
      description:
        "Die Tennisschule Amir übernimmt das Vereinstraining der SG Weiterstadt. Hallenplätze, Schnupperstunden und Gruppenkurse jetzt sichern!",
      image: "/images/announcement-winter.jpg",
      ctaText: "Zur Anmeldung",
      badge: "Neu",
    },
    {
      id: "free-trial",
      title: "Kostenlose Schnupperstunde",
      tag: "Für Neukunden",
      date: "Ganzjährig",
      description:
        "Möchten Sie oder Ihr Kind Tennis ausprobieren? Vereinbaren Sie noch heute ein kostenloses Schnuppertraining inklusive Leihausrüstung.",
      image: "/images/announcement-trial.jpg",
      ctaText: "Termin buchen",
      badge: "Kostenlos",
    },
    {
      id: "summer-camp",
      title: "Oster-, Sommer-, Herbst- & Winter-Camps 2026",
      tag: "Ferienspaß",
      date: "Ostern, Sommer, Herbst & Winter",
      description:
        "Intensiv-Tenniscamps für Kids & Jugendliche zu allen hessischen Ferienzeiten. Täglich 4 Stunden Tennis, Athletik, Vollverpflegung und großes Abschlussturnier.",
      image: "/images/announcement-camps.jpg",
      ctaText: "Camp-Plätze prüfen",
      badge: "Beliebt",
    },
    {
      id: "yonex-service",
      title: "Yonex Testcenter & Bespannung",
      tag: "Ausrüstung",
      date: "24h Express",
      description:
        "Neueste Yonex Rackets direkt auf dem Platz testen. Professioneller 24h-Bespannungsservice mit Premium-Saiten für perfekten Touch.",
      image: "/images/announcement-yonex.jpg",
      ctaText: "Service anfragen",
      badge: "Yonex",
    },
  ],
  services: [
    {
      title: "Topspin & moderne Schlagtechnik",
      description:
        "Modernste Schwungmechanik nach Vorbild von Rafael Nadal. Mehr Spin, enorme Flugbahnkontrolle und maximale Schlagsicherheit.",
    },
    {
      title: "Konditions- & Beinarbeitstraining",
      description:
        "Der beste Schlag nutzt nichts bei müden Beinen. Gezielte Footwork-Drills für schnellere Platzabdeckung und Richtungswechsel.",
    },
    {
      title: "Mentaltraining & Matchhärte",
      description:
        "Viele Matches werden im Kopf entschieden. Amir schult Ruhe bei Breakbällen, Selbstvertrauen und taktische Konsequenz.",
    },
    {
      title: "24h Schlägerbespannung",
      description:
        "Professionelle Besaitung nach Maß. Wir stimmen Kilogrammzahl, Saitenstruktur und Dämpfung perfekt auf Ihren Spielstil ab.",
    },
  ],
  partners: [
    {
      id: "yonex",
      name: "Yonex",
      role: "Offizieller Racket- & Equipment-Partner",
      description: "Schläger, Saiten & Testcenter",
      logo: "/images/partners/yonex.jpg",
      category: "equipment",
      url: "https://www.yonex.de",
    },
    {
      id: "merck",
      name: "Merck",
      role: "Regionaler Partner Darmstadt",
      description: "Wissenschafts- & Technologiekonzern",
      logo: "/images/partners/merck.jpg",
      category: "sponsor",
      url: "https://www.merckgroup.com",
    },
    {
      id: "henschel",
      name: "Henschel Darmstadt",
      role: "Lifestyle- & Vorteilspartner",
      description: "Modehaus am Marktplatz Darmstadt",
      logo: "/images/partners/henschel.jpg",
      category: "sponsor",
      url: "https://henschel-darmstadt.de",
    },
    {
      id: "adler",
      name: "Adler",
      role: "Regionaler Förderer",
      description: "Traditionspartner der Tennisschule",
      logo: "/images/partners/adler.svg",
      category: "sponsor",
    },
    {
      id: "rafa-nadal-academy",
      name: "Rafa Nadal Academy",
      role: "Offizieller Partner & Talent Scout",
      description: "Mallorca Talentförderung",
      logo: "/images/rafa-nadal-academy-logo.png",
      category: "academy",
      url: "https://www.rafanadalacademy.com",
    },
    {
      id: "sg-weiterstadt",
      name: "SG Weiterstadt Tennis",
      role: "Vereins- & Anlagenpartner",
      description: "Trainingsstützpunkt & Hallenplätze",
      logo: "/images/partners/sg-weiterstadt.svg",
      category: "club",
      url: "#locations",
    },
  ],
};
