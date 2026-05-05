/** Trim trailing slashes for safe concatenation. */
function trimOrigin(s: string): string {
  return s.replace(/\/+$/, "");
}

/**
 * Public brochure origin (canonical URL). Set in Vercel: NEXT_PUBLIC_SITE_URL
 * e.g. https://www.agentarena.party
 */
export const SITE_ORIGIN = trimOrigin(
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.agentarena.party",
);

/**
 * Browser game / app origin — Play CTAs open here. Set in Vercel: NEXT_PUBLIC_GAME_URL
 * e.g. https://play.agentarena.party or your Vercel game deployment URL.
 */
export const GAME_APP_ORIGIN = trimOrigin(
  process.env.NEXT_PUBLIC_GAME_URL ?? "https://play.agentarena.party",
);

/** Docs / handbook URL — defaults to on-page import section. */
export const DOCS_ORIGIN =
  process.env.NEXT_PUBLIC_DOCS_URL?.trim() || `${SITE_ORIGIN}/#import`;

export function gameUrl(path = ""): string {
  const p = path.startsWith("/") ? path : path ? `/${path}` : "";
  return `${GAME_APP_ORIGIN}${p}`;
}
