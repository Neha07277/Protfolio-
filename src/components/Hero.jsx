import { motion } from 'framer-motion'
import {
  ArrowRight,
  ArrowUpRight,
  Download,
  Mail,
  Sparkles,
  Zap,
} from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './BrandIcons'
import { profile, stats } from '../data/portfolio'

const EASE = [0.22, 1, 0.36, 1]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
}

const item = {
  hidden: { opacity: 0, y: 22 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: EASE },
  },
}

function SocialLink({ href, label, icon, external, arrow }) {
  return (
    <a
      href={href}
      {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}
      className="group inline-flex items-center gap-1.5 rounded-xl border border-line bg-surface px-3.5 py-2 text-xs font-medium text-muted shadow-sm backdrop-blur-md transition-all duration-200 hover:-translate-y-0.5 hover:border-accent hover:text-accent hover:shadow-md"
      aria-label={label}
    >
      {icon}
      <span>{label}</span>
      {arrow && (
        <ArrowUpRight
          size={13}
          className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-muted-2 group-hover:text-accent"
        />
      )}
    </a>
  )
}

export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-[92vh] items-center justify-center overflow-hidden pt-28 pb-16 md:pt-32 md:pb-20">
      {/* Background grid */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_75%)]" />
      </div>

      <div className="relative mx-auto w-full max-w-6xl px-5 md:px-8">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-col-reverse items-center gap-12 lg:flex-row lg:items-center lg:justify-between lg:gap-16"
        >
          {/* Main Copy */}
          <motion.div
            variants={item}
            className="flex w-full max-w-2xl flex-col items-center text-center lg:items-start lg:text-left"
          >
            {/* Pulsing Status Badge */}
            <div className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-emerald-500/30 bg-emerald-500/15 px-4 py-1.5 text-xs font-semibold text-emerald-600 dark:text-emerald-400 backdrop-blur-md shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              <span>Available for Full-Stack Roles & High-Impact Projects</span>
            </div>

            {/* Headline */}
            <h1 className="font-display text-5xl font-extrabold leading-[1.08] tracking-tight sm:text-6xl md:text-7xl lg:text-[5.2rem]">
              <span className="text-gradient">{profile.name}</span>
            </h1>

            {/* Sub-headline */}
            <p className="mt-4 flex flex-wrap items-center justify-center gap-2 font-display text-lg font-semibold text-ink sm:text-2xl md:text-[1.65rem] lg:justify-start">
              <span>{profile.title}</span>
              <span className="hidden sm:inline text-accent">•</span>
              <span className="text-accent font-normal text-base sm:text-xl">Mumbai, India</span>
            </p>

            {/* Tagline / Value Proposition */}
            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted md:text-lg">
              {profile.tagline}
            </p>

            {/* Action Buttons */}
            <div className="mt-8 flex w-full flex-wrap items-center justify-center gap-3.5 lg:justify-start">
              <a
                href="#projects"
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-accent to-[#6366f1] px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-accent/30 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-accent/40"
              >
                <div className="absolute inset-0 animate-shimmer" />
                <Sparkles size={16} className="text-white/90" />
                <span className="relative z-10">Explore Projects & Demos</span>
                <ArrowRight size={15} className="relative z-10 transition-transform duration-300 group-hover:translate-x-1" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-xl border border-line bg-surface px-5 py-3.5 text-sm font-medium text-ink shadow-sm backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-accent hover:text-accent hover:shadow-md"
              >
                <Zap size={15} className="text-accent" />
                Let's Work Together
              </a>

              <a
                href={profile.resume}
                download="Neha_Pal_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-line bg-surface-2 px-4 py-3.5 text-sm font-medium text-muted transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/40 hover:text-ink shadow-sm"
              >
                <Download size={15} />
                <span className="hidden sm:inline">Resume</span>
              </a>
            </div>

            {/* Quick Social / Direct Contact Channels */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-2.5 lg:justify-start">
              <SocialLink href={profile.github} label="GitHub" icon={<GithubIcon size={14} />} external />
              <SocialLink href={profile.linkedin} label="LinkedIn" icon={<LinkedinIcon size={14} />} external arrow />
              <SocialLink href={`mailto:${profile.email}`} label="Direct Email" icon={<Mail size={14} className="text-accent" />} />
            </div>
          </motion.div>

          {/* Portrait with pristine, unobstructed view */}
          <motion.div
            variants={item}
            className="relative w-full max-w-[300px] sm:max-w-[330px] lg:w-[330px] lg:shrink-0"
          >
            {/* Multi-color ambient background glows behind the frame */}
            <div aria-hidden className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-accent/25 via-cyan-400/25 to-pink-400/25 blur-2xl opacity-75" />
            
            {/* Outer stylized gradient frame */}
            <div className="relative rounded-2xl bg-gradient-to-b from-indigo-500/40 via-accent/50 to-cyan-500/40 p-[2px] shadow-xl shadow-indigo-500/10 dark:shadow-black/80">
              <div className="relative overflow-hidden rounded-[14px] bg-surface-2">
                <img
                  src="/headshot.jpg"
                  alt="Neha Pal - Full-Stack Developer"
                  className="aspect-[3/4] w-full object-cover transition-transform duration-700 ease-out hover:scale-[1.02]"
                />
              </div>
            </div>

            {/* Clean tech stack pills placed neatly BELOW the photo (never overlapping) */}
            <div className="mt-4 flex flex-wrap items-center justify-center gap-1.5">
              <span className="rounded-lg border border-cyan-500/30 bg-surface px-2.5 py-1 text-[11px] font-semibold text-cyan-700 dark:text-cyan-400 shadow-sm">
                React.js
              </span>
              <span className="rounded-lg border border-emerald-500/30 bg-surface px-2.5 py-1 text-[11px] font-semibold text-emerald-700 dark:text-emerald-400 shadow-sm">
                Node & Express
              </span>
              <span className="rounded-lg border border-indigo-500/30 bg-surface px-2.5 py-1 text-[11px] font-semibold text-indigo-700 dark:text-indigo-400 shadow-sm">
                PostgreSQL
              </span>
              <span className="rounded-lg border border-amber-500/30 bg-surface px-2.5 py-1 text-[11px] font-semibold text-amber-700 dark:text-amber-400 shadow-sm">
                ERP & API Sync
              </span>
            </div>
          </motion.div>
        </motion.div>

        {/* Client Impact Metric Strip */}
        <motion.div
          variants={item}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 gap-3.5 sm:grid-cols-4 md:gap-4"
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="group relative overflow-hidden rounded-2xl border border-line bg-surface p-4 shadow-sm backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:shadow-lg hover:shadow-indigo-500/10"
            >
              <div className="absolute top-0 right-0 h-16 w-16 translate-x-4 -translate-y-4 rounded-full bg-accent/15 blur-xl transition-all duration-300 group-hover:bg-accent/30" />
              <p className="font-display text-2xl font-bold tracking-tight md:text-3xl">
                <span className="text-gradient-cyan">{stat.value}</span>
              </p>
              <p className="mt-1 font-display text-xs font-bold text-ink md:text-sm">
                {stat.label}
              </p>
              <p className="mt-1 text-[11px] leading-tight text-muted">
                {stat.detail}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}