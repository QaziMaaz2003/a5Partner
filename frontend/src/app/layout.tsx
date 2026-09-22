import type { Metadata } from "next";
import { DM_Serif_Display, Manrope } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const dmSerif = DM_Serif_Display({
  variable: "--font-dm-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.a5partners.com"),
  title: {
    default: "A5 Partners — Building Better Businesses Together",
    template: "%s | A5 Partners",
  },
  description:
    "A5 Partners is a long-term holding company that acquires and grows industry-leading companies with recurring revenue — the right way, for the long term.",
  openGraph: {
    type: "website",
    siteName: "A5 Partners",
    title: "A5 Partners — Building Better Businesses Together",
    description:
      "A long-term holding company acquiring and growing industry-leading companies with recurring revenue.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} ${dmSerif.variable}`}>
        <a href="#main" className="sr-only focus:not-sr-only">
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <Reveal />
      </body>
    </html>
  );
}
