import { useScrollReveal } from '../hooks/useScrollReveal'
import './ProblemSolution.css'

/** Swap this path when you add your final image or graphic (e.g. .png, .webp, .jpg). */
const SECTION_2_IMAGE_SRC = '/images/section-2-visual.svg'

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

        <figure className="problem-solution__media">
          <img
            className="problem-solution__image"
            src={SECTION_2_IMAGE_SRC}
            alt=""
            width={800}
            height={600}
            loading="lazy"
            decoding="async"
          />
          <figcaption className="problem-solution__caption">
            Placeholder — update <code>SECTION_2_IMAGE_SRC</code> in{' '}
            <code>ProblemSolution.tsx</code> when your graphic is ready.
          </figcaption>
        </figure>
      </div>
    </section>
  )
}
