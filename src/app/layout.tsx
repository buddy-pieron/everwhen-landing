import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "@/components/header";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "EverWhen Blog | Senior Safety & Caregiver Insights",
  description:
    "Expert guides on senior safety, independent living, and caregiver support. Privacy-first solutions for families.",
  openGraph: {
    title: "EverWhen Blog",
    description:
      "Expert guides on senior safety, independent living, and caregiver support.",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://www.everwhen.io",
    siteName: "EverWhen",
    images: [
      {
        url: "https://www.everwhen.io/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "EverWhen Blog",
    description:
      "Expert guides on senior safety, independent living, and caregiver support.",
    creator: "@everwhen",
    images: ["https://www.everwhen.io/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} antialiased font-sans`}>
        <ThemeProvider>
          <Header />
          <main>{children}</main>
          <footer className="border-t mt-20">
            <div className="container mx-auto px-4 py-8 text-center text-gray-600 dark:text-gray-400">
              <p>
                © {new Date().getFullYear()} PAI Tech LLC. All rights reserved.
                &nbsp;·&nbsp;
                <a
                  href="https://www.everwhen.io"
                  className="hover:text-purple-600 transition-colors"
                >
                  everwhen.io
                </a>
              </p>
            </div>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
