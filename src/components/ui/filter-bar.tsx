"use client"

import { useState, useEffect } from "react"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Search, X, Filter } from "lucide-react"
import { PriceRange, SortOption } from "@/lib/types"
import { cn } from "@/lib/utils"

interface FilterBarProps {
  onSearchChange: (search: string) => void
  onCategoryChange: (category: string) => void
  onRatingChange: (rating: string) => void
  onPriceRangeChange: (priceRange: string) => void
  onSortChange: (sort: SortOption) => void
  categories: Array<{ id: string; name: string; slug: string }>
  defaultValues?: {
    search?: string
    category?: string
    rating?: string
    priceRange?: string
    sort?: SortOption
  }
  className?: string
}

export function FilterBar({
  onSearchChange,
  onCategoryChange,
  onRatingChange,
  onPriceRangeChange,
  onSortChange,
  categories,
  defaultValues = {},
  className
}: FilterBarProps) {
  const [search, setSearch] = useState(defaultValues.search || "")
  const [category, setCategory] = useState(defaultValues.category || "")
  const [rating, setRating] = useState(defaultValues.rating || "")
  const [priceRange, setPriceRange] = useState(defaultValues.priceRange || "")
  const [sort, setSort] = useState<SortOption>(defaultValues.sort || "Nyeste")
  const [isExpanded, setIsExpanded] = useState(false)

  // Debounce search
  useEffect(() => {
    const timer = setTimeout(() => {
      onSearchChange(search)
    }, 300)

    return () => clearTimeout(timer)
  }, [search, onSearchChange])

  const clearFilters = () => {
    setSearch("")
    setCategory("")
    setRating("")
    setPriceRange("")
    setSort("Nyeste")
    onSearchChange("")
    onCategoryChange("")
    onRatingChange("")
    onPriceRangeChange("")
    onSortChange("Nyeste")
  }

  const hasActiveFilters = search || category || rating || priceRange || sort !== "Nyeste"

  return (
    <div className={cn("space-y-4", className)}>
      {/* Search Bar */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
        <Input
          placeholder="Søk etter produkter eller anmeldelser..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="pl-10 pr-10"
        />
        {search && (
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setSearch("")}
            className="absolute right-1 top-1/2 transform -translate-y-1/2 h-8 w-8 p-0"
          >
            <X className="w-4 h-4" />
            <span className="sr-only">Fjern søk</span>
          </Button>
        )}
      </div>

      {/* Filter Toggle for Mobile */}
      <div className="flex items-center justify-between">
        <Button
          variant="outline"
          onClick={() => setIsExpanded(!isExpanded)}
          className="lg:hidden"
        >
          <Filter className="w-4 h-4 mr-2" />
          Filtrer
          {hasActiveFilters && (
            <span className="ml-2 w-2 h-2 bg-primary rounded-full" />
          )}
        </Button>

        {/* Sort - Always Visible */}
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium">Sorter:</span>
          <Select value={sort} onValueChange={(value) => {
            const sortValue = value as SortOption
            setSort(sortValue)
            onSortChange(sortValue)
          }}>
            <SelectTrigger className="w-36">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Nyeste">Nyeste</SelectItem>
              <SelectItem value="Høyest rating">Høyest rating</SelectItem>
              <SelectItem value="Mest sett">Mest sett</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Filter Options */}
      <div className={cn(
        "grid grid-cols-1 md:grid-cols-3 gap-4 transition-all duration-200",
        !isExpanded && "lg:grid hidden",
        isExpanded && "grid"
      )}>
        {/* Category Filter */}
        <div>
          <label className="text-sm font-medium mb-2 block">Kategori</label>
          <Select value={category} onValueChange={(value) => {
            setCategory(value)
            onCategoryChange(value)
          }}>
            <SelectTrigger>
              <SelectValue placeholder="Alle kategorier" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="">Alle kategorier</SelectItem>
              {categories.map((cat) => (
                <SelectItem key={cat.id} value={cat.slug}>
                  {cat.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Rating Filter */}
        <div>
          <label className="text-sm font-medium mb-2 block">Min. vurdering</label>
          <Select value={rating} onValueChange={(value) => {
            setRating(value)
            onRatingChange(value)
          }}>
            <SelectTrigger>
              <SelectValue placeholder="Alle vurderinger" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="">Alle vurderinger</SelectItem>
              <SelectItem value="4">4+ stjerner</SelectItem>
              <SelectItem value="3">3+ stjerner</SelectItem>
              <SelectItem value="2">2+ stjerner</SelectItem>
              <SelectItem value="1">1+ stjerner</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Price Range Filter */}
        <div>
          <label className="text-sm font-medium mb-2 block">Prisnivå</label>
          <Select value={priceRange} onValueChange={(value) => {
            setPriceRange(value)
            onPriceRangeChange(value)
          }}>
            <SelectTrigger>
              <SelectValue placeholder="Alle prisnivåer" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="">Alle prisnivåer</SelectItem>
              <SelectItem value="Rimelig">Rimelig</SelectItem>
              <SelectItem value="Midt">Midt</SelectItem>
              <SelectItem value="Premium">Premium</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Clear Filters */}
      {hasActiveFilters && (
        <div className="flex justify-center">
          <Button variant="outline" onClick={clearFilters} size="sm">
            <X className="w-4 h-4 mr-2" />
            Fjern alle filtere
          </Button>
        </div>
      )}
    </div>
  )
}
