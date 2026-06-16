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
