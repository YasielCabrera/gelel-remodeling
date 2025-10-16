import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar/navbar";
import { Footer } from "@/components/footer";
import { Providers } from "./providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Gelel Remodeling - Professional Flooring Services",
  description:
    "Professional remodeling and flooring services. Transform your space with our expert craftsmanship and quality materials.",
  keywords: [
    "remodeling",
    "flooring",
    "home improvement",
    "construction",
    "renovation",
  ],
  authors: [{ name: "Gelel Remodeling" }],
  creator: "Gelel Remodeling",
  publisher: "Gelel Remodeling",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://gelelremodeling.com"), // Replace with your actual domain
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Gelel Remodeling - Professional Flooring Services",
    description:
      "Professional remodeling and flooring services. Transform your space with our expert craftsmanship and quality materials.",
    url: "https://gelelremodeling.com", // Replace with your actual domain
    siteName: "Gelel Remodeling",
    images: [
      {
        url: "/social.jpg",
        width: 1200,
        height: 630,
        alt: "Gelel Remodeling - Professional Flooring Services",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gelel Remodeling - Professional Flooring Services",
    description:
      "Professional remodeling and flooring services. Transform your space with our expert craftsmanship and quality materials.",
    images: ["/social.jpg"],
    creator: "@gelelremodeling", // Replace with your actual Twitter handle
    site: "@gelelremodeling", // Replace with your actual Twitter handle
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code", // Replace with your actual Google verification code
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
