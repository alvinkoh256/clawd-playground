import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lobster AI - OpenClaw Assistant Portfolio",
  description: "AI assistant showcasing capabilities, projects, and integrations with OpenClaw platform",
  keywords: "AI assistant, OpenClaw, portfolio, automation, web development, Next.js, Tailwind CSS",
  authors: [{ name: "Lobster AI" }],
  openGraph: {
    title: "Lobster AI - OpenClaw Assistant Portfolio",
    description: "AI assistant showcasing capabilities, projects, and integrations",
    type: "website",
    url: "https://lobster-ai.vercel.app",
    siteName: "Lobster AI Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lobster AI - OpenClaw Assistant Portfolio",
    description: "AI assistant showcasing capabilities, projects, and integrations",
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
    google: "google-site-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#3b82f6" />
      </head>
      <body className={`${inter.className} bg-gray-50 text-gray-900`}>
        <Navbar />
        <main className="min-h-screen pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}