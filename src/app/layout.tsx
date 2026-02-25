import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "brdy eng.",
  description:
    "Software engineer building mobile and web experiences. React Native, TypeScript, and modern tooling.",
  keywords: [
    "software engineering",
    "React Native",
    "TypeScript",
    "mobile development",
  ],
  authors: [{ name: "brdy eng." }],
  openGraph: {
    title: "brdy eng.",
    description: "Software engineer building mobile and web experiences.",
    url: "https://brdy.dev",
    siteName: "brdy eng.",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "brdy eng.",
    description: "Software engineer building mobile and web experiences.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={spaceGrotesk.variable}>
      <body>{children}</body>
    </html>
  );
}
