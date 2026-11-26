import type { Localized } from "../lib/i18n";

/**
 * Site identity. The only place the site names itself.
 *
 * `name`, `url`, and `email` are facts and stay plain strings. `role` and
 * `description` are copy, so they are `Localized`; a new locale cannot ship
 * with an English description silently.
 *
 * The surface fields below mirror what rule 10 calls `siteConfig`: icon paths,
 * the OG size, the locale tags Open Graph expects, and the browser colours.
 * They are metadata, not design values; the colours mirror
 * `--dab-color-background` in `tokens.css` because a `<meta>` cannot read a
 * custom property. `src/CONVENTIONS.md` §10 records the mirror.
 */
const role = {
  en: "Forward Deployed Engineer",
  zh: " Catatan Kang Sudar",
} satisfies Localized;

const site = {
  name: "Kang Sudar",
  url: "https://sudar.web.id",
  email: "hi@dabaz.me",
  role,
  description: {
    en: "Forward deployed engineer working between customers and engineering, building things that make noise — in code, in sound and in pixels.",
    zh: " Blog yang berisi pengalaman, tutorial dan notes tidak penting",
  } satisfies Localized,

  /** The short line under the wordmark on the OG card; the role is the tagline. */
  tagline: role,

  /** Open Graph locale identifiers, underscore form. */
  ogLocale: {
    en: "en_US",
    zh: "id_ID",
  } satisfies Localized,

  /** One default OG card per locale (1200×630, light theme). */
  ogImage: {
    en: "/og/en.png",
    zh: "/og/zh.png",
  } satisfies Localized,

  /** Plate master and its exports (rule 10 §4). */
  icon: "/icon.svg",
  favicon: "/favicon.ico",
  appleIcon: "/apple-icon.png",
  manifest: "/site.webmanifest",

  /** Mirrors `--dab-color-background`; the site is pinned light, so both UA surfaces use it. */
  themeColor: "rgb(255 255 255)",
} as const;

export default site;
