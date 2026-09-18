import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUpRight, ChevronDown, Lock } from 'lucide-react'
import { GithubIcon } from './BrandIcons'
import { projects } from '../data/portfolio'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

const typeStyles = {
  Professional: {
    badge: 'text-accent border-accent/30 bg-accent/10',
    visual: 'from-accent/35 via-accent/[0.08] to-transparent',
    text: 'text-accent',
  },
  Personal: {
    badge: 'text-emerald-300 border-emerald-300/30 bg-emerald-300/10',
    visual: 'from-emerald-400/25 via-emerald-400/[0.06] to-transparent',
    text: 'text-emerald-300',
  },
  Academic: {
    badge: 'text-amber-300 border-amber-300/30 bg-amber-300/10',
    visual: 'from-amber-300/25 via-amber-300/[0.06] to-transparent',
    text: 'text-amber-300',
  },
}

function getInitials(title) {
  return title
    .split(/[\s—–-]+/)
    .slice(0, 2)
    .map((w) => w[0])
    .join('')
}

function ProjectVisual({ project, featured }) {
  const palette = typeStyles[project.type] ?? typeStyles.Professional
  return (
    <div className="relative flex-1 overflow-hidden rounded-lg border border-line/60 bg-surface">
      <div className={`absolute inset-0 bg-gradient-to-br ${palette.visual}`} />
      <div aria-hidden className="absolute inset-0 bg-grid opacity-70" />
      <div
        className={`relative flex items-center justify-center transition-transform duration-700 ease-out group-hover:scale-[1.03] ${
          featured ? 'aspect-[16/9] lg:aspect-auto lg:h-full' : 'aspect-[16/9]'
        }`}
      >
        <div aria-hidden className="absolute inset-0 flex items-center justify-center">
          <span className="font-display text-7xl font-bold tracking-tight text-white/[0.05] select-none md:text-8xl">
            {getInitials(project.title)}
          </span>
        </div>

        <div className="relative z-10 flex flex-wrap justify-center gap-1.5 px-4">
          {project.stack.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="rounded-md border border-white/10 bg-bg/70 px-2.5 py-1 text-[11px] text-muted backdrop-blur-sm"
            >
              {tech}
            </span>
          ))}
          {project.stack.length > 4 && (
            <span className="rounded-md border border-white/10 bg-bg/70 px-2.5 py-1 text-[11px] text-muted-2 backdrop-blur-sm">
              +{project.stack.length - 4}
            </span>
          )}
        </div>
      </div>
    </div>
  )
}

function ProjectLink({ link }) {
  if (!link.href) {
    return (
      <span className="inline-flex items-center gap-1.5 rounded-md border border-line bg-surface-2/60 px-3 py-1.5 text-xs text-muted-2">
        <Lock size={12} />
        {link.label}
      </span>
    )
  }
  const isExternal = link.href.startsWith('http')
  const externalProp = isExternal ? { target: '_blank', rel: 'noreferrer' } : {}
  const Icon = isExternal ? ArrowUpRight : GithubIcon
  return (
    <a
      href={link.href}
      {...externalProp}
      className="group/link inline-flex items-center gap-1.5 rounded-md border border-accent/30 bg-accent/10 px-3 py-1.5 text-xs font-medium text-accent transition-all duration-200 hover:-translate-y-px hover:border-accent/60 hover:bg-accent/20"
    >
      {Icon === GithubIcon ? <GithubIcon size={13} /> : null}
      {link.label}
      {Icon === ArrowUpRight ? (
        <ArrowUpRight size={13} className="transition-transform duration-200 group-hover/link:translate-x-px group-hover/link:-translate-y-px" />
      ) : null}
    </a>
  )
}

function ProjectCard({ project, index, featured }) {
  const [open, setOpen] = useState(featured || index === 0)
  const palette = typeStyles[project.type] ?? typeStyles.Professional

  return (
    <Reveal delay={(index % 2) * 0.08} className={featured ? 'lg:col-span-2' : ''}>
      <article
        className={`group card-hover flex h-full flex-col rounded-lg border bg-surface transition-colors ${
          open ? 'border-accent/30' : 'border-line'
        }`}
      >
        <div className={`flex flex-col gap-5 p-5 md:p-6 ${featured ? 'md:grid md:grid-cols-[1.25fr_1fr] md:gap-7' : ''}`}>
          <ProjectVisual project={project} featured={featured} />

          <div className="flex flex-1 flex-col">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <span
                className={`inline-flex rounded-full border px-3 py-1 text-[11px] tracking-wide uppercase ${palette.badge}`}
              >
                {project.type}
              </span>
              <span className="font-mono text-[11px] text-muted-2">
                {project.status}
              </span>
            </div>

            <h3 className="mt-3 font-display text-xl font-semibold leading-snug text-ink md:text-2xl">
              {project.title}
            </h3>

            <p className="mt-2.5 line-clamp-2 text-sm leading-relaxed text-muted">
              {project.bullets[0]}
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              {project.stack.slice(0, 4).map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-line px-3 py-0.5 text-xs text-muted-2"
                >
                  {tech}
                </span>
              ))}
            </div>

            <AnimatePresence initial={false}>
              {open && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <ul className="mt-4 space-y-2.5 border-t border-line/60 pt-4 text-sm leading-relaxed text-muted">
                    {project.bullets.map((point) => (
                      <li key={point} className="flex gap-2.5">
                        <span className={`mt-[0.55em] h-1 w-1 shrink-0 rounded-full ${palette.text}`} />
                        {point}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="mt-auto flex flex-wrap items-center justify-between gap-3 pt-5">
              <div className="flex flex-wrap items-center gap-2">
                {project.links.map((link) => (
                  <ProjectLink key={`${project.title}-${link.label}`} link={link} />
                ))}
              </div>

              <button
                type="button"
                onClick={() => setOpen((v) => !v)}
                className="flex items-center gap-1.5 text-sm font-medium text-ink transition-colors hover:text-accent"
                aria-expanded={open}
              >
                {open ? 'Close' : 'Details'}
                <motion.span
                  animate={{ rotate: open ? 180 : 0 }}
                  transition={{ duration: 0.25 }}
                  className="flex"
                >
                  <ChevronDown size={15} />
                </motion.span>
              </button>
            </div>
          </div>
        </div>
      </article>
    </Reveal>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="relative border-t border-line/60 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeading
          index="04"
          title="Projects"
          subtitle="Production work shipped for client products, plus personal and academic builds."
        />

        <div className="grid gap-5 md:grid-cols-2 md:gap-6">
          {projects.map((project, i) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={i}
              featured={i < 2}
            />
          ))}
        </div>
      </div>
    </section>
  )
}