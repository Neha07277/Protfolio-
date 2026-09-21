import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import {
  ArrowUpRight,
  ChevronDown,
  ExternalLink,
  Lock,
  Sparkles,
} from 'lucide-react'
import { GithubIcon } from './BrandIcons'
import { projectCategories, projects } from '../data/portfolio'
import SectionHeading from './SectionHeading'

function ProjectVisual({ project }) {
  const { theme } = project

  return (
    <div className="relative overflow-hidden rounded-xl border border-line bg-surface-2 shadow-inner">
      {/* Simulated Window Frame Header */}
      <div className="flex items-center justify-between border-b border-line bg-surface-3/80 px-3.5 py-2.5 backdrop-blur-md">
        <div className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-rose-500 shadow-[0_0_6px_rgba(244,63,94,0.6)]" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-500 shadow-[0_0_6px_rgba(245,158,11,0.6)]" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 shadow-[0_0_6px_rgba(16,185,129,0.6)]" />
        </div>
        <div className="flex items-center gap-1.5 font-mono text-[10px] text-muted-2">
          <span className={`h-1.5 w-1.5 rounded-full ${theme.indicator}`} />
          <span>{project.type.toLowerCase()}-release</span>
        </div>
      </div>

      {/* Visual Canvas with Colorful Mesh and Interactive Tech Badges */}
      <div className="relative flex aspect-[16/9] flex-col items-center justify-center overflow-hidden p-6 transition-transform duration-700 ease-out group-hover:scale-[1.02]">
        {/* Colorful gradient ambient glow */}
        <div className={`absolute inset-0 bg-gradient-to-br ${theme.gradient}`} />
        <div aria-hidden className="absolute inset-0 bg-grid opacity-40" />
        <div
          aria-hidden
          className="absolute -top-12 -right-12 h-44 w-44 rounded-full blur-3xl opacity-40 transition-opacity duration-500 group-hover:opacity-75"
          style={{ backgroundColor: theme.accent }}
        />

        {/* Center Tag / System Highlight */}
        <div className="relative z-10 flex flex-col items-center text-center">
          <div
            className="mb-3 inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-bold backdrop-blur-md shadow-sm"
            style={{
              borderColor: `${theme.accent}60`,
              backgroundColor: `${theme.accent}20`,
              color: theme.accentDark || theme.accent,
            }}
          >
            <Sparkles size={12} />
            <span>{project.metric}</span>
          </div>

          <h4 className="max-w-xs font-display text-lg font-bold text-ink tracking-tight drop-shadow-sm sm:text-xl">
            {project.title.split('—')[0]}
          </h4>
        </div>

        {/* Floating Stack Pills at bottom of preview */}
        <div className="absolute bottom-3 inset-x-3 z-10 flex flex-wrap justify-center gap-1.5">
          {project.stack.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="rounded-md border border-line bg-surface/90 px-2 py-0.5 text-[10px] font-semibold text-ink shadow-sm backdrop-blur-md"
            >
              {tech}
            </span>
          ))}
          {project.stack.length > 3 && (
            <span className="rounded-md border border-line bg-surface/90 px-2 py-0.5 text-[10px] font-semibold text-muted-2 shadow-sm backdrop-blur-md">
              +{project.stack.length - 3}
            </span>
          )}
        </div>
      </div>
    </div>
  )
}

function ProjectLink({ link, theme }) {
  if (!link.href) {
    return (
      <span className="inline-flex items-center gap-1.5 rounded-xl border border-line bg-surface-2 px-3 py-1.5 text-xs font-medium text-muted-2">
        <Lock size={12} />
        {link.label}
      </span>
    )
  }

  const isLive = link.label.toLowerCase().includes('live')
  const Icon = isLive ? ExternalLink : GithubIcon

  return (
    <a
      href={link.href}
      target="_blank"
      rel="noreferrer"
      className="group/link inline-flex items-center gap-1.5 rounded-xl border px-3.5 py-1.5 text-xs font-semibold shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
      style={{
        borderColor: `${theme.accent}60`,
        backgroundColor: `${theme.accent}15`,
        color: theme.accentDark || theme.accent,
      }}
    >
      <Icon size={13} />
      <span>{link.label}</span>
      <ArrowUpRight
        size={13}
        className="transition-transform duration-200 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
      />
    </a>
  )
}

function ProjectCard({ project, index }) {
  const [open, setOpen] = useState(index === 0)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)
  const { theme } = project

  function handleMouseMove(e) {
    const rect = e.currentTarget.getBoundingClientRect()
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    })
  }

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-surface p-5 shadow-sm transition-all duration-300 md:p-6 hover:border-accent/60 hover:shadow-xl hover:shadow-indigo-500/10"
    >
      {/* Mouse spotlight glow on hover */}
      {isHovered && (
        <div
          aria-hidden
          className="pointer-events-none absolute -inset-px transition-opacity duration-300"
          style={{
            background: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, ${theme.glow}, transparent 70%)`,
          }}
        />
      )}

      {/* Visual Window Preview */}
      <ProjectVisual project={project} />

      {/* Content */}
      <div className="relative z-10 mt-5 flex flex-1 flex-col">
        {/* Badges row */}
        <div className="flex flex-wrap items-center justify-between gap-2">
          <span
            className={`inline-flex rounded-full border px-3 py-1 text-[10px] font-bold tracking-wider uppercase ${theme.badge}`}
          >
            {project.type}
          </span>
          <span className="font-mono text-[11px] text-muted-2">
            {project.status}
          </span>
        </div>

        {/* Project Title */}
        <h3 className="mt-3 font-display text-xl font-bold leading-snug text-ink group-hover:text-accent transition-colors md:text-2xl">
          {project.title}
        </h3>

        {/* Tagline / Client Value Proposition */}
        <p className="mt-2 text-sm leading-relaxed text-muted font-medium">
          {project.tagline}
        </p>

        {/* Technology Pills */}
        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="rounded-lg border border-line bg-surface-2 px-2.5 py-1 text-xs font-medium text-muted transition-colors group-hover:border-accent/40"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Expandable Architectural Points */}
        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden"
            >
              <ul className="mt-5 space-y-2.5 border-t border-line pt-4 text-sm leading-relaxed text-muted">
                {project.bullets.map((point) => (
                  <li key={point} className="flex gap-2.5">
                    <span
                      className="mt-[0.5em] h-2 w-2 shrink-0 rounded-full"
                      style={{ backgroundColor: theme.accent }}
                    />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Card Footer: Links + Toggle */}
        <div className="mt-auto flex flex-wrap items-center justify-between gap-3 pt-6">
          <div className="flex flex-wrap items-center gap-2">
            {project.links.map((link) => (
              <ProjectLink
                key={`${project.title}-${link.label}`}
                link={link}
                theme={theme}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="flex items-center gap-1.5 rounded-xl px-3 py-1.5 text-xs font-bold text-ink transition-colors hover:text-accent hover:bg-surface-2"
            aria-expanded={open}
          >
            <span>{open ? 'Hide Highlights' : 'View Architecture'}</span>
            <motion.span
              animate={{ rotate: open ? 180 : 0 }}
              transition={{ duration: 0.25 }}
              className="flex"
            >
              <ChevronDown size={14} />
            </motion.span>
          </button>
        </div>
      </div>
    </motion.article>
  )
}

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('all')

  const filteredProjects =
    activeCategory === 'all'
      ? projects
      : projects.filter((p) => p.category === activeCategory)

  return (
    <section id="projects" className="relative border-t border-line py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeading
          index="04"
          title="Featured Projects"
          subtitle="Production software shipped for enterprise clients, real-time middleware engines, and full-stack applications."
        />

        {/* Category Tabs Filter */}
        <div className="mb-10 flex flex-wrap items-center justify-center gap-2 sm:justify-start">
          {projectCategories.map((cat) => {
            const count =
              cat.id === 'all'
                ? projects.length
                : projects.filter((p) => p.category === cat.id).length

            const isActive = activeCategory === cat.id

            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`relative rounded-xl px-4 py-2 text-xs font-bold transition-colors duration-200 sm:text-sm ${
                  isActive ? 'text-white' : 'text-muted hover:text-ink hover:bg-surface-2'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="active-project-tab"
                    className="absolute inset-0 rounded-xl bg-gradient-to-r from-accent to-[#6366f1] shadow-md shadow-accent/30"
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-2">
                  <span>{cat.label}</span>
                  <span
                    className={`rounded-full px-1.5 py-0.2 text-[10px] ${
                      isActive
                        ? 'bg-white/20 text-white'
                        : 'bg-surface-2 text-muted-2'
                    }`}
                  >
                    {count}
                  </span>
                </span>
              </button>
            )
          })}
        </div>

        {/* Project Grid */}
        <motion.div layout className="grid gap-6 md:grid-cols-2 md:gap-7">
          <AnimatePresence>
            {filteredProjects.map((project, i) => (
              <ProjectCard
                key={project.title}
                project={project}
                index={i}
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}