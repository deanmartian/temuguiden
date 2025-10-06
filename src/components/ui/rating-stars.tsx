"use client"

import { Star, StarHalf } from "lucide-react"
import { cn } from "@/lib/utils"

interface RatingStarsProps {
  rating: number
  maxRating?: number
  size?: "sm" | "md" | "lg"
  showRating?: boolean
  className?: string
}

export function RatingStars({
  rating,
  maxRating = 5,
  size = "md",
  showRating = false,
  className
}: RatingStarsProps) {
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6"
  }

  const iconSize = sizeClasses[size]

  const renderStar = (index: number) => {
    const starValue = index + 1
    const fill = rating >= starValue ? "full" : rating >= starValue - 0.5 ? "half" : "empty"

    if (fill === "full") {
      return (
        <Star
          key={index}
          className={cn(iconSize, "fill-yellow-400 text-yellow-400")}
          aria-hidden="true"
        />
      )
    } else if (fill === "half") {
      return (
        <div key={index} className="relative">
          <Star className={cn(iconSize, "text-gray-300")} aria-hidden="true" />
          <StarHalf
            className={cn(iconSize, "absolute inset-0 fill-yellow-400 text-yellow-400")}
            aria-hidden="true"
          />
        </div>
      )
    } else {
      return (
        <Star
          key={index}
          className={cn(iconSize, "text-gray-300")}
          aria-hidden="true"
        />
      )
    }
  }

  return (
    <div className={cn("flex items-center gap-1", className)}>
      <div
        className="flex items-center"
        role="img"
        aria-label={`Vurdering: ${rating} av ${maxRating} stjerner`}
      >
        {Array.from({ length: maxRating }, (_, index) => renderStar(index))}
      </div>
      {showRating && (
        <span className="text-sm font-medium text-muted-foreground ml-1">
          {rating.toFixed(1)}
        </span>
      )}
    </div>
  )
}
