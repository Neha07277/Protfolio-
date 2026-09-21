import {
  Cable,
  Code2,
  Cpu,
  Database,
  Layout,
  Server,
  Wrench,
} from 'lucide-react'
import { skills } from '../data/portfolio'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

const categoryIcons = {
  Languages: Code2,
  Frontend: Layout,
  Backend: Server,
  Database: Database,
  Integrations: Cable,
  'Tools & DevOps': Wrench,
}

const colorMap = {
  amber: {
    border: 'hover:border-amber-500/50',
    iconBg: 'bg-amber-500/15 border-amber-500/30 text-amber-600 dark:text-amber-400',
    pillHover: 'hover:border-amber-500/50 hover:text-amber-600 dark:hover:text-amber-300 hover:shadow-sm',
    dot: 'bg-amber-500 shadow-[0_0_8px_#f59e0b]',
  },
  cyan: {
    border: 'hover:border-cyan-500/50',
    iconBg: 'bg-cyan-500/15 border-cyan-500/30 text-cyan-600 dark:text-cyan-400',
    pillHover: 'hover:border-cyan-500/50 hover:text-cyan-600 dark:hover:text-cyan-300 hover:shadow-sm',
    dot: 'bg-cyan-500 shadow-[0_0_8px_#06b6d4]',
  },
  emerald: {
    border: 'hover:border-emerald-500/50',
    iconBg: 'bg-emerald-500/15 border-emerald-500/30 text-emerald-600 dark:text-emerald-400',
    pillHover: 'hover:border-emerald-500/50 hover:text-emerald-600 dark:hover:text-emerald-300 hover:shadow-sm',
    dot: 'bg-emerald-500 shadow-[0_0_8px_#10b981]',
  },
  indigo: {
    border: 'hover:border-indigo-500/50',
    iconBg: 'bg-indigo-500/15 border-indigo-500/30 text-indigo-600 dark:text-indigo-400',
    pillHover: 'hover:border-indigo-500/50 hover:text-indigo-600 dark:hover:text-indigo-300 hover:shadow-sm',
    dot: 'bg-indigo-500 shadow-[0_0_8px_#6366f1]',
  },
  purple: {
    border: 'hover:border-purple-500/50',
    iconBg: 'bg-purple-500/15 border-purple-500/30 text-purple-600 dark:text-purple-400',
    pillHover: 'hover:border-purple-500/50 hover:text-purple-600 dark:hover:text-purple-300 hover:shadow-sm',
    dot: 'bg-purple-500 shadow-[0_0_8px_#a855f7]',
  },
  rose: {
    border: 'hover:border-rose-500/50',
    iconBg: 'bg-rose-500/15 border-rose-500/30 text-rose-600 dark:text-rose-400',
    pillHover: 'hover:border-rose-500/50 hover:text-rose-600 dark:hover:text-rose-300 hover:shadow-sm',
    dot: 'bg-rose-500 shadow-[0_0_8px_#f43f5e]',
  },
}

export default function Skills() {
  return (
    <section id="skills" className="relative border-t border-line py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeading
          index="03"
          title="Technical Competencies"
          subtitle="Specialized in modern JavaScript ecosystems, performant databases, and reliable enterprise integrations."
        />

        {/* Core Architecture Highlight Strip */}
        <Reveal delay={0.05}>
          <div className="mb-10 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-line bg-surface p-5 shadow-sm backdrop-blur-md md:p-6">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/15 text-accent shadow-sm">
                <Cpu size={20} />
              </span>
              <div>
                <h4 className="font-display text-sm font-bold text-ink md:text-base">
                  Core Engineering Stack
                </h4>
                <p className="text-xs text-muted">
                  Production battle-tested frameworks & integration protocols
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              <span className="rounded-xl border border-cyan-500/30 bg-cyan-500/15 px-3 py-1.5 text-xs font-bold text-cyan-700 dark:text-cyan-300 shadow-sm">
                MERN Stack
              </span>
              <span className="rounded-xl border border-indigo-500/30 bg-indigo-500/15 px-3 py-1.5 text-xs font-bold text-indigo-700 dark:text-indigo-300 shadow-sm">
                PERN Stack
              </span>
              <span className="rounded-xl border border-purple-500/30 bg-purple-500/15 px-3 py-1.5 text-xs font-bold text-purple-700 dark:text-purple-300 shadow-sm">
                Tally & ERPNext Sync
              </span>
              <span className="rounded-xl border border-emerald-500/30 bg-emerald-500/15 px-3 py-1.5 text-xs font-bold text-emerald-700 dark:text-emerald-300 shadow-sm">
                RESTful APIs
              </span>
            </div>
          </div>
        </Reveal>

        {/* Categorized Skills Grid */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((group, i) => {
            const Icon = categoryIcons[group.label] ?? Code2
            const styling = colorMap[group.accent] ?? colorMap.cyan

            return (
              <Reveal key={group.label} delay={(i % 3) * 0.08}>
                <div
                  className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-surface p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${styling.border}`}
                >
                  {/* Ambient corner glow */}
                  <div
                    aria-hidden
                    className="pointer-events-none absolute -top-12 -right-12 h-32 w-32 rounded-full opacity-30 blur-2xl transition-opacity duration-300 group-hover:opacity-60"
                    style={{ backgroundColor: group.color }}
                  />

                  {/* Header */}
                  <div className="mb-4 flex items-center justify-between">
                    <span
                      className={`flex h-10 w-10 items-center justify-center rounded-xl border ${styling.iconBg}`}
                    >
                      <Icon size={18} />
                    </span>
                    <span className="font-mono text-[10px] tracking-[0.2em] text-muted-2 uppercase">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>

                  <h3 className="mb-4 font-display text-base font-bold tracking-wide text-ink group-hover:text-accent transition-colors">
                    {group.label}
                  </h3>

                  {/* Skills Pills */}
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((skill) => (
                      <span
                        key={skill}
                        className={`rounded-xl border border-line bg-surface-2 px-3 py-1.5 text-xs font-semibold text-muted transition-all duration-200 ${styling.pillHover}`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}