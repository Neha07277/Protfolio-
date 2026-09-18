import { Award, GraduationCap, Medal } from 'lucide-react'
import { credentials, education } from '../data/portfolio'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

function Column({ title, icon: Icon, rows }) {
  return (
    <div className="card-hover h-full rounded-lg border border-line bg-surface p-6 md:p-8">
      <div className="mb-5 flex items-center gap-2.5">
        <span className="flex h-8 w-8 items-center justify-center rounded-md border border-accent/30 bg-accent/10 text-accent">
          <Icon size={15} />
        </span>
        <h3 className="font-display text-base font-semibold text-ink">{title}</h3>
      </div>
      <ul className="space-y-3 text-sm leading-relaxed text-muted">
        {rows.map((row) => (
          <li key={row} className="flex gap-3">
            <span className="mt-[0.55em] h-1 w-1 shrink-0 rounded-full bg-accent" />
            <span>{row}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function Education() {
  return (
    <section id="education" className="relative border-t border-line/60 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeading
          index="05"
          title="Education & Credentials"
          subtitle="Academic background, certifications, and recognition."
        />

        <div className="space-y-6">
          <Reveal>
            <div className="grid gap-5 md:grid-cols-2 md:gap-6">
              {education.map((ed) => (
                <div
                  key={ed.degree}
                  className="card-hover flex flex-col rounded-lg border border-line bg-surface p-6 md:p-8"
                >
                  <div className="flex items-start justify-between gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-md border border-accent/30 bg-accent/10 text-accent">
                      <GraduationCap size={18} />
                    </span>
                    <span className="rounded-full border border-line bg-surface-2 px-3 py-1 font-mono text-[11px] text-muted-2">
                      {ed.years}
                    </span>
                  </div>
                  <h3 className="mt-4 font-display text-xl font-semibold text-ink">
                    {ed.degree}
                  </h3>
                  <p className="mt-1 text-sm text-muted">{ed.school}</p>
                  <p className="mt-4 inline-block self-start rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
                    {ed.note}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>

          <div className="grid gap-5 md:grid-cols-2 md:gap-6">
            <Reveal delay={0.1}>
              <Column title="Certifications" icon={Award} rows={credentials.certifications} />
            </Reveal>
            <Reveal delay={0.18}>
              <Column title="Achievements" icon={Medal} rows={credentials.achievements} />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}