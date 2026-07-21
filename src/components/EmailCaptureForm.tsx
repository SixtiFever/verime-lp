import { useState, type FormEvent } from 'react'
import { CheckCircle2 } from 'lucide-react'
import { handleEmailSubmit } from '../lib/handleEmailSubmit'
import './EmailCaptureForm.css'

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

type EmailCaptureFormProps = {
  inputId: string
  compact?: boolean
}

export function EmailCaptureForm({ inputId, compact = false }: EmailCaptureFormProps) {
  const [email, setEmail] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  async function onSubmit(e: FormEvent) {
    e.preventDefault()
    setError(null)

    const trimmed = email.trim()
    if (!trimmed || !EMAIL_PATTERN.test(trimmed)) {
      setError('Please enter a valid email address.')
      return
    }

    setSubmitting(true)
    try {
      await handleEmailSubmit(trimmed)
      setSuccess(true)
    } catch {
      setError('Something went wrong. Please try again.')
    } finally {
      setSubmitting(false)
    }
  }

  if (success) {
    return (
      <div
        className={`email-capture email-capture--success${compact ? ' email-capture--compact' : ''}`}
        role="status"
      >
        <CheckCircle2 className="email-capture__success-icon" aria-hidden="true" size={28} strokeWidth={2} />
        <p className="email-capture__success-text">Thanks — we&apos;ll be in touch</p>
      </div>
    )
  }

  return (
    <div className={`email-capture${compact ? ' email-capture--compact' : ''}`}>
      <form className="email-capture__form" onSubmit={onSubmit} noValidate>
        <label className="visually-hidden" htmlFor={inputId}>
          Email address
        </label>
        <input
          id={inputId}
          className="email-capture__input"
          type="email"
          name="email"
          autoComplete="email"
          placeholder="you@organisation.co.uk"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          aria-invalid={error ? true : undefined}
          aria-describedby={error ? `${inputId}-error` : `${inputId}-privacy`}
          disabled={submitting}
        />
        <button className="email-capture__button" type="submit" disabled={submitting}>
          I&apos;m interested
        </button>
      </form>
      {error && (
        <p id={`${inputId}-error`} className="email-capture__error" role="alert">
          {error}
        </p>
      )}
      <p id={`${inputId}-privacy`} className="email-capture__privacy">
        We&apos;re currently in development.
      </p>
    </div>
  )
}
