import BeforeAfterSlider from './BeforeAfterSlider'
import Gallery from './Gallery'
import Reveal from './Reveal'
import Eyebrow from './Eyebrow'
import carpetBefore from '../assets/photos/carpet-before.webp'
import carpetAfter from '../assets/photos/carpet-after.webp'
import carpetLivingRoomBefore from '../assets/photos/carpet-livingroom-before.webp'
import carpetLivingRoomAfter from '../assets/photos/carpet-livingroom-after.webp'

export default function BeforeAfter() {
  return (
    <section id="work" className="scroll-mt-20 border-t border-line py-20 md:py-24">
      <div className="wrap">
        <Reveal>
          <Eyebrow>The work</Eyebrow>
          <h2 className="mt-4 max-w-2xl text-[clamp(1.9rem,4vw,3rem)] font-semibold leading-tight tracking-tighter">
            See the difference.
          </h2>
          <p className="mt-4 max-w-md text-lg text-muted">Drag to compare before and after.</p>
        </Reveal>

        {/* Two real carpet jobs, side by side on desktop and stacked on
            mobile. Each frame stays large enough to read the result clearly. */}
        <div className="mt-10 grid gap-10 sm:grid-cols-2 sm:gap-8">
          <Reveal delay={0.1} className="mx-auto w-full max-w-[360px]">
            <p className="mb-3 text-sm font-medium text-faint">Carpet clean 01</p>
            <BeforeAfterSlider
              before={carpetBefore}
              after={carpetAfter}
              beforeAlt="Stained bedroom carpet before professional cleaning, beside a sliding glass door"
              afterAlt="Bedroom carpet after professional cleaning, beside a sliding glass door"
            />
          </Reveal>

          <Reveal delay={0.15} className="mx-auto w-full max-w-[360px]">
            <p className="mb-3 text-sm font-medium text-faint">Carpet clean 02</p>
            <BeforeAfterSlider
              before={carpetLivingRoomBefore}
              after={carpetLivingRoomAfter}
              beforeAlt="Stained living room carpet before professional cleaning"
              afterAlt="Living room carpet after professional cleaning"
            />
          </Reveal>
        </div>

        <Gallery />
      </div>
    </section>
  )
}
