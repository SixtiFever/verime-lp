import { EmailCaptureForm } from './EmailCaptureForm'
import heroIllustration from '../assets/AdobeStock_1915132781.svg'
import './Hero.css'

export function Hero() {
  return (
    <section className="hero section" aria-labelledby="hero-heading">
      <div className="container hero__inner">
        <div className="hero__content">
          <h1 id="hero-heading">
            {/* Improve outbound calling conversations by creating instant trust */}
            Create trust instantly for better outbound calling
          </h1>
          <p className="hero__lead">
            VeriMe enables your outbound callers to send live, in-call
            identity verification straight from your Identity Provider, so the call receiver knows exactly who they&apos;re talking to.
          </p>
          <div id="waitlist" className="hero__cta">
            <EmailCaptureForm inputId="waitlist-email" />
          </div>
        </div>
        <div className="hero__media">
          <img
            className="hero__illustration"
            src={heroIllustration}
            alt=""
            width={1312}
            height={736}
            decoding="async"
          />
        </div>
      </div>
    </section>
  )
}
