import { CheckCircle2, Compass, GraduationCap } from 'lucide-react'
import { about } from '../data/portfolio'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

const sectionSubtitle =
  'Full-stack engineer and technical project coordinator bridging clean code with disciplined agile delivery.'

function InfoCard({ icon: Icon, title, children, accentColor = '#6366f1', className = '' }) {
  return (
    <div
      className={`group relative overflow-hidden rounded-2xl border border-line bg-surface p-6 shadow-sm transition-all duration-300 hover:border-accent hover:shadow-xl md:p-7 ${className}`}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -top-12 -right-12 h-28 w-28 rounded-full blur-2xl opacity-20 transition-opacity duration-300 group-hover:opacity-50"
        style={{ backgroundColor: accentColor }}
      />
      <div className="mb-4 flex items-center gap-3">
        <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-accent/30 bg-accent/15 text-accent shadow-sm">
          <Icon size={18} />
        </span>
        <h3 className="font-display text-base font-bold text-ink">{title}</h3>
      </div>
      {children}
    </div>
  )
}

export default function About() {
  return (
    <section id="about" className="relative border-t border-line py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
          {/* Left Column: Story & Highlights */}
          <div>
            <SectionHeading index="01" title="About Me" subtitle={sectionSubtitle} />

            <Reveal className="space-y-6 text-base leading-relaxed text-muted md:text-lg">
              <p className="font-medium text-ink">
                {about.intro}
              </p>

              <div className="space-y-4 pt-2">
                {about.highlights.map((point) => (
                  <div key={point} className="flex items-start gap-3.5">
                    <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent">
                      <CheckCircle2 size={14} />
                    </span>
                    <span className="text-sm md:text-base leading-relaxed text-muted">
                      {point}
                    </span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Right Column: Key Accreditations & Philosophy */}
          <div className="space-y-6">
            <Reveal delay={0.1}>
              <InfoCard
                icon={GraduationCap}
                title="Academic Excellence"
                accentColor="#06b6d4"
              >
                <ul className="space-y-3.5 text-sm text-muted">
                  {about.education.map((line) => (
                    <li key={line} className="flex items-center gap-3">
                      <span className="h-2 w-2 shrink-0 rounded-full bg-cyan-500 shadow-[0_0_6px_#06b6d4]" />
                      <span className="font-semibold text-ink">{line}</span>
                    </li>
                  ))}
                </ul>
              </InfoCard>
            </Reveal>

            <Reveal delay={0.18}>
              <InfoCard
                icon={Compass}
                title="Engineering Philosophy"
                accentColor="#a855f7"
              >
                <p className="text-sm leading-relaxed text-muted">
                  I believe the most valuable engineers are those who understand both the code and the business context. My dual background in hands-on full-stack development and technical project coordination ensures every feature is built for performance, delivered on schedule, and aligned with client objectives.
                </p>
              </InfoCard>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}