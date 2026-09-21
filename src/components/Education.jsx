import { Award, CheckCircle2, GraduationCap, Medal, Sparkles } from 'lucide-react'
import { credentials, education } from '../data/portfolio'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

export default function Education() {
  return (
    <section id="education" className="relative border-t border-line py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeading
          index="06"
          title="Education & Certifications"
          subtitle="Academic excellence, verified technical certifications, and hackathon awards."
        />

        <div className="space-y-8">
          {/* Degrees Grid */}
          <div className="grid gap-6 md:grid-cols-2">
            {education.map((ed, i) => (
              <Reveal key={ed.degree} delay={i * 0.1}>
                <div className="group relative overflow-hidden rounded-2xl border border-line bg-surface p-7 shadow-sm transition-all duration-300 hover:border-cyan-500/50 hover:shadow-xl">
                  <div
                    aria-hidden
                    className="pointer-events-none absolute -top-12 -right-12 h-32 w-32 rounded-full bg-cyan-500/10 blur-2xl transition-opacity duration-300 group-hover:opacity-70"
                  />

                  <div className="flex items-start justify-between gap-4">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-cyan-500/30 bg-cyan-500/15 text-cyan-600 dark:text-cyan-400 shadow-sm">
                      <GraduationCap size={22} />
                    </span>
                    <span className="rounded-full border border-line bg-surface-2 px-3 py-1 font-mono text-xs font-semibold text-muted-2">
                      {ed.years}
                    </span>
                  </div>

                  <h3 className="mt-5 font-display text-xl font-bold text-ink group-hover:text-accent transition-colors">
                    {ed.degree}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-muted">{ed.school}</p>

                  <div className="mt-6 flex flex-wrap items-center gap-2.5">
                    <span className="inline-flex items-center gap-1.5 rounded-xl border border-cyan-500/30 bg-cyan-500/15 px-3 py-1 text-xs font-bold text-cyan-700 dark:text-cyan-300 shadow-sm">
                      <Sparkles size={13} />
                      {ed.note}
                    </span>
                    <span className="rounded-xl border border-line bg-surface-2 px-2.5 py-1 text-xs font-semibold text-muted-2">
                      {ed.badge}
                    </span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Certifications & Achievements */}
          <div className="grid gap-6 md:grid-cols-2">
            {/* Certifications */}
            <Reveal delay={0.1}>
              <div className="group relative h-full overflow-hidden rounded-2xl border border-line bg-surface p-7 shadow-sm transition-all duration-300 hover:border-accent hover:shadow-xl">
                <div className="mb-6 flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-accent/30 bg-accent/15 text-accent shadow-sm">
                    <Award size={20} />
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-bold text-ink">
                      Industry Certifications
                    </h3>
                    <p className="text-xs text-muted">
                      Validated by leading institutions
                    </p>
                  </div>
                </div>

                <div className="space-y-3.5">
                  {credentials.certifications.map((cert) => (
                    <div
                      key={cert.title}
                      className="flex items-start justify-between gap-3 rounded-xl border border-line bg-surface-2 p-3.5 shadow-sm transition-colors hover:border-accent/40"
                    >
                      <div className="flex items-start gap-2.5">
                        <CheckCircle2 size={16} className="mt-0.5 text-accent shrink-0" />
                        <div>
                          <p className="text-xs font-bold text-ink sm:text-sm">
                            {cert.title}
                          </p>
                          <p className="text-[11px] text-muted-2">{cert.issuer}</p>
                        </div>
                      </div>
                      <span className="font-mono text-[10px] text-muted-2 shrink-0">
                        {cert.date}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* Achievements */}
            <Reveal delay={0.15}>
              <div className="group relative h-full overflow-hidden rounded-2xl border border-line bg-surface p-7 shadow-sm transition-all duration-300 hover:border-amber-500/50 hover:shadow-xl">
                <div className="mb-6 flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-amber-500/30 bg-amber-500/15 text-amber-600 dark:text-amber-400 shadow-sm">
                    <Medal size={20} />
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-bold text-ink">
                      Honors & Hackathons
                    </h3>
                    <p className="text-xs text-muted">
                      Competitive recognition & publications
                    </p>
                  </div>
                </div>

                <div className="space-y-3.5">
                  {credentials.achievements.map((item) => (
                    <div
                      key={item.title}
                      className="flex items-start justify-between gap-3 rounded-xl border border-line bg-surface-2 p-3.5 shadow-sm transition-colors hover:border-amber-500/40"
                    >
                      <div className="flex items-start gap-2.5">
                        <Sparkles size={16} className="mt-0.5 text-amber-500 shrink-0" />
                        <div>
                          <p className="text-xs font-bold text-ink sm:text-sm">
                            {item.title}
                          </p>
                          <p className="text-[11px] text-muted-2">{item.org}</p>
                        </div>
                      </div>
                      <span className="font-mono text-[10px] text-muted-2 shrink-0">
                        {item.date}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}