"use client"

import { useState } from "react"
import { Play } from "lucide-react"
import { cn } from "@/lib/utils"

interface VideoEmbedProps {
  url: string
  title?: string
  description?: string
  className?: string
}

export function VideoEmbed({ url, title, description, className }: VideoEmbedProps) {
  const [isLoaded, setIsLoaded] = useState(false)

  const getVideoType = (url: string): "youtube" | "tiktok" | "unknown" => {
    if (url.includes("youtube.com") || url.includes("youtu.be")) {
      return "youtube"
    } else if (url.includes("tiktok.com")) {
      return "tiktok"
    }
    return "unknown"
  }

  const getYouTubeId = (url: string): string | null => {
    const regex = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/
    const match = url.match(regex)
    return match ? match[1] : null
  }

  const getTikTokId = (url: string): string | null => {
    const regex = /tiktok\.com\/.*\/video\/(\d+)/
    const match = url.match(regex)
    return match ? match[1] : null
  }

  const getEmbedUrl = (url: string): string | null => {
    const type = getVideoType(url)

    if (type === "youtube") {
      const videoId = getYouTubeId(url)
      return videoId ? `https://www.youtube.com/embed/${videoId}?autoplay=0&controls=1&rel=0` : null
    } else if (type === "tiktok") {
      const videoId = getTikTokId(url)
      return videoId ? `https://www.tiktok.com/embed/v2/${videoId}` : null
    }

    return null
  }

  const getVideoThumbnail = (url: string): string | null => {
    const type = getVideoType(url)

    if (type === "youtube") {
      const videoId = getYouTubeId(url)
      return videoId ? `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg` : null
    }

    return null
  }

  const embedUrl = getEmbedUrl(url)
  const thumbnail = getVideoThumbnail(url)
  const videoType = getVideoType(url)

  if (!embedUrl) {
    return (
      <div className={cn("bg-muted rounded-lg p-4 text-center", className)}>
        <p className="text-muted-foreground">Ugyldig video URL</p>
      </div>
    )
  }

  const videoTitle = title || `${videoType === "youtube" ? "YouTube" : "TikTok"} video`

  return (
    <div className={cn("relative w-full", className)}>
      {!isLoaded && thumbnail ? (
        <div
          className="relative aspect-video bg-muted rounded-lg overflow-hidden cursor-pointer group"
          onClick={() => setIsLoaded(true)}
        >
          <img
            src={thumbnail}
            alt={videoTitle}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/20 flex items-center justify-center group-hover:bg-black/30 transition-colors">
            <div className="bg-white/90 rounded-full p-3 group-hover:bg-white transition-colors">
              <Play className="w-6 h-6 text-black fill-black" />
            </div>
          </div>
          <div className="absolute bottom-2 left-2 right-2">
            <p className="text-white text-sm font-medium bg-black/50 backdrop-blur-sm rounded px-2 py-1">
              Klikk for å spille av
            </p>
          </div>
        </div>
      ) : (
        <div className="aspect-video w-full">
          <iframe
            src={embedUrl}
            title={videoTitle}
            width="100%"
            height="100%"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="rounded-lg"
            loading="lazy"
          />
        </div>
      )}

      {description && (
        <p className="mt-2 text-sm text-muted-foreground">
          {description}
        </p>
      )}
    </div>
  )
}
