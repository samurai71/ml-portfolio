import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "@/components/mode-toggle";
import { Layers } from "lucide-react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next.js + Sanity Monorepo",
  description: "Monorepo with Next.js, shadcn/ui, Tailwind CSS, and Sanity Studio backend",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} min-h-screen bg-background text-foreground antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative flex min-h-screen flex-col">
            <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
              <div className="container flex h-14 max-w-screen-2xl items-center justify-between px-4 sm:px-8">
                <div className="flex items-center gap-2 font-bold tracking-tight">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                    <Layers className="h-4 w-4" />
                  </div>
                  <span className="text-base sm:text-lg">Monorepo Starter</span>
                </div>

                <div className="flex items-center gap-3">
                  <a
                    href="http://localhost:3333"
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs sm:text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Open Studio ↗
                  </a>
                  <ModeToggle />
                </div>
              </div>
            </header>

            <main className="flex-1">{children}</main>

            <footer className="border-t border-border/40 py-6 md:py-0">
              <div className="container flex flex-col items-center justify-between gap-4 md:h-16 md:flex-row px-4 sm:px-8">
                <p className="text-balance text-center text-xs text-muted-foreground md:text-left">
                  Next.js + Tailwind + shadcn/ui + Sanity Studio Monorepo
                </p>
              </div>
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
