// iOS App Portfolio Projects

export const projects = [
  {
    id: 1,
    slug: 'green-thumb-tracker',
    title: 'Green Thumb Tracker',
    summary:
      'Track watering, growth, and care for every plant in your collection.',
    description:
      'A comprehensive plant care and gardening app that helps you track and manage your plant collection. Monitor watering schedules, growth progress, and care requirements for all your plants in one convenient place.',
    highlights: [
      'Keep watering schedules for your full plant collection',
      'Monitor growth progress over time',
      'See care requirements in one place',
    ],
    breakdown:
      'This was a companion app that utilized an existing backend implemented in TypeScript, along with a MySQL database, both hosted on an Oracle Cloud instance. It was a great learning experience in full-stack development across the big areas of client-side apps, backend servers, and databases.',
    group: 'ios',
    category: 'iOS App',
    appStoreLink: 'https://apps.apple.com/us/app/green-thumb-tracker/id6745626117',
    screenshot: '/screenshots/green-thumb-tracker.png',
    tags: ['Swift', 'SwiftUI', 'iOS'],
    releaseDate: '2025',
    accent: 'sage',
  },
  {
    id: 2,
    slug: 'mystic-inventory',
    title: 'Mystic Inventory',
    summary:
      'Scan, catalog, and explore your Magic: The Gathering collection.',
    description:
      'A powerful Magic: The Gathering collection management app for iPhone. Scan, catalog, compare, and explore your card collection with ease. Perfect for players and collectors who want to organize and track their MTG cards.',
    highlights: [
      'Scan and catalog cards from your collection',
      'Compare and explore cards you already own',
      'Built for players and collectors who want a cleaner inventory',
    ],
    breakdown:
      'This was built to fix a pain point of mine in a hobby I engage in called Magic: The Gathering. It utilizes camera OCR, text extraction and parsing, and communication with the Scryfall API to identify specific cards. It also uses local persistence frameworks like SwiftData on iOS.',
    group: 'ios',
    category: 'iOS App',
    appStoreLink: 'https://apps.apple.com/us/app/mystic-inventory/id6751126030',
    screenshot: '/screenshots/mystic-inventory.png',
    tags: ['Swift', 'SwiftUI', 'iOS'],
    releaseDate: '2025',
    accent: 'violet',
  },
  {
    id: 3,
    slug: 'dicerolleros',
    title: 'DiceRollerOS',
    summary:
      'A reliable dice roller for tabletop games, with customizable rolls.',
    description:
      'An intuitive dice rolling app that brings your tabletop gaming experience to life. Roll multiple dice, customize your rolls, and enjoy a smooth, reliable dice rolling experience for your favorite games.',
    highlights: [
      'Roll multiple dice in a single action',
      'Customize rolls for the games you play',
      'A simple, reliable tabletop companion',
    ],
    breakdown:
      'This was a little app to make rolling a bunch of dice of any size easier. It combined random number generation, modifiers, async/await structures, and statistical testing to observe proper randomness through distributions and curves. It also provides statistical analysis on rolls.',
    group: 'ios',
    category: 'iOS App',
    appStoreLink: 'https://apps.apple.com/us/app/dicerolleros/id6749218366',
    screenshot: '/screenshots/dicerolleros.png',
    tags: ['Swift', 'SwiftUI', 'iOS'],
    releaseDate: '2025',
    accent: 'amber',
  },
];
