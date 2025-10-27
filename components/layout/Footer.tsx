"use client"

import { GraduationCap, Phone, Mail, MessageCircle } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <GraduationCap className="h-8 w-8 text-orange-500" />
              <span className="text-xl font-bold">Next Stop Global</span>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Making higher education in China, Hungary, and Italy affordable and accessible for international students worldwide.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <div className="space-y-2">
              <Link href="/about" className="block text-gray-300 hover:text-orange-500 transition-colors">
                About Us
              </Link>
              <Link href="/scholarships" className="block text-gray-300 hover:text-orange-500 transition-colors">
                Scholarships
              </Link>
              <Link href="/countries" className="block text-gray-300 hover:text-orange-500 transition-colors">
                Countries
              </Link>
              <Link href="/apply" className="block text-gray-300 hover:text-orange-500 transition-colors">
                Apply Now
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Programs</h4>
            <div className="space-y-2">
              <Link
                href="/scholarships/bachelors"
                className="block text-gray-300 hover:text-orange-500 transition-colors"
              >
                Bachelor's Degrees
              </Link>
              <Link
                href="/scholarships/masters"
                className="block text-gray-300 hover:text-orange-500 transition-colors"
              >
                Master's Degrees
              </Link>
              <Link
                href="/scholarships/phd"
                className="block text-gray-300 hover:text-orange-500 transition-colors"
              >
                PhD Programs
              </Link>
              <Link
                href="/scholarships/mbbs"
                className="block text-gray-300 hover:text-orange-500 transition-colors"
              >
                MBBS Programs
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-orange-500" />
                <span className="text-gray-300">+92 346 487 6094</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-orange-500" />
                <span className="text-gray-300">info@nextstopglobal.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MessageCircle className="h-4 w-4 text-orange-500" />
                <span className="text-gray-300">WhatsApp Support</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 Next Stop Global. All rights reserved. | Making education dreams come true.
          </p>
        </div>
      </div>
    </footer>
  )
}

