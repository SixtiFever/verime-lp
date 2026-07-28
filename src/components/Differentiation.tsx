import { Phone, PhoneCall, ShieldCheck, Check, ChevronDown } from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import './Differentiation.css'

const ICON_SIZE = 22
const STROKE = 2

const existingSolutions = [
  {
    title: 'Caller ID',
    question: 'Which organisation is calling?',
    Icon: Phone,
  },
  {
    title: 'Callback checks',
    question: 'Is this organisation genuine?',
    Icon: PhoneCall,
  },
]

const verimeCapabilities = [
  {
    label: 'Which organisation is calling',
  },
  {
    label: 'Whether the organisation is genuine',
  },
  {
    label: "Who you're speaking to right now — live, authenticated proof of identity",
    emphasis: true,
  },
]

export function Differentiation() {
  const revealRef = useScrollReveal<HTMLElement>()

  return (
    <section
      id="differentiation"
      ref={revealRef}
      className="differentiation section scroll-reveal"
      aria-labelledby="differentiation-heading"
    >
      <div className="container">
        <header className="differentiation__header">
          <p className="differentiation__eyebrow">Why VeriMe</p>
          <h2 id="differentiation-heading">How VeriMe is different</h2>
          <p className="differentiation__intro">
            A step up from existing solutions
          </p>
        </header>

        <div className="differentiation__diagram">
          <ul className="differentiation__existing" aria-label="Existing solutions">
            {existingSolutions.map(({ title, question, Icon }) => (
              <li key={title} className="differentiation__existing-card">
                <div className="differentiation__existing-icon">
                  <Icon size={ICON_SIZE} strokeWidth={STROKE} aria-hidden="true" />
                </div>
                <h3>{title}</h3>
                <p>{question}</p>
              </li>
            ))}
          </ul>

          <div className="differentiation__bridge" aria-hidden="true">
            <span className="differentiation__bridge-line differentiation__bridge-line--left" />
            <span className="differentiation__bridge-line differentiation__bridge-line--right" />
            <ChevronDown size={20} strokeWidth={STROKE} className="differentiation__bridge-chevron" />
            <span className="differentiation__bridge-label">Included in every VeriMe verification</span>
          </div>

          <article className="differentiation__hero" aria-labelledby="verime-heading">
            <div className="differentiation__hero-badge">All-in-one verification</div>
            <div className="differentiation__hero-header">
              <div className="differentiation__hero-icon">
                <ShieldCheck size={28} strokeWidth={STROKE} aria-hidden="true" />
              </div>
              <div>
                <h3 id="verime-heading">VeriMe</h3>
                <p className="differentiation__hero-tagline">
                  Who am I speaking to, right now?
                </p>
              </div>
            </div>

            <ul className="differentiation__capabilities">
              {verimeCapabilities.map(({ label, emphasis }) => (
                <li
                  key={label}
                  className={`differentiation__capability${emphasis ? ' differentiation__capability--emphasis' : ''}`}
                >
                  <Check size={18} strokeWidth={2.5} aria-hidden="true" />
                  <span className="differentiation__capability-text">
                    <span>{label}</span>
                  </span>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </section>
  )
}
