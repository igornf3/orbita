export const SOLAR_DISTANCE_SCALE = 26;
export const STAR_DISTANCE_SCALE = 10;
export const GALAXY_DISTANCE_SCALE = 40;

export const objects = [
  {
    id: 'mercury', name: 'Mercury', type: 'planets', kind: 'ROCKY PLANET', system: 'SOLAR SYSTEM',
    texture: '2k_mercury', size: 0.55, position: [9.45, 0.42, 3.45], color: '#b9a89a', au: 0.387, phase: 0.35, periodDays: 87.969, rotationHours: 1407.6, axialTilt: 0.034, inclination: 7,
    description: 'The closest planet to the Sun and the smallest in the system. A world of ancient craters, extreme temperatures and short years.',
    stats: [['RADIUS', '2,439.7 km'], ['YEAR', '88 days'], ['DAY', '58.6 days'], ['TEMPERATURE', '−180…+430 °C']],
    distance: '57.9 million km from the Sun', fact: 'In a single Mercurian year the Sun manages to rise and set only about one and a half times.'
  },
  {
    id: 'venus', name: 'Venus', type: 'planets', kind: 'ROCKY PLANET', system: 'SOLAR SYSTEM',
    texture: '2k_venus_surface', size: 0.95, position: [18.07, -0.31, -5.19], color: '#dca56d', au: 0.723, phase: -0.28, periodDays: 224.701, rotationHours: -5832.5, axialTilt: 177.4, inclination: 3.39,
    description: 'A planet of dense clouds and unrelenting heat. Beneath its carbon dioxide atmosphere hide thousands of volcanoes and vast plains.',
    stats: [['RADIUS', '6,051.8 km'], ['YEAR', '224.7 days'], ['DAY', '243 days'], ['TEMPERATURE', '+464 °C']],
    distance: '108.2 million km from the Sun', fact: 'Venus rotates backwards: here the Sun rises in the west and sets in the east.'
  },
  {
    id: 'earth', name: 'Earth', type: 'planets', kind: 'TERRESTRIAL PLANET', system: 'SOLAR SYSTEM',
    texture: '2k_earth_daymap', size: 1.35, position: [26, 0, 0], color: '#6aaee8', au: 1, phase: 0, periodDays: 365.25, rotationHours: 23.934, axialTilt: 23.44, inclination: 0,
    description: 'Our home and the only known world with life. Liquid water, an oxygen atmosphere and a magnetic field created a unique oasis in space.',
    stats: [['RADIUS', '6,371 km'], ['YEAR', '365.25 days'], ['DAY', '23 h 56 min'], ['TEMPERATURE', 'average +15 °C']],
    distance: '149.6 million km from the Sun', fact: 'Earth is the densest planet in the Solar System. Over 70% of its surface is covered by water.'
  },
  {
    id: 'moon', name: 'Moon', type: 'planets', kind: 'NATURAL SATELLITE', system: 'EARTH SYSTEM',
    texture: '2k_moon', size: 0.38, position: [29.13, 0.36, 1.32], color: '#c9c9c9', orbitRadius: 3.4, phase: 0.4, periodDays: 27.3217,
    description: "Earth's loyal companion and the first celestial body visited by humans. Its gravity sets the rhythm of tides on our planet.",
    stats: [['RADIUS', '1,737.4 km'], ['ORBIT', '27.3 days'], ['DAY', '29.5 days'], ['TEMPERATURE', '−173…+127 °C']],
    distance: '384,400 km from Earth', fact: 'The Moon drifts about 3.8 centimetres away from Earth every year — the speed of growing fingernails.'
  },
  {
    id: 'mars', name: 'Mars', type: 'planets', kind: 'ROCKY PLANET', system: 'SOLAR SYSTEM',
    texture: '2k_mars', size: 0.78, position: [38.98, 0.23, 7.09], color: '#dc7757', au: 1.524, phase: 0.18, periodDays: 686.98, rotationHours: 24.623, axialTilt: 25.19, inclination: 1.85,
    description: 'The red planet, holding traces of ancient rivers and lakes. It hosts the tallest volcano and one of the largest canyons in the Solar System.',
    stats: [['RADIUS', '3,389.5 km'], ['YEAR', '687 days'], ['DAY', '24 h 37 min'], ['TEMPERATURE', 'average −63 °C']],
    distance: '227.9 million km from the Sun', fact: 'Olympus Mons on Mars rises almost 22 kilometres — about 2.5 times higher than Everest.'
  },
  {
    id: 'jupiter', name: 'Jupiter', type: 'planets', kind: 'GAS GIANT', system: 'SOLAR SYSTEM',
    texture: '2k_jupiter', size: 2.85, position: [134.3, -0.37, -16.19], color: '#e2b18d', au: 5.203, phase: -0.12, periodDays: 4332.59, rotationHours: 9.925, axialTilt: 3.13, inclination: 1.3,
    description: 'A giant of hydrogen and helium whose bands are the most powerful atmospheric currents. Its Great Red Spot has raged for centuries.',
    stats: [['RADIUS', '69,911 km'], ['YEAR', '11.86 years'], ['DAY', '9 h 56 min'], ['TEMPERATURE', 'average −110 °C']],
    distance: '778.5 million km from the Sun', fact: 'A day on Jupiter lasts less than ten hours — it is the fastest-rotating planet in the system.'
  },
  {
    id: 'saturn', name: 'Saturn', type: 'planets', kind: 'GAS GIANT', system: 'SOLAR SYSTEM',
    texture: '2k_saturn', size: 2.35, position: [247.17, 0.86, 19.82], color: '#e8c987', au: 9.537, phase: 0.08, periodDays: 10759.22, rotationHours: 10.656, axialTilt: 26.73, inclination: 2.49,
    description: 'The planet with a dazzling ring system of ice and rock. Thousands of thin rings form a complex, ever-changing mechanism.',
    stats: [['RADIUS', '58,232 km'], ['YEAR', '29.45 years'], ['DAY', '10 h 42 min'], ['TEMPERATURE', 'average −140 °C']],
    distance: '1.43 billion km from the Sun', fact: "Saturn's rings span hundreds of thousands of kilometres, yet in places they are only tens of metres thick."
  },
  {
    id: 'uranus', name: 'Uranus', type: 'planets', kind: 'ICE GIANT', system: 'SOLAR SYSTEM',
    texture: '2k_uranus', size: 1.45, position: [498.06, -0.4, -29.9], color: '#8dd8df', au: 19.191, phase: -0.06, periodDays: 30688.5, rotationHours: -17.24, axialTilt: 97.77, inclination: 0.77,
    description: 'A turquoise ice giant spinning nearly on its side. Methane in its atmosphere absorbs red light, giving the planet its cold hue.',
    stats: [['RADIUS', '25,362 km'], ['YEAR', '84 years'], ['DAY', '17 h 14 min'], ['TEMPERATURE', 'average −195 °C']],
    distance: '2.87 billion km from the Sun', fact: "Uranus's axis is tilted 98 degrees: each pole spends about 42 years in continuous light or darkness."
  },
  {
    id: 'neptune', name: 'Neptune', type: 'planets', kind: 'ICE GIANT', system: 'SOLAR SYSTEM',
    texture: '2k_neptune', size: 1.4, position: [781.2, 0.96, 31.25], color: '#477fea', au: 30.07, phase: 0.04, periodDays: 60182, rotationHours: 16.11, axialTilt: 28.32, inclination: 1.77,
    description: 'A distant blue world with the fastest winds in the Solar System. Dark storms appear in its atmosphere and vanish within years.',
    stats: [['RADIUS', '24,622 km'], ['YEAR', '164.8 years'], ['DAY', '16 h 6 min'], ['TEMPERATURE', 'average −200 °C']],
    distance: '4.50 billion km from the Sun', fact: "Winds on Neptune reach 2,100 km/h — faster than the speed of sound at Earth's surface."
  },
  {
    id: 'sun', name: 'Sun', type: 'stars', kind: 'YELLOW DWARF · G2V', system: 'CENTRE OF THE SOLAR SYSTEM',
    texture: '2k_sun', size: 5.8, position: [0, 0, 0], color: '#ffae52',
    description: 'The star around which our planetary system is built. In its core hydrogen turns into helium, releasing the energy that warms Earth.',
    stats: [['RADIUS', '696,000 km'], ['AGE', '4.6 billion years'], ['ROTATION', '25–35 days'], ['SURFACE', '+5,500 °C']],
    distance: '8 light-minutes from Earth', fact: 'Every second the Sun converts about 4 million tonnes of matter into pure energy.'
  },
  {
    id: 'sirius', name: 'Sirius', type: 'stars', kind: 'WHITE STAR · A1V', system: 'CANIS MAJOR',
    size: 4.4, position: [-190, 45, -240], color: '#c8deff',
    description: "The brightest star in Earth's night sky. It is actually a binary system: a white star and its compact companion — a white dwarf.",
    stats: [['RADIUS', '1.19 million km'], ['LUMINOSITY', '25 Suns'], ['MASS', '2.06 Suns'], ['SURFACE', '+9,670 °C']],
    distance: '8.6 light-years from Earth', fact: 'Sirius is relatively close to us, which is why it outshines all other stars even though many are far more powerful.'
  },
  {
    id: 'proxima', name: 'Proxima', type: 'stars', kind: 'RED DWARF · M5.5V', system: 'CENTAURUS',
    size: 2.1, position: [210, -30, -280], color: '#ff765c',
    description: 'The closest known star to the Sun. This small red dwarf hosts a planetary system and occasionally produces powerful flares.',
    stats: [['RADIUS', '107,000 km'], ['LUMINOSITY', '0.0017 Suns'], ['MASS', '0.12 Suns'], ['SURFACE', '+2,770 °C']],
    distance: '4.25 light-years from Earth', fact: 'Proxima has a planet in its potential habitable zone — Proxima Centauri b.'
  },
  {
    id: 'betelgeuse', name: 'Betelgeuse', type: 'stars', kind: 'RED SUPERGIANT', system: 'ORION',
    size: 7.2, position: [-260, -60, -420], color: '#ff774c',
    description: 'A huge red star in the constellation Orion. It is approaching the end of its life and will one day finish it with a bright supernova.',
    stats: [['RADIUS', '≈ 530 million km'], ['LUMINOSITY', '≈ 100,000 Suns'], ['MASS', '≈ 16 Suns'], ['SURFACE', '+3,300 °C']],
    distance: '≈ 550 light-years from Earth', fact: "Placed at the centre of the Solar System, Betelgeuse's surface would reach beyond the orbit of Mars."
  },
  {
    id: 'milkyway', name: 'Milky Way', type: 'galaxies', kind: 'SPIRAL GALAXY', system: 'LOCAL GROUP',
    size: 20, position: [0, 180, -650], color: '#a7a3ef', arms: 4, bar: true,
    description: 'Our galaxy — a barred spiral uniting hundreds of billions of stars. The Solar System lies in the Orion Arm, far from the centre.',
    stats: [['DIAMETER', '≈ 100,000 ly'], ['STARS', '100–400 billion'], ['AGE', '13.6 billion years'], ['TYPE', 'SBbc']],
    distance: '26,000 light-years to the centre', fact: 'The Sun completes one orbit around the galactic centre roughly every 230 million years.'
  },
  {
    id: 'andromeda', name: 'Andromeda', type: 'galaxies', kind: 'SPIRAL GALAXY', system: 'LOCAL GROUP',
    size: 24, position: [-500, 200, -900], color: '#90b9ff', arms: 2,
    description: 'The nearest large spiral galaxy to us. It can be seen with the naked eye, and in billions of years it will approach the Milky Way.',
    stats: [['DIAMETER', '≈ 152,000 ly'], ['STARS', '≈ 1 trillion'], ['AGE', '≈ 10 billion years'], ['TYPE', 'SA(s)b']],
    distance: '2.5 million light-years from Earth', fact: 'The light you see today left Andromeda before the genus Homo appeared on Earth.'
  },
  {
    id: 'sombrero', name: 'Sombrero', type: 'galaxies', kind: 'PECULIAR GALAXY', system: 'VIRGO',
    size: 18, position: [440, 260, -900], color: '#efc49d', dustLane: true, bulgeHeavy: true,
    description: 'A galaxy with a bright core and a dark dust lane resembling a wide-brimmed hat. Its massive bulge is surrounded by many globular clusters.',
    stats: [['DIAMETER', '≈ 50,000 ly'], ['STARS', '≈ 100 billion'], ['CLUSTERS', '≈ 2,000'], ['TYPE', 'SA(s)a']],
    distance: '31.1 million light-years from Earth', fact: 'At the centre of Sombrero sits a black hole about a billion solar masses.'
  },
  {
    id: 'whirlpool', name: 'Whirlpool', type: 'galaxies', kind: 'SPIRAL GALAXY', system: 'CANES VENATICI',
    size: 17, position: [-720, -180, -1100], color: '#c4a8ff', arms: 2,
    description: 'A galaxy with an almost perfect spiral structure. Its bright arms are outlined by young blue stars and pink star-forming regions.',
    stats: [['DIAMETER', '≈ 76,000 ly'], ['STARS', '≈ 160 billion'], ['AGE', '≈ 400 million years'], ['TYPE', 'SA(s)bc']],
    distance: '31 million light-years from Earth', fact: "Whirlpool's spiral structure may have been amplified by gravitational interaction with a neighbouring galaxy."
  },
  {
    id: 'triangulum', name: 'Triangulum', type: 'galaxies', kind: 'SPIRAL GALAXY', system: 'LOCAL GROUP',
    size: 18, position: [720, 160, -1150], color: '#8ec8ff', arms: 3,
    description: 'The third-largest galaxy in the Local Group. In its loosely wound arms new stars are born actively, including one of the largest known H II regions.',
    stats: [['DIAMETER', '≈ 60,000 ly'], ['STARS', '≈ 40 billion'], ['AGE', '≈ 12 billion years'], ['TYPE', 'SA(s)cd']],
    distance: '2.73 million light-years from Earth', fact: 'NGC 604 in the Triangulum galaxy is a star-forming region almost 40 times larger than the Orion Nebula.'
  },
  {
    id: 'pinwheel', name: 'Pinwheel', type: 'galaxies', kind: 'SPIRAL GALAXY', system: 'URSA MAJOR',
    size: 23, position: [850, -220, -1350], color: '#a9b9ff', arms: 4,
    description: 'A large galaxy facing us almost fully face-on. Asymmetric arms reveal a history of an ancient gravitational encounter.',
    stats: [['DIAMETER', '≈ 170,000 ly'], ['STARS', '≈ 1 trillion'], ['H II REGIONS', '≈ 3,000'], ['TYPE', 'SAB(rs)cd']],
    distance: '20.9 million light-years from Earth', fact: 'The Pinwheel is about 70% larger than the Milky Way, though its mass is estimated more modestly.'
  },
  {
    id: 'centaurus-a', name: 'Centaurus A', type: 'galaxies', kind: 'ACTIVE GALAXY', system: 'CENTAURUS',
    size: 18, position: [-960, 240, -1400], color: '#efb68d', shape: 'elliptical', dustLane: true,
    description: 'The nearest active galaxy, with powerful radio jets. Its unusual appearance arose after the merger of a large elliptical and a smaller spiral galaxy.',
    stats: [['DIAMETER', '≈ 60,000 ly'], ['STARS', '≈ 100 billion'], ['JETS', '> 1 million ly'], ['TYPE', 'S0 pec']],
    distance: '≈ 12 million light-years from Earth', fact: 'The black hole at the centre of Centaurus A ejects jets of matter at about half the speed of light.'
  },
  {
    id: 'ngc1300', name: 'NGC 1300', type: 'galaxies', kind: 'BARRED SPIRAL', system: 'ERIDANUS',
    size: 20, position: [420, -280, -1450], color: '#a7aaff', arms: 2, bar: true,
    description: 'A classic spiral galaxy with a strongly marked central bar. Unlike the Milky Way, its core shows no notable activity.',
    stats: [['DIAMETER', '≈ 110,000 ly'], ['STARS', '≈ 100 billion'], ['GROUP', 'Eridanus Cluster'], ['TYPE', 'SBbc']],
    distance: '≈ 61 million light-years from Earth', fact: 'At the centre of NGC 1300 lies its own spiral structure about 3,300 light-years long.'
  },
  {
    id: 'black-eye', name: 'Black Eye', type: 'galaxies', kind: 'SPIRAL GALAXY', system: 'COMA BERENICES',
    size: 16, position: [-600, 430, -1550], color: '#e8c3aa', arms: 2, dustLane: true,
    description: 'A galaxy with a contrasting dark dust band in front of a bright core. Its inner and outer gas disks rotate in opposite directions.',
    stats: [['DIAMETER', '≈ 54,000 ly'], ['STARS', '≈ 100 billion'], ['DISCOVERED', '1779'], ['TYPE', 'SA(s)ab']],
    distance: '≈ 24 million light-years from Earth', fact: 'The counter-rotation of the disks is a likely trace of absorbing another galaxy over a billion years ago.'
  },
  {
    id: 'cigar', name: 'Cigar', type: 'galaxies', kind: 'STARBURST GALAXY', system: 'URSA MAJOR',
    size: 15, position: [980, 390, -1700], color: '#f29f8d', shape: 'starburst',
    description: 'The nearest galaxy with a powerful burst of star formation. The gravity of neighbouring M81 triggered starbirth and outflows of hot gas.',
    stats: [['DIAMETER', '≈ 37,000 ly'], ['STARS', '≈ 30 billion'], ['ACTIVITY', '10× the Milky Way'], ['TYPE', 'I0']],
    distance: '≈ 12 million light-years from Earth', fact: "A galactic wind bursts from Cigar's centre, carrying gas away at hundreds of kilometres per second."
  },
  {
    id: 'm87', name: 'M87', type: 'galaxies', kind: 'ELLIPTICAL GALAXY', system: 'VIRGO',
    size: 22, position: [-1400, 500, -1100], color: '#f5d9a8', shape: 'elliptical', bulgeHeavy: true,
    description: 'A giant elliptical galaxy at the heart of the Virgo Cluster. Its supermassive black hole was the first ever imaged directly.',
    stats: [['DIAMETER', '≈ 120,000 ly'], ['STARS', '≈ 1 trillion'], ['CLUSTERS', '≈ 12,000'], ['TYPE', 'E+0-1 pec']],
    distance: '≈ 53.5 million light-years from Earth', fact: 'A relativistic jet about 5,000 light-years long shoots out of the core of M87.'
  },
  {
    id: 'trappist1', name: 'TRAPPIST-1', type: 'stars', kind: 'RED DWARF · M8V', system: 'AQUARIUS',
    size: 1.35, position: [340, 60, -360], color: '#ff7356',
    description: 'An ultracool dwarf with seven known rocky planets. All of them orbit closer to the star than Mercury to the Sun.',
    stats: [['RADIUS', '≈ 84,000 km'], ['PLANETS', '7'], ['MASS', '0.09 Suns'], ['SURFACE', '+2,300 °C']],
    distance: '40.7 light-years from Earth', fact: 'Three TRAPPIST-1 planets sit in the zone where liquid water is possible with a suitable atmosphere.'
  },
  {
    id: 'kepler452', name: 'Kepler-452', type: 'stars', kind: 'YELLOW DWARF · G2V', system: 'CYGNUS',
    size: 3.4, position: [-360, 140, -480], color: '#fff0c5',
    description: 'A Sun-like star about 1.5 billion years older than ours. The super-Earth Kepler-452 b orbits it.',
    stats: [['RADIUS', '≈ 772,000 km'], ['AGE', '≈ 6 billion years'], ['MASS', '1.04 Suns'], ['SURFACE', '+5,480 °C']],
    distance: '≈ 1,800 light-years from Earth', fact: 'Kepler-452 b receives about 10% more energy from its star than Earth does from the Sun.'
  },
  {
    id: '51pegasi', name: '51 Pegasi', type: 'stars', kind: 'YELLOW DWARF · G2IV', system: 'PEGASUS',
    size: 3.2, position: [150, 170, -520], color: '#ffe5a8',
    description: 'The star where the first planet around a Sun-like star was discovered in 1995. That finding changed our view of planetary systems.',
    stats: [['RADIUS', '≈ 800,000 km'], ['PLANETS', '1'], ['MASS', '1.11 Suns'], ['SURFACE', '+5,500 °C']],
    distance: '50.6 light-years from Earth', fact: 'For discovering the planet at 51 Pegasi, Michel Mayor and Didier Queloz received the 2019 Nobel Prize in Physics.'
  },
  {
    id: 'hd209458', name: 'HD 209458', type: 'stars', kind: 'YELLOW DWARF · F9V', system: 'PEGASUS',
    size: 3.3, position: [-140, -140, -400], color: '#fff2d1',
    description: 'A star with the hot Jupiter HD 209458 b. This system became the first where an exoplanet atmosphere was detected.',
    stats: [['RADIUS', '≈ 834,000 km'], ['PLANETS', '1'], ['MASS', '1.15 Suns'], ['SURFACE', '+5,800 °C']],
    distance: '≈ 159 light-years from Earth', fact: "This system's planet was the first exoplanet observed transiting its star's disk."
  },
  {
    id: 'proxima-b', name: 'Proxima b', type: 'exoplanets', kind: 'EXOPLANET · SUPER-EARTH', system: 'PROXIMA SYSTEM', host: 'proxima',
    size: 0.55, position: [217, -29, -278], color: '#b97962', procedural: true, surface: ['#b66f55', '#493a3a'], pattern: 'rock', atmosphere: true,
    description: 'The nearest known exoplanet. It orbits in the potential habitable zone of the red dwarf Proxima, but is exposed to strong stellar flares.',
    stats: [['MASS', '≥ 1.07 Earths'], ['YEAR', '11.2 days'], ['TYPE', 'rocky'], ['DISCOVERED', '2016']],
    distance: '0.048 AU from Proxima', fact: 'Proxima b is likely in synchronous or resonant rotation with its star.'
  },
  {
    id: 'trappist1-b', name: 'TRAPPIST-1 b', type: 'exoplanets', kind: 'HOT SUPER-EARTH', system: 'TRAPPIST-1 SYSTEM', host: 'trappist1',
    size: 0.45, position: [345, 60, -357], color: '#b16b52', procedural: true, surface: ['#a65b43', '#382e32'], pattern: 'rock',
    description: 'The inner planet of the compact TRAPPIST-1 system. Observations suggest its atmosphere is either very thin or absent.',
    stats: [['RADIUS', '1.12 Earths'], ['YEAR', '1.51 days'], ['MASS', '1.37 Earths'], ['DISCOVERED', '2016']],
    distance: '0.0115 AU from the star', fact: 'A year on TRAPPIST-1 b is shorter than two Earth days, and its star looks much larger in the sky than our Sun.'
  },
  {
    id: 'trappist1-e', name: 'TRAPPIST-1 e', type: 'exoplanets', kind: 'ROCKY EXOPLANET', system: 'TRAPPIST-1 SYSTEM', host: 'trappist1',
    size: 0.5, position: [351, 61, -362], color: '#6f9b96', procedural: true, surface: ['#638e89', '#a88460'], pattern: 'rock', atmosphere: true,
    description: 'One of the most interesting planets in the system for habitability studies. In size and density it is close to Earth.',
    stats: [['RADIUS', '0.92 Earths'], ['YEAR', '6.1 days'], ['MASS', '0.69 Earths'], ['DISCOVERED', '2017']],
    distance: '0.0293 AU from the star', fact: "Of the seven TRAPPIST-1 planets, e receives the amount of stellar energy closest to Earth's."
  },
  {
    id: 'kepler452-b', name: 'Kepler-452 b', type: 'exoplanets', kind: 'SUPER-EARTH', system: 'KEPLER-452 SYSTEM', host: 'kepler452',
    size: 1.1, position: [-349, 142, -476], color: '#5b9fbd', procedural: true, surface: ['#4f8ba4', '#9b9b72'], pattern: 'rock', atmosphere: true,
    description: 'A planet in the potential habitable zone of a Sun-like star. Sometimes called Earth’s “older cousin”, though its surface remains unknown.',
    stats: [['RADIUS', '≈ 1.5 Earths'], ['YEAR', '384.8 days'], ['ORBIT', 'habitable zone'], ['DISCOVERED', '2015']],
    distance: '1.05 AU from Kepler-452', fact: "One orbit of Kepler-452 b takes 385 days — only 20 days longer than Earth's year."
  },
  {
    id: '51pegasi-b', name: 'Dimidium', type: 'exoplanets', kind: 'HOT JUPITER', system: '51 PEGASI SYSTEM', host: '51pegasi',
    size: 1.9, position: [159, 171, -517], color: '#e1a572', procedural: true, surface: ['#e5b47f', '#8a5445'], pattern: 'bands', atmosphere: true,
    description: 'The first confirmed planet around a Sun-like star. A huge gas giant orbiting unusually close to 51 Pegasi.',
    stats: [['MASS', '0.46 Jupiters'], ['YEAR', '4.23 days'], ['TYPE', 'gas giant'], ['DISCOVERED', '1995']],
    distance: '0.052 AU from the star', fact: 'The official name Dimidium refers to a demigod from Roman mythology and was chosen via a public contest.'
  },
  {
    id: 'hd209458-b', name: 'HD 209458 b', type: 'exoplanets', kind: 'HOT JUPITER', system: 'HD 209458 SYSTEM', host: 'hd209458',
    size: 1.8, position: [-129, -139, -397], color: '#7b9bd3', procedural: true, surface: ['#6e94c7', '#d0b18d'], pattern: 'bands', atmosphere: true,
    description: 'A gas giant with a bloated, gradually escaping atmosphere. Its transits allowed the first study of an exoplanet’s air composition.',
    stats: [['RADIUS', '1.38 Jupiters'], ['YEAR', '3.52 days'], ['MASS', '0.69 Jupiters'], ['DISCOVERED', '1999']],
    distance: '0.047 AU from the star', fact: 'Hydrogen, sodium, water vapour and carbon-bearing molecules have been detected in the atmosphere of HD 209458 b.'
  }
];

export const byId = Object.fromEntries(objects.map((object) => [object.id, object]));
export const grandTour = ['earth', 'moon', 'mars', 'jupiter', 'saturn', 'neptune', 'sirius', 'proxima-b', 'andromeda', 'sun'];
