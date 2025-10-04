import { notFound } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import { RatingStars } from "@/components/ui/rating-stars"
import { VideoEmbed } from "@/components/ui/video-embed"
import { ProsCons } from "@/components/ui/pros-cons"
import { CategoryBadge } from "@/components/ui/category-badge"
import { CompareStrip } from "@/components/ui/compare-strip"
import { CopyLinkButton } from "@/components/ui/copy-link-button"
import { ReviewCard } from "@/components/ui/review-card"
import {
  getReviewBySlug,
  getProductById,
  getAuthorById,
  getCategoryBySlug,
  getRelatedReviews
} from "@/data/seed"
import { ChevronRight, Calendar, User, ExternalLink } from "lucide-react"
import type { Metadata } from "next"
import { generateProductStructuredData } from "@/lib/structured-data"

interface PageProps {
  params: { slug: string }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const review = getReviewBySlug(params.slug)
  const product = review ? getProductById(review.productId) : null

  if (!review || !product) {
    return {
      title: "Anmeldelse ikke funnet - TemuGuiden"
    }
  }

  return {
    title: `${review.title} - TemuGuiden`,
    description: review.summary,
    openGraph: {
      title: review.title,
      description: review.summary,
      images: [product.images[0]],
      type: "article"
    },
    twitter: {
      card: "summary_large_image",
      title: review.title,
      description: review.summary,
      images: [product.images[0]]
    }
  }
}

export default function AnmeldelseDetailPage({ params }: PageProps) {
  const review = getReviewBySlug(params.slug)

  if (!review) {
    notFound()
  }

  const product = getProductById(review.productId)
  const author = getAuthorById(review.authorId)

  if (!product || !author) {
    notFound()
  }

  const category = getCategoryBySlug(product.category.toLowerCase().replace(/[^a-z0-9]+/g, '-'))
  const relatedReviews = getRelatedReviews(review.id, product.category, 3)

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('nb-NO', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  const relatedItems = relatedReviews.map(relatedReview => {
    const relatedProduct = getProductById(relatedReview.productId)
    const relatedAuthor = getAuthorById(relatedReview.authorId)

    return relatedProduct && relatedAuthor ? {
      review: relatedReview,
      product: relatedProduct,
      author: relatedAuthor
    } : null
  }).filter(Boolean) as Array<{
    review: any
    product: any
    author: any
  }>

  const structuredData = generateProductStructuredData(product, review, author)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="space-y-8">
        {/* Breadcrumbs */}
        <nav className="flex items-center space-x-2 text-sm text-muted-foreground">
          <Link href="/" className="hover:text-foreground">Hjem</Link>
          <ChevronRight className="w-4 h-4" />
          <Link href="/anmeldelser" className="hover:text-foreground">Anmeldelser</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-foreground font-medium">{review.title}</span>
        </nav>

        {/* Header */}
        <div className="space-y-6">
          <div className="space-y-4">
            <h1 className="text-3xl md:text-4xl font-bold leading-tight">
              {review.title}
            </h1>

            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                <span>{formatDate(review.createdAt)}</span>
              </div>
              <div className="flex items-center gap-1">
                <User className="w-4 h-4" />
                <span>av {author.name}</span>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <RatingStars rating={review.rating} size="lg" showRating />
              <CopyLinkButton />
            </div>
          </div>

          <p className="text-lg text-muted-foreground leading-relaxed">
            {review.summary}
          </p>
        </div>

        {/* Product Card */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <span>Produktinformasjon</span>
              <CategoryBadge category={product.category} size="sm" />
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="relative aspect-square">
                <Image
                  src={product.images[0]}
                  alt={product.name}
                  fill
                  className="object-cover rounded-lg"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>

              <div className="md:col-span-2 space-y-4">
                <div>
                  <h3 className="text-xl font-semibold">{product.name}</h3>
                  <div className="flex items-center gap-2 mt-2">
                    <Badge variant="outline">{product.priceRange}</Badge>
                    <Badge variant="secondary">{product.category}</Badge>
                  </div>
                </div>

                <a
                  href={product.temuUrl}
                  target="_blank"
                  rel="nofollow sponsored"
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90 transition-colors"
                >
                  Se på Temu
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Video Section */}
        {review.videoUrls.length > 0 && (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Video-anmeldelse</h2>
            <VideoEmbed
              url={review.videoUrls[0]}
              title={`Video-anmeldelse av ${product.name}`}
            />
          </div>
        )}

        {/* Review Content */}
        <div className="space-y-6">
          <div className="prose prose-zinc max-w-none">
            <h2 className="text-2xl font-bold">Vår vurdering</h2>
            <p className="text-muted-foreground leading-relaxed">
              {review.content || review.summary}
            </p>
          </div>

          {/* Pros and Cons */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Fordeler og ulemper</h2>
            <ProsCons pros={review.pros} cons={review.cons} />
          </div>

          {/* Verdict */}
          <Card className="border-l-4 border-l-primary">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span>Vårt råd</span>
                <RatingStars rating={review.rating} size="sm" />
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                {review.verdict}
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Specifications Tab */}
        {product.specs && Object.keys(product.specs).length > 0 && (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Spesifikasjoner</h2>
            <Card>
              <CardContent className="p-0">
                <div className="divide-y">
                  {Object.entries(product.specs).map(([key, value]) => (
                    <div key={key} className="px-6 py-3 flex justify-between">
                      <span className="font-medium">{key}</span>
                      <span className="text-muted-foreground">{value}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Compare Strip */}
        {relatedItems.length > 0 && (
          <CompareStrip
            items={relatedItems}
            title="Lignende produkter"
          />
        )}

        {/* Related Reviews */}
        {relatedReviews.length > 0 && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Relaterte anmeldelser</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedReviews.map((relatedReview) => {
                const relatedProduct = getProductById(relatedReview.productId)
                const relatedAuthor = getAuthorById(relatedReview.authorId)

                if (!relatedProduct || !relatedAuthor) return null

                return (
                  <ReviewCard
                    key={relatedReview.id}
                    review={relatedReview}
                    product={relatedProduct}
                    author={relatedAuthor}
                    showVideo={false}
                  />
                )
              })}
            </div>
          </div>
        )}
      </div>
      </div>
    </>
  )
}
