"use client"

import { Button } from "@/components/ui/button"
import { GraduationCap } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Header() {
  const pathname = usePathname()

  const isActive = (path: string) => {
    return pathname === path ? "text-[#129255] font-medium" : "text-[#101828] hover:text-[#129255]"
  }

  return (
    <nav className="border-b bg-white sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
            <GraduationCap className="h-8 w-8 text-[#129255]" />
            <span className="text-xl font-bold text-[#101828]">Next Stop Global</span>
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
            <Link href="/universities" className={`transition-colors ${isActive("/universities")}`}>
              Universities
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
          
          <Button asChild className="hidden md:inline-flex bg-[#129255] text-white hover:bg-[#129255]/90">
            <Link href="/apply" className="flex items-center gap-2">
              Apply Now
            </Link>
          </Button>
        </div>
      </div>
    </nav>
  )
}

