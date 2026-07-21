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
          <h2 id="problem-heading">
            Callers can prove their identity. Call receivers can know who they&apos;re talking to.
          </h2>

          <div className="problem-solution__block problem-solution__block--problem">
            <p>
              Phone scamming in the UK is increasing in both number and sophistication, supercharged
              by Voice AI. Genuine outbound callers are met with suspicion and don&apos;t have a way
              to prove their identity and build trust over the phone.
            </p>
          </div>

          <div className="problem-solution__block problem-solution__block--solution">
            <p>
              VeriMe is the caller verification system that lets your outbound callers build
              immediate trust with receivers, and empowers them to spot scammers from genuine
              callers.
            </p>
          </div>
        </div>

        <div className="problem-solution__stat">
          <p className="problem-solution__stat-value">70%</p>
          <p className="problem-solution__stat-label">
            of UK consumers distrust calls from numbers they don&apos;t recognise.
          </p>
          {/* <p className="problem-solution__stat-source">
            Source:{' '}
            <a
              href="https://www.maxcontact.com/downloads/voice-of-the-uk-consumer-2026"
              target="_blank"
              rel="noopener noreferrer"
            >
              Voice of the UK Consumer 2026
            </a>
            , MaxContact
          </p> */}
        </div>
      </div>
    </section>
  )
}
