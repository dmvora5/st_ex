import { Outfit, Playfair_Display } from "next/font/google";
import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { siteMeta } from "@/content/site";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: {
    default: `${siteMeta.name} – ${siteMeta.tagline}`,
    template: `%s – ${siteMeta.name}`,
  },
  description: siteMeta.description,
  metadataBase: new URL(siteMeta.url),
  openGraph: {
    title: `${siteMeta.name} – ${siteMeta.tagline}`,
    description: siteMeta.description,
    url: siteMeta.url,
    siteName: siteMeta.name,
    type: "website",
    images: [
      {
        url: siteMeta.ogImage,
        width: 1200,
        height: 630,
        alt: siteMeta.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteMeta.name} – ${siteMeta.tagline}`,
    description: siteMeta.description,
    images: [siteMeta.ogImage],
  },
  icons: {
    icon: "/favicon.png",
    apple: "/icons/android-chrome-512x512.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${outfit.variable}`}>
      <body className="antialiased">
        <div className="site min-h-screen flex flex-col">
          <Header />
          <main id="primary" className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
