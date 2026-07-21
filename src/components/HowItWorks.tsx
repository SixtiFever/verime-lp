import { Link2, Phone, CircleCheck } from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import './HowItWorks.css'

const ICON_SIZE = 28
const STROKE = 2

const steps = [
  {
    number: '01',
    title: 'Connect',
    description: 'Link your Identity Provider to your VeriMe account in minutes.',
    Icon: Link2,
  },
  {
    number: '02',
    title: 'Call',
    description: 'Reach your customers and prospects as usual, no change to your workflow.',
    Icon: Phone,
  },
  {
    number: '03',
    title: 'Confirm',
    description:
      'Send live identity verifications to the VeriMe app, confirming the call is genuinely from your organisation — no callbacks, no guesswork.',
    Icon: CircleCheck,
  },
]

export function HowItWorks() {
  const revealRef = useScrollReveal<HTMLElement>()

  return (
    <section
      id="how-it-works"
      ref={revealRef}
      className="how-it-works section scroll-reveal"
      aria-labelledby="how-heading"
    >
      <div className="container">
        <h2 id="how-heading" className="how-it-works__intro">
          Send instant proof of identity to call receivers without hanging up.
        </h2>

        <div className="how-it-works__number-track" aria-hidden="true">
          {steps.map((step, index) => (
            <div key={`track-${step.number}`} className="how-it-works__number-cell">
              <span className="how-it-works__number how-it-works__number--track">{step.number}</span>
              {index < steps.length - 1 && <span className="how-it-works__number-line" />}
            </div>
          ))}
        </div>

        <ol className="how-it-works__steps">
          {steps.map(({ number, title, description, Icon }) => (
            <li key={number} className="how-it-works__step">
              <span className="how-it-works__number how-it-works__number--step">{number}</span>
              <div className="how-it-works__icon-wrap">
                <Icon size={ICON_SIZE} strokeWidth={STROKE} aria-hidden="true" />
              </div>
              <h3>{title}</h3>
              <p>{description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
