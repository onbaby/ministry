import type React from "react"
import "./globals.css"
import Footer from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"
import { Header, PageTransition } from "./components/dynamic-imports"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: {
    default: "007 Ministry - Faith & Work",
    template: "%s | 007 Ministry",
  },
  description:
    "Connecting young people with housing, job training, and community support to revitalize the American labor force.",
  keywords: "ministry, faith, work, job training, housing, young adults, community support",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Blinker:wght@100;200;300;400;600;700;800;900&family=Oxanium:wght@200..800&family=Signika+Negative:wght@300..700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-blinker">
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
