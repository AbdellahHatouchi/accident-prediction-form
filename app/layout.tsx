import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/sonner"
import { Navbar } from "@/components/navbar"
import { cn } from "@/lib/utils" 

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Prédiction d'Accidents de la Route",
  description: "Application de prédiction d'accidents de la route"
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <div className="relative flex w-full items-center justify-center bg-white dark:bg-black">
            <div
              className={cn(
                "absolute inset-0",
                "[background-size:20px_20px]",
                "[background-image:radial-gradient(#d4d4d4_1px,transparent_1px)]",
                "dark:[background-image:radial-gradient(#404040_1px,transparent_1px)]",
              )}
            />
            {/* Radial gradient for the container to give a faded look */}
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_50%,black)] dark:bg-black"/>
            <div className="min-h-screen w-full flex flex-col">
              <Navbar />
              <main className="flex-1 z-20">{children}</main>
            </div>
            <Toaster />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'
