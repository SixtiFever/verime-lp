import { Link2, Phone, CircleCheck } from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import './HowItWorks.css'

const ICON_SIZE = 26
const STROKE = 2

const steps = [
  {
    number: '01',
    title: 'Connect',
    description: 'Link your enterprise Identity Provider to your VeriMe account in minutes.',
    Icon: Link2,
  },
  {
    number: '02',
    title: 'Call',
    description: 'Call your customers and prospects as usual, no change to your workflow.',
    Icon: Phone,
  },
  {
    number: '03',
    title: 'Confirm',
    description:
      'Send live identity verifications to call receivers, proving your identity and confirming the call is genuinely from your organisation.',
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
        <header className="how-it-works__header">
          <p className="how-it-works__eyebrow">How it works</p>
          <h2 id="how-heading">
            Send instant proof of identity to call receivers without hanging up.
          </h2>
        </header>

        <ol className="how-it-works__steps">
          {steps.map(({ number, title, description, Icon }) => (
            <li key={number} className="how-it-works__step">
              <div className="how-it-works__step-meta">
                <span className="how-it-works__number" aria-hidden="true">
                  {number}
                </span>
                <div className="how-it-works__icon">
                  <Icon size={ICON_SIZE} strokeWidth={STROKE} aria-hidden="true" />
                </div>
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
