import { Compass, GraduationCap } from 'lucide-react'
import { about } from '../data/portfolio'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

const sectionSubtitle =
  'Software developer and technical project coordinator with hands-on experience across full-stack development and shipping production software.'

function InfoCard({ icon: Icon, title, children, className = 'card-hover' }) {
  return (
    <div
      className={`rounded-lg border border-line bg-surface p-6 transition-colors md:p-7 ${className}`}
    >
      <div className="mb-4 flex items-center gap-2.5">
        <span className="flex h-8 w-8 items-center justify-center rounded-md border border-accent/30 bg-accent/10 text-accent">
          <Icon size={16} />
        </span>
        <h3 className="font-display text-base font-semibold text-ink">{title}</h3>
      </div>
      {children}
    </div>
  )
}

export default function About() {
  return (
    <section id="about" className="relative border-t border-line/60 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
          {/* Left — intro */}
          <div>
            <SectionHeading index="01" title="About" subtitle={sectionSubtitle} />

            <Reveal className="space-y-5 text-base leading-relaxed text-muted md:text-lg">
              <p className="text-ink/90">{about.intro}</p>
              <ul className="space-y-4">
                {about.highlights.map((point) => (
                  <li key={point} className="flex gap-3">
                    <span className="mt-[0.55em] flex h-1.5 w-1.5 shrink-0">
                      <span className="h-full w-full rounded-full bg-accent shadow-[0_0_8px_rgba(138,124,255,0.8)]" />
                    </span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          {/* Right — info cards */}
          <div className="space-y-6">
            <Reveal delay={0.1}>
              <InfoCard icon={GraduationCap} title="Academic">
                <ul className="space-y-3 text-sm text-muted">
                  {about.education.map((line) => (
                    <li key={line} className="flex gap-3">
                      <span className="mt-[0.55em] h-1 w-1 shrink-0 rounded-full bg-accent" />
                      {line}
                    </li>
                  ))}
                </ul>
              </InfoCard>
            </Reveal>

            <Reveal delay={0.18}>
              <InfoCard icon={Compass} title="Approach">
                <p className="text-sm leading-relaxed text-muted-2">
                  Comfortable moving between hands-on coding (MERN / PERN stacks)
                  and coordinating developers — tracking deadlines, unblocking
                  engineers, and keeping concurrent products on schedule.
                </p>
              </InfoCard>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}