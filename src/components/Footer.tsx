import Link from "next/link";
import { getTranslations } from "next-intl/server";
import { FooterSocialLinks } from "@/components/FooterSocialLinks";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { footerNavHrefs } from "@/content/site";

export async function Footer() {
  const t = await getTranslations("footer");

  return (
    <footer className="site-footer">
      <div className="site-wrap footer-inner">
        <ul className="footer-nav-links">
          {footerNavHrefs.map((link) => (
            <li key={link.key}>
              <Link href={link.href}>{t(link.key)}</Link>
            </li>
          ))}
        </ul>

        <div className="footer-copyright">
          <p>
            {t("copyright")}{" "}
            <Link href="/">{t("brand")}</Link>
            {t("copyrightSuffix")}
          </p>
        </div>

        <svg
          className="footer-social-gradient-defs"
          width="0"
          height="0"
          aria-hidden
          focusable="false"
        >
          <defs>
            <linearGradient
              id="footer-social-gradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#97c7e2" />
              <stop offset="100%" stopColor="#f4bdd3" />
            </linearGradient>
          </defs>
        </svg>

        <FooterSocialLinks />
        <LanguageSwitcher />
      </div>
    </footer>
  );
}
