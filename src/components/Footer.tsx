import Image from "next/image";
import Link from "next/link";
import { footer } from "@/content/site";
import { SocialIcon } from "@/components/SocialIcon";

export function Footer() {
  const { logo, cta, social, copyright, legalLinks, columns, tagline } = footer;

  return (
    <footer className="site-footer">
      <div className="site-wrap">
        <div className="foot-logo-mobile">
          <Link href="/">
            <Image
              src={logo.src}
              alt={logo.alt}
              width={logo.width}
              height={logo.height}
              className="h-auto"
            />
          </Link>
        </div>

        <div className="foot-grid">
          <div>
            <Link href="/" className="foot-logo block">
              <Image
                src={logo.src}
                alt={logo.alt}
                width={logo.width}
                height={logo.height}
                className="h-auto"
              />
            </Link>
            <p className="foot-tagline">{tagline}</p>
          </div>

          {columns.map((column) => (
            <div key={column.title} className="foot-col">
              <h4>{column.title}</h4>
              {column.links.map((link) =>
                link.href.startsWith("/") ? (
                  <Link key={link.href} href={link.href}>
                    {link.label}
                  </Link>
                ) : (
                  <a key={link.href} href={link.href}>
                    {link.label}
                  </a>
                ),
              )}
            </div>
          ))}
        </div>

        <div className="foot-bottom">
          <div className="socials">
            {social.map((item) => (
              <a
                key={item.name}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.name}
                className="social-link"
              >
                <SocialIcon name={item.icon} />
              </a>
            ))}
          </div>

          <a
            href={cta.href}
            target={cta.openInNewTab ? "_blank" : undefined}
            rel={cta.openInNewTab ? "noopener noreferrer" : undefined}
            className="btn-primary footer-mobile-cta"
          >
            {cta.label}
          </a>
        </div>
      </div>

      <div className="foot-copyright-bar">
        <div className="site-wrap foot-copyright-inner">
          <p className="foot-copyright-text">{copyright}</p>
          <ul className="foot-legal-links">
            {legalLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
