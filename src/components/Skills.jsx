import { Cable, Code2, Database, Layout, Server, Wrench } from 'lucide-react'
import { skills } from '../data/portfolio'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

const categoryIcons = {
  Languages: Code2,
  Frontend: Layout,
  Backend: Server,
  Database: Database,
  Integrations: Cable,
  Tools: Wrench,
}

export default function Skills() {
  return (
    <section id="skills" className="relative border-t border-line/60 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeading
          index="02"
          title="Skills"
          subtitle="The languages, tools, and integrations I work with day to day."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((group, i) => {
            const Icon = categoryIcons[group.label] ?? Code2
            return (
              <Reveal key={group.label} delay={(i % 3) * 0.08}>
                <div className="card-hover flex h-full flex-col rounded-lg border border-line bg-surface p-6">
                  <div className="mb-4 flex items-center justify-between">
                    <span className="flex h-9 w-9 items-center justify-center rounded-md border border-accent/30 bg-accent/10 text-accent">
                      <Icon size={17} />
                    </span>
                    <span className="font-mono text-[10px] tracking-[0.2em] text-muted-2 uppercase">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <h3 className="mb-3 font-display text-base font-semibold tracking-wide text-ink">
                    {group.label}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-line bg-surface-2 px-3 py-1 text-[13px] text-muted transition-colors duration-200 hover:border-accent/50 hover:text-accent hover:shadow-[0_0_16px_-6px_rgba(138,124,255,0.4)]"
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