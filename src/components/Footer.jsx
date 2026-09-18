import { ArrowUp, Mail } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './BrandIcons'
import { profile } from '../data/portfolio'

const currentYear = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className="border-t border-line/60 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-5 md:flex-row md:px-8">
        <div className="flex flex-col items-center gap-1 text-center md:items-start md:text-left">
          <p className="font-display font-semibold text-ink">
            {profile.name}
            <span className="ml-2 text-sm font-normal text-muted">{profile.title}</span>
          </p>
          <p className="text-sm text-muted-2">
            © {currentYear} Neha Pal. Built with React, Tailwind CSS &amp; Framer Motion.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="flex h-9 w-9 items-center justify-center rounded-md border border-line text-muted transition-all duration-200 hover:-translate-y-px hover:border-accent/60 hover:text-accent"
          >
            <GithubIcon size={17} />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="flex h-9 w-9 items-center justify-center rounded-md border border-line text-muted transition-all duration-200 hover:-translate-y-px hover:border-accent/60 hover:text-accent"
          >
            <LinkedinIcon size={17} />
          </a>
          <a
            href={`mailto:${profile.email}`}
            aria-label="Email"
            className="flex h-9 w-9 items-center justify-center rounded-md border border-line text-muted transition-all duration-200 hover:-translate-y-px hover:border-accent/60 hover:text-accent"
          >
            <Mail size={17} />
          </a>
          <a
            href="#top"
            aria-label="Back to top"
            className="flex h-9 w-9 items-center justify-center rounded-md border border-accent/30 bg-accent/10 text-accent transition-all duration-200 hover:-translate-y-px hover:bg-accent/20"
          >
            <ArrowUp size={16} />
          </a>
        </div>
      </div>
    </footer>
  )
}