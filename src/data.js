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
  { n: '01', title: 'Carpet & upholstery cleaning', line: 'Deep extraction that lifts stains, traffic marks and odour.' },
  { n: '02', title: 'High-pressure cleaning', line: 'Driveways, paths and exteriors taken back to bare.' },
  { n: '03', title: 'Window cleaning', line: 'Streak-free glass, inside and out.' },
  { n: '04', title: 'Tile & grout cleaning', line: 'Restored grout lines and floors that read as new.' },
  { n: '05', title: 'Water damage cleanup', line: 'Water extraction and drying to protect your floors.' },
  { n: '06', title: 'Domestic & commercial cleaning', line: 'Ongoing and one-off work for homes and businesses.' },
]

export const WHY = [
  {
    n: '01',
    head: 'Operating since 1993',
    body: 'Over three decades cleaning across the Canberra region. The same set of hands, the same standard, every job.',
  },
  {
    n: '02',
    head: 'One owner-operator',
    body: 'No call centre, no rotating crew. The person who quotes the job is the person who shows up and does it.',
  },
  {
    n: '03',
    head: 'Trusted on Defence housing',
    body: 'Current contracts cleaning Defence Force homes across the capital region — held to a strict standard, every visit.',
  },
  {
    n: '04',
    head: 'Fully equipped, no subcontractors',
    body: 'Own gear, own van, one operator. No third parties touching the job.',
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
