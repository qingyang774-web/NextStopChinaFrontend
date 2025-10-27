"use client"

import { useState } from "react"
import { MessageCircle, X, Facebook, Instagram, Mail } from "lucide-react"

function FloatingActionButton() {
  const [isFABExpanded, setIsFABExpanded] = useState(false)

  const openWhatsApp = () => {
    window.open('https://wa.me/923464876094?text=Hi, I am interested in studying abroad with Next Stop Global', '_blank')
  }

  const openTelegram = () => {
    window.open('https://t.me/nextstopglobal', '_blank')
  }

  const openFacebook = () => {
    window.open('https://facebook.com/nextstopglobal', '_blank')
  }

  const openInstagram = () => {
    window.open('https://instagram.com/nextstopglobal', '_blank')
  }

  const openEmail = () => {
    window.open('mailto:info@nextstopglobal.com?subject=Inquiry about studying abroad', '_blank')
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Expanded Contact Options */}
      {isFABExpanded && (
        <div className="absolute bottom-16 right-0 space-y-3 mb-4">
          {/* WhatsApp */}
          <button
            onClick={openWhatsApp}
            className="flex items-center justify-center w-12 h-12 bg-orange-500 hover:bg-orange-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
            title="WhatsApp"
          >
            <MessageCircle className="h-6 w-6" />
          </button>
          
          {/* Telegram */}
          <button
            onClick={openTelegram}
            className="flex items-center justify-center w-12 h-12 bg-blue-500 hover:bg-blue-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
            title="Telegram"
          >
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
            </svg>
          </button>
          
          {/* Facebook */}
          <button
            onClick={openFacebook}
            className="flex items-center justify-center w-12 h-12 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
            title="Facebook"
          >
            <Facebook className="h-6 w-6" />
          </button>
          
          {/* Instagram */}
          <button
            onClick={openInstagram}
            className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
            title="Instagram"
          >
            <Instagram className="h-6 w-6" />
          </button>
          
          {/* Email */}
          <button
            onClick={openEmail}
            className="flex items-center justify-center w-12 h-12 bg-gray-600 hover:bg-gray-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
            title="Email"
          >
            <Mail className="h-6 w-6" />
          </button>
        </div>
      )}
      
      {/* Main FAB Button */}
      <button
        onClick={() => setIsFABExpanded(!isFABExpanded)}
        className={`flex items-center justify-center w-14 h-14 bg-primary hover:bg-primary/90 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform ${isFABExpanded ? 'rotate-45' : 'rotate-0'}`}
      >
        {isFABExpanded ? (
          <X className="h-6 w-6" />
        ) : (
          <MessageCircle className="h-6 w-6" />
        )}
      </button>
    </div>
  )
}

export default FloatingActionButton
