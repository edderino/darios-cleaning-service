// Service-row photos. Only import files that actually exist in the repo —
// rows without a confirmed real photo simply omit the `image` key.
import pressureCleaning from './assets/photos/pressure-cleaning.webp'
import tileGrout from './assets/photos/tile-grout.webp'
import residentialGeneralCleaning from './assets/photos/residential-general-cleaning.webp'
import residentialCarpetCleaning from './assets/photos/residential-carpet-cleaning.webp'
import residentialTimberFloors from './assets/photos/residential-timber-floors.webp'
import commercialGeneralCleaning from './assets/photos/commercial-general-cleaning.webp'
import commercialCarpetCleaning from './assets/photos/commercial-carpet-cleaning.webp'
import commercialWindowCleaning from './assets/photos/commercial-window-cleaning.webp'

export const BUSINESS = {
  name: "Dario's Cleaning Service",
  tagline: "Dirt's Final Destination",
  phoneRaw: '0417476017',
  phoneDisplay: '0417 476 017',
  email: 'dariogaz@outlook.com',
  hours: 'Open Monday to Friday',
}

export const tel = `tel:${BUSINESS.phoneRaw}`
export const mailto = `mailto:${BUSINESS.email}`

// Two people run the business, each owning a different slice of work.
// Every service below is tagged with a `team` key so the site can make
// that split obvious instead of funnelling every enquiry to one number.
export const TEAM = {
  dario: {
    name: 'Dario',
    role: 'Carpet, pressure, window, tile & grout, water damage',
    phoneRaw: '0417476017',
    phoneDisplay: '0417 476 017',
  },
  melissa: {
    name: 'Melissa',
    role: 'General house and office cleaning',
    phoneRaw: '0410579725',
    phoneDisplay: '0410 579 725',
  },
}

// Five core services Dario offers, shown as the homepage overview. Full
// depth (who it's for, expandable specifics) lives on the Residential and
// Commercial pages this section funnels to.
export const SERVICES = [
  {
    n: '01',
    title: 'Carpet & Upholstery Cleaning',
    line: 'Deep extraction for stained, marked or tired carpets, rugs and lounge suites.',
    team: 'dario',
  },
  {
    n: '02',
    title: 'High-Pressure Cleaning',
    line: 'Driveways, paths, courtyards and outdoor areas cleaned back to a sharper finish.',
    team: 'dario',
  },
  {
    n: '03',
    title: 'Window Cleaning',
    line: 'Clear, streak-free windows for homes, units and apartments.',
    team: 'dario',
  },
  {
    n: '04',
    title: 'Tile & Grout Cleaning',
    line: 'Built-up dirt lifted from grout lines, kitchens, bathrooms and hard floors.',
    team: 'dario',
  },
  {
    n: '05',
    title: 'Water Damage Cleanup',
    line: 'Water extraction and drying support to help protect carpets, floors and interiors.',
    team: 'dario',
  },
]

// Commercial-scoped services for the /commercial page. `sentence` is the row's
// one strong line; `details` is the full venue-type breakdown from Dario's
// own docs, tucked behind an optional "View details" toggle rather than
// shown as a tag cloud.
export const COMMERCIAL_SERVICES = [
  {
    n: '01',
    title: 'Commercial General Cleaning',
    sentence:
      'Regular and one-off cleaning for offices, shops and managed properties, run by Melissa and her team.',
    who: 'For offices, retail and strata-managed properties.',
    details: 'Ongoing scheduled cleans or one-off jobs, arranged directly with Melissa.',
    team: 'melissa',
    image: commercialGeneralCleaning,
    imageAlt: 'Large commercial hall with a freshly cleaned reflective floor',
  },
  {
    n: '02',
    title: 'Commercial Carpet & Upholstery Cleaning',
    sentence:
      'Deep extraction for marked, stained or heavily used carpets and upholstered seating in commercial and managed properties.',
    who: 'For offices, community facilities, education spaces, strata properties and other high-use premises.',
    details: 'Also covers meeting rooms, common areas, hallways, stairs, fabric seating and scheduled maintenance cleans.',
    team: 'dario',
    image: commercialCarpetCleaning,
    imageAlt: 'Commercial carpet cleaned inside a large community meeting room',
  },
  {
    n: '03',
    title: 'Commercial Pressure Cleaning',
    sentence:
      'Offices, car parks and warehouse floors restored, with grime, oil, moss and staining removed.',
    who: 'For car parks, warehouses, factories and building exteriors.',
    details:
      'Also serves retail, factories, strata and body corporate properties, and schools and childcare centres.',
    team: 'dario',
    image: pressureCleaning,
    imageAlt: 'Commercial pressure cleaning restoring an outdoor paved area',
  },
  {
    n: '04',
    title: 'Commercial Tile & Grout Cleaning',
    sentence:
      'Deep-cleaned floors and grout for offices, restaurants and shopping centres, scheduled to minimise disruption.',
    who: 'For offices, retail, hospitality and healthcare spaces.',
    details:
      'Also serves retail stores, medical centres, schools and childcare centres, hotels and strata properties.',
    team: 'dario',
    image: tileGrout,
    imageAlt: 'Commercial tile and grout deep-cleaned back to a consistent finish',
  },
  {
    n: '05',
    title: 'Commercial Window Cleaning',
    sentence:
      'Clear, streak-free glass for shopfronts, offices and retail frontages that keeps your business presentable.',
    who: 'For offices, shopfronts, retail and strata properties.',
    details: 'Also serves restaurants and cafés, medical centres, schools, and strata and body corporate properties.',
    team: 'dario',
    image: commercialWindowCleaning,
    imageAlt: 'Exterior commercial windows being professionally cleaned with a water-fed pole',
  },
]

// Residential-scoped services for the /residential page. `sentence` is the
// row's one strong line; `details` is the full room/surface breakdown from
// Dario's own docs, tucked behind an optional "View details" toggle rather
// than shown as a tag cloud.
export const RESIDENTIAL_SERVICES = [
  {
    n: '01',
    title: 'General Cleaning',
    sentence:
      'Regular and one-off house cleaning, run by Melissa and her team, separate from Dario’s specialist work below.',
    who: 'For homes, rentals and regular household cleans.',
    details:
      'Covers kitchens, bathrooms and general household surfaces, including oven cleaning, as a regular or one-off clean.',
    team: 'melissa',
    image: residentialGeneralCleaning,
    imageAlt: 'Clean residential kitchen and timber floor after a general house clean',
  },
  {
    n: '02',
    title: 'Carpet & Upholstery Cleaning',
    sentence:
      'Deep extraction lifts stains, traffic marks and odour from carpets, rugs, lounges and mattresses, with end-of-lease cleaning available.',
    who: 'For homes, rentals and end-of-lease cleans.',
    details:
      'Also covers rugs, lounges, mattresses, recliners, armchairs, dining chairs, ottomans, hallways and stairs.',
    team: 'dario',
    image: residentialCarpetCleaning,
    imageAlt: 'Freshly cleaned living room carpet showing visible extraction lines',
  },
  {
    n: '03',
    title: 'High-Pressure Cleaning',
    sentence:
      'Driveways, paths and patios cleaned back to a sharper finish, with grime, moss, oil and algae gone.',
    who: 'For driveways, outdoor areas and home exteriors.',
    details:
      'Also covers courtyards, alfresco areas, brick and rendered walls, fencing, retaining walls, garage floors and pavers.',
    team: 'dario',
    image: pressureCleaning,
    imageAlt: 'High-pressure cleaning restoring an outdoor paved area',
  },
  {
    n: '04',
    title: 'Tile & Grout Cleaning',
    sentence:
      'Built-up dirt and discolouration lifted from bathroom, kitchen and living area tile and grout, with optional sealing.',
    who: 'For kitchens, bathrooms and tiled living areas.',
    details:
      'Also covers showers, splashbacks and laundries, across ceramic, porcelain, natural stone and more.',
    team: 'dario',
    image: tileGrout,
    imageAlt: 'Bathroom tile and grout deep-cleaned back to a consistent finish',
  },
  {
    n: '05',
    title: 'Timber Floor Cleaning',
    sentence:
      'Professional cleaning for timber floors to remove built-up dirt and leave the surface clean and presentable.',
    who: 'For timber floors in homes, rentals and residential living areas.',
    details:
      'Suitable for kitchens, living areas, hallways and other sealed timber flooring. The service is cleaning only unless another treatment is specifically quoted.',
    team: 'dario',
    image: residentialTimberFloors,
    imageAlt: 'Clean reflective timber flooring throughout a residential living area',
  },
  {
    n: '06',
    title: 'Window Cleaning',
    sentence:
      'Streak-free glass inside and out for windows, glass doors and sliding doors, frames and tracks included.',
    who: 'For houses, townhouses and apartments.',
    details: 'Also covers sills and flyscreens.',
    team: 'dario',
    // No authentic residential window photo exists yet — temporarily reusing
    // the real commercial window-cleaning shot with neutral alt text, since
    // it's the only genuine window-cleaning photo currently available.
    image: commercialWindowCleaning,
    imageAlt: 'Exterior windows being professionally cleaned with a water-fed pole',
  },
  {
    n: '07',
    title: 'Water Damage Cleanup',
    sentence:
      'Rapid water extraction and drying to protect carpets, floors and interiors before mould sets in.',
    who: 'For flooded carpets, burst pipes and water-affected floors.',
    details: 'For flooded carpets, burst pipes and water-affected flooring.',
    team: 'dario',
    // No authentic water-damage/extraction photo available — left without
    // an image rather than mislabelling an ordinary carpet-cleaning shot.
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
