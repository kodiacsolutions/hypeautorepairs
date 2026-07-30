import Footer from "./components/Footer";
import Header from "./components/Header";
import { ThemeProvider } from "./components/theme-provider";
import LenisProvider from "./components/LenisProvider";
import "./globals.css";

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