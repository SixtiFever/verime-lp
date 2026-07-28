import { UserCheck, Building2, HeartHandshake } from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import './Benefits.css'

const ICON_SIZE = 26
const STROKE = 2

const benefits = [
  {
    title: 'Protects call receivers',
    description: "See who is calling; hang up if they can't verify.",
    Icon: UserCheck,
  },
  {
    title: 'Protects your organisation',
    description: "Only employees can send verifications; scammers can't.",
    Icon: Building2,
  },
  {
    title: 'Builds trust',
    description: 'Phone becomes the easiest, most trusted communication channel again.',
    Icon: HeartHandshake,
  },
]

export function Benefits() {
  const revealRef = useScrollReveal<HTMLElement>()

  return (
    <section
      ref={revealRef}
      className="benefits section scroll-reveal"
      aria-labelledby="benefits-heading"
    >
      <div className="container">
        <header className="benefits__header">
          <p className="benefits__eyebrow">The benefits</p>
          <h2 id="benefits-heading">
            Scammers lose. Everyone else wins.
          </h2>
        </header>

        <ul className="benefits__grid">
          {benefits.map(({ title, description, Icon }) => (
            <li key={title} className="benefits__card">
              <div className="benefits__icon">
                <Icon size={ICON_SIZE} strokeWidth={STROKE} aria-hidden="true" />
              </div>
              <h3>{title}</h3>
              <p>{description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
