"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { usePathname } from "next/navigation"
import Image from "next/image"

export default function Header() {
  const pathname = usePathname()

  const isActive = (path: string) => {
    return pathname === path ? "text-orange-500 font-medium" : "text-[#101828] hover:text-orange-500"
  }

  return (
    <nav className="border-b bg-white sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
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
            <Link href="/" className={`transition-colors ${isActive("/")}`}>
              Home
            </Link>
            <Link href="/about" className={`transition-colors ${isActive("/about")}`}>
              About Us
            </Link>
            <Link href="/scholarships" className={`transition-colors ${isActive("/scholarships")}`}>
              Scholarships
            </Link>
           
            <Link href="/countries" className={`transition-colors ${isActive("/countries")}`}>
              Countries
            </Link>
            <Link href="/blog" className={`transition-colors ${isActive("/blog")}`}>
              Blog
            </Link>
            <Link href="/contact" className={`transition-colors ${isActive("/contact")}`}>
              Contact
            </Link>
          </div>
          
          <Button asChild className="hidden md:inline-flex bg-orange-500 text-white hover:bg-orange-700">
            <Link href="/apply" className="flex items-center gap-2">
              Apply Now
            </Link>
          </Button>
        </div>
      </div>
    </nav>
  )
}

