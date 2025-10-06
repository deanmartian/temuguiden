export interface Product {
  id: string
  name: string
  slug: string
  category: string
  priceRange: "Rimelig" | "Midt" | "Premium"
  temuUrl: string
  images: string[]
  specs?: Record<string, string>
}

export interface Review {
  id: string
  productId: string
  slug: string
  title: string
  summary: string
  rating: number // 1-5
  pros: string[]
  cons: string[]
  verdict: string
  videoUrls: string[]
  authorId: string
  createdAt: string
  content?: string
}

export interface Author {
  id: string
  name: string
  avatarUrl?: string
  bio?: string
}

export interface Category {
  id: string
  name: string
  slug: string
}

export interface Video {
  id: string
  url: string
  type: "youtube" | "tiktok"
  title?: string
  description?: string
}

export interface ContactSubmission {
  name: string
  email: string
  temuProductUrl: string
  videoUrl?: string
  message: string
}

export type PriceRange = "Rimelig" | "Midt" | "Premium"
export type SortOption = "Nyeste" | "Høyest rating" | "Mest sett"
