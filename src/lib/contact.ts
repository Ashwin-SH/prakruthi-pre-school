// ─────────────────────────────────────────────────────────────────────────
// Single source of truth for the school's contact number.
//
// TO CHANGE THE NUMBER IN FUTURE: either
//   1. set NEXT_PUBLIC_WHATSAPP_NUMBER in .env.local (and in Vercel env vars
//      for production), OR
//   2. just edit the fallback string below.
//
// Format: full international number, digits only, with country code.
//   e.g. India "+91 87490 02200"  →  "918749002200"
// ─────────────────────────────────────────────────────────────────────────

export const WHATSAPP_NUMBER =
  process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "918749002200";

/** Human-friendly display form, e.g. "+91 87490 02200". */
export const PHONE_DISPLAY = formatPhone(WHATSAPP_NUMBER);

/** `tel:` link for the call button. */
export const TEL_LINK = `tel:+${WHATSAPP_NUMBER}`;

/** Build a wa.me link, optionally with a pre-filled message. */
export function whatsappLink(message?: string): string {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

/** Formats "918749002200" → "+91 87490 02200" (assumes 2-digit code + 10 digits). */
function formatPhone(num: string): string {
  const cc = num.slice(0, 2);
  const rest = num.slice(2);
  if (rest.length === 10) {
    return `+${cc} ${rest.slice(0, 5)} ${rest.slice(5)}`;
  }
  return `+${num}`;
}
