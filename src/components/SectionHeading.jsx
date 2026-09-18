import Reveal from './Reveal'

export default function SectionHeading({ index, title, subtitle }) {
  return (
    <Reveal className="mb-9 md:mb-12">
      <div className="flex items-center gap-3">
        <span className="font-mono text-xs tracking-[0.2em] text-accent">{index}</span>
        <span className="h-px w-10 bg-gradient-to-r from-accent/70 to-transparent" />
      </div>
      <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink md:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
          {subtitle}
        </p>
      )}
    </Reveal>
  )
}