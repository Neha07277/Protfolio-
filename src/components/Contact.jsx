import { useState } from 'react'
import {
  ArrowUpRight,
  Check,
  Clock,
  Copy,
  Download,
  Mail,
  Phone,
  Send,
  Sparkles,
} from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './BrandIcons'
import Portrait from './Portrait'
import { profile } from '../data/portfolio'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xqpaayol'

const projectTypes = [
  'Full-Time Opportunity',
  'Client / Freelance Project',
  'API & System Integration',
  'General Inquiry',
]

export default function Contact() {
  const [status, setStatus] = useState('idle') // idle | sending | sent | error
  const [formError, setFormError] = useState('')
  const [selectedType, setSelectedType] = useState(projectTypes[0])
  const [copiedKey, setCopiedKey] = useState(null)

  function handleCopy(text, key) {
    navigator.clipboard.writeText(text)
    setCopiedKey(key)
    setTimeout(() => {
      setCopiedKey(null)
    }, 2000)
  }

  async function handleSubmit(event) {
    event.preventDefault()
    setStatus('sending')
    const form = event.currentTarget
    const data = new FormData(form)
    data.append('inquiryType', selectedType)

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
    'w-full rounded-xl border border-line bg-surface-2 px-4 py-3 text-sm text-ink outline-none transition-all placeholder:text-muted/70 focus:border-accent focus:bg-surface focus:ring-2 focus:ring-accent/30 shadow-sm'

  return (
    <section id="contact" className="relative overflow-hidden border-t border-line py-20 md:py-28">
      <div className="relative mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeading
          index="07"
          title="Get In Touch"
          subtitle="Whether you have an open engineering role, a client project, or a system integration challenge — let's connect."
        />

        <div className="grid gap-12 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
          {/* Left Column: Direct Info & Copy Buttons */}
          <Reveal>
            <div className="space-y-6">
              {/* Profile Bar */}
              <div className="flex items-center gap-4 rounded-2xl border border-line bg-surface p-4 shadow-sm backdrop-blur-md">
                <Portrait
                  alt="Portrait of Neha Pal"
                  className="h-16 w-16 shrink-0 rounded-2xl border border-accent/40 bg-surface-2 object-cover"
                />
                <div>
                  <p className="font-display text-xl font-bold tracking-tight text-ink">
                    {profile.name}
                  </p>
                  <p className="text-xs font-bold text-accent">
                    {profile.title}
                  </p>
                  <p className="mt-0.5 text-xs text-muted">
                    Based in {profile.location}
                  </p>
                </div>
              </div>

              {/* Fast turnaround promise */}
              <div className="inline-flex items-center gap-2 rounded-xl border border-emerald-500/30 bg-emerald-500/15 px-3.5 py-2 text-xs font-bold text-emerald-700 dark:text-emerald-400 shadow-sm">
                <Clock size={14} />
                <span>Typical response time: Within 24 hours</span>
              </div>

              {/* Contact Quick-Actions */}
              <div className="space-y-3 pt-2">
                {/* Email with copy */}
                <div className="group flex items-center justify-between rounded-2xl border border-line bg-surface p-3.5 shadow-sm backdrop-blur-md transition-all hover:border-accent hover:shadow-md">
                  <a
                    href={`mailto:${profile.email}`}
                    className="flex items-center gap-3 text-sm text-ink hover:text-accent transition-colors"
                  >
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/15 text-accent shadow-sm">
                      <Mail size={17} />
                    </span>
                    <span className="font-semibold text-xs sm:text-sm">{profile.email}</span>
                  </a>
                  <button
                    type="button"
                    onClick={() => handleCopy(profile.email, 'email')}
                    className="flex items-center gap-1.5 rounded-xl border border-line bg-surface-2 px-3 py-1.5 text-xs font-semibold text-muted transition-colors hover:border-accent hover:text-accent"
                    title="Copy Email"
                  >
                    {copiedKey === 'email' ? (
                      <>
                        <Check size={13} className="text-emerald-500" />
                        <span className="text-emerald-600 dark:text-emerald-400">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy size={13} />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Phone with copy */}
                <div className="group flex items-center justify-between rounded-2xl border border-line bg-surface p-3.5 shadow-sm backdrop-blur-md transition-all hover:border-cyan-500/50 hover:shadow-md">
                  <a
                    href={`tel:${profile.phone.replace(/[^+\d]/g, '')}`}
                    className="flex items-center gap-3 text-sm text-ink hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
                  >
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/15 text-cyan-600 dark:text-cyan-400 shadow-sm">
                      <Phone size={17} />
                    </span>
                    <span className="font-semibold text-xs sm:text-sm">{profile.phone}</span>
                  </a>
                  <button
                    type="button"
                    onClick={() => handleCopy(profile.phone, 'phone')}
                    className="flex items-center gap-1.5 rounded-xl border border-line bg-surface-2 px-3 py-1.5 text-xs font-semibold text-muted transition-colors hover:border-cyan-500 hover:text-cyan-600"
                    title="Copy Phone Number"
                  >
                    {copiedKey === 'phone' ? (
                      <>
                        <Check size={13} className="text-emerald-500" />
                        <span className="text-emerald-600 dark:text-emerald-400">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy size={13} />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Social Channels Row */}
                <div className="grid grid-cols-2 gap-3 pt-1">
                  <a
                    href={profile.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-2 rounded-2xl border border-line bg-surface p-3 text-xs font-bold text-muted shadow-sm transition-all hover:border-accent hover:text-accent hover:shadow-md"
                  >
                    <GithubIcon size={16} />
                    <span>GitHub</span>
                    <ArrowUpRight size={13} />
                  </a>
                  <a
                    href={profile.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-2 rounded-2xl border border-line bg-surface p-3 text-xs font-bold text-muted shadow-sm transition-all hover:border-accent hover:text-accent hover:shadow-md"
                  >
                    <LinkedinIcon size={16} />
                    <span>LinkedIn</span>
                    <ArrowUpRight size={13} />
                  </a>
                </div>

                {/* Resume Download CTA */}
                <div className="pt-2">
                  <a
                    href={profile.resume}
                    download="Neha_Pal_Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-line-bright bg-surface px-4 py-3.5 text-sm font-bold text-ink shadow-sm transition-all hover:-translate-y-0.5 hover:border-accent hover:text-accent hover:shadow-md"
                  >
                    <Download size={16} />
                    <span>Download Official Resume (PDF)</span>
                  </a>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Right Column: High-Converting Message Form */}
          <Reveal delay={0.15}>
            <form
              onSubmit={handleSubmit}
              action={FORMSPREE_ENDPOINT}
              method="POST"
              className="relative overflow-hidden rounded-2xl border border-line bg-surface p-6 shadow-xl backdrop-blur-md md:p-8"
            >
              <h3 className="font-display text-xl font-bold text-ink mb-2">
                Send a Message
              </h3>
              <p className="text-xs text-muted mb-5">
                Fill out the form below to initiate an inquiry or project discussion.
              </p>

              {/* Inquiry Type Pill Selector */}
              <div className="mb-5">
                <label className="mb-2 block text-xs font-semibold text-muted">
                  What are you looking to discuss?
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {projectTypes.map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => setSelectedType(type)}
                      className={`rounded-xl border px-3 py-2 text-left text-xs font-bold transition-all ${
                        selectedType === type
                          ? 'border-accent bg-accent/15 text-accent shadow-sm'
                          : 'border-line bg-surface-2 text-muted hover:border-accent/40 hover:text-ink'
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="mb-1.5 block text-xs font-semibold text-muted">
                    Your Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    placeholder="e.g. Alex Sharma"
                    className={inputClass}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="mb-1.5 block text-xs font-semibold text-muted">
                    Work Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    placeholder="alex@company.com"
                    className={inputClass}
                  />
                </div>

                <div>
                  <label htmlFor="message" className="mb-1.5 block text-xs font-semibold text-muted">
                    Project or Role Details
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    placeholder="Briefly describe your requirements, timelines, or role overview..."
                    className={`${inputClass} resize-none`}
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="mt-6 relative overflow-hidden flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-accent to-[#6366f1] px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-accent/30 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-accent/40 disabled:cursor-not-allowed disabled:opacity-60"
              >
                <div className="absolute inset-0 animate-shimmer" />
                <span className="relative z-10">
                  {status === 'sending' ? 'Sending Message…' : 'Submit Inquiry'}
                </span>
                <Send size={15} className="relative z-10" />
              </button>

              {status === 'sent' && (
                <div className="mt-4 flex items-center gap-2 rounded-xl border border-emerald-500/30 bg-emerald-500/15 p-3 text-xs font-semibold text-emerald-700 dark:text-emerald-400" role="status">
                  <Sparkles size={16} />
                  <span>Thank you! Your message has been received. I will be in touch shortly.</span>
                </div>
              )}
              {status === 'error' && (
                <div className="mt-4 rounded-xl border border-rose-500/30 bg-rose-500/15 p-3 text-xs font-semibold text-rose-700 dark:text-rose-400" role="alert">
                  {formError || 'Something went wrong. Please reach out directly at neha.pal072002@gmail.com.'}
                </div>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}