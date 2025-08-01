import type { Metadata } from "next";
import { Poppins } from 'next/font/google';
import "./globals.css";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import styles from "./page.module.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://sboettcher.com/"),
  title: "Stephen Boettcher | Resume and Portfolio",
  description:
    "I'm a front-end dev that loves to code and architect solutions.",
  openGraph: {
    title: "Stephen Boettcher | Resume and Portfolio",
    description:
      "I'm a front-end dev that loves to code and architect solutions.",
    url: "https://sboettcher.com/",
    siteName: "Stephen Boettcher",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Stephen Boettcher | Resume and Portfolio",
    description:
      "I'm a front-end dev that loves to code and architect solutions.",
    images: ["https://sboettcher.com/logo.svg"],
  },
};

const poppins = Poppins({
  weight: ['400', '600'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins' // This creates a CSS variable you can use later
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en"  className={poppins.className} >
      <body>
        <Header isVisible={true} />
        <div className={styles.page}>
          <main className={styles.main}>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
