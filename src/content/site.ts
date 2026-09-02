/**
 * Non-copy site constants for the Exclusio marketing site.
 * Translatable strings live in messages/{en,ar,fr}.json (next-intl).
 */

export const brand = {
  pink: "#F3BDD4",
  pinkAlt: "#F4BDD3",
  blue: "#97C7E2",
  text: "#333333",
  textMuted: "rgba(51, 51, 51, 0.6)",
  pageBg: "#eaf4f9",
};

/** External product URLs */
export const links = {
  login: "https://exclusio.io/login",
  register: "https://exclusio.io/register",
  registerCreator: "https://exclusio.io/register/creator",
  /** Same env as Exclusio frontend (`AuthEarnMoreCta`); production default matches exclusio.io. */
  exclusioAds:
    process.env.NEXT_PUBLIC_EXCLUSIO_ADS_URL ?? "https://dev.exclusioads.com",
  email: "mailto:contact@exclusio.io",
  whatsapp: "https://wa.me/393520876137",
};

export const siteMeta = {
  url: "https://start.exclusio.io",
  ogImage: "/og-image.png",
};

export const headerAssets = {
  logo: {
    src: "/logo.png",
    width: 400,
    height: 55,
  },
  signUp: {
    href: links.register,
    openInNewTab: true,
  },
  logIn: {
    href: links.login,
    openInNewTab: true,
  },
};

export const navHrefs = [
  { key: "features" as const, href: "#features" },
  { key: "howItWorks" as const, href: "#steps" },
  { key: "faq" as const, href: "#faq" },
];

export const footerNavHrefs = [
  { key: "privacyPolicy" as const, href: "/privacy-policy" },
  { key: "termsOfService" as const, href: "/terms-of-service" },
];

export const footerSocial = [
  {
    name: "Facebook" as const,
    href: "https://www.facebook.com/share/1EsWsS1xi4/?mibextid=wwXIfr",
  },
  {
    name: "Instagram" as const,
    href: "https://www.instagram.com/exclusio.io?igsh=OXE0MnpmcnF2bW96&utm_source=qr",
  },
  {
    name: "TikTok" as const,
    href: "https://www.tiktok.com/@exclusio.io?_r=1&_t=ZS-97OMU2dMrPc",
  },
  {
    name: "Pinterest" as const,
    href: "https://pin.it/7MhHIlUpe",
  },
  {
    name: "YouTube" as const,
    href: "https://m.youtube.com/@exclusio_io?ra=m",
  },
];

export const heroCta = {
  href: links.registerCreator,
  openInNewTab: true,
};

export const principleTabsMeta = [
  {
    id: "exclusio" as const,
    headingLogo: "exclusio" as const,
    cta: { href: links.register, openInNewTab: true },
  },
  {
    id: "exclusio-ads" as const,
    headingLogo: "exclusio-ads" as const,
    cta: { href: links.exclusioAds, openInNewTab: true },
  },
];

export const featureIcons = [
  { icon: "earnings" as const },
  { icon: "scale" as const, iconPlain: true },
  { icon: "monetize" as const },
  { icon: "protection" as const },
  { icon: "support" as const },
];

export const getStartedCta = {
  href: links.register,
  openInNewTab: true,
};

export const showcaseTabIds = ["sell", "exclusio-ads"] as const;

export const faqContactCta = {
  href: links.email,
  openInNewTab: false,
};

export type ShowcaseMockCard = {
  title: string;
  description: string;
  price?: string;
  cardStyle?: "promo" | "step";
};

export type LegalSection = {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
};
