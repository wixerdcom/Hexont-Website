import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://hexont.com"),
  title: {
    default: "HEXONT - Honey Structure General Contracting Co.",
    template: "%s | HEXONT",
  },
  description: "Leading general contracting company in Saudi Arabia, specializing in construction, structural solutions, and project management. Excellence in every build.",
  keywords: [
    "General Contracting",
    "Construction",
    "Saudi Arabia",
    "Engineering",
    "Structure",
    "Project Management",
    "HEXONT",
    "Honey Structure",
  ],
  authors: [{ name: "HEXONT" }],
  creator: "HEXONT",
  publisher: "HEXONT",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "HEXONT - Honey Structure General Contracting Co.",
    description: "Leading general contracting company in Saudi Arabia, specializing in construction, structural solutions, and project management.",
    url: "https://hexont.com",
    siteName: "HEXONT",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/assets/hexontLogo.png",
        width: 1200,
        height: 630,
        alt: "HEXONT Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "HEXONT - Honey Structure General Contracting Co.",
    description: "Leading general contracting company in Saudi Arabia, specializing in construction, structural solutions, and project management.",
    images: ["/assets/hexontLogo.png"],
    creator: "@hexont",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
