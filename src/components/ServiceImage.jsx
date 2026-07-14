import { motion } from 'framer-motion'

// Same dark rounded frame, border, object-cover and hover lift as the
// homepage Gallery tiles. Renders a labelled placeholder when no photo
// exists yet, instead of reusing an unrelated shot.
export default function ServiceImage({ src, alt, placeholder = 'Photo coming soon', className = '' }) {
  return (
    <motion.figure
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
      whileHover={{ y: -3 }}
      className={`group relative aspect-[4/3] overflow-hidden rounded-xl2 border border-line bg-bg ${className}`}
    >
      {src ? (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          className="h-full w-full object-cover object-center brightness-95 transition-[filter] duration-200 group-hover:brightness-110"
        />
      ) : (
        <div className="photo-zone flex h-full w-full items-center justify-center">
          <span className="label">{placeholder}</span>
        </div>
      )}
    </motion.figure>
  )
}
