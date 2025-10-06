import { Review, Product, Author } from './types'

export function generateProductStructuredData(product: Product, review: Review, author: Author) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": product.name,
    "category": product.category,
    "image": product.images,
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": review.rating,
      "ratingCount": 1
    }
  }
}
