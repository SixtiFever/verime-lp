import { Nav } from './components/Nav'
import { Hero } from './components/Hero'
import { ProblemSolution } from './components/ProblemSolution'
import { HowItWorks } from './components/HowItWorks'
import { Benefits } from './components/Benefits'
import { Features } from './components/Features'
import { Footer } from './components/Footer'
import { Analytics } from "@vercel/analytics/react"

function App() {
  return (
    <>
      <a className="skip-link" href="#waitlist">
        Skip to waitlist
      </a>
      <Nav />
      <main>
        <Hero />
        <ProblemSolution />
        <HowItWorks />
        <Benefits />
        {/* <Differentiation /> */}
        <Features />
      </main>
      <Footer />
      <Analytics />
    </>
  )
}

export default App
