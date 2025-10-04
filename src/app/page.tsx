import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ReviewCard } from "@/components/ui/review-card"
import { CategoryBadge } from "@/components/ui/category-badge"
import { RatingStars } from "@/components/ui/rating-stars"
import {
  reviews,
  products,
  authors,
  categories,
  getLatestReviews,
  getProductById,
  getAuthorById
} from "@/data/seed"
import { Search, Shield, Eye, Clock, Award } from "lucide-react"

export default function HomePage() {
  const latestReviews = getLatestReviews(6)
  const popularCategories = categories.slice(0, 6)

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative py-20 px-4 text-center bg-gradient-to-br from-primary/5 to-primary/10">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Ærlige anmeldelser av{" "}
              <span className="text-primary">Temu-produkter</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Vi tester produkter så du slipper å ta risikoen. Få innsikt gjennom
              detaljerte videoanmeldelser og uavhengige vurderinger.
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-md mx-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <Input
                placeholder="Søk etter produkter..."
                className="pl-12 h-12 text-lg"
              />
            </div>
            <div className="mt-4">
              <Link href="/anmeldelser">
                <Button size="lg" className="h-12 px-8">
                  Se alle anmeldelser
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Reviews */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="space-y-8">
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-bold">Siste anmeldelser</h2>
            <p className="text-muted-foreground">
              Ferske tester og anmeldelser av populære Temu-produkter
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {latestReviews.map((review) => {
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

          <div className="text-center">
            <Link href="/anmeldelser">
              <Button variant="outline" size="lg">
                Se alle anmeldelser
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Popular Categories */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="space-y-8">
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-bold">Populære kategorier</h2>
            <p className="text-muted-foreground">
              Utforsk anmeldelser innen forskjellige produktkategorier
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {popularCategories.map((category) => (
              <Link
                key={category.id}
                href={`/kategorier/${category.slug}`}
                className="block"
              >
                <Card className="hover:shadow-lg transition-shadow duration-200 text-center p-6">
                  <CategoryBadge
                    category={category.name}
                    size="lg"
                    className="w-full justify-center"
                  />
                </Card>
              </Link>
            ))}
          </div>

          <div className="text-center">
            <Link href="/kategorier">
              <Button variant="outline" size="lg">
                Se alle kategorier
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* How We Review */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="space-y-8">
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-bold">Slik vurderer vi</h2>
            <p className="text-muted-foreground">
              Vår metode for å gi deg de mest pålitelige anmeldelsene
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardHeader className="text-center">
                <Shield className="w-8 h-8 mx-auto text-blue-500" />
                <CardTitle className="text-lg">Uavhengig testing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground text-center">
                  Vi kjøper alle produkter selv og tester dem grundig uten påvirkning fra produsenter.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <Eye className="w-8 h-8 mx-auto text-green-500" />
                <CardTitle className="text-lg">Video-dokumentasjon</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground text-center">
                  Hver anmeldelse følges av en detaljert video som viser produktet i bruk.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <Clock className="w-8 h-8 mx-auto text-orange-500" />
                <CardTitle className="text-lg">Langtidstesting</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground text-center">
                  Vi bruker produktene over tid for å vurdere holdbarhet og ytelse.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <Award className="w-8 h-8 mx-auto text-purple-500" />
                <CardTitle className="text-lg">Objektiv vurdering</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground text-center">
                  Vår 5-stjerner skala er basert på klare kriterier for kvalitet og verdi.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-muted/50 py-16">
        <div className="max-w-4xl mx-auto text-center space-y-6 px-4">
          <h2 className="text-3xl font-bold">
            Har du et produkt du vil vi skal teste?
          </h2>
          <p className="text-muted-foreground text-lg">
            Send oss forslag til produkter du ønsker anmeldt, eller del dine egne erfaringer.
          </p>
          <Link href="/kontakt">
            <Button size="lg" className="h-12 px-8">
              Foreslå et produkt
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
