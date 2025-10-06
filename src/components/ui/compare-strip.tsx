"use client"

import { useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { RatingStars } from "@/components/ui/rating-stars"
import { Review, Product, Author } from "@/lib/types"
import { cn } from "@/lib/utils"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface CompareItem {
  review: Review
  product: Product
  author: Author
}

interface CompareStripProps {
  items: CompareItem[]
  title?: string
  className?: string
}

export function CompareStrip({
  items,
  title = "Sammenlign med alternativer",
  className
}: CompareStripProps) {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' })
    }
  }

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' })
    }
  }

  if (!items.length) return null

  return (
    <div className={cn("space-y-4", className)}>
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">{title}</h3>
        <div className="flex gap-1">
          <Button
            variant="outline"
            size="sm"
            onClick={scrollLeft}
            className="h-8 w-8 p-0"
          >
            <ChevronLeft className="w-4 h-4" />
            <span className="sr-only">Rull til venstre</span>
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={scrollRight}
            className="h-8 w-8 p-0"
          >
            <ChevronRight className="w-4 h-4" />
            <span className="sr-only">Rull til høyre</span>
          </Button>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {items.map(({ review, product, author }) => (
          <Card
            key={review.id}
            className="flex-shrink-0 w-72 hover:shadow-lg transition-shadow duration-200"
          >
            <Link href={`/anmeldelser/${review.slug}`}>
              <CardContent className="p-4">
                <div className="space-y-3">
                  {/* Product Image */}
                  <div className="relative w-full h-32">
                    <Image
                      src={product.images[0]}
                      alt={product.name}
                      fill
                      className="object-cover rounded-md"
                      sizes="(max-width: 768px) 288px, 288px"
                    />
                  </div>

                  {/* Product Info */}
                  <div className="space-y-2">
                    <h4 className="font-medium text-sm line-clamp-2 min-h-[2.5rem]">
                      {review.title}
                    </h4>

                    <div className="flex items-center justify-between">
                      <RatingStars rating={review.rating} size="sm" showRating />
                      <span className="text-xs text-muted-foreground">
                        {product.priceRange}
                      </span>
                    </div>

                    <p className="text-xs text-muted-foreground line-clamp-2">
                      {review.summary}
                    </p>

                    <div className="text-xs text-muted-foreground pt-1 border-t">
                      av {author.name}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Link>
          </Card>
        ))}
      </div>
    </div>
  )
}
