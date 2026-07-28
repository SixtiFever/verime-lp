import { Link2, Phone, CircleCheck, ShieldCheck } from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import './HowItWorks.css'

const ICON_SIZE = 26
const STROKE = 2

const steps = [
  {
    number: '01',
    title: 'Connect',
    description: 'Link your VeriMe account to your enterprise Identity Provider in seconds.',
    Icon: Link2,
  },
  {
    number: '02',
    title: 'Call',
    description: 'Call your customers, residents or prospects as usual.',
    Icon: Phone,
  },
  {
    number: '03',
    title: 'Verify',
    description:
      'Provide live proof of identity to the receiver during the call, authenticated by the connected identity provider.',
    Icon: CircleCheck,
  },
  {
    number: '04',
    title: 'Trust',
    description:
      'The call receiver sees the verified caller\'s details on the VeriMe app, and can confidently continue the conversation.',
    Icon: ShieldCheck,
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
          <p className="how-it-works__eyebrow">How VeriMe works</p>
          <h2 id="how-heading">
            Verify every call, easily.
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
