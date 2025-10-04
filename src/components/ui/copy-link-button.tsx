"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Link, Check } from "lucide-react"
import { cn } from "@/lib/utils"

interface CopyLinkButtonProps {
  url?: string
  text?: string
  size?: "sm" | "default" | "lg"
  variant?: "default" | "outline" | "ghost"
  className?: string
}

export function CopyLinkButton({
  url,
  text = "Del lenke",
  size = "sm",
  variant = "outline",
  className
}: CopyLinkButtonProps) {
  const [copied, setCopied] = useState(false)

  const copyToClipboard = async () => {
    try {
      const linkToCopy = url || (typeof window !== 'undefined' ? window.location.href : '')

      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(linkToCopy)
      } else {
        // Fallback for older browsers or non-secure contexts
        const textArea = document.createElement('textarea')
        textArea.value = linkToCopy
        textArea.style.position = 'absolute'
        textArea.style.left = '-999999px'
        document.body.appendChild(textArea)
        textArea.focus()
        textArea.select()
        document.execCommand('copy')
        document.body.removeChild(textArea)
      }

      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy link:', err)
    }
  }

  return (
    <Button
      variant={variant}
      size={size}
      onClick={copyToClipboard}
      className={cn("transition-all duration-200", className)}
    >
      {copied ? (
        <>
          <Check className="w-4 h-4 mr-2" />
          Kopiert!
        </>
      ) : (
        <>
          <Link className="w-4 h-4 mr-2" />
          {text}
        </>
      )}
    </Button>
  )
}
