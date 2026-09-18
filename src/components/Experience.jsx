import { Briefcase, MapPin } from 'lucide-react'
import { experience } from '../data/portfolio'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

export default function Experience() {
  return (
    <section id="experience" className="relative border-t border-line/60 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeading index="03" title="Experience" />

        <ol className="relative border-l border-line/70 pl-7 md:pl-10">
          <span
            aria-hidden
            className="pointer-events-none absolute -left-px top-0 h-40 w-px bg-gradient-to-b from-accent to-transparent"
          />

          {experience.map((job, i) => (
            <li key={job.role} className="relative">
              <Reveal delay={i * 0.1}>
                <div className="card-hover relative rounded-lg border border-line bg-surface p-6 md:p-8">
                  <span
                    aria-hidden
                    className="absolute -left-[35px] top-7 h-3.5 w-3.5 rounded-full border-2 border-bg bg-accent shadow-[0_0_12px_rgba(138,124,255,0.9)] ring-4 ring-accent/15 md:-left-[47px]"
                  />

                  <div className="flex flex-wrap items-center gap-2">
                    <span className="flex h-8 w-8 items-center justify-center rounded-md border border-accent/30 bg-accent/10 text-accent">
                      <Briefcase size={15} />
                    </span>
                    <div>
                      <h3 className="font-display text-xl font-semibold text-ink md:text-2xl">
                        {job.role}
                      </h3>
                      <p className="text-sm text-muted">{job.company}</p>
                    </div>
                  </div>

                  <div className="mt-3 flex flex-wrap items-center gap-3 text-sm text-muted-2">
                    <span className="inline-flex items-center gap-1.5 rounded-md border border-accent/25 bg-accent/[0.07] px-2.5 py-1 font-medium text-accent">
                      {job.period}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin size={13} />
                      {job.location}
                    </span>
                  </div>

                  {job.note && (
                    <p className="mt-4 text-sm font-medium text-accent-2">{job.note}</p>
                  )}

                  <ul className="mt-4 space-y-3 text-[15px] leading-relaxed text-muted md:text-base">
                    {job.points.map((point) => (
                      <li key={point} className="flex gap-3">
                        <span className="mt-[0.55em] h-1.5 w-1.5 shrink-0 rounded-full bg-accent/70" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  {!!job.stack?.length && (
                    <div className="mt-5 flex flex-wrap gap-2 border-t border-line/60 pt-5">
                      {job.stack.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full border border-line bg-surface-2 px-3 py-1 text-xs text-muted transition-colors hover:border-accent/50 hover:text-accent"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}