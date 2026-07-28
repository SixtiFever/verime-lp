import { useScrollReveal } from '../hooks/useScrollReveal'
import './ProblemSolution.css'

export function ProblemSolution() {
  const revealRef = useScrollReveal<HTMLElement>()

  return (
    <section
      ref={revealRef}
      className="problem-solution section scroll-reveal"
      aria-labelledby="problem-heading"
    >
      <div className="container problem-solution__grid">
        <div className="problem-solution__copy">
          <header className="problem-solution__header">
            <p className="problem-solution__eyebrow">Why</p>
            <h2 id="problem-heading">
              Stamping out phone scamming
            </h2>
          </header>

          <div className="problem-solution__block problem-solution__block--problem">
            <p>
              Phone scamming in the UK is increasing in both number and sophistication, supercharged
              by Voice AI. Genuine outbound callers from legitimate companies are met with suspicion and don&apos;t have a way
              to prove their identity and build trust over the phone.
            </p>
          </div>

          <div className="problem-solution__block problem-solution__block--solution">
            <p>
              VeriMe is the caller verification system that lets your outbound callers build
              immediate trust with receivers, and empowers them to differentiate between scammers and genuine
              callers.
            </p>
          </div>
        </div>

        <div className="problem-solution__stat">
          <p className="problem-solution__stat-value">70%</p>
          <p className="problem-solution__stat-label">
            of UK consumers distrust calls from numbers they don&apos;t recognise.
          </p>
        </div>
      </div>
    </section>
  )
}
