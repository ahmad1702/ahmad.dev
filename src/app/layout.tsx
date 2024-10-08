import { siteConfig } from "@/app/site-config";
import Footer from "@/components/footer";
import { SiteHeader } from "@/components/site-header";
import { TailwindIndicator } from "@/components/tailwind-indicator";
import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/cn";
import { CSPostHogProvider } from "@/lib/posthog";
import "@/styles/globals.css";
import { Analytics } from "@vercel/analytics/react";
import { Metadata } from "next";

import { JetBrains_Mono, Urbanist } from "next/font/google";
import localFont from "next/font/local";

const fontSans = Urbanist({
  subsets: ["latin"],
  variable: "--font-sans",
});

const fontCal = localFont({
  src: "../styles/calsans.ttf",
  variable: "--font-cal",
  display: "swap",
});

const fontMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    images: [{ url: "/opengraph-image.png" }],
  },
  twitter: {
    card: "summary_large_image",
    images: [{ url: "/opengraph-image.png" }],
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <CSPostHogProvider>
          <body
            className={cn(
              "min-h-screen font-sans antialiased overscroll-x-none",
              fontSans.variable,
              fontCal.variable,
              fontMono.variable
            )}
          >
            <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
              <div className="relative flex min-h-screen flex-col">
                <SiteHeader />
                <div className="flex-1 min-h-[calc(100vh-4rem)]">
                  {children}
                </div>
                <Footer />
              </div>
              <TailwindIndicator />
            </ThemeProvider>
            <Analytics />
          </body>
        </CSPostHogProvider>
      </html>
    </>
  );
}
