import { MotionConfig } from 'framer-motion'
import About from './components/About'
import Contact from './components/Contact'
import Education from './components/Education'
import Experience from './components/Experience'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Skills from './components/Skills'

function Backdrop() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
      <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_at_top,black_10%,transparent_70%)]" />
      <div className="absolute -top-40 left-1/2 h-[30rem] w-[56rem] -translate-x-1/2 rounded-full bg-accent/[0.12] blur-[130px]" />
      <div className="absolute top-[36rem] -left-40 h-80 w-80 rounded-full bg-[#5b4fd8]/[0.10] blur-[110px]" />
      <div className="absolute top-[80rem] -right-40 h-96 w-96 rounded-full bg-accent/[0.08] blur-[130px]" />
      <div className="absolute top-[160rem] left-1/4 h-80 w-80 rounded-full bg-[#5b4fd8]/[0.08] blur-[120px]" />
    </div>
  )
}

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="relative min-h-screen overflow-x-clip bg-bg">
        <Backdrop />
        <Header />
        <main>
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Education />
          <Contact />
        </main>
        <Footer />
      </div>
    </MotionConfig>
  )
}