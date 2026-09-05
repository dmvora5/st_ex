"use client";

import { useState } from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { ContactUsModal } from "@/components/ContactUsModal";
import { footerNavHrefs } from "@/content/site";

export function FooterNavLinks() {
  const t = useTranslations("footer");
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <>
      <ul className="footer-nav-links">
        <li>
          <button
            type="button"
            className="footer-nav-link-btn"
            onClick={() => setContactOpen(true)}
          >
            {t("contact")}
          </button>
        </li>
        {footerNavHrefs.map((link) => (
          <li key={link.key}>
            <Link href={link.href}>{t(link.key)}</Link>
          </li>
        ))}
      </ul>

      <ContactUsModal open={contactOpen} onClose={() => setContactOpen(false)} />
    </>
  );
}
