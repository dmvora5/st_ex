/**
 * Editable site content for the Exclusio marketing site.
 *
 * Most copy was taken from the live WordPress site at https://start.exclusio.io
 * (August 2026). Theme settings (header/footer CTAs, social links, copyright)
 * lived in the WP database; those values were scraped from the live HTML.
 *
 * Legal page bodies were ported from the live /privacy-policy/ and
 * /terms-of-service/ pages. Update this file to change marketing copy —
 * no CMS required.
 */

export const siteMeta = {
  name: "Exclusio",
  tagline: "Pay less. Earn more. Scale without limits",
  description:
    "Exclusio is a platform designed for creators and their fans. Connect with your audience and monetize content in a safe, secure environment — with higher earnings, lower fees, and 24/7 support.",
  url: "https://start.exclusio.io",
  ogImage: "/og-image.png",
};

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
  email: "mailto:contact@exclusio.io",
  whatsapp: "https://wa.me/393520876137",
};

export const nav = {
  links: [
    { label: "Features", href: "#features" },
    { label: "How it works", href: "#steps" },
    { label: "FAQ", href: "#faq" },
  ],
};

export const header = {
  logo: {
    src: "/logo.png",
    alt: "Exclusio",
    width: 400,
    height: 55,
  },
  cta: {
    label: "Log in",
    href: links.login,
    openInNewTab: true,
  },
  signUp: {
    label: "Sign up",
    href: links.register,
    openInNewTab: true,
  },
};

export const footer = {
  tagline: "A platform built for and with creators.",
  columns: [
    {
      title: "Product",
      links: [
        { label: "Features", href: "#features" },
        { label: "How it works", href: "#steps" },
        { label: "FAQ", href: "#faq" },
      ],
    },
    {
      title: "Legal",
      links: [
        { label: "Privacy Policy", href: "/privacy-policy" },
        { label: "Terms of Service", href: "/terms-of-service" },
      ],
    },
    {
      title: "Support",
      links: [
        { label: "FAQ", href: "#faq" },
        { label: "Contact", href: links.email },
      ],
    },
  ],
  logo: {
    src: "/logo.png",
    alt: "Exclusio",
    width: 280,
    height: 39,
  },
  cta: {
    label: "Sign up",
    href: links.register,
    openInNewTab: true,
  },
  social: [
    {
      name: "Facebook",
      href: "https://www.facebook.com/share/1HysHL5FWr/?mibextid=LQQJ4d",
      icon: "facebook" as const,
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/exclusio.io?igsh=OXE0MnpmcnF2bW96&utm_source=qr",
      icon: "instagram" as const,
    },
    {
      name: "YouTube",
      href: "https://youtube.com/@exclusio_io?si=w0UWHhIhiDXLgdGy",
      icon: "youtube" as const,
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/company/exclusioofficial/",
      icon: "linkedin" as const,
    },
    {
      name: "Pinterest",
      href: "https://pin.it/1oYUfqWY7",
      icon: "pinterest" as const,
    },
  ],
  copyright: "Copy right 2025 @ Exclusio,  All right reserved",
  legalLinks: [
    { label: "Terms of Service", href: "/terms-of-service" },
    { label: "Privacy Policy", href: "/privacy-policy" },
  ],
};

export const hero = {
  eyebrow: "Built for creators, by creators",
  titleLine1: "Pay less.",
  titleEmphasis: "Earn more.",
  titleLine2: "Stay discreet.",
  description:
    "The monetization platform that returns 95% of your earnings, protects your content, and keeps your payments confidential.",
  primaryCta: {
    label: "Sign up",
    href: links.register,
    openInNewTab: true,
  },
  secondaryCta: {
    label: "Learn more",
    href: "#faq",
    openInNewTab: false,
  },
  stats: [
    { value: "95%", label: "Returned" },
    { value: "24/7", label: "Support" },
    { value: "100%", label: "Ownership" },
  ],
  profileTag: "Your profile",
};

export const principle = {
  kicker: "The principle",
  title: "What is Exclusio?",
  description:
    "Exclusio connects creators with their audience in a safe, confidential environment. Higher earnings, lower fees, and stronger content protection — a platform built to last, not to trend. Continuously enriched to deliver the best possible experience for creators and subscribers alike.",
};

export const featuresSection = {
  kicker: "Why Exclusio",
  title: "Four commitments,\nno compromises",
};

export const features = [
  {
    title: "Earn more",
    description:
      "Exclusio creators retain 95% of their earnings. The remaining 5% goes to the platform to cover various operational costs, including banking fees and customer support.",
    icon: "earn" as const,
  },
  {
    title: "Safety",
    description:
      "The safety of our creators and subscribers is a top priority. Your data will never be shared or sold. Confidential payments for creators and discreet billing for subscribers.",
    icon: "safety" as const,
  },
  {
    title: "24/7 Support",
    description:
      "A dedicated support team is available 24/7 to assist both creators and subscribers. +39 352 087 6137",
    icon: "support" as const,
  },
  {
    title: "Protection",
    description:
      "You retain 100% ownership of your content. Exclusio provides access to a legal team in the event of unauthorized or fraudulent use of your content.",
    icon: "protect" as const,
  },
];

export const getStarted = {
  kicker: "Three steps",
  title: "How to get started",
  steps: [
    {
      title: "Create an Account",
      description:
        "To create an account on Exclusio, simply complete the sign up form. Once your application is approved by the Exclusio team, you'll gain access to all platform features along with a range of additional benefits.",
    },
    {
      title: "Set up your Subscription Rate",
      description:
        "Once you've started sharing content on Exclusio, let your followers on other social platforms know about your Exclusio profile!",
    },
    {
      title: "Create content & promote your Exclusio",
      description:
        "To begin sharing your content on Exclusio, you'll need to create an account. It's free to sign up, and takes only a few moments.",
    },
  ],
  cta: {
    label: "Sign Up",
    href: links.register,
    openInNewTab: true,
  },
};

export const showcase = {
  kicker: "Preview",
  title: "Your content,\nyour storefront",
  description:
    "A profile designed as a storefront, not a feed. Every post clearly shows its price — your audience knows exactly what they're unlocking.",
  profileTag: "Your profile",
  mockCards: [
    { price: "$24" },
    { price: "$12" },
    { price: "$18" },
  ],
};

export const faq = {
  kicker: "Questions",
  title: "Frequently asked questions",
  contactCard: {
    title: "Have a question?",
    description:
      "Our team is available around the clock for anything related to your account, earnings, or content.",
    cta: {
      label: "Contact us",
      href: links.email,
      openInNewTab: false,
    },
  },
  items: [
    {
      heading: "How do I start earning on Exclusio ?",
      description:
        "Once your account has been created and approved by the Exclusio team, you will be able to start publishing paid content, promoting your profile, and accessing all the features of the platform.",
    },
    {
      heading: "How much can I earn with Exclusio?",
      description:
        "There are no limits — it all depends on your goals. Exclusio provides everything you need to succeed, with a wide range of tools and reduced fees.",
    },
    {
      heading: "Why start with Exclusio?",
      description:
        "Exclusio puts creators first! Creators on Exclusio retain 95% of their earnings, while only 5% is allocated to the platform to cover essential operational costs. These include banking fees, 24/7 customer support, advanced security measures and enhanced content protection, as well as the continuous development of new features aimed at delivering the highest level of experience for both creators and subscribers.",
    },
    {
      heading: "If I need assistance, who should I contact?",
      description:
        "Exclusio provides a dedicated support team available 24/7 to assist you and answer any questions you may have. You can reach our support team via live chat on the platform, email, or WhatsApp. Email: contact@exclusio.io · WhatsApp: +39 352 087 6137",
    },
  ],
};

export const slider = {
  slides: [
    {
      image: "/slider/Slider.jpg",
      title: "Constantly adding new features",
    },
    {
      image: "/slider/Slider-1.jpg",
      title: "Posts and Stories",
    },
    {
      image: "/slider/Slider-2.jpg",
      title: "Paid Dm",
    },
    {
      image: "/slider/Slider-3.jpg",
      title: "User Profile",
    },
    {
      image: "/slider/Slider-4.jpg",
      title: "Statistics",
    },
  ],
};

export type LegalSection = {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
};

export const privacyPolicy = {
  title: "Privacy Policy",
  sections: [
    {
      heading: "Introduction",
      paragraphs: [
        'This Privacy Policy explains how Eccelso Capital LTD ("we," "our," or "us") collects, uses, and protects your personal data when you visit our website start.exclusio.io. We are committed to protecting your privacy and ensuring compliance with the General Data Protection Regulation (GDPR) and other applicable laws.',
        "Company Information: Eccelso Capital LTD, registered in Cyprus under number HE 479174. Address: Voukourestiou, 25, NEPTUNE HOUSE, 1st floor, Flat/Office 1, Zakaki, 3045, Limassol, Cyprus. Email: contact@exclusio.io",
      ],
    },
    {
      heading: "1. Data We Collect",
      paragraphs: ["When you visit our website, we may collect the following information:"],
      bullets: [
        "Information you provide voluntarily: such as your name, email address, and any details submitted via our contact form.",
        "Automatically collected data: including your IP address, browser type, operating system, and browsing behavior on our site.",
        "Cookies and tracking technologies: as described in our Cookies Policy.",
      ],
    },
    {
      heading: "2. How We Use Your Data",
      paragraphs: ["We may use your personal data for:"],
      bullets: [
        "Responding to your inquiries and providing customer support.",
        "Improving the content and functionality of our website.",
        "Ensuring the security and proper functioning of our site.",
        "Complying with legal obligations.",
      ],
    },
    {
      heading: "3. Legal Basis for Processing (GDPR)",
      paragraphs: ["We process your personal data under the following legal grounds:"],
      bullets: [
        "Your consent (e.g., when you submit a contact form).",
        "Legitimate interests (e.g., to maintain website security and improve our services).",
        "Legal obligations (e.g., retaining records for compliance purposes).",
      ],
    },
    {
      heading: "4. Sharing Your Data",
      paragraphs: ["We do not sell your personal data. We may share your data only with:"],
      bullets: [
        "Service providers who assist us in operating the website.",
        "Authorities when required by law.",
        "Third-party analytics providers (e.g., Google Analytics).",
      ],
    },
    {
      heading: "5. Data Retention",
      paragraphs: [
        "We will retain your personal data only for as long as necessary for the purposes outlined in this Privacy Policy, unless a longer retention period is required by law.",
      ],
    },
    {
      heading: "6. Your Rights (GDPR)",
      paragraphs: ["Under the GDPR, you have the right to:"],
      bullets: [
        "Access the personal data we hold about you.",
        "Request correction or deletion of your data.",
        "Withdraw your consent at any time.",
        "Object to the processing of your data.",
        "Request a copy of your data in a portable format. To exercise your rights, contact us at contact@exclusio.io.",
      ],
    },
    {
      heading: "7. Security Measures",
      paragraphs: [
        "We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, loss, or misuse.",
      ],
    },
    {
      heading: "8. Third-Party Links",
      paragraphs: [
        "Our website may contain links to external sites. We are not responsible for the privacy practices or content of these third-party websites.",
      ],
    },
    {
      heading: "9. Changes to This Privacy Policy",
      paragraphs: [
        'We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated "Last Updated" date.',
      ],
    },
    {
      heading: "10. Contact Us",
      paragraphs: [
        "If you have questions about this Privacy Policy or how we handle your data, please contact us: Eccelso Capital LTD · Email: contact@exclusio.io · Address: Voukourestiou, 25, NEPTUNE HOUSE, 1st floor, Flat/Office 1, Zakaki, 3045, Limassol, Cyprus",
      ],
    },
  ] satisfies LegalSection[],
};

export const termsOfService = {
  title: "Terms of Service",
  sections: [
    {
      heading: "Introduction",
      paragraphs: [
        'These Terms of Service ("Terms") govern your use of the website start.exclusio.io ("we," "our," or "us"), operated by Eccelso Capital LTD, company registered in Cyprus under number HE 479174, Address: Voukourestiou, 25, NEPTUNE HOUSE, 1st floor, Flat/Office 1, Zakaki, 3045, Limassol, Cyprus, Email: contact@exclusio.io. By accessing or using this website, you agree to be bound by these Terms. If you do not agree, you must not use this website.',
      ],
    },
    {
      heading: "1. Purpose of the Website",
      paragraphs: [
        "This website is provided for informational and promotional purposes only. It does not host user-generated content and does not process subscriptions or payments directly.",
      ],
    },
    {
      heading: "2. Intellectual Property",
      paragraphs: [
        "All content on this website — including text, graphics, logos, images, and design — is owned by Eccelso Capital LTD or its licensors and is protected by applicable intellectual property laws. You may not copy, reproduce, distribute, or create derivative works without prior written permission.",
      ],
    },
    {
      heading: "3. Third-Party Links",
      paragraphs: [
        "This website may contain links to third-party websites. We are not responsible for the content, privacy practices, or availability of those external sites.",
      ],
    },
    {
      heading: "4. Disclaimers",
      paragraphs: [
        'We make reasonable efforts to keep information on this website accurate and up to date, but we do not guarantee completeness or accuracy. The website is provided "as is" without warranties of any kind, express or implied.',
      ],
    },
    {
      heading: "5. Limitation of Liability",
      paragraphs: [
        "To the fullest extent permitted by law, Eccelso Capital LTD shall not be liable for any direct, indirect, incidental, or consequential damages arising from your use of, or inability to use, this website.",
      ],
    },
    {
      heading: "6. Changes to These Terms",
      paragraphs: [
        "We may update these Terms at any time. Changes will be posted on this page. Continued use of the website after changes are posted constitutes acceptance of the updated Terms.",
      ],
    },
    {
      heading: "7. Contact",
      paragraphs: [
        "Eccelso Capital LTD · Email: contact@exclusio.io · Address: Voukourestiou, 25, NEPTUNE HOUSE, 1st floor, Flat/Office 1, Zakaki, 3045, Limassol, Cyprus",
      ],
    },
  ] satisfies LegalSection[],
};
