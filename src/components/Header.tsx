import Image from "next/image";
import Link from "next/link";
import { getTranslations } from "next-intl/server";
import { headerAssets, navHrefs } from "@/content/site";

export async function Header() {
  const tNav = await getTranslations("nav");
  const tHeader = await getTranslations("header");
  const { logo, signUp } = headerAssets;

  return (
    <nav className="site-nav">
      <div className="site-wrap">
        <Link href="/" className="nav-logo block shrink-0">
          <Image
            src={logo.src}
            alt={tHeader("logoAlt")}
            width={logo.width}
            height={logo.height}
            className="h-auto"
            priority
          />
        </Link>

        <div className="nav-links">
          {navHrefs.map((link) => (
            <a key={link.href} href={link.href}>
              {tNav(`links.${link.key}`)}
            </a>
          ))}
        </div>

        <div className="nav-right">
          <a
            href={signUp.href}
            target={signUp.openInNewTab ? "_blank" : undefined}
            rel={signUp.openInNewTab ? "noopener noreferrer" : undefined}
            className="btn-primary nav-signup"
          >
            {tHeader("signUp")}
          </a>
        </div>
      </div>
    </nav>
  );
}
