import { motion } from 'framer-motion'
import { ArrowRight, ArrowUpRight, Mail } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './BrandIcons'
import { profile } from '../data/portfolio'

const EASE = [0.22, 1, 0.36, 1]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.12 } },
}

const item = {
  hidden: { opacity: 0, y: 24 },
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
      className="group inline-flex items-center gap-1.5 rounded-md border border-line bg-surface/40 px-3 py-2 text-sm text-muted backdrop-blur-sm transition-all duration-200 hover:-translate-y-px hover:border-accent/50 hover:text-accent hover:shadow-[0_0_24px_-8px_rgba(138,124,255,0.35)]"
      aria-label={label}
    >
      {icon}
      <span className="hidden sm:inline">{label}</span>
      {arrow && <ArrowUpRight size={13} className="transition-transform duration-200 group-hover:translate-x-px group-hover:-translate-y-px" />}
    </a>
  )
}

export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen items-center overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
        <div className="absolute left-1/2 top-20 -translate-x-1/2 h-[30rem] w-[60rem] rounded-full bg-accent/[0.12] blur-[140px]" />
        <div className="absolute -right-32 top-48 h-80 w-80 rounded-full bg-accent/[0.08] blur-[110px]" />
        <div className="absolute -left-32 bottom-32 h-72 w-72 rounded-full bg-[#6d5cff]/[0.08] blur-[100px]" />
      </div>

      <div className="relative mx-auto w-full max-w-6xl px-5 py-32 md:px-8 md:py-36">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-col-reverse items-center gap-14 lg:flex-row lg:items-center lg:justify-between lg:gap-20"
        >
          {/* Text */}
          <motion.div
            variants={item}
            className="flex w-full max-w-xl flex-col items-center text-center lg:items-start lg:text-left"
          >
            <div className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-line bg-surface/60 px-4 py-1.5 text-sm text-muted backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              {profile.location}
            </div>

            <h1 className="font-display text-5xl font-bold leading-[1.04] tracking-tight sm:text-6xl md:text-7xl lg:text-[5.5rem]">
              <span className="text-gradient">{profile.name}</span>
            </h1>

            <p className="mt-4 font-display text-xl font-medium text-ink/85 sm:text-2xl md:text-3xl">
              {profile.title}
            </p>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted md:text-lg">
              {profile.tagline}
            </p>

            <div className="mt-10 flex w-full flex-wrap items-center justify-center gap-3.5 lg:justify-start">
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-md bg-accent px-6 py-3 text-sm font-medium text-white shadow-[0_0_44px_-10px_rgba(138,124,255,0.7)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent-2 hover:shadow-[0_0_52px_-8px_rgba(138,124,255,0.85)]"
              >
                View Work
                <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-0.5" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-md border border-line bg-surface/40 px-6 py-3 text-sm font-medium text-ink backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/60 hover:text-accent"
              >
                Get in Touch
              </a>
            </div>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-2.5 lg:justify-start">
              <SocialLink href={profile.github} label="GitHub" icon={<GithubIcon size={15} />} external />
              <SocialLink href={profile.linkedin} label="LinkedIn" icon={<LinkedinIcon size={15} />} external arrow />
              <SocialLink href={`mailto:${profile.email}`} label="Email" icon={<Mail size={15} />} />
            </div>
          </motion.div>

          {/* Portrait */}
          <motion.div variants={item} className="relative w-full max-w-[300px] lg:w-[300px] lg:shrink-0">
            <div aria-hidden className="absolute -inset-10 rounded-full bg-accent/[0.14] blur-3xl" />
            <div className="relative rounded-2xl bg-gradient-to-b from-accent/50 via-accent/[0.12] to-transparent p-px">
              <div className="relative overflow-hidden rounded-[15px] border border-white/5 bg-surface-2">
                <img
                  src="/headshot.jpg"
                  alt="Portrait of Neha Pal"
                  className="aspect-[3/4] w-full object-cover transition-transform duration-700 ease-out hover:scale-[1.04]"
                />
                <div
                  aria-hidden
                  className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-bg/85 to-transparent"
                />
              </div>
            </div>

            {/* Floating tech badges — hidden on small screens to avoid cluttering the small portrait */}
            <div className="animate-float absolute -left-4 top-8 z-10 hidden items-center gap-1.5 rounded-full border border-line/80 bg-surface/80 px-3.5 py-1.5 text-[11px] font-medium text-ink shadow-lg shadow-black/20 backdrop-blur-md sm:flex">
              <span className="h-1.5 w-1.5 rounded-full bg-[#61dafb]" />
              React
            </div>
            <div className="animate-float-delay absolute -right-3 top-[38%] z-10 hidden items-center gap-1.5 rounded-full border border-line/80 bg-surface/80 px-3.5 py-1.5 text-[11px] font-medium text-ink shadow-lg shadow-black/20 backdrop-blur-md sm:flex">
              <span className="h-1.5 w-1.5 rounded-full bg-[#3c873a]" />
              Node.js
            </div>
            <div className="animate-float absolute -left-6 bottom-14 z-10 hidden items-center gap-1.5 rounded-full border border-line/80 bg-surface/80 px-3.5 py-1.5 text-[11px] font-medium text-ink shadow-lg shadow-black/20 backdrop-blur-md sm:flex">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              REST API
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 text-muted-2 lg:flex"
      >
        <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <span className="h-10 w-px bg-gradient-to-b from-muted-2/60 to-transparent" />
      </motion.div>
    </section>
  )
}