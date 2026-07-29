import {defineSecret} from "firebase-functions/params";
import {onRequest} from "firebase-functions/v2/https";
import * as logger from "firebase-functions/logger";
import {
  SENDPULSE_ADDRESSBOOK_ID,
  addEmailToAddressBook,
  getAccessToken,
} from "./sendpulse.js";

const sendpulseClientId = defineSecret("SENDPULSE_CLIENT_ID");
const sendpulseSecretKey = defineSecret("SENDPULSE_SECRET_KEY");

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const ALLOWED_ORIGIN_PATTERNS = [
  /^http:\/\/localhost:\d+$/,
  /^https:\/\/([\w-]+\.)?verime\.co\.uk$/,
  /^https:\/\/([\w-]+\.)?verime\.uk$/,
];

/**
 * Whether the request origin is allowed to call this function.
 * @param {string|undefined} origin Request Origin header.
 * @return {boolean} True when the origin may access the function.
 */
function isAllowedOrigin(origin: string | undefined): boolean {
  if (!origin) return false;
  return ALLOWED_ORIGIN_PATTERNS.some((pattern) => pattern.test(origin));
}

/**
 * Set CORS response headers for browser clients.
 * @param {string|undefined} origin Request Origin header.
 * @param {object} res Express response object.
 * @return {void}
 */
function applyCorsHeaders(
  origin: string | undefined,
  res: {set: (name: string, value: string) => unknown},
): void {
  if (origin && isAllowedOrigin(origin)) {
    res.set("Access-Control-Allow-Origin", origin);
  }
  res.set("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.set("Access-Control-Allow-Headers", "Content-Type");
  res.set("Access-Control-Max-Age", "3600");
}

export const submitEmail = onRequest(
  {
    region: "europe-west2",
    secrets: [sendpulseClientId, sendpulseSecretKey],
    maxInstances: 10,
  },
  async (req, res) => {
    applyCorsHeaders(req.headers.origin, res);

    if (req.method === "OPTIONS") {
      res.status(204).send("");
      return;
    }

    if (req.method !== "POST") {
      res.status(405).json({error: "Method not allowed"});
      return;
    }

    const email = typeof req.body?.email === "string" ?
      req.body.email.trim() :
      "";

    if (!email) {
      res.status(400).json({error: "Please enter your email"});
      return;
    }

    if (!EMAIL_PATTERN.test(email)) {
      res.status(400).json({error: "Please enter a valid email"});
      return;
    }

    try {
      const accessToken = await getAccessToken(
        sendpulseClientId.value(),
        sendpulseSecretKey.value(),
      );

      await addEmailToAddressBook(
        accessToken,
        SENDPULSE_ADDRESSBOOK_ID,
        email,
      );

      res.status(200).json({
        success: true,
        message: "Email submitted successfully",
        email,
      });
    } catch (error) {
      logger.error("Failed to submit email to SendPulse", error);
      res.status(500).json({
        error: "Something went wrong. Please try again.",
      });
    }
  },
);
