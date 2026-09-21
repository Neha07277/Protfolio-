import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, Moon, Sparkles, Sun, X } from 'lucide-react'
import { nav } from '../data/portfolio'

export default function Header({ theme = 'light', onToggleTheme }) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('#top')
  const isLight = theme === 'light'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const ids = ['top', 'about', 'services', 'skills', 'experience', 'projects', 'education', 'contact']
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
          ? 'border-b border-line bg-surface/90 py-3 shadow-lg shadow-indigo-500/5 backdrop-blur-xl'
          : 'border-b border-transparent bg-transparent py-5 md:py-6'
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 md:px-8">
        {/* Logo */}
        <a href="#top" className="group flex items-center gap-2.5">
          <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-tr from-accent to-[#38bdf8] font-display text-sm font-bold text-white shadow-md shadow-accent/30 transition-transform duration-300 group-hover:scale-105">
            NP
          </span>
          <div className="flex flex-col">
            <span className="font-display text-base font-bold tracking-tight text-ink group-hover:text-accent transition-colors">
              Neha Pal
            </span>
            <span className="text-[10px] text-muted-2 leading-none flex items-center gap-1">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Available for hire
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-5 lg:gap-6 md:flex" aria-label="Primary">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`relative pb-0.5 text-xs font-semibold uppercase tracking-wider transition-colors ${
                active === item.href ? 'text-accent' : 'text-muted hover:text-ink'
              } after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:origin-left after:transition-transform after:duration-300 ${
                active === item.href
                  ? 'after:w-full after:scale-x-100 after:bg-accent'
                  : 'after:w-full after:scale-x-0 after:bg-accent hover:after:scale-x-100'
              }`}
            >
              {item.label}
            </a>
          ))}

          {/* Theme Switcher Button */}
          <button
            type="button"
            onClick={onToggleTheme}
            className="flex items-center gap-1.5 rounded-xl border border-line bg-surface-2/80 px-3 py-1.5 text-xs font-medium text-ink shadow-sm transition-all hover:border-accent hover:text-accent"
            title={isLight ? 'Switch to Dark Mode' : 'Switch to Bright Colorful Mode'}
            aria-label="Toggle theme"
          >
            {isLight ? (
              <>
                <Moon size={14} className="text-accent" />
                <span className="hidden lg:inline text-[11px]">Dark</span>
              </>
            ) : (
              <>
                <Sun size={14} className="text-amber-400" />
                <span className="hidden lg:inline text-[11px]">Colorful</span>
              </>
            )}
          </button>

          {/* Hire Me CTA */}
          <a
            href="#contact"
            className="group relative overflow-hidden rounded-xl bg-gradient-to-r from-accent to-[#6366f1] px-4 py-2 text-xs font-semibold text-white shadow-md shadow-accent/30 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-accent/40"
          >
            <div className="absolute inset-0 animate-shimmer" />
            <span className="relative z-10 flex items-center gap-1.5">
              <Sparkles size={12} />
              <span>Hire Me</span>
            </span>
          </a>
        </nav>

        {/* Mobile controls */}
        <div className="flex items-center gap-2 md:hidden">
          {/* Mobile Theme Toggle */}
          <button
            type="button"
            onClick={onToggleTheme}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-line bg-surface text-ink"
            aria-label="Toggle theme"
          >
            {isLight ? <Moon size={18} className="text-accent" /> : <Sun size={18} className="text-amber-400" />}
          </button>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-line bg-surface text-ink"
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
                  key="open"
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
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-b border-line bg-surface/95 backdrop-blur-2xl md:hidden"
          >
            <nav className="flex flex-col gap-1 px-5 py-6">
              {nav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`rounded-xl px-4 py-3 text-sm font-medium transition-colors ${
                    active === item.href
                      ? 'bg-accent/15 text-accent font-semibold'
                      : 'text-muted hover:bg-surface-2 hover:text-ink'
                  }`}
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-3 flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-accent to-[#6366f1] px-4 py-3 text-sm font-bold text-white shadow-lg shadow-accent/25"
              >
                <Sparkles size={14} />
                <span>Hire Me</span>
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}