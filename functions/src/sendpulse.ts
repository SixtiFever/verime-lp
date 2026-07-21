export const SENDPULSE_ADDRESSBOOK_ID = "733994";

const SENDPULSE_TOKEN_URL = "https://api.sendpulse.com/oauth/access_token";
const SENDPULSE_ADDRESSBOOKS_URL = "https://api.sendpulse.com/addressbooks";

type TokenCache = {
  accessToken: string;
  expiresAt: number;
};

let tokenCache: TokenCache | null = null;

/**
 * Fetch a SendPulse OAuth access token, reusing a cached token when valid.
 * @param {string} clientId SendPulse API client ID.
 * @param {string} secretKey SendPulse API secret key.
 * @return {Promise<string>} OAuth access token.
 */
export async function getAccessToken(
  clientId: string,
  secretKey: string,
): Promise<string> {
  const now = Date.now();
  if (tokenCache && tokenCache.expiresAt > now) {
    return tokenCache.accessToken;
  }

  const response = await fetch(SENDPULSE_TOKEN_URL, {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({
      grant_type: "client_credentials",
      client_id: clientId,
      client_secret: secretKey,
    }),
  });

  if (!response.ok) {
    const body = await response.text();
    throw new Error(`SendPulse auth failed (${response.status}): ${body}`);
  }

  const data = await response.json() as {
    access_token: string;
    expires_in: number;
  };

  tokenCache = {
    accessToken: data.access_token,
    expiresAt: now + (data.expires_in - 60) * 1000,
  };

  return data.access_token;
}

/**
 * Add a single email to a SendPulse address book.
 * @param {string} accessToken SendPulse OAuth access token.
 * @param {string} addressBookId SendPulse address book ID.
 * @param {string} email Email address to add.
 * @return {Promise<void>}
 */
export async function addEmailToAddressBook(
  accessToken: string,
  addressBookId: string,
  email: string,
): Promise<void> {
  const response = await fetch(
    `${SENDPULSE_ADDRESSBOOKS_URL}/${addressBookId}/emails`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${accessToken}`,
      },
      body: JSON.stringify({
        emails: [{email}],
      }),
    },
  );

  if (!response.ok) {
    const body = await response.text();
    throw new Error(
      `SendPulse add email failed (${response.status}): ${body}`,
    );
  }
}
