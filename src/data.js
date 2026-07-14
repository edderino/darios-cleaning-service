export const BUSINESS = {
  name: "Dario's Cleaning Service",
  wordmarkTop: "Dario's",
  wordmarkSub: 'Cleaning Service',
  tagline: "Dirt's Final Destination",
  phoneRaw: '0417476017',
  phoneDisplay: '0417 476 017',
  email: 'dariogaz@outlook.com',
}

export const tel = `tel:${BUSINESS.phoneRaw}`
export const mailto = `mailto:${BUSINESS.email}`

// Six services Dario actually offers. One sentence each.
export const SERVICES = [
  {
    n: '01',
    title: 'Carpet & upholstery cleaning',
    line: 'Deep extraction for stained, marked or tired carpets, rugs and lounge suites.',
  },
  {
    n: '02',
    title: 'High-pressure cleaning',
    line: 'Driveways, paths, courtyards and outdoor areas cleaned back to a sharper finish.',
  },
  {
    n: '03',
    title: 'Window cleaning',
    line: 'Clear, streak-free windows for homes, units and commercial properties.',
  },
  {
    n: '04',
    title: 'Tile & grout cleaning',
    line: 'Built-up dirt lifted from grout lines, kitchens, bathrooms and hard floors.',
  },
  {
    n: '05',
    title: 'Water damage cleanup',
    line: 'Water extraction and drying support to help protect carpets, floors and interiors.',
  },
  {
    n: '06',
    title: 'Domestic & commercial cleaning',
    line: 'One-off and regular cleaning for homes, businesses and managed properties.',
  },
]

// Commercial-scoped services for the /commercial page, with the venue types
// pulled from Dario's own service docs — so a visitor can spot their own
// property type at a glance.
export const COMMERCIAL_SERVICES = [
  {
    n: '01',
    title: 'Commercial Pressure Cleaning',
    intro:
      'Restore the exterior and hard surfaces of your premises — grime, oil, moss and staining removed.',
    serves: [
      'Offices',
      'Retail',
      'Warehouses',
      'Car parks',
      'Factories',
      'Strata & body corporate',
      'Schools & childcare centres',
    ],
  },
  {
    n: '02',
    title: 'Commercial Tile & Grout Cleaning',
    intro:
      'Deep-cleaned floors and grout for high-traffic spaces, scheduled to minimise disruption.',
    serves: [
      'Offices',
      'Retail stores',
      'Restaurants & cafés',
      'Medical centres',
      'Schools & childcare centres',
      'Shopping centres',
      'Hotels',
      'Strata properties',
    ],
  },
  {
    n: '03',
    title: 'Commercial Window Cleaning',
    intro: 'Clear, streak-free glass that keeps your frontage presentable.',
    serves: [
      'Offices',
      'Shopfronts',
      'Retail',
      'Restaurants & cafés',
      'Medical centres',
      'Schools',
      'Strata & body corporate',
    ],
  },
]

// Residential-scoped services for the /residential page. Covers are rooms/
// surfaces from Dario's own docs; `note` carries a short trailing detail
// (materials, availability) that doesn't belong as its own pill.
export const RESIDENTIAL_SERVICES = [
  {
    n: '01',
    title: 'Carpet & Upholstery Cleaning',
    intro:
      'Deep extraction that lifts stains, traffic marks and odour — carpets left fresh, not soaked.',
    covers: [
      'Carpets',
      'Rugs',
      'Hallways & stairs',
      'Fabric lounges',
      'Recliners',
      'Armchairs',
      'Dining chairs',
      'Ottomans',
      'Mattresses',
    ],
    note: 'End-of-lease cleaning available.',
  },
  {
    n: '02',
    title: 'High-Pressure Cleaning',
    intro:
      'Outdoor surfaces cleaned back to a sharper finish — grime, moss, oil and algae gone.',
    covers: [
      'Driveways',
      'Paths',
      'Courtyards',
      'Patios',
      'Alfresco areas',
      'Brick & rendered walls',
      'Fencing',
      'Retaining walls',
      'Garage floors',
      'Pavers',
    ],
  },
  {
    n: '03',
    title: 'Tile & Grout Cleaning',
    intro:
      'Built-up dirt and discolouration lifted from tile and grout, with optional sealing.',
    covers: ['Bathrooms', 'Showers', 'Kitchens', 'Splashbacks', 'Laundries', 'Hallways', 'Living areas'],
    note: 'Ceramic, porcelain, natural stone and more.',
  },
  {
    n: '04',
    title: 'Window Cleaning',
    intro: 'Streak-free glass inside and out, frames and tracks included.',
    covers: ['Windows', 'Glass doors', 'Sliding doors', 'Frames', 'Sills', 'Flyscreens', 'Tracks'],
  },
]

export const WHY = [
  {
    n: '01',
    head: 'Established local service',
    body: 'Operating since 1993, with experience across homes, businesses and managed properties throughout Canberra and surrounding areas.',
  },
  {
    n: '02',
    head: 'One point of contact',
    body: 'You deal directly with the person quoting and completing the work, so nothing gets lost between the call and the clean.',
  },
  {
    n: '03',
    head: 'No rushed, careless work',
    body: 'Every job is assessed properly, explained clearly and completed with the level of care the surface needs.',
  },
  {
    n: '04',
    head: 'Equipped for deeper cleaning',
    body: 'Carpets, upholstery, windows, grout, pressure cleaning and water-related cleanups are handled with equipment suited to the job.',
  },
]

// Real, verified Google reviews — lightly trimmed for length only.
export const REVIEWS = [
  {
    quote:
      'My carpets were well overdue for a clean, so I rang Dario and we arranged a time. I had an expectation of how well the many stains could come out — but after he’d finished, I was speechless. The result was absolutely fantastic, much better than I’d ever hoped for.',
    name: 'Paul Murphy',
    service: 'Carpet cleaning',
  },
  {
    quote:
      'Dario provides a friendly, professional and thorough clean. He’s been doing a great job on our couch and carpets for years. I highly recommend him for all of your cleaning needs.',
    name: 'Erica Boyles',
    service: 'Carpet & upholstery',
  },
  {
    quote:
      'Carpets restored from very tired to excellent, and our windows done to a mirror clean. He’s been cleaning our windows and carpets for over a decade. Really pleased.',
    name: 'Nick & Dora Sorohan',
    service: 'Carpet & window cleaning',
  },
]
