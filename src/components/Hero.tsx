import { EmailCaptureForm } from './EmailCaptureForm'
import './Hero.css'

export function Hero() {
  return (
    <section className="hero section" aria-labelledby="hero-heading">
      <div className="container hero__inner">
        <div className="hero__content">
          <h1 id="hero-heading">
            Improve outbound calling conversations by creating instant trust
          </h1>
          <p className="hero__lead">
            VeriMe lets your outbound callers send live, in-call
            identity verification straight from your Identity Provider, so the person on the other
            end never has to guess if it&apos;s really your organisation calling.
          </p>
          <div id="waitlist" className="hero__cta">
            <EmailCaptureForm inputId="waitlist-email" />
          </div>
        </div>
      </div>
    </section>
  )
}
