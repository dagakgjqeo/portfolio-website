import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FireworkClick } from "@/components/firework-click"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Heat - 学生エンジニア",
  description: "エンジニアを目指す学生のポートフォリオサイト",
  icons: {
    icon: "/images/heat.png",
    shortcut: "/images/heat.png",
    apple: "/images/heat.png",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body className={`${inter.className} night-sky-bg`}>
        <div className="background-sparkles absolute inset-0 z-0">
          <div className="firework-sparkle"></div>
          <div className="firework-sparkle"></div>
          <div className="firework-sparkle"></div>
          <div className="firework-sparkle"></div>
          <div className="firework-sparkle"></div>
          <div className="firework-sparkle"></div>
          <div className="firework-sparkle"></div>
        </div>
        <div className="flex flex-col min-h-screen relative z-10">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
        <FireworkClick />
      </body>
    </html>
  )
}
