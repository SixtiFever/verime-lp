import { Nav } from './components/Nav'
import { Hero } from './components/Hero'
import { ProblemSolution } from './components/ProblemSolution'
import { HowItWorks } from './components/HowItWorks'
import { Features } from './components/Features'
import { Footer } from './components/Footer'

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
        <Features />
      </main>
      <Footer />
    </>
  )
}

export default App
