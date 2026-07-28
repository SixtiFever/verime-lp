import { Building2, UserCheck, Zap, Plug, Lock, ClipboardList } from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import './Features.css'

const ICON_SIZE = 26
const STROKE = 2

const features = [
  {
    title: 'Organisation-backed',
    description: 'Tied to your existing Identity Provider.',
    Icon: Building2,
  },
  {
    title: 'Individual verification',
    description: 'Verifies the individual caller, not just the org.',
    Icon: UserCheck,
  },
  {
    title: 'Real-time assurance',
    description: 'Authenticated verification creates trust during the call.',
    Icon: Zap,
  },
  {
    title: 'No phone integration',
    description: 'Works alongside existing systems.',
    Icon: Plug,
  },
  {
    title: 'Privacy by design',
    description: 'Temporary, single-use verification sessions; nothing stored long-term.',
    Icon: Lock,
  },
  {
    title: 'Audit trail',
    description: 'All verifications are logged for visibility and review.',
    Icon: ClipboardList,
  },
]

export function Features() {
  const revealRef = useScrollReveal<HTMLElement>()

  return (
    <section
      id="features"
      ref={revealRef}
      className="features section scroll-reveal"
      aria-labelledby="features-heading"
    >
      <div className="container">
        <header className="features__header">
          <p className="features__eyebrow">Key features</p>
          <h2 id="features-heading">
            A new trust layer that protects both organisations and the public against phone impersonation scams.
          </h2>
        </header>

        <ul className="features__grid">
          {features.map(({ title, description, Icon }) => (
            <li key={title} className="features__card">
              <div className="features__icon">
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
