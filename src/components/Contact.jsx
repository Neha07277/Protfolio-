import { useState } from 'react'
import { ArrowUpRight, Download, Mail, Phone, Send } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './BrandIcons'
import Portrait from './Portrait'
import { profile } from '../data/portfolio'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xqpaayol'

export default function Contact() {
  const [status, setStatus] = useState('idle') // idle | sending | sent | error
  const [formError, setFormError] = useState('')

  async function handleSubmit(event) {
    event.preventDefault()
    setStatus('sending')
    const form = event.currentTarget
    const data = new FormData(form)
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      })
      const text = await res.text()
      if (!res.ok) {
        let msg = `Formspree returned ${res.status}`
        try {
          const parsed = JSON.parse(text)
          if (parsed?.errors?.length) msg = parsed.errors[0].message
        } catch {
          /* not JSON */
        }
        throw new Error(msg)
      }
      setStatus('sent')
      form.reset()
    } catch (err) {
      setFormError(err?.message || 'Something went wrong.')
      setStatus('error')
    }
  }

  const inputClass =
    'w-full rounded-md border border-line bg-surface/70 px-4 py-3 text-sm text-ink outline-none transition-colors placeholder:text-muted/70 focus:border-accent'

  const contactLinks = [
    { label: profile.email, href: `mailto:${profile.email}`, icon: <Mail size={16} className="text-accent" /> },
    {
      label: profile.phone,
      href: `tel:${profile.phone.replace(/[^+\d]/g, '')}`,
      icon: <Phone size={16} className="text-accent" />,
    },
    {
      label: 'github.com/Neha07277',
      href: profile.github,
      icon: <GithubIcon size={16} className="text-accent" />,
      external: true,
    },
    {
      label: 'LinkedIn',
      href: profile.linkedin,
      icon: <LinkedinIcon size={16} className="text-accent" />,
      external: true,
    },
  ]

  return (
    <section id="contact" className="relative overflow-hidden border-t border-line/60 py-16 md:py-24">
      {/* Soft glow behind the section */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -bottom-40 left-1/2 h-[28rem] w-[44rem] -translate-x-1/2 rounded-full bg-accent/[0.10] blur-[130px]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeading index="06" title="Contact" />

        <div className="grid gap-12 lg:grid-cols-[1.05fr_1fr] lg:gap-20">
          <Reveal>
            <div className="mb-8 flex items-center gap-4">
              <Portrait
                alt="Portrait of Neha Pal"
                className="h-16 w-16 shrink-0 rounded-full border border-line bg-surface-2"
              />
              <div>
                <p className="font-display text-xl font-semibold tracking-tight text-ink">
                  {profile.name}
                </p>
                <p className="mt-0.5 text-sm text-muted">{profile.title}</p>
              </div>
            </div>

            <h3 className="font-display text-3xl font-semibold tracking-tight text-ink md:text-4xl">
              Let&apos;s build something useful.
            </h3>
            <p className="mt-4 max-w-md text-base leading-relaxed text-muted">
              Open to full-time roles and freelance projects — full-stack web
              development, REST API integration, and business-system integration
              work.
            </p>

            <ul className="mt-8 space-y-3 text-sm">
              {contactLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    {...(link.external ? { target: '_blank', rel: 'noreferrer' } : {})}
                    className="group inline-flex items-center gap-2.5 text-muted transition-colors hover:text-accent"
                  >
                    <span className="flex h-9 w-9 items-center justify-center rounded-md border border-line bg-surface transition-colors group-hover:border-accent/40">
                      {link.icon}
                    </span>
                    {link.label}
                    {link.external && (
                      <ArrowUpRight size={13} className="opacity-0 transition-all duration-200 group-hover:opacity-100" />
                    )}
                  </a>
                </li>
              ))}
              <li className="pt-3">
                <a
                  href={profile.resume}
                  download
                  className="inline-flex items-center gap-2 rounded-md border border-line bg-surface px-5 py-3 text-sm font-medium text-ink transition-all duration-200 hover:-translate-y-px hover:border-accent/60 hover:text-accent hover:shadow-[0_0_28px_-8px_rgba(138,124,255,0.45)]"
                >
                  <Download size={16} />
                  Download resume
                </a>
              </li>
            </ul>
          </Reveal>

          <Reveal delay={0.15}>
            <form
              onSubmit={handleSubmit}
              action={FORMSPREE_ENDPOINT}
              method="POST"
              className="card-hover rounded-lg border border-line bg-surface/80 p-6 backdrop-blur-sm md:p-8"
            >
              <div>
                <label htmlFor="name" className="mb-1.5 block text-sm text-muted">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  placeholder="Your name"
                  className={inputClass}
                />
              </div>
              <div className="mt-5">
                <label htmlFor="email" className="mb-1.5 block text-sm text-muted">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  placeholder="you@example.com"
                  className={inputClass}
                />
              </div>
              <div className="mt-5">
                <label htmlFor="message" className="mb-1.5 block text-sm text-muted">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell me about your project or role..."
                  className={`${inputClass} resize-none`}
                />
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="mt-6 flex w-full items-center justify-center gap-2 rounded-md bg-accent px-6 py-3 text-sm font-medium text-white shadow-[0_0_40px_-10px_rgba(138,124,255,0.7)] transition-all duration-300 hover:-translate-y-px hover:bg-accent-2 hover:shadow-[0_0_48px_-8px_rgba(138,124,255,0.85)] disabled:cursor-not-allowed disabled:opacity-60 md:w-auto"
              >
                {status === 'sending' ? 'Sending…' : 'Send message'}
                <Send size={15} />
              </button>

              {status === 'sent' && (
                <p className="mt-4 text-sm text-emerald-300" role="status">
                  Thanks — your message was sent. I&apos;ll get back to you soon.
                </p>
              )}
              {status === 'error' && (
                <p className="mt-4 text-sm text-red-400" role="alert">
                  {formError || 'Something went wrong. Please try again or email me directly.'}
                </p>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}