import type { Metadata } from "next";
import { Source_Sans_3, Manrope } from "next/font/google";
import { GoogleTagManager } from "@next/third-parties/google";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { siteDetails } from "@/data/siteDetails";
import { SpeedInsights } from "@vercel/speed-insights/next"
import "./globals.css";

const manrope = Manrope({ subsets: ["latin"] });
const sourceSans = Source_Sans_3({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: siteDetails.metadata.title,
  description: siteDetails.metadata.description,
  openGraph: {
    title: siteDetails.metadata.title,
    description: siteDetails.metadata.description,
    url: siteDetails.siteUrl,
    type: "website",
    images: [
      {
        url: "/images/Scufflr-tinder-for-sparring-partner.jpg",
        width: 1200,
        height: 675,
        alt: siteDetails.siteName,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteDetails.metadata.title,
    description: siteDetails.metadata.description,
    images: ["/images/Scufflr-tinder-for-sparring-partner.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <title>Scufflr | tinder for sparring | Find Training Buddy 🔥🥋</title>
      <meta name="og:type" content="website" />
      <meta name="og:title" content="Scufflr | tinder for sparring | Find Training Buddy 🔥🥋" />
      <meta
        name="og:description"
        content="Tinder for sparring. Scufflr is the easiest way to find sparring partners on every level, or simply train casually. 🥋 Check out the app now!"
      />
      <link rel="canonical" href="/" />
      <meta name="og:url" content="/" />
      <meta name="og:site_name" content="Scufflr" />
      <meta name="og:image" content="Scufflr-tinder-for-sparring-partner.jpg" />
      <GoogleTagManager gtmId="GTM-KZTHQ3DJ" />
      <body
        className={`${manrope.className} ${sourceSans.className} antialiased`}
      >
        <Header />
        <SpeedInsights />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
