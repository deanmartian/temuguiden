"use client"

import { useState, useMemo, useEffect } from "react"
import { notFound } from "next/navigation"
import Link from "next/link"
import { ReviewCard } from "@/components/ui/review-card"
import { FilterBar } from "@/components/ui/filter-bar"
import { CategoryBadge } from "@/components/ui/category-badge"
import {
  categories,
  getReviewsByCategory,
  getProductById,
  getAuthorById,
  getCategoryBySlug
} from "@/data/seed"
import { SortOption } from "@/lib/types"
import { ChevronRight } from "lucide-react"

interface PageProps {
  params: Promise<{ slug: string }>
}

export default function KategoriPage({ params }: PageProps) {
  const [searchTerm, setSearchTerm] = useState("")
  const [ratingFilter, setRatingFilter] = useState("")
  const [priceRangeFilter, setPriceRangeFilter] = useState("")
  const [sortOption, setSortOption] = useState<SortOption>("Nyeste")
  const [slug, setSlug] = useState<string>("")

  useEffect(() => {
    params.then(({ slug }) => setSlug(slug))
  }, [params])

  const category = getCategoryBySlug(slug)
  const categoryReviews = getReviewsByCategory(slug)

  const filteredAndSortedReviews = useMemo(() => {
    let filtered = [...categoryReviews]

    // Apply search filter
    if (searchTerm) {
      const searchLower = searchTerm.toLowerCase()
      filtered = filtered.filter(review => {
        const product = getProductById(review.productId)
        return (
          review.title.toLowerCase().includes(searchLower) ||
          review.summary.toLowerCase().includes(searchLower) ||
          product?.name.toLowerCase().includes(searchLower)
        )
      })
    }

    // Apply rating filter
    if (ratingFilter) {
      const minRating = parseFloat(ratingFilter)
      filtered = filtered.filter(review => review.rating >= minRating)
    }

    // Apply price range filter
    if (priceRangeFilter) {
      filtered = filtered.filter(review => {
        const product = getProductById(review.productId)
        return product?.priceRange === priceRangeFilter
      })
    }

    // Apply sorting
    filtered.sort((a, b) => {
      switch (sortOption) {
        case "Nyeste":
          return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        case "Høyest rating":
          return b.rating - a.rating
        case "Mest sett":
          return b.rating - a.rating
        default:
          return 0
      }
    })

    return filtered
  }, [categoryReviews, searchTerm, ratingFilter, priceRangeFilter, sortOption])

  const totalReviews = categoryReviews.length
  const filteredCount = filteredAndSortedReviews.length

  // Calculate category stats
  const avgRating = categoryReviews.length > 0
    ? categoryReviews.reduce((sum, review) => sum + review.rating, 0) / categoryReviews.length
    : 0

  if (!category && slug) {
    notFound()
  }

  // Show loading state while slug is being resolved
  if (!slug || !category) {
    return <div className="max-w-7xl mx-auto px-4 py-8">Loading...</div>
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="space-y-8">
        {/* Breadcrumbs */}
        <nav className="flex items-center space-x-2 text-sm text-muted-foreground">
          <Link href="/" className="hover:text-foreground">Hjem</Link>
          <ChevronRight className="w-4 h-4" />
          <Link href="/kategorier" className="hover:text-foreground">Kategorier</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-foreground font-medium">{category.name}</span>
        </nav>

        {/* Header */}
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <CategoryBadge category={category.name} size="lg" />
            <div>
              <h1 className="text-4xl font-bold">{category.name}</h1>
              <p className="text-muted-foreground">
                {totalReviews} anmeldelser • Gjennomsnitt: {avgRating.toFixed(1)} ⭐
              </p>
            </div>
          </div>

          <p className="text-muted-foreground text-lg">
            Utforsk våre detaljerte anmeldelser av {category.name.toLowerCase()}-produkter fra Temu
          </p>

          <div className="text-sm text-muted-foreground">
            Viser {filteredCount} av {totalReviews} anmeldelser
          </div>
        </div>

        {/* Filter Bar - exclude category filter since we're already in a category */}
        <FilterBar
          onSearchChange={setSearchTerm}
          onCategoryChange={() => {}} // Not used on category pages
          onRatingChange={setRatingFilter}
          onPriceRangeChange={setPriceRangeFilter}
          onSortChange={setSortOption}
          categories={[]} // Empty since category filter is not shown
        />

        {/* Reviews Grid */}
        {filteredAndSortedReviews.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredAndSortedReviews.map((review) => {
              const product = getProductById(review.productId)
              const author = getAuthorById(review.authorId)

              if (!product || !author) return null

              return (
                <ReviewCard
                  key={review.id}
                  review={review}
                  product={product}
                  author={author}
                />
              )
            })}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="space-y-4">
              <CategoryBadge category={category.name} size="lg" className="opacity-50" />
              <h3 className="text-xl font-semibold">Ingen anmeldelser funnet</h3>
              <p className="text-muted-foreground">
                {searchTerm || ratingFilter || priceRangeFilter
                  ? "Prøv å justere filterene dine eller søk etter noe annet"
                  : `Vi har ikke anmeldt produkter i ${category.name.toLowerCase()} ennå, men kommer snart!`
                }
              </p>
              {!searchTerm && !ratingFilter && !priceRangeFilter && (
                <div className="mt-6">
                  <Link href="/kontakt" className="text-primary hover:underline">
                    Foreslå et produkt vi skal teste →
                  </Link>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Navigation to other categories */}
        <div className="bg-muted/50 rounded-lg p-6">
          <h2 className="text-lg font-semibold mb-4">Utforsk andre kategorier</h2>
          <div className="flex flex-wrap gap-2">
            {categories
              .filter(cat => cat.slug !== slug)
              .map((cat) => (
                <Link key={cat.id} href={`/kategorier/${cat.slug}`}>
                  <CategoryBadge
                    category={cat.name}
                    clickable={false}
                    className="hover:bg-primary hover:text-primary-foreground transition-colors cursor-pointer"
                  />
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  )
}
