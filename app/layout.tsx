import type React from "react"
import { Inter } from "next/font/google"
import "./globals.css"
import Footer from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"
import { Header, PageTransition } from "./components/dynamic-imports"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "007 Ministry - Rebuilding Lives Through Labor",
  description:
    "Connecting young men with housing, job training, and community support to revitalize the American labor force.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light">
          {/* Fixed header container */}
          <div id="persistent-header">
            <Header />
          </div>
          <div className="flex flex-col min-h-screen">
            {/* Removed the extra invisible spacer that was causing double spacing */}
            <main className="flex-1">
              <PageTransition>{children}</PageTransition>
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
