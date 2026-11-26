/**
 * Locale seam — DESIGN.md §10, §11.
 *
 * One vocabulary for the site: the locale list, the default locale, the
 * BCP 47 tag each locale renders as, and the path prefix rule. Routing uses
 * Astro's built-in i18n with `prefixDefaultLocale: false`, so `en` lives at
 * `/` and `zh` at `/zh`.
 *
 * The document language is `zh-CN`, not `zh`: DabFonts TYPESETTING.md §7
 * requires it, and English runs inside a Chinese page carry `lang="en"`.
 */
export const locales = ["en", "id"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "id";

/** A value that exists in every locale. Proper nouns stay plain strings. */
export type Localized<T = string> = { [L in Locale]: T };

/** BCP 47 tag for `<html lang>`, `<time lang>`, and `hreflang`. */
export function htmlLang(locale: Locale): "en" | "id-ID" {
  return locale === "id" ? "id-ID" : "en";
}

/** The other locale, for the language switch and the alternate routes. */
export function otherLocale(locale: Locale): Locale {
  return locale === defaultLocale ? "id" : "en";
}

/**
 * Prefix a site-relative path with the locale, unless it is the default one.
 * `localePath("en", "/")` is `/`; `localePath("zh", "/")` is `/zh`.
 */
export function localePath(locale: Locale, path: string): string {
  if (locale === defaultLocale) return path;
  return `/${locale}${path === "/" ? "" : path}`;
}

/** The locale's home page: `/` or `/zh`. */
export function homePath(locale: Locale): string {
  return localePath(locale, "/");
}

/** The locale's work page: `/work` or `/zh/work`. */
export function workPath(locale: Locale): string {
  return localePath(locale, "/work");
}

/** The locale's music page: `/music` or `/zh/music`. */
export function musicPath(locale: Locale): string {
  return localePath(locale, "/music");
}

/** The locale's contact page: `/contact` or `/zh/contact`. */
export function contactPath(locale: Locale): string {
  return localePath(locale, "/contact");
}

/** The locale's writing feed: `/rss.xml` or `/zh/rss.xml`. */
export function rssPath(locale: Locale): string {
  return localePath(locale, "/rss.xml");
}
