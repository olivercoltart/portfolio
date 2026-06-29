import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://olivercoltart.com"),
  title: {
    default: "Oliver Coltart — Software Engineer & Product Developer",
    template: "%s | Oliver Coltart",
  },
  description:
    "Software engineer and product developer building fast, well-crafted web applications.",
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: "Oliver Coltart",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@olivercoltart",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
