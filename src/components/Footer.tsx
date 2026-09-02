import Link from "next/link";
import { footer } from "@/content/site";
import { FooterSocialLinks } from "@/components/FooterSocialLinks";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-wrap footer-inner">
        <ul className="footer-nav-links">
          {footer.navLinks.map((link) => (
            <li key={link.label}>
              {link.href.startsWith("/") ? (
                <Link href={link.href}>{link.label}</Link>
              ) : (
                <a
                  href={link.href}
                  target={"openInNewTab" in link && link.openInNewTab ? "_blank" : undefined}
                  rel={
                    "openInNewTab" in link && link.openInNewTab
                      ? "noopener noreferrer"
                      : undefined
                  }
                >
                  {link.label}
                </a>
              )}
            </li>
          ))}
        </ul>

        <div className="footer-copyright">
          <p>
            {footer.copyright}{" "}
            <Link href="/">{footer.brand}</Link>
            {footer.copyrightSuffix}
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
      </div>
    </footer>
  );
}
