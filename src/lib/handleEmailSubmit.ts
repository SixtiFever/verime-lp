const SUBMIT_EMAIL_URL =
  'https://europe-west2-verime-69ebf.cloudfunctions.net/submitEmail'

export async function handleEmailSubmit(email: string): Promise<void> {
  const response = await fetch(SUBMIT_EMAIL_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email }),
  })

  if (response.ok) return

  let message = 'Failed to submit email'
  try {
    const data = await response.json()
    if (data.error) message = data.error
  } catch {
    /* non-JSON body */
  }

  throw new Error(message)
}
