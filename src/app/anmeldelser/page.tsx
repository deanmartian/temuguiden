"use client"

import { useState, useMemo } from "react"
import { ReviewCard } from "@/components/ui/review-card"
import { FilterBar } from "@/components/ui/filter-bar"
import {
  reviews,
  categories,
  getProductById,
  getAuthorById
} from "@/data/seed"
import { SortOption } from "@/lib/types"

export default function AnmeldelserPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [categoryFilter, setCategoryFilter] = useState("")
  const [ratingFilter, setRatingFilter] = useState("")
  const [priceRangeFilter, setPriceRangeFilter] = useState("")
  const [sortOption, setSortOption] = useState<SortOption>("Nyeste")

  const filteredAndSortedReviews = useMemo(() => {
    let filtered = [...reviews]

    // Apply search filter
    if (searchTerm) {
      const searchLower = searchTerm.toLowerCase()
      filtered = filtered.filter(review => {
        const product = getProductById(review.productId)
        return (
          review.title.toLowerCase().includes(searchLower) ||
          review.summary.toLowerCase().includes(searchLower) ||
          product?.name.toLowerCase().includes(searchLower) ||
          product?.category.toLowerCase().includes(searchLower)
        )
      })
    }

    // Apply category filter
    if (categoryFilter) {
      filtered = filtered.filter(review => {
        const product = getProductById(review.productId)
        const category = categories.find(cat => cat.name === product?.category)
        return category?.slug === categoryFilter
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
          // For demo purposes, sort by rating as a proxy for "most viewed"
          return b.rating - a.rating
        default:
          return 0
      }
    })

    return filtered
  }, [searchTerm, categoryFilter, ratingFilter, priceRangeFilter, sortOption])

  const totalReviews = reviews.length
  const filteredCount = filteredAndSortedReviews.length

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="space-y-8">
        {/* Header */}
        <div className="space-y-4">
          <h1 className="text-4xl font-bold">Alle anmeldelser</h1>
          <p className="text-muted-foreground text-lg">
            Utforsk våre detaljerte anmeldelser av Temu-produkter med video-dokumentasjon
          </p>

          <div className="text-sm text-muted-foreground">
            Viser {filteredCount} av {totalReviews} anmeldelser
          </div>
        </div>

        {/* Filter Bar */}
        <FilterBar
          onSearchChange={setSearchTerm}
          onCategoryChange={setCategoryFilter}
          onRatingChange={setRatingFilter}
          onPriceRangeChange={setPriceRangeFilter}
          onSortChange={setSortOption}
          categories={categories}
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
              <h3 className="text-xl font-semibold">Ingen anmeldelser funnet</h3>
              <p className="text-muted-foreground">
                Prøv å justere filterene dine eller søk etter noe annet
              </p>
            </div>
          </div>
        )}

        {/* Load More - for future pagination */}
        {filteredAndSortedReviews.length > 0 && filteredAndSortedReviews.length >= 12 && (
          <div className="text-center">
            <button
              className="px-6 py-2 border border-border rounded-md hover:bg-muted transition-colors"
              disabled
            >
              Last flere anmeldelser (kommer snart)
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
