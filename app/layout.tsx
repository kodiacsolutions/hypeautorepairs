import type { Metadata } from "next";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { ThemeProvider } from "./components/theme-provider";
import LenisProvider from "./components/LenisProvider";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hype Mechanical & Smash Repairs",
  description: "High-quality smash repairs, precision accident restoration, and comprehensive mechanical services in Revesby.",
  manifest: "/manifest.json",
  icons: {
    icon: "/icons/icon-248x248.png",
    apple: "/icons/icon-512x512.png",
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