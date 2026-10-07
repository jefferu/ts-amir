import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tennisschule Amir | Dein privater Tennistrainer & Akademie Darmstadt",
  description:
    "Professionelles Tennistraining in Darmstadt & Weiterstadt für alle Spielstärken und Altersklassen. Geleitet von Davis-Cup-Spieler und ATP A-Lizenz Coach Amir Reza. Partner der Rafa Nadal Academy.",
  keywords: [
    "Tennisschule Amir",
    "Tennis Darmstadt",
    "SG Weiterstadt Tennis",
    "Amir Reza Tennis",
    "Tennistraining Hessen",
    "ATP Coach Darmstadt",
    "Kinder Tenniscamp",
    "Tennistraining Erwachsene"
  ],
  openGraph: {
    title: "Tennisschule Amir | Spitzen-Tennistraining in Darmstadt & Weiterstadt",
    description: "ATP A-Level zertifiziertes Training für Kinder, Jugendliche und Erwachsene.",
    locale: "de_DE",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de" className="scroll-smooth">
      <body className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased selection:bg-lime-300 selection:text-slate-900">
        {children}
      </body>
    </html>
  );
}
