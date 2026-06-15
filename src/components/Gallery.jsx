import { motion } from 'framer-motion'
import Reveal from './Reveal'
import Eyebrow from './Eyebrow'
import couchBefore from '../assets/photos/couch-before.webp'
import couchAfter from '../assets/photos/couch-after.webp'
import pressure from '../assets/photos/pressure-cleaning.webp'
import tileGrout from '../assets/photos/tile-grout.webp'
import livingRoom from '../assets/photos/living-room.webp'

// Tiles 1 & 2 are the upholstery before/after pair, kept adjacent so the
// pairing reads on its own. Tile 6 stays a placeholder until Dario sends a
// window-cleaning photo.
const TILES = [
  { img: couchBefore, caption: 'Upholstery · before' },
  { img: couchAfter, caption: 'Upholstery · after' },
  { img: pressure, caption: 'Pressure cleaning · Canberra' },
  { img: tileGrout, caption: 'Tile & grout · commercial' },
  { img: livingRoom, caption: 'Post-clean walk-through' },
  { img: null, caption: 'Window cleaning · coming soon' },
]

export default function Gallery() {
  return (
    <div className="mt-24 md:mt-28">
      <Reveal>
        <Eyebrow>More work</Eyebrow>
        <p className="mt-4 max-w-md text-lg text-muted">
          A few recent jobs around Canberra and Queanbeyan.
        </p>
      </Reveal>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {TILES.map((t, i) => (
          <motion.figure
            key={t.caption}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: (i % 3) * 0.06, ease: [0.25, 0.1, 0.25, 1] }}
            whileHover={{ y: -3 }}
            className="group relative aspect-[4/3] overflow-hidden rounded-xl2 border border-line bg-bg"
          >
            {t.img ? (
              <>
                <img
                  src={t.img}
                  alt={t.caption}
                  loading="lazy"
                  className="h-full w-full object-cover brightness-95 transition-[filter] duration-200 group-hover:brightness-110"
                />
                {/* legibility scrim behind the caption */}
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-bg/85 to-transparent" />
              </>
            ) : (
              <div className="photo-zone h-full w-full">
                <span className="label absolute right-5 top-5">Photo to come</span>
              </div>
            )}

            <figcaption
              className={`absolute bottom-4 left-5 text-[13px] font-medium transition-colors duration-200 ${
                t.img ? 'text-fg/85 group-hover:text-fg' : 'text-faint group-hover:text-fg'
              }`}
            >
              {t.caption}
            </figcaption>
          </motion.figure>
        ))}
      </div>
    </div>
  )
}
