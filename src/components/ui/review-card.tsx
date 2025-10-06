import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { RatingStars } from "@/components/ui/rating-stars"
import { Review, Product, Author } from "@/lib/types"
import { cn } from "@/lib/utils"
import { Calendar, Play } from "lucide-react"

interface ReviewCardProps {
  review: Review
  product: Product
  author: Author
  className?: string
  showVideo?: boolean
}

export function ReviewCard({
  review,
  product,
  author,
  className,
  showVideo = true
}: ReviewCardProps) {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('nb-NO', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  const getPriceRangeColor = (range: string) => {
    switch (range) {
      case "Rimelig":
        return "bg-green-100 text-green-800"
      case "Midt":
        return "bg-yellow-100 text-yellow-800"
      case "Premium":
        return "bg-purple-100 text-purple-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <Card className={cn("group hover:shadow-lg transition-shadow duration-200", className)}>
      <Link href={`/anmeldelser/${review.slug}`}>
        <CardHeader className="pb-3">
          <div className="flex gap-4">
            <div className="relative w-20 h-20 flex-shrink-0">
              <Image
                src={product.images[0]}
                alt={product.name}
                fill
                className="object-cover rounded-md"
                sizes="80px"
              />
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between gap-2 mb-2">
                <h3 className="font-semibold text-base group-hover:text-primary transition-colors line-clamp-2">
                  {review.title}
                </h3>
                {showVideo && review.videoUrls.length > 0 && (
                  <Play className="w-4 h-4 text-muted-foreground flex-shrink-0 mt-1" />
                )}
              </div>

              <div className="flex items-center gap-2 mb-2">
                <RatingStars rating={review.rating} size="sm" showRating />
                <Badge
                  variant="secondary"
                  className={cn("text-xs", getPriceRangeColor(product.priceRange))}
                >
                  {product.priceRange}
                </Badge>
              </div>

              <p className="text-sm text-muted-foreground">
                {product.category}
              </p>
            </div>
          </div>
        </CardHeader>

        <CardContent className="pt-0">
          <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
            {review.summary}
          </p>

          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <div className="flex items-center gap-1">
              <Calendar className="w-3 h-3" />
              <span>{formatDate(review.createdAt)}</span>
            </div>

            <span>av {author.name}</span>
          </div>
        </CardContent>
      </Link>
    </Card>
  )
}
