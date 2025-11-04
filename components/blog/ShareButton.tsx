"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Share2, Copy, Check, Facebook, Twitter, MessageCircle } from "lucide-react"
import { useToast } from "@/components/ui/use-toast"

interface ShareButtonProps {
  title: string
  slug: string
}

export function ShareButton({ title, slug }: ShareButtonProps) {
  const [copied, setCopied] = useState(false)
  const [url, setUrl] = useState("")
  const { toast } = useToast()

  useEffect(() => {
    // Get the current URL on the client side
    if (typeof window !== "undefined") {
      setUrl(`${window.location.origin}/blog/${slug}`)
    }
  }, [slug])

  const handleCopyLink = async () => {
    if (!url) return
    
    try {
      await navigator.clipboard.writeText(url)
      setCopied(true)
      toast({
        title: "Link copied!",
        description: "The article link has been copied to your clipboard.",
      })
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      toast({
        title: "Failed to copy",
        description: "Please try again or copy the link manually.",
        variant: "destructive",
      })
    }
  }

  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: title,
          text: `Check out this article: ${title}`,
          url: url,
        })
      } catch (err) {
        // User cancelled or error occurred
        if ((err as Error).name !== "AbortError") {
          toast({
            title: "Share failed",
            description: "Unable to share. Please try again.",
            variant: "destructive",
          })
        }
      }
    }
  }

  const handleFacebookShare = () => {
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`
    window.open(facebookUrl, "_blank", "width=600,height=400")
  }

  const handleTwitterShare = () => {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`
    window.open(twitterUrl, "_blank", "width=600,height=400")
  }

  const handleWhatsAppShare = () => {
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(`${title} ${url}`)}`
    window.open(whatsappUrl, "_blank")
  }

  // If Web Share API is available (mobile devices), show simple button
  if (typeof window !== "undefined" && "share" in navigator && url) {
    return (
      <Button size="sm" variant="outline" onClick={handleNativeShare}>
        <Share2 className="h-4 w-4 mr-2" />
        Share
      </Button>
    )
  }

  // Otherwise, show dropdown menu with share options
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button size="sm" variant="outline" disabled={!url}>
          <Share2 className="h-4 w-4 mr-2" />
          Share
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-48">
        <DropdownMenuItem onClick={handleCopyLink} disabled={!url}>
          {copied ? (
            <>
              <Check className="h-4 w-4 mr-2" />
              Copied!
            </>
          ) : (
            <>
              <Copy className="h-4 w-4 mr-2" />
              Copy Link
            </>
          )}
        </DropdownMenuItem>
        <DropdownMenuItem onClick={handleFacebookShare} disabled={!url}>
          <Facebook className="h-4 w-4 mr-2" />
          Share on Facebook
        </DropdownMenuItem>
        <DropdownMenuItem onClick={handleTwitterShare} disabled={!url}>
          <Twitter className="h-4 w-4 mr-2" />
          Share on Twitter
        </DropdownMenuItem>
        <DropdownMenuItem onClick={handleWhatsAppShare} disabled={!url}>
          <MessageCircle className="h-4 w-4 mr-2" />
          Share on WhatsApp
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

