import { Code, GitPullRequest, Workflow } from 'lucide-react'
import { services } from '../data/portfolio'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

const serviceIcons = [Code, Workflow, GitPullRequest]
const serviceColors = [
  {
    border: 'hover:border-cyan-500/50',
    badge: 'text-cyan-700 dark:text-cyan-400 border-cyan-500/30 bg-cyan-500/15',
    iconBg: 'bg-cyan-500/15 border-cyan-500/30 text-cyan-600 dark:text-cyan-400',
    glow: 'rgba(6, 182, 212, 0.25)',
  },
  {
    border: 'hover:border-emerald-500/50',
    badge: 'text-emerald-700 dark:text-emerald-400 border-emerald-500/30 bg-emerald-500/15',
    iconBg: 'bg-emerald-500/15 border-emerald-500/30 text-emerald-600 dark:text-emerald-400',
    glow: 'rgba(16, 185, 129, 0.25)',
  },
  {
    border: 'hover:border-purple-500/50',
    badge: 'text-purple-700 dark:text-purple-400 border-purple-500/30 bg-purple-500/15',
    iconBg: 'bg-purple-500/15 border-purple-500/30 text-purple-600 dark:text-purple-400',
    glow: 'rgba(168, 85, 247, 0.25)',
  },
]

export default function Services() {
  return (
    <section id="services" className="relative border-t border-line py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeading
          index="02"
          title="What I Deliver"
          subtitle="Specialized capabilities designed to build, scale, and connect high-performance software systems."
        />

        <div className="grid gap-6 md:grid-cols-3">
          {services.map((service, i) => {
            const Icon = serviceIcons[i] ?? Code
            const style = serviceColors[i] ?? serviceColors[0]

            return (
              <Reveal key={service.title} delay={i * 0.1}>
                <div
                  className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-surface p-7 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl ${style.border}`}
                >
                  {/* Corner glow */}
                  <div
                    aria-hidden
                    className="pointer-events-none absolute -top-16 -right-16 h-36 w-36 rounded-full blur-3xl opacity-30 transition-opacity duration-300 group-hover:opacity-70"
                    style={{ backgroundColor: style.glow }}
                  />

                  <div className="mb-6 flex items-center justify-between">
                    <span
                      className={`flex h-12 w-12 items-center justify-center rounded-xl border ${style.iconBg}`}
                    >
                      <Icon size={22} />
                    </span>
                    <span
                      className={`rounded-full border px-3 py-1 text-[11px] font-bold ${style.badge}`}
                    >
                      {service.tag}
                    </span>
                  </div>

                  <h3 className="mb-3 font-display text-xl font-bold text-ink group-hover:text-accent transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-sm leading-relaxed text-muted">
                    {service.description}
                  </p>

                  <div className="mt-auto pt-6">
                    <a
                      href="#contact"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-accent transition-all hover:translate-x-1"
                    >
                      <span>Inquire about this</span>
                      <span>→</span>
                    </a>
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
