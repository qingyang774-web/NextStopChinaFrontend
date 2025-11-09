"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { usePathname } from "next/navigation"
import Image from "next/image"
import { Menu, X } from "lucide-react"

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/scholarships", label: "Scholarships" },
  { href: "/countries", label: "Countries" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
]

export default function Header() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const isActive = (path: string) => {
    return pathname === path ? "text-orange-500 font-medium" : "text-[#101828] hover:text-orange-500"
  }

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <nav className="border-b bg-white sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link
            href="/"
            className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
            onClick={closeMenu}
          >
            <Image
              src="/logo.png"
              alt="ManaraScholars logo"
              width={40}
              height={40}
              className="h-10 w-10"
              priority
            />
            <span className="text-xl font-bold text-[#101828]">ManaraScholars</span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {NAV_LINKS.map(({ href, label }) => (
              <Link key={href} href={href} className={`transition-colors ${isActive(href)}`}>
                {label}
              </Link>
            ))}
          </div>

          <div className="hidden md:block">
            <Button asChild className="bg-orange-500 text-white hover:bg-orange-700">
              <Link href="/apply" className="flex items-center gap-2">
                Apply Now
              </Link>
            </Button>
          </div>

          <button
            type="button"
            aria-label={isMenuOpen ? "Close navigation" : "Open navigation"}
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-[#101828] hover:text-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200">
            <div className="py-4 space-y-1">
              {NAV_LINKS.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  onClick={closeMenu}
                  className={`block px-3 py-2 text-base font-medium transition-colors ${isActive(href)}`}
                >
                  {label}
                </Link>
              ))}
              <div className="px-3 pt-3">
                <Button asChild className="w-full bg-orange-500 text-white hover:bg-orange-700">
                  <Link href="/apply" onClick={closeMenu}>
                    Apply Now
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

