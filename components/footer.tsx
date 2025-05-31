"use client"

import { Github, Mail, Twitter, ArrowUp, User, BookOpen } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="border-t border-nightsky-light bg-nightsky-dark">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* サイト情報 */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <span className="text-xl font-bold bg-gradient-to-r from-firework-gold via-firework-red to-firework-blue bg-clip-text text-transparent">
                Heat
              </span>
            </div>
            <p className="text-sm text-muted-foreground">
              エンジニアを目指す学生のポートフォリオサイトです．いつか立派なエンジニアになることを目指して日々成長を続けています．
            </p>
            <div className="flex items-center space-x-4">
              <Link
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-firework-gold transition-colors"
              >
                <Github className="h-5 w-5" />
              </Link>
              <Link
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-firework-blue transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </Link>
              <Link
                href="mailto:your-email@example.com"
                className="text-muted-foreground hover:text-firework-red transition-colors"
              >
                <Mail className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* ページリンク */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold flex items-center gap-2">
              <BookOpen className="h-4 w-4 text-firework-gold" />
              ページ
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm text-muted-foreground hover:text-firework-gold transition-colors">
                  ホーム
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-sm text-muted-foreground hover:text-firework-gold transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="text-sm text-muted-foreground hover:text-firework-gold transition-colors"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  href="/articles"
                  className="text-sm text-muted-foreground hover:text-firework-gold transition-colors"
                >
                  Articles
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-muted-foreground hover:text-firework-gold transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* ユーザー情報 */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold flex items-center gap-2">
              <User className="h-4 w-4 text-firework-red" />
              プロフィール
            </h3>
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-firework-purple to-firework-blue flex items-center justify-center overflow-hidden">
                <Image
                  src="/images/heat.png"
                  alt="プロフィール画像"
                  width={48}
                  height={48}
                  className="rounded-full object-cover"
                />
              </div>
              <div>
                <p className="text-sm font-medium">阿野 寛人</p>
                <p className="text-xs text-muted-foreground">学生</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">概要を書きます．</p>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-nightsky-light flex flex-col-reverse md:flex-row justify-between items-center">
          <p className="text-center text-xs text-muted-foreground mt-4 md:mt-0">© 2025 Heat. All rights reserved.</p>
          <Button variant="outline" size="icon" className="rounded-full" onClick={scrollToTop}>
            <ArrowUp className="h-4 w-4" />
            <span className="sr-only">ページトップへ</span>
          </Button>
        </div>
      </div>
    </footer>
  )
}
