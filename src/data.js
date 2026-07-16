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

// Five core services Dario offers, shown as the homepage overview. Full
// depth (who it's for, expandable specifics) lives on the Residential and
// Commercial pages this section funnels to.
export const SERVICES = [
  {
    n: '01',
    title: 'Carpet & Upholstery Cleaning',
    line: 'Deep extraction for stained, marked or tired carpets, rugs and lounge suites.',
  },
  {
    n: '02',
    title: 'High-Pressure Cleaning',
    line: 'Driveways, paths, courtyards and outdoor areas cleaned back to a sharper finish.',
  },
  {
    n: '03',
    title: 'Window Cleaning',
    line: 'Clear, streak-free windows for homes, units and apartments.',
  },
  {
    n: '04',
    title: 'Tile & Grout Cleaning',
    line: 'Built-up dirt lifted from grout lines, kitchens, bathrooms and hard floors.',
  },
  {
    n: '05',
    title: 'Water Damage Cleanup',
    line: 'Water extraction and drying support to help protect carpets, floors and interiors.',
  },
]

// Commercial-scoped services for the /commercial page. `sentence` is the row's
// one strong line; `details` is the full venue-type breakdown from Dario's
// own docs, tucked behind an optional "View details" toggle rather than
// shown as a tag cloud.
export const COMMERCIAL_SERVICES = [
  {
    n: '01',
    title: 'Commercial Pressure Cleaning',
    sentence:
      'Offices, car parks and warehouse floors restored, with grime, oil, moss and staining removed.',
    who: 'For car parks, warehouses, factories and building exteriors.',
    details:
      'Also serves retail, factories, strata and body corporate properties, and schools and childcare centres.',
  },
  {
    n: '02',
    title: 'Commercial Tile & Grout Cleaning',
    sentence:
      'Deep-cleaned floors and grout for offices, restaurants and shopping centres, scheduled to minimise disruption.',
    who: 'For offices, retail, hospitality and healthcare spaces.',
    details:
      'Also serves retail stores, medical centres, schools and childcare centres, hotels and strata properties.',
  },
  {
    n: '03',
    title: 'Commercial Window Cleaning',
    sentence:
      'Clear, streak-free glass for shopfronts, offices and retail frontages that keeps your business presentable.',
    who: 'For offices, shopfronts, retail and strata properties.',
    details: 'Also serves restaurants and cafés, medical centres, schools, and strata and body corporate properties.',
  },
]

// Residential-scoped services for the /residential page. `sentence` is the
// row's one strong line; `details` is the full room/surface breakdown from
// Dario's own docs, tucked behind an optional "View details" toggle rather
// than shown as a tag cloud.
export const RESIDENTIAL_SERVICES = [
  {
    n: '01',
    title: 'Carpet & Upholstery Cleaning',
    sentence:
      'Deep extraction lifts stains, traffic marks and odour from carpets, rugs, lounges and mattresses, with end-of-lease cleaning available.',
    who: 'For homes, rentals and end-of-lease cleans.',
    details:
      'Also covers hallways and stairs, recliners, armchairs, dining chairs and ottomans.',
  },
  {
    n: '02',
    title: 'High-Pressure Cleaning',
    sentence:
      'Driveways, paths and patios cleaned back to a sharper finish, with grime, moss, oil and algae gone.',
    who: 'For driveways, outdoor areas and home exteriors.',
    details:
      'Also covers courtyards, alfresco areas, brick and rendered walls, fencing, retaining walls, garage floors and pavers.',
  },
  {
    n: '03',
    title: 'Tile & Grout Cleaning',
    sentence:
      'Built-up dirt and discolouration lifted from bathroom, kitchen and living area tile and grout, with optional sealing.',
    who: 'For kitchens, bathrooms and tiled living areas.',
    details:
      'Also covers showers, splashbacks and laundries, across ceramic, porcelain, natural stone and more.',
  },
  {
    n: '04',
    title: 'Window Cleaning',
    sentence:
      'Streak-free glass inside and out for windows, glass doors and sliding doors, frames and tracks included.',
    who: 'For houses, townhouses and apartments.',
    details: 'Also covers sills and flyscreens.',
  },
  {
    n: '05',
    title: 'Water Damage Cleanup',
    sentence:
      'Rapid water extraction and drying to protect carpets, floors and interiors before mould sets in.',
    who: 'For flooded carpets, burst pipes and water-affected floors.',
    details: 'For flooded carpets, burst pipes and water-affected flooring.',
  },
]

export const WHY = [
  {
    n: '01',
    head: 'Established local service',
    body: "We've been operating since 1993, with experience across homes, businesses and managed properties throughout Canberra and surrounding areas.",
  },
  {
    n: '02',
    head: 'One point of contact',
    body: 'You deal directly with the person quoting and completing the work, so nothing gets lost between the call and the clean.',
  },
  {
    n: '03',
    head: 'No rushed, careless work',
    body: 'We assess every job properly, explain it clearly and complete it with the level of care the surface needs.',
  },
  {
    n: '04',
    head: 'Equipped for deeper cleaning',
    body: 'We handle carpets, upholstery, windows, grout, pressure cleaning and water-related cleanups with equipment suited to the job.',
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
