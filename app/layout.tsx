import type { Metadata, Viewport } from "next";
import { Fraunces, IBM_Plex_Sans } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import "./globals.css";

const display = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
});

const body = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: {
    default: "Web3 Verification",
    template: "%s | Web3 Verification",
  },
  description: "Verify Web3 Talents certificates issued by Tum Blockchain Club.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#03000b",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body>
        <div className="shell">
          <header className="topbar">
            <Link className="brand-lockup" href="/">
              <Image
                className="brand-mark"
                src="/web3-talents-logo.png"
                alt="Web3 Talents"
                width={920}
                height={236}
                priority
              />
            </Link>
            <Image
              className="club-mark"
              src="/tbc-wordmark.png"
              alt="Tum Blockchain Club"
              width={600}
              height={156}
              priority
            />
          </header>
          {children}
        </div>
      </body>
    </html>
  );
}
