import type { Metadata } from "next";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { ThemeProvider } from "./components/theme-provider";
import LenisProvider from "./components/LenisProvider";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://hypeautorepairs.com.au"),
  title: {
    default: "Hype Mechanical & Smash Repairs | Revesby NSW",
    template: "%s | Hype Mechanical & Smash Repairs",
  },
  description: "Revesby's premier smash repairs, precision accident restoration, and comprehensive mechanical workshop. Family-owned, offering high-quality panel beating, Glasurit painting, and logbook servicing.",
  keywords: [
    "smash repairs Revesby",
    "accident repairs Revesby",
    "car mechanic Revesby",
    "logbook servicing Revesby",
    "panel beating Sydney",
    "spray painting Revesby",
    "insurance accident claims NSW",
    "car diagnostics Revesby"
  ],
  manifest: "/manifest.json",
  icons: {
    icon: "/icons/icon-248x248.png",
    apple: "/icons/icon-512x512.png",
  },
  alternates: {
    canonical: "/",
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
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: "https://hypeautorepairs.com.au",
    title: "Hype Mechanical & Smash Repairs | Revesby NSW",
    description: "High-quality smash repairs, precision accident restoration, and comprehensive mechanical services in Revesby. Get your free repair quote today.",
    siteName: "Hype Mechanical & Smash Repairs",
    images: [
      {
        url: "/logo-footer.png",
        width: 1200,
        height: 630,
        alt: "Hype Mechanical & Smash Repairs Revesby",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hype Mechanical & Smash Repairs | Revesby NSW",
    description: "High-quality smash repairs, precision accident restoration, and comprehensive mechanical services in Revesby.",
    images: ["/logo-footer.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-white dark:bg-black flex flex-col transition-colors">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <LenisProvider>
            {/* 1. Header stays at the top */}
            <Header />

            {/* 2. Main content expands to push footer down */}
            <main className="flex-grow">
              {children}
            </main>

            {/* 3. Footer stays at the bottom */}
            <Footer />
          </LenisProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}