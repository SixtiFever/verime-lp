import { ShieldCheck, Radio, Smartphone, ClipboardList } from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import './Features.css'

const ICON_SIZE = 26
const STROKE = 2

const features = [
  {
    title: 'IdP Connected',
    description:
      "Every identity verification sent by your callers is authenticated by your organisation's identity provider — meaning only genuine employees can send them. Your IdP is the single point of control; scammers can't impersonate what they can't access.",
    Icon: ShieldCheck,
  },
  {
    title: 'In-call verifications',
    description:
      'Send verifications instantly during a call for the call receiver to review. No hanging up or calling back. Prove who you are, get their trust, get back to the conversation.',
    Icon: Radio,
  },
  {
    title: 'Public-facing app',
    description:
      'A purpose-built mobile app where call receivers can view and confirm verifications.',
    Icon: Smartphone,
  },
  {
    title: 'Audit trail',
    description:
      'Keep track of every verification sent by your outbound callers, for auditing and compliance purposes.',
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
        <h2 id="features-heading" className="features__intro">
          A new trust layer that protects both organisations and the public against impersonation
          phone scams.
        </h2>

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
