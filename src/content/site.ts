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
  registerCreator: "https://exclusio.io/register/creator",
  /** Same env as Exclusio frontend (`AuthEarnMoreCta`); production default matches exclusio.io. */
  exclusioAds:
    process.env.NEXT_PUBLIC_EXCLUSIO_ADS_URL ?? "https://dev.exclusioads.com",
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
  navLinks: [
    // { label: "Contact", href: links.email },
    // { label: "Cookies", href: "https://exclusio.io/cookies", openInNewTab: true },
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms of Service", href: "/terms-of-service" },
    // {
    //   label: "Acceptable Content Policy",
    //   href: "https://exclusio.io/acceptable-content-policy",
    //   openInNewTab: true,
    // },
  ],
  copyright: "© Copyright 2026",
  brand: "Exclusio",
  copyrightSuffix: " All Right Reserved",
  social: [
    {
      name: "Facebook",
      href: "https://www.facebook.com/share/1EsWsS1xi4/?mibextid=wwXIfr",
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/exclusio.io?igsh=OXE0MnpmcnF2bW96&utm_source=qr",
    },
    {
      name: "TikTok",
      href: "https://www.tiktok.com/@exclusio.io?_r=1&_t=ZS-97OMU2dMrPc",
    },
    {
      name: "Pinterest",
      href: "https://pin.it/7MhHIlUpe",
    },
    {
      name: "YouTube",
      href: "https://m.youtube.com/@exclusio_io?ra=m",
    },
  ],
};

export const hero = {
  titleLine1: "Pay less.",
  titleEmphasis: "Earn more",
  titleLine2: "Scale without limits",
  description:
    "Start selling your content on Exclusio. Reach new paying fans with Exclusio Ads, keep 100% of your earnings, get your own dedicated Exclusio Manager, and enjoy enhanced content protection.",
  secondaryCta: {
    label: "Apply to become an Exclusio Creator",
    href: links.registerCreator,
    openInNewTab: true,
  },
  stats: [
    { value: "0%", label: "Platform commission" },
    { value: "New fans", label: "With Exclusio Ads" },
    { value: "24/7", label: "Creator support" },
    { value: "Protected", label: "Content" },
    { value: "Multiple", label: "Ways to earn" },
    { value: "Your price", label: "You set the price" },
  ],
  profileTag: "Earn your way, set your price",
};

export const featuredInPress = {
  label: "As featured in",
};

export const principle = {
  eyebrow: "Built for creators, by creators",
  titleBeforeMore: "Struggling to Get ",
  titleMore: "More",
  titleFans: "Fans",
  titleEarnMore: "Earn More",
  tabs: [
    {
      id: "exclusio",
      title: "Exclusio",
      headingBefore: "What is",
      headingLogo: "exclusio" as const,
      headingAfter: "?",
      paragraphs: [
        "Exclusio is a creator platform built to help you monetize your audience and grow beyond it.",
        "Sell exclusive content, subscriptions, paid messages and personalized private offers, while keeping 100% of your earnings. Reach new paying fans with Exclusio Ads, protect your content with advanced technology, and get dedicated support from your own Exclusio Manager.",
      ],
      cta: {
        label: "Start earning",
        href: links.register,
        openInNewTab: true,
      },
    },
    {
      id: "exclusio-ads",
      title: "Exclusio ADS",
      headingBefore: "What is",
      headingLogo: "exclusio-ads" as const,
      headingAfter: "?",
      paragraphs: [
        "Exclusio Ads is a built-in advertising system designed to help creators reach new paying fans beyond their existing audience.",
        "Promote your profile or content directly to relevant active fans across Exclusio. Choose the countries you want to target, set your budget, and track your campaign performance in real time.",
        "For the first time, creators can actively invest in growing their audience directly within a creator platform — turning visibility into new revenue opportunities.",
      ],
      cta: {
        label: "Learn more about Exclusio Ads",
        href: links.exclusioAds,
        openInNewTab: true,
      },
    },
  ],
};

export const featuresSection = {
  title: "Everything you need to earn more and grow faster.",
  tagline: "Built for creators who want more.",
};

export const features = [
  {
    title: "Keep 100% of your earnings",
    description:
      "0% platform commission. Your content, your earnings.",
    icon: "earnings" as const,
  },
  {
    title: "Reach new paying fans",
    description:
      "Grow beyond your existing audience with Exclusio Ads.",
    icon: "scale" as const,
  },
  {
    title: "Monetize your way",
    description:
      "Multiple ways to turn your audience into revenue.",
    icon: "monetize" as const,
  },
  {
    title: "Your content, protected",
    description:
      "Advanced protection to help keep your exclusive content secure.",
    icon: "protection" as const,
  },
  {
    title: "Your own Exclusio Manager",
    description:
      "Dedicated support to help you get started and grow.",
    icon: "support" as const,
  },
];

export const getStarted = {
  kicker: "Three steps",
  title: "How to get started",
  steps: [
    {
      titleBefore: "Apply to join ",
      titleAccent: "Exclusio",
      description:
        "Exclusio is referral-only. To apply as a creator, you must be referred by an existing Exclusio creator or fan. Submit your application and, once approved by our team, you'll get access to the platform.",
    },
    {
      titleBefore: "Start ",
      titleAccent: "earning",
      description:
        "Create your profile and start monetizing your audience through exclusive content, subscriptions, paid messages, blasts and personalized private offers. You choose what to sell and set your own prices.",
    },
    {
      titleBefore: "Grow your ",
      titleAccent: "audience",
      description:
        "Bring your existing audience to Exclusio and reach new paying fans with Exclusio Ads. Promote your profile and content to relevant fans and turn more visibility into more sales.",
    },
  ],
  cta: {
    label: "Start Earning",
    href: links.register,
    openInNewTab: true,
  },
};

export type ShowcaseMockCard = {
  title: string;
  description: string;
  price?: string;
  cardStyle?: "promo" | "step";
};

export const showcase = {
  tabs: [
    {
      id: "sell",
      tabTitle: "What you can sell",
      kicker: "What you can sell",
      titleAccent: "Monetize",
      titleAfter: " more than content.",
      description:
        "Turn your audience into revenue your way. Sell exclusive content, subscriptions, paid messages, blasts, or create personalized private offers for your fans. You decide what to offer and how much to charge.",
      profileTag: "Earn your way, set your price",
      mockCards: [
        {
          title: "Exclusive Content",
          price: "$99",
          description: "Photos, videos & posts",
        },
        {
          title: "Subscriptions",
          price: "$79",
          description: "Recurring exclusive access",
        },
        {
          title: "Paid Messages",
          price: "$10",
          description: "Private paid content",
        },
        {
          title: "Private Offers",
          price: "$2000",
          description: "Personalized offers & experiences",
        },
      ],
    },
    {
      id: "exclusio-ads",
      tabTitle: "Exclusio Ads",
      kicker: "How you can earn more",
      title: "Grow your revenue. Reach new fans faster.",
      description:
        "Go beyond your existing audience with Exclusio Ads. Promote your profile, content, or send direct blasts to relevant active fans across Exclusio. Reach potential buyers faster and turn more visibility into new revenue opportunities.",
      profileTag: "Exclusio Ads",
      mockCards: [
        {
          title: "Choose how to promote",
          description: "Profile · Content · Direct Blast",
          cardStyle: "promo" as const,
        },
        {
          title: "CHOOSE YOUR AUDIENCE",
          description: "Target by country.",
          cardStyle: "step" as const,
        },
        {
          title: "SET YOUR BUDGET",
          description: "Only pay for real exposure.",
          cardStyle: "step" as const,
        },
        {
          title: "TRACK YOUR RESULTS",
          description: "See results in real time.",
          cardStyle: "step" as const,
        },
      ],
    },
  ],
};

export const showcaseSellTab = showcase.tabs[0];

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
      heading: "How can I join Exclusio?",
      description:
        "Exclusio is a referral-only platform. To apply as a creator, you must first be referred by an existing Exclusio creator or fan. Once referred, you can submit your application for review by our team.",
    },
    {
      heading: "What can I sell on Exclusio?",
      description:
        "You can monetize exclusive posts, subscriptions, paid messages, blasts and personalized private offers. You decide what you want to offer and how much you want to charge.",
    },
    {
      heading: "How much does Exclusio charge creators?",
      description:
        "Exclusio takes 0% platform commission on your earnings. Only applicable payment processing fees apply.",
    },
    {
      heading: "How can I reach new paying fans?",
      description:
        "With Exclusio Ads, you can promote your profile or content to relevant active fans across the platform, target selected countries and track your campaign performance.",
    },
    {
      heading: "How does Exclusio protect my content?",
      description:
        "Exclusio uses advanced protection against unauthorized screenshots and screen recordings, combined with dynamic watermarking to help creators maintain greater control over their exclusive content.",
    },
    {
      heading: "How much can I earn with Exclusio?",
      description:
        "There is no fixed earning limit. Your revenue depends on your audience, pricing, offers, activity and sales. Exclusio gives you multiple monetization tools and growth tools to help you increase your earning potential.",
    },
    {
      heading: "What support do I get as a creator?",
      description:
        "Creators get dedicated support to help with account setup, platform tools and growing their activity on Exclusio.",
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
