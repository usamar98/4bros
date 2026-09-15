import type { Metadata } from "next";
import { business } from "@/lib/business";
import "@fontsource/barlow-condensed/600.css";
import "@fontsource/barlow-condensed/700.css";
import "@fontsource/barlow-condensed/800.css";
import "@fontsource/dm-sans/400.css";
import "@fontsource/dm-sans/500.css";
import "@fontsource/dm-sans/600.css";
import "@fontsource/dm-sans/700.css";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(business.siteUrl),
  title: "4bros Hafizabad | Burgers, Shawarma, Rolls & Sandwiches",
  description: "Explore the 4bros menu in Hafizabad, Pakistan. Burgers from PKR 170, zinger burgers, shawarma, rolls, sandwiches and dip sauces. Call or order on WhatsApp.",
  icons: { icon: "/favicon.svg" },
  alternates: { canonical: "/" },
  applicationName: "4bros",
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large" } },
  openGraph: {
    type: "website", locale: "en_PK", siteName: "4bros", url: "/",
    title: "4bros Hafizabad | Fast Food. Big Flavor. Real Bros.",
    description: "Explore burgers, zinger burgers, shawarma, rolls and sandwiches at 4bros in Hafizabad, Pakistan. Full menu and prices in PKR.",
  },
  twitter: { card: "summary", title: "4bros Hafizabad | Menu & Prices", description: "Burgers, shawarma, rolls and sandwiches in Hafizabad. Explore the full 4bros menu with prices in PKR." },
  other: { "geo.placename": "Hafizabad, Pakistan", "geo.region": "PK" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en-PK"><body><a className="skip-link" href="#main">Skip to content</a>{children}</body></html>;
}
