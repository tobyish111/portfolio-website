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
  {
    id: 4,
    slug: 'molecyou',
    title: 'Molecyou',
    summary:
      'Map workouts and activity to the proteins associated with them.',
    description:
      'An educational app that reads workout and activity data through HealthKit and maps it to scientifically known proteins associated with those activities. It makes no medical diagnosis or claims of its own. It introduces the proteins and processes tied to what HealthKit observes, so you can look further into the science.',
    highlights: [
      'Read workout and activity data through HealthKit',
      'Map observed activities to scientifically known proteins',
      'Explore associated proteins and processes without medical claims',
    ],
    breakdown:
      'This was my first app that uses the iOS HealthKit framework. It let me explore how HealthKit works, including its quirks, and how to connect that data with scientifically verified sources such as the UniProt database. Along the way I learned a lot about HealthKit, UniProt, proteins, and the privacy and handling nuances of data tied to workouts and general activity.',
    group: 'ios',
    category: 'iOS App',
    appStoreLink: 'https://apps.apple.com/us/app/molecyou/id6803336302',
    screenshot: '/screenshots/molecyou.png',
    tags: ['Swift', 'SwiftUI', 'HealthKit', 'iOS'],
    releaseDate: '2026',
    accent: 'magenta',
  },
  {
    id: 5,
    slug: 'isa-bench',
    title: 'ISA Bench',
    summary:
      'One C program, eight processor architectures, side by side. A free desktop app for Windows, Linux, and macOS.',
    description:
      'ISA Bench is a free desktop app that compiles a C program you write for eight processor architectures, from modern chips like ARM and RISC-V to the 1970s MOS 6502. It runs every version on a verified emulator and shows how each architecture handled the same work: instructions executed, code size, memory traffic and branch behaviour. Everything runs locally, and the compilers are built in.',
    sections: [
      {
        heading: 'What it is',
        paragraphs: [
          'Every processor family speaks its own instruction language, its instruction set architecture (ISA). The same C program turns into very different machine code on an ARM chip, an x86 PC, a RISC-V board or a 6502 from the Apple II era. ISA Bench makes those differences visible. You write a program, pick the architectures, and press Run. Seconds later you get a report comparing what each one actually did.',
          'It covers eight instruction sets: RISC-V (RV64GC), ARM (AArch64), x86-64, MIPS32, POWER, SPARC V8, WebAssembly and the MOS 6502.',
        ],
      },
      {
        heading: 'How it works',
        bullets: [
          "You write C in the app's editor, or pick one of the built-in example programs.",
          'The app compiles it for every target, offline. It carries a full compiler toolchain inside: clang and lld from LLVM 23.1.0, plus llvm-mos for the 6502, compiled to WebAssembly. It also has each platform\'s real C library, so no Docker, cloud service or separate installs are needed. Each target takes between a fraction of a second and about two seconds.',
          "Each build runs on an emulator for its own architecture. These aren't approximations. Each emulator was checked instruction by instruction against a trusted reference: QEMU, or for x86-64 the physical processor itself (283,652 instructions compared register by register); a real WebAssembly engine, on every edge-case value of every operation; and 23,502 single-instruction test cases for the 6502.",
          'Every result is double-checked. An independent reference interpreter runs the same program, and any architecture that disagrees on the answer or the output rejects the run.',
          'A shared timing model estimates the cycles. Every architecture runs on the same simulated processor core, with the same caches and branch predictor. The differences in the report come from the instruction sets themselves, not from different hardware.',
        ],
      },
      {
        heading: 'What it gives you',
        bullets: [
          'Exact counts for each architecture: instructions executed, bytes of code fetched, memory reads and writes, conditional branches taken.',
          'Modelled performance: cycles, cache misses and branch mispredictions on one identical simulated core, ranked side by side.',
          'A clear line between measured and modelled. Every figure is labelled as either counted exactly or estimated, and nothing is presented as real hardware speed.',
          "An intuition you can't get from a textbook: why a stack machine like WebAssembly executes twice as many instructions as ARM, how x86's variable-length encoding keeps code compact, and what it costs to run modern C on an 8-bit CPU with three registers.",
          'Reports you can keep, saved locally and exportable as JSON or CSV.',
        ],
      },
      {
        heading: 'How it was built and tested',
        bullets: [
          "Test suite: 1,803 automated tests. They include lockstep comparisons against QEMU and real hardware, decoder checks against LLVM's disassembler, and a check that the built-in compiler rebuilds the reference binaries byte for byte.",
          'Fully automated pipeline: a change to the code or the toolchain rebuilds the Docker images, test fixtures and compiler bundle as needed and verifies them. It then packages installers for Windows, macOS and Linux on GitHub Actions.',
          'Reproducible: every generated file can be rebuilt from the repository and comes out the same on any machine. Every third-party source is pinned to an exact version and checked by checksum.',
          'Self-updating: installed copies update themselves from new releases.',
          'Tech: TypeScript, React, Vite, Electron, WebAssembly, LLVM/clang, Docker, GitHub Actions.',
        ],
      },
    ],
    group: 'other',
    category: 'Desktop App',
    links: [
      {
        label: 'Read more about it here',
        href: 'https://bonquifo.github.io/isa-bench/',
      },
      {
        label: 'Source (MIT licensed)',
        href: 'https://github.com/bonquifo/isa-bench',
      },
    ],
    downloads: [
      {
        platform: 'windows',
        label: 'Download for Windows (64-bit)',
        href: 'https://github.com/bonquifo/isa-bench/releases/download/latest-main/ISA-Bench-Setup-win-x64.exe',
      },
      {
        platform: 'linux',
        label: 'Download for Linux (64-bit)',
        href: 'https://github.com/bonquifo/isa-bench/releases/download/latest-main/ISA-Bench-linux-x86_64.AppImage',
      },
      {
        platform: 'macos',
        label: 'Download for macOS (Apple Silicon)',
        href: 'https://github.com/bonquifo/isa-bench/releases/download/latest-main/ISA-Bench-mac-arm64.dmg',
      },
    ],
    screenshot: '/screenshots/isa-bench.png',
    tags: ['TypeScript', 'React', 'Electron', 'WebAssembly', 'LLVM'],
    releaseDate: '2026',
    accent: 'slate',
  },
  {
    id: 6,
    slug: 'hadronica',
    title: 'Hadronica',
    summary:
      'A Windows app that simulates Standard Model particle collisions and shows the results in a detector.',
    description:
      'Hadronica is a Windows application for simulating particle collisions and seeing the results. You choose the colliding particles and the collision energy. Hadronica then generates events predicted by the Standard Model of particle physics, draws them in an interactive 2D or 3D detector, and builds up distributions such as cross sections and invariant masses as more events accumulate. Every physical constant comes from the 2026 Review of Particle Physics, and every formula in the app cites its published source.',
    sections: [
      {
        heading: 'Why I built it',
        paragraphs: [
          'Collider physics is usually learned through equations and final plots, and the collisions themselves stay abstract. I wanted a tool that makes them concrete. Pick a process, change the energy, and watch how the outcomes, rates and detector signatures respond, while every number stays traceable to its source and checked against real experimental data. The goal was a clear visual interface on top of accurate physics that holds up when compared with real data.',
        ],
      },
      {
        heading: 'How it works',
        bullets: [
          'Built-in engine. It computes cross sections directly from the published leading-order formulas and generates events instantly on any Windows machine. Electron–positron collisions include radiation from the incoming beams.',
          'Research mode. It connects to the software used in real collider analyses, running in a Linux environment on the same machine: PYTHIA 8.3 for full event generation; MadGraph5_aMC@NLO for higher-precision (next-to-leading-order) calculations, including top-quark decays and jet merging; Delphes for detector simulation; and Rivet for direct comparison with published LHC and LEP measurements.',
          'I also fitted a shower tune of my own to ATLAS data to improve agreement at low momentum.',
          'The interface is written in Python. It ships as a single executable that updates itself, and each update is verified against a published SHA-256 checksum before it is installed.',
        ],
      },
      {
        heading: 'How it was tested',
        bullets: [
          '241 automated tests cover the physics formulas, conservation laws in every generated event, the user interface, the packaged executable, and the research-mode toolchain end to end. The executable also carries a built-in self-test.',
          'Checked against real data. Hadronica\'s events are scored against six published measurements from ALEPH at LEP and from ATLAS and CMS at the LHC, using the experiments\' own Rivet analysis code. For example, the next-to-leading-order simulations reproduce the ATLAS Z-boson transverse momentum at χ²/ndf ≈ 1.6 and the CMS top-quark pair measurements at χ²/ndf ≈ 1.8.',
          'The built-in engine agrees with MadGraph to within 0.13% when both use the same conventions. Hadronica\'s research mode produces bit-identical histograms to PYTHIA run on its own. Across the six benchmarks it matches or beats Herwig 7.3 and Sherpa 3.0 on five. The exception is low-energy minimum-bias collisions, where Herwig does better; that is documented rather than hidden.',
          'Physics audit. A written audit records every correction made and its source, and every scientific reference was checked against the original publication.',
        ],
      },
    ],
    group: 'other',
    category: 'Desktop App',
    links: [
      {
        label: 'Read more about Hadronica here!',
        href: 'https://bonquifo.github.io/Hadronica/',
      },
      {
        label: 'Source code on GitHub',
        href: 'https://github.com/bonquifo/Hadronica',
      },
    ],
    downloads: [
      {
        platform: 'windows',
        label: 'Download for Windows',
        href: 'https://github.com/bonquifo/Hadronica/releases/latest/download/Hadronica.exe',
      },
    ],
    screenshot: '/screenshots/hadronica.png',
    tags: ['Python', 'pygame', 'NumPy', 'PYTHIA', 'MadGraph', 'Rivet'],
    releaseDate: '2026',
    accent: 'navy',
  },
  {
    id: 7,
    slug: 'minecraft-terrain-cuda',
    title: 'Minecraft Terrain on CUDA',
    summary:
      'A learning project: Minecraft world generation moved onto NVIDIA CUDA cores, measured against the usual CPU path.',
    description:
      'I wanted to see how much faster Minecraft world generation could get by running on NVIDIA CUDA cores, and to learn CUDA programming in C++. Terrain generation is largely parallel, with a few exceptions, so it was a concrete way to find out what that hardware actually changes.',
    sections: [
      {
        heading: 'Why I built it',
        paragraphs: [
          'This was a learning project. I used my own PC, an NVIDIA RTX 5090 and a Ryzen 9 9950X, and reimplemented Minecraft Java Edition 26.3 overworld terrain generation as CUDA kernels. The point was to compare that with the standard CPU-bound way the game does the same work, and to get familiar with how CUDA and C++ fit together.',
        ],
      },
      {
        heading: 'What I found',
        paragraphs: [
          'On that machine, the CUDA version of the full terrain step is bit-identical to vanilla: biomes, blocks, and density values match the game, with no tolerance. It generated that step at 101,352 chunks per second, which is 857× vanilla on one thread and 49× vanilla on all 32 threads of the Ryzen 9 9950X. The charts, videos, correctness checks, and optimization notes are in the report.',
        ],
      },
    ],
    group: 'other',
    learning: true,
    category: 'CUDA',
    links: [
      {
        label: 'Read the report',
        href: 'https://bonquifo.github.io/minecraft-terrain-cuda/',
      },
      {
        label: 'Source code on GitHub',
        href: 'https://github.com/bonquifo/minecraft-terrain-cuda',
      },
    ],
    screenshot: '/screenshots/minecraft-terrain-cuda.png',
    wideImage: true,
    tags: ['C++', 'CUDA', 'CMake'],
    releaseDate: '2026',
    accent: 'moss',
  },
];
