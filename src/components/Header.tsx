import Image from "next/image";
import Link from "next/link";
import { header, nav } from "@/content/site";

export function Header() {
  const { logo, cta, signUp } = header;

  return (
    <nav className="site-nav">
      <div className="site-wrap">
        <Link href="/" className="nav-logo block shrink-0">
          <Image
            src={logo.src}
            alt={logo.alt}
            width={logo.width}
            height={logo.height}
            className="h-auto"
            priority
          />
        </Link>

        <div className="nav-links">
          {nav.links.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </div>

        <div className="nav-right">
          <a
            href={cta.href}
            target={cta.openInNewTab ? "_blank" : undefined}
            rel={cta.openInNewTab ? "noopener noreferrer" : undefined}
            className="btn-ghost"
          >
            {cta.label}
          </a>
          <a
            href={signUp.href}
            target={signUp.openInNewTab ? "_blank" : undefined}
            rel={signUp.openInNewTab ? "noopener noreferrer" : undefined}
            className="btn-primary nav-signup"
          >
            {signUp.label}
          </a>
        </div>
      </div>
    </nav>
  );
}
