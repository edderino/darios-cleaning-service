import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { BUSINESS, tel, mailto } from '../data'
import { Phone, Mail, Arrow } from './Icons'
import Reveal from './Reveal'
import Eyebrow from './Eyebrow'

const field =
  'w-full rounded-lg border border-line bg-surface px-4 py-3 text-[15px] text-fg placeholder:text-faint outline-none transition focus:border-accent/60'

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', suburb: '', detail: '' })
  const [sent, setSent] = useState(false)
  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }))

  const onSubmit = (e) => {
    e.preventDefault()
    // No backend in this build — composes an email to Dario. Wire to a form
    // service (Formspree / Netlify) for production lead capture.
    const subject = `Quote request: ${form.suburb || 'Canberra'}`
    const body = [
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      `Suburb: ${form.suburb}`,
      '',
      form.detail,
    ].join('\n')
    window.location.href = `${mailto}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    setSent(true)
  }

  return (
    <section id="contact" className="scroll-mt-20 border-t border-line py-24 md:py-32">
      <div className="wrap grid gap-14 md:grid-cols-12">
        <Reveal className="md:col-span-5">
          <Eyebrow>Get in touch</Eyebrow>
          <h2 className="mt-4 text-[clamp(1.9rem,4vw,3rem)] font-semibold leading-tight tracking-tighter">
            Request your quote.
          </h2>
          <p className="mt-4 max-w-md text-lg leading-relaxed text-muted">
            Send a few details about the job and we&rsquo;ll be in touch.
          </p>

          <div className="mt-10 space-y-4">
            <a href={tel} className="group flex items-center gap-3 text-fg">
              <Phone width={18} height={18} className="text-accent" />
              <span className="text-lg transition-colors group-hover:text-accent">
                {BUSINESS.phoneDisplay}
              </span>
            </a>
            <a href={mailto} className="group flex items-center gap-3 text-fg">
              <Mail width={18} height={18} className="text-accent" />
              <span className="text-lg transition-colors group-hover:text-accent">
                {BUSINESS.email}
              </span>
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.08} className="md:col-span-7">
          <AnimatePresence mode="wait">
            {sent ? (
              <motion.div
                key="done"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex h-full min-h-[18rem] flex-col items-start justify-center rounded-xl2 border border-line bg-surface p-8"
              >
                <h3 className="text-2xl font-semibold tracking-tight">Thanks.</h3>
                <p className="mt-3 max-w-sm text-muted">
                  Your email is ready to send. For anything urgent, call{' '}
                  {BUSINESS.phoneDisplay}.
                </p>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                onSubmit={onSubmit}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="grid gap-4"
              >
                <div className="grid gap-4 sm:grid-cols-2">
                  <input required value={form.name} onChange={set('name')} className={field} placeholder="Name" />
                  <input required type="tel" value={form.phone} onChange={set('phone')} className={field} placeholder="Phone" />
                </div>
                <input required value={form.suburb} onChange={set('suburb')} className={field} placeholder="Suburb" />
                <textarea
                  required
                  rows={4}
                  value={form.detail}
                  onChange={set('detail')}
                  className={`${field} resize-none`}
                  placeholder="What needs cleaning?"
                />
                <button type="submit" className="btn-accent mt-1 w-full text-[15px] sm:w-auto sm:justify-self-start">
                  Send request
                  <Arrow width={17} height={17} />
                </button>
              </motion.form>
            )}
          </AnimatePresence>
        </Reveal>
      </div>
    </section>
  )
}
