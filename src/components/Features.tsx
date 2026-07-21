import { ShieldCheck, Radio, ShieldBan, ClipboardList } from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import './Features.css'

const ICON_SIZE = 26
const STROKE = 2

const features = [
  {
    title: 'Identity Provider integration',
    description:
      'VeriMe connects directly to your Identity Provider, so verification authority stays where your security team already manages access. Only authenticated employees can send verifications — and when someone leaves, that ability goes with them. No new identity silo, no manual provisioning.',
    Icon: ShieldCheck,
  },
  {
    title: 'In-call verifications',
    description:
      'Send verifications instantly during a call for the call receiver to review. No hanging up or calling back. Prove who you are, get their trust, get back to the conversation.',
    Icon: Radio,
  },
  {
    title: 'Protection against impersonation',
    description:
      "Scammers can spoof numbers, clone voices, and sound exactly like your team — but they can't produce an authenticated verification. Every verification is cryptographically tied to your organisation. Receivers get proof they can trust; your brand stays out of the hands of impersonators.",
    Icon: ShieldBan,
  },
  {
    title: 'Audit trail',
    description:
      'Every verification your outbound callers send is logged in a full audit trail. Track who verified whom, when, and on which call — giving compliance and security teams the visibility they need for investigations, reporting, and regulatory requirements.',
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
            A new trust layer that protects both organisations and the public against impersonation
            phone scams.
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
