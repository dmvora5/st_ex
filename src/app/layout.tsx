import { Outfit, Playfair_Display } from "next/font/google";
import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages, getTranslations } from "next-intl/server";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { siteMeta } from "@/content/site";
import { getDir } from "@/i18n/config";
import "./globals.css";
import "../styles/rtl.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  style: ["normal", "italic"],
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("siteMeta");
  const name = t("name");
  const tagline = t("tagline");
  const description = t("description");

  return {
    title: {
      default: `${name} – ${tagline}`,
      template: `%s – ${name}`,
    },
    description,
    metadataBase: new URL(siteMeta.url),
    openGraph: {
      title: `${name} – ${tagline}`,
      description,
      url: siteMeta.url,
      siteName: name,
      type: "website",
      images: [
        {
          url: siteMeta.ogImage,
          width: 1200,
          height: 630,
          alt: name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${name} – ${tagline}`,
      description,
      images: [siteMeta.ogImage],
    },
    icons: {
      icon: "/favicon.png",
      apple: "/icons/android-chrome-512x512.png",
    },
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const messages = await getMessages();
  const dir = getDir(locale);

  return (
    <html lang={locale} dir={dir} className={`${playfair.variable} ${outfit.variable}`}>
      <body className={`${outfit.className} antialiased`}>
        <NextIntlClientProvider messages={messages}>
          <div className="site min-h-screen flex flex-col">
            <Header />
            <main id="primary" className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
