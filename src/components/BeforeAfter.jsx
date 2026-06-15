import BeforeAfterSlider from './BeforeAfterSlider'
import Gallery from './Gallery'
import Reveal from './Reveal'
import Eyebrow from './Eyebrow'
import carpetBefore from '../assets/photos/carpet-before.webp'
import carpetAfter from '../assets/photos/carpet-after.webp'

export default function BeforeAfter() {
  return (
    <section id="work" className="border-t border-line py-24 md:py-32">
      <div className="wrap">
        <Reveal>
          <Eyebrow>The work</Eyebrow>
          <h2 className="mt-4 max-w-2xl text-[clamp(1.9rem,4vw,3rem)] font-semibold leading-tight tracking-tighter">
            See the difference.
          </h2>
          <p className="mt-4 max-w-md text-lg text-muted">Drag to compare before and after.</p>
        </Reveal>

        <Reveal delay={0.1} className="mt-12">
          {/* Real carpet job, split from Dario's single before/after photo. */}
          <BeforeAfterSlider before={carpetBefore} after={carpetAfter} />
        </Reveal>

        <Gallery />
      </div>
    </section>
  )
}
