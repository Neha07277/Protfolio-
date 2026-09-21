import { useEffect, useState } from 'react'
import { MotionConfig } from 'framer-motion'
import About from './components/About'
import Contact from './components/Contact'
import Education from './components/Education'
import Experience from './components/Experience'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Services from './components/Services'
import Skills from './components/Skills'

function Backdrop({ theme }) {
  const isLight = theme === 'light'

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_at_top,black_20%,transparent_80%)]" />

      {isLight ? (
        <>
          {/* Luminous colorful aurora background glows for Bright mode */}
          <div className="absolute -top-36 left-1/2 h-[38rem] w-[64rem] -translate-x-1/2 rounded-full bg-gradient-to-tr from-violet-400/35 via-indigo-300/30 to-cyan-300/40 blur-[130px]" />
          <div className="absolute top-[28rem] -left-20 h-[30rem] w-[30rem] rounded-full bg-gradient-to-br from-pink-400/30 via-rose-300/25 to-amber-200/30 blur-[120px]" />
          <div className="absolute top-[65rem] -right-20 h-[32rem] w-[32rem] rounded-full bg-gradient-to-tl from-cyan-400/30 via-sky-300/30 to-indigo-300/25 blur-[130px]" />
          <div className="absolute top-[120rem] left-1/4 h-[32rem] w-[32rem] rounded-full bg-gradient-to-tr from-emerald-300/25 via-teal-300/25 to-cyan-300/30 blur-[130px]" />
          <div className="absolute top-[180rem] -right-10 h-[30rem] w-[30rem] rounded-full bg-gradient-to-bl from-purple-400/30 via-fuchsia-300/25 to-pink-300/25 blur-[120px]" />
          <div className="absolute top-[240rem] left-1/3 h-[32rem] w-[32rem] rounded-full bg-gradient-to-r from-blue-300/25 to-indigo-300/25 blur-[130px]" />
        </>
      ) : (
        <>
          {/* Neon cosmic dark glow layers */}
          <div className="absolute -top-40 left-1/2 h-[32rem] w-[58rem] -translate-x-1/2 rounded-full bg-accent/[0.14] blur-[140px]" />
          <div className="absolute top-[36rem] -left-40 h-96 w-96 rounded-full bg-cyan-500/[0.10] blur-[130px]" />
          <div className="absolute top-[80rem] -right-40 h-96 w-96 rounded-full bg-purple-500/[0.10] blur-[140px]" />
          <div className="absolute top-[140rem] -left-40 h-96 w-96 rounded-full bg-emerald-500/[0.08] blur-[130px]" />
          <div className="absolute top-[200rem] right-1/4 h-96 w-96 rounded-full bg-accent/[0.10] blur-[140px]" />
        </>
      )}
    </div>
  )
}

export default function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('portfolio-theme') || 'light'
  })

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('portfolio-theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'))
  }

  return (
    <MotionConfig reducedMotion="user">
      <div className="relative min-h-screen overflow-x-clip bg-bg text-ink transition-colors duration-300">
        <Backdrop theme={theme} />
        <Header theme={theme} onToggleTheme={toggleTheme} />
        <main>
          <Hero theme={theme} />
          <About />
          <Services />
          <Skills />
          <Experience />
          <Projects theme={theme} />
          <Education />
          <Contact />
        </main>
        <Footer />
      </div>
    </MotionConfig>
  )
}