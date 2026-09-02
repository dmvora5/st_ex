export const locales = ["en", "ar", "fr"] as const;

export type AppLocale = (typeof locales)[number];

export const defaultLocale: AppLocale = "en";
export const LOCALE_COOKIE = "NEXT_LOCALE";

/** Locales that use right-to-left layout. */
export const rtlLocales: readonly AppLocale[] = ["ar"];

/** Cookie max-age / client expires for NEXT_LOCALE (1 year). */
export const LOCALE_COOKIE_MAX_AGE_SECONDS = 60 * 60 * 24 * 365;

export function isValidLocale(locale: string | undefined | null): locale is AppLocale {
  return typeof locale === "string" && (locales as readonly string[]).includes(locale);
}

export function resolveLocale(locale: string | undefined | null): AppLocale {
  return isValidLocale(locale) ? locale : defaultLocale;
}

export function getDir(locale: string | undefined | null): "rtl" | "ltr" {
  return rtlLocales.includes(resolveLocale(locale)) ? "rtl" : "ltr";
}

export function isRtlLocale(locale: string | undefined | null): boolean {
  return getDir(locale) === "rtl";
}

/**
 * Map app locale (`en` | `ar` | `fr`) to an Intl / DateTimeFormat locale tag.
 */
export function toIntlLocale(locale: string | undefined | null): string {
  const resolved = resolveLocale(locale);
  if (resolved === "ar") return "ar";
  if (resolved === "fr") return "fr-FR";
  return "en-US";
}

/**
 * Map Accept-Language (e.g. "ar-SA,ar;q=0.9,en;q=0.8") to a supported locale.
 * Falls back to {@link defaultLocale}.
 */
export function detectLocaleFromAcceptLanguage(
  acceptLanguageHeader: string | null,
): AppLocale {
  if (!acceptLanguageHeader || typeof acceptLanguageHeader !== "string") {
    return defaultLocale;
  }

  const candidates = acceptLanguageHeader
    .split(",")
    .map((part) => {
      const [tagPart, ...params] = part.trim().split(";");
      const tag = (tagPart || "").trim().toLowerCase();
      if (!tag) return null;
      let quality = 1;
      for (const param of params) {
        const match = param.trim().match(/^q=([0-9.]+)$/i);
        if (match) {
          const q = Number.parseFloat(match[1]);
          if (Number.isFinite(q)) quality = q;
        }
      }
      const primary = tag.split("-")[0];
      return { primary, quality };
    })
    .filter((item): item is { primary: string; quality: number } => item !== null)
    .sort((a, b) => b.quality - a.quality);

  for (const { primary } of candidates) {
    if (isValidLocale(primary)) return primary;
  }

  return defaultLocale;
}
