import { Briefcase, MapPin, Users } from 'lucide-react'
import { experience } from '../data/portfolio'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

export default function Experience() {
  return (
    <section id="experience" className="relative border-t border-line py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeading
          index="05"
          title="Work Experience"
          subtitle="Production software engineering and technical team leadership."
        />

        <div className="relative border-l-2 border-accent/40 pl-6 md:pl-10">
          <span
            aria-hidden
            className="pointer-events-none absolute -left-[2px] top-0 h-48 w-[2px] bg-gradient-to-b from-cyan-500 via-accent to-transparent shadow-sm"
          />

          {experience.map((job, i) => (
            <div key={job.role} className="relative">
              <Reveal delay={i * 0.1}>
                <div className="group relative overflow-hidden rounded-2xl border border-line bg-surface p-6 shadow-sm transition-all duration-300 hover:border-accent hover:shadow-xl md:p-8">
                  {/* Glowing timeline node */}
                  <span
                    aria-hidden
                    className="absolute -left-[33px] top-8 h-4 w-4 rounded-full border-2 border-bg bg-accent shadow-md ring-4 ring-accent/20 md:-left-[49px]"
                  />

                  {/* Header Row */}
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-accent/30 bg-accent/15 text-accent shadow-sm">
                        <Briefcase size={20} />
                      </span>
                      <div>
                        <h3 className="font-display text-xl font-bold text-ink md:text-2xl">
                          {job.role}
                        </h3>
                        <p className="font-semibold text-muted">{job.company}</p>
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-2.5">
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-accent/40 bg-accent/15 px-3 py-1 text-xs font-bold text-accent shadow-sm">
                        {job.period}
                      </span>
                      <span className="inline-flex items-center gap-1 text-xs font-medium text-muted-2">
                        <MapPin size={13} />
                        {job.location}
                      </span>
                    </div>
                  </div>

                  {/* Dual Role Spotlight Pill */}
                  {job.note && (
                    <div className="mt-4 inline-flex items-center gap-2 rounded-xl border border-cyan-500/30 bg-cyan-500/15 px-3.5 py-1.5 text-xs font-bold text-cyan-700 dark:text-cyan-300 shadow-sm">
                      <Users size={14} />
                      <span>{job.note}</span>
                    </div>
                  )}

                  {/* Detailed Impact Bullets */}
                  <ul className="mt-6 space-y-3.5 text-sm leading-relaxed text-muted md:text-base">
                    {job.points.map((point) => (
                      <li key={point} className="flex items-start gap-3">
                        <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-accent shadow-sm" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Technology Stack Pills */}
                  {!!job.stack?.length && (
                    <div className="mt-6 flex flex-wrap gap-2 border-t border-line pt-6">
                      {job.stack.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-lg border border-line bg-surface-2 px-3 py-1 text-xs font-semibold text-muted transition-colors hover:border-accent hover:text-accent"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}