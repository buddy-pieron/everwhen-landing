import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "@/components/header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pieron Labs | Next.js, Convex, and AI Insights",
  description: "Technical blog focused on Next.js, Convex, and AI tools for indie developers.",
  openGraph: {
    title: "Pieron Labs",
    description: "Technical insights on Next.js, Convex, and AI tools",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://blog.pieronlabs.com",
    siteName: "Pieron Labs",
    images: [
      {
        url: "/og?title=Pieron Labs&description=Technical insights on Next.js, Convex, and AI tools",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pieron Labs",
    description: "Technical insights on Next.js, Convex, and AI tools",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          <Header />
          <main>{children}</main>
          <footer className="border-t mt-20">
            <div className="container mx-auto px-4 py-8 text-center text-gray-600 dark:text-gray-400">
              <p>© {new Date().getFullYear()} Pieron Labs. All rights reserved.</p>
            </div>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
