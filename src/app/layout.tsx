import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://ts-amir.de";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Tennisschule Amir | Spitzen-Tennistraining in Darmstadt & Weiterstadt",
  description:
    "ATP A-Level zertifiziertes Training für Kinder, Jugendliche und Erwachsene.",
  keywords: [
    "Tennisschule Amir",
    "Tennis Darmstadt",
    "SG Weiterstadt Tennis",
    "Amir Reza Tennis",
    "Tennistraining Hessen",
    "ATP Coach Darmstadt",
    "Kinder Tenniscamp",
    "Tennistraining Erwachsene",
  ],
  icons: {
    icon: [
      { url: `${basePath}/images/logo-amir.png`, type: "image/png" },
      { url: `${basePath}/images/favicon.png`, type: "image/png" },
    ],
    shortcut: `${basePath}/images/logo-amir.png`,
    apple: `${basePath}/images/logo-amir.png`,
  },
  openGraph: {
    title: "Tennisschule Amir | Spitzen-Tennistraining in Darmstadt & Weiterstadt",
    description: "ATP A-Level zertifiziertes Training für Kinder, Jugendliche und Erwachsene.",
    url: siteUrl,
    siteName: "Tennisschule Amir",
    locale: "de_DE",
    type: "website",
    images: [
      {
        url: `${basePath}/images/logo-amir.png`,
        width: 1200,
        height: 630,
        alt: "Tennisschule Amir",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tennisschule Amir | Spitzen-Tennistraining in Darmstadt & Weiterstadt",
    description: "ATP A-Level zertifiziertes Training für Kinder, Jugendliche und Erwachsene.",
    images: [`${basePath}/images/logo-amir.png`],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de" className="scroll-smooth">
      <head>
        <link rel="icon" href={`${basePath}/images/logo-amir.png`} type="image/png" />
        <link rel="shortcut icon" href={`${basePath}/images/logo-amir.png`} type="image/png" />
        <link rel="apple-touch-icon" href={`${basePath}/images/logo-amir.png`} />
      </head>
      <body className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased selection:bg-lime-300 selection:text-slate-900">
        {children}
      </body>
    </html>
  );
}
