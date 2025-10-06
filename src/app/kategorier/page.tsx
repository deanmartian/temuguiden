import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CategoryBadge } from "@/components/ui/category-badge"
import { Badge } from "@/components/ui/badge"
import { categories, reviews, products } from "@/data/seed"
import { ChevronRight } from "lucide-react"

export const metadata = {
  title: "Kategorier - TemuGuiden",
  description: "Utforsk produktanmeldelser organisert etter kategorier. Finn anmeldelser innen elektronikk, kjøkken, tilbehør og mer."
}

export default function KategorierPage() {
  // Calculate review counts per category
  const categoryStats = categories.map(category => {
    const categoryProducts = products.filter(product => product.category === category.name)
    const categoryReviews = reviews.filter(review =>
      categoryProducts.some(product => product.id === review.productId)
    )

    const avgRating = categoryReviews.length > 0
      ? categoryReviews.reduce((sum, review) => sum + review.rating, 0) / categoryReviews.length
      : 0

    return {
      ...category,
      reviewCount: categoryReviews.length,
      avgRating: Math.round(avgRating * 10) / 10
    }
  })

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="space-y-8">
        {/* Header */}
        <div className="space-y-4">
          <nav className="flex items-center space-x-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-foreground">Hjem</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-foreground font-medium">Kategorier</span>
          </nav>

          <h1 className="text-4xl font-bold">Produktkategorier</h1>
          <p className="text-muted-foreground text-lg">
            Utforsk våre anmeldelser organisert etter produktkategorier.
            Finn detaljerte tester og vurderinger innen din interesseområde.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categoryStats.map((category) => (
            <Link
              key={category.id}
              href={`/kategorier/${category.slug}`}
              className="block group"
            >
              <Card className="h-full hover:shadow-lg transition-all duration-200 group-hover:border-primary/20">
                <CardHeader className="space-y-4">
                  <div className="flex items-center justify-between">
                    <CategoryBadge
                      category={category.name}
                      size="lg"
                    />
                    <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>

                  <CardTitle className="group-hover:text-primary transition-colors">
                    {category.name}
                  </CardTitle>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">
                      {category.reviewCount} anmeldelser
                    </span>
                    {category.avgRating > 0 && (
                      <Badge variant="secondary">
                        ⭐ {category.avgRating}
                      </Badge>
                    )}
                  </div>

                  <p className="text-sm text-muted-foreground">
                    Se alle anmeldelser innen {category.name.toLowerCase()}
                  </p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* Popular Categories Stats */}
        <div className="bg-muted/50 rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Oversikt</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold text-primary">
                {categories.length}
              </div>
              <div className="text-sm text-muted-foreground">Kategorier</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary">
                {reviews.length}
              </div>
              <div className="text-sm text-muted-foreground">Anmeldelser</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary">
                {products.length}
              </div>
              <div className="text-sm text-muted-foreground">Produkter</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary">
                {Math.round((reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length) * 10) / 10}
              </div>
              <div className="text-sm text-muted-foreground">Snitt rating</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
