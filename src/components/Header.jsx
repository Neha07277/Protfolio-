import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { nav } from '../data/portfolio'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('#top')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const ids = ['top', 'about', 'skills', 'experience', 'projects', 'education', 'contact']
    const observers = ids
      .map((id) => {
        const el = document.getElementById(id)
        if (!el) return null
        const obs = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) setActive(`#${id}`)
          },
          { rootMargin: '-45% 0px -50% 0px' },
        )
        obs.observe(el)
        return obs
      })
      .filter(Boolean)
    return () => observers.forEach((o) => o.disconnect())
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-line/60 bg-bg/70 py-3 shadow-[0_1px_40px_-10px_rgba(0,0,0,0.6)] backdrop-blur-xl'
          : 'border-b border-transparent bg-transparent py-5 md:py-6'
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 md:px-8">
        <a href="#top" className="group flex items-center gap-2">
          <span className="font-display text-lg font-semibold tracking-tight text-ink">
            Neha Pal
          </span>
          <span className="mt-1 h-1.5 w-1.5 rounded-full bg-accent transition-colors group-hover:bg-accent-2" />
        </a>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Primary">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`relative pb-0.5 text-sm transition-colors ${
                active === item.href ? 'text-ink' : 'text-muted hover:text-ink'
              } after:absolute after:-bottom-1 after:left-0 after:h-px after:origin-left after:transition-transform after:duration-300 ${
                active === item.href
                  ? 'after:w-full after:scale-x-100 after:bg-accent'
                  : 'after:w-full after:scale-x-0 after:bg-accent hover:after:scale-x-100'
              }`}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-md border border-line bg-surface/60 px-3.5 py-1.5 text-sm text-ink backdrop-blur-sm transition-all duration-200 hover:-translate-y-px hover:border-accent/60 hover:text-accent hover:shadow-[0_0_24px_-6px_rgba(138,124,255,0.4)]"
          >
            Hire me
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-md border border-line bg-surface/60 text-ink backdrop-blur-sm md:hidden"
          aria-expanded={open}
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          <AnimatePresence mode="wait">
            {open ? (
              <motion.span
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X size={20} />
              </motion.span>
            ) : (
              <motion.span
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Menu size={20} />
              </motion.span>
            )}
          </AnimatePresence>
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-x-0 top-full border-b border-line/60 bg-bg/95 backdrop-blur-xl md:hidden"
            aria-label="Mobile"
          >
            <div className="flex flex-col gap-1 px-5 pt-6 pb-8">
              {nav.map((item, i) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.04 * i, duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className={`border-b border-line/50 py-3.5 font-display text-lg ${
                    active === item.href ? 'text-ink' : 'text-muted'
                  }`}
                >
                  {item.label}
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: nav.length * 0.04, duration: 0.3 }}
                className="mt-4 rounded-md bg-accent px-4 py-3 text-center text-sm font-medium text-white shadow-[0_0_30px_-6px_rgba(138,124,255,0.6)]"
              >
                Hire me
              </motion.a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}