import { ArrowUp, Mail } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './BrandIcons'
import { profile } from '../data/portfolio'

const currentYear = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className="border-t border-line py-12 bg-surface/60 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-5 md:flex-row md:px-8">
        <div className="flex flex-col items-center gap-1.5 text-center md:items-start md:text-left">
          <p className="font-display font-bold text-ink text-base">
            {profile.name}
            <span className="ml-2 text-xs font-semibold text-accent">
              {profile.title}
            </span>
          </p>
          <p className="text-xs text-muted-2">
            © {currentYear} Neha Pal • Engineered with React 19, Tailwind CSS &amp; Framer Motion
          </p>
        </div>

        <div className="flex items-center gap-3">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-line bg-surface text-muted shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-accent hover:text-accent hover:shadow-md"
          >
            <GithubIcon size={17} />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-line bg-surface text-muted shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-accent hover:text-accent hover:shadow-md"
          >
            <LinkedinIcon size={17} />
          </a>
          <a
            href={`mailto:${profile.email}`}
            aria-label="Email"
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-line bg-surface text-muted shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-cyan-500 hover:text-cyan-600 dark:hover:text-cyan-400 hover:shadow-md"
          >
            <Mail size={17} />
          </a>
          <a
            href="#top"
            aria-label="Back to top"
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-accent/40 bg-accent/15 text-accent shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-accent hover:text-white hover:shadow-md"
          >
            <ArrowUp size={16} />
          </a>
        </div>
      </div>
    </footer>
  )
}