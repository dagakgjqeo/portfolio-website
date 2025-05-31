"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useState } from "react"
import Image from "next/image"

const navigation = [
  { name: "About", href: "/about" },
  { name: "Products", href: "/products" },
  { name: "Articles", href: "/articles" },
  { name: "Contact", href: "/contact" },
]

export function Header() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-nightsky-light bg-nightsky-dark/80 backdrop-blur supports-[backdrop-filter]:bg-nightsky-dark/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-3">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-firework-gold to-firework-red flex items-center justify-center overflow-hidden">
            <Image
              src="/images/heat.png"
              alt="Heat Logo"
              width={32}
              height={32}
              className="rounded-full object-cover"
            />
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-firework-gold via-firework-red to-firework-blue bg-clip-text text-transparent">
            Heat
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-firework-gold relative group",
                pathname === item.href ? "text-firework-gold" : "text-muted-foreground",
              )}
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-firework-gold transition-all group-hover:w-full"></span>
            </Link>
          ))}
        </nav>

        {/* Mobile Navigation */}
        <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>

        {isMenuOpen && (
          <div className="absolute top-16 left-0 right-0 bg-nightsky-dark border-b border-nightsky-light md:hidden">
            <nav className="container py-4 space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "block px-3 py-2 text-sm font-medium transition-colors hover:text-firework-gold",
                    pathname === item.href ? "text-firework-gold" : "text-muted-foreground",
                  )}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
