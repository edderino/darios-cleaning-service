import { motion } from 'framer-motion'
import Reveal from './Reveal'
import Eyebrow from './Eyebrow'
import couchAfter from '../assets/photos/couch-after.webp'
import tileGrout from '../assets/photos/tile-grout.webp'
import livingRoom from '../assets/photos/living-room.webp'
import tileExtraction from '../assets/photos/hero-dario.webp'

// Four real jobs, clean 2x2. No invented captions or locations. `alt` is a
// fuller description for screen readers/SEO, kept separate from the shorter
// visible `caption`.
const TILES = [
  {
    img: couchAfter,
    caption: 'Upholstery',
    alt: 'Beige upholstered sofa after professional upholstery cleaning',
  },
  {
    img: tileGrout,
    caption: 'Tile & grout · commercial',
    alt: 'Commercial bathroom tile and grout being professionally cleaned',
  },
  {
    img: livingRoom,
    caption: 'Post-clean walk-through',
    alt: 'Living room with polished timber floors after a professional clean',
  },
  {
    img: tileExtraction,
    caption: 'Tile floor extraction',
    alt: 'Dario operating a tile-cleaning machine in a commercial building foyer',
  },
]

export default function Gallery() {
  return (
    <div className="mt-16 md:mt-20">
      <Reveal>
        <Eyebrow>More work</Eyebrow>
        <p className="mt-4 max-w-md text-lg text-muted">A few recent jobs around Canberra.</p>
      </Reveal>

      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        {TILES.map((t, i) => (
          <motion.figure
            key={t.caption}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: (i % 2) * 0.07, ease: [0.25, 0.1, 0.25, 1] }}
            whileHover={{ y: -3 }}
            className="group relative aspect-[4/3] overflow-hidden rounded-xl2 border border-line bg-bg"
          >
            <img
              src={t.img}
              alt={t.alt}
              loading="lazy"
              className="h-full w-full object-cover object-center brightness-95 transition-[filter] duration-200 group-hover:brightness-110"
            />
            {/* legibility scrim behind the caption */}
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-bg/85 to-transparent" />
            <figcaption className="absolute bottom-4 left-5 text-[13px] font-medium text-fg/85 transition-colors duration-200 group-hover:text-fg">
              {t.caption}
            </figcaption>
          </motion.figure>
        ))}
      </div>
    </div>
  )
}
