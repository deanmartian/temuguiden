import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { authors } from "@/data/seed"
import {
  Shield,
  Eye,
  Users,
  Award,
  ExternalLink,
  ChevronRight,
  Mail,
  Star
} from "lucide-react"

export const metadata = {
  title: "Om oss - TemuGuiden",
  description: "Lær mer om TemuGuiden, vårt team og vår uavhengige tilnærming til produkttesting og anmeldelser."
}

export default function OmOssPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="space-y-12">
        {/* Header */}
        <div className="space-y-4">
          <nav className="flex items-center space-x-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-foreground">Hjem</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-foreground font-medium">Om oss</span>
          </nav>

          <h1 className="text-4xl font-bold">Om TemuGuiden</h1>
          <p className="text-muted-foreground text-xl leading-relaxed">
            Vi er en uavhengig plattform som tester og anmelder Temu-produkter for å hjelpe norske forbrukere
            med å ta informerte kjøpsbeslutninger.
          </p>
        </div>

        {/* Mission Statement */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold">Vårt oppdrag</h2>

          <div className="prose prose-zinc max-w-none">
            <p className="text-muted-foreground leading-relaxed">
              I en verden full av produkter med utrolige priser og lovnader, kan det være vanskelig å vite
              hva som faktisk er verdt å kjøpe. TemuGuiden ble startet for å fylle dette gapet - vi gir deg
              ærlige, grundige anmeldelser basert på faktisk bruk av produktene.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              Vårt mål er enkelt: å spare deg for skuffelse og dårlige kjøp ved å teste produkter på forhånd.
              Vi fokuserer på å gi deg den informasjonen du trenger for å ta smarte beslutninger.
            </p>
          </div>
        </section>

        {/* Values */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold">Våre verdier</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader className="text-center">
                <Shield className="w-8 h-8 mx-auto text-blue-500" />
                <CardTitle>Uavhengighet</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground text-center">
                  Vi kjøper alle produkter selv og tester dem uten påvirkning fra produsenter eller selgere.
                  Våre anmeldelser er basert på egne erfaringer.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <Eye className="w-8 h-8 mx-auto text-green-500" />
                <CardTitle>Åpenhet</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground text-center">
                  Vi er transparente om våre metoder, finansiering og eventuelle interessekonflikter.
                  Du skal alltid vite hvor vi kommer fra.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <Award className="w-8 h-8 mx-auto text-purple-500" />
                <CardTitle>Kvalitet</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground text-center">
                  Vi bruker tid på grundig testing og dokumenterer alt med video.
                  Våre anmeldelser er detaljerte og balanserte.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <Users className="w-8 h-8 mx-auto text-orange-500" />
                <CardTitle>Forbruker-fokus</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground text-center">
                  Vi ser på produkter fra forbrukerens perspektiv. Pris, kvalitet,
                  brukervennlighet og verdi for pengene er våre hovedkriterier.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* How We Review */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold">Slik jobber vi</h2>

          <div className="space-y-6">
            <div className="bg-muted/50 p-6 rounded-lg">
              <h3 className="font-semibold mb-3 flex items-center gap-2">
                <span className="bg-primary text-primary-foreground rounded-full w-6 h-6 text-sm flex items-center justify-center">1</span>
                Produktutvelgelse
              </h3>
              <p className="text-sm text-muted-foreground">
                Vi velger produkter basert på popularitet, brukerforespørsler og interessante claims.
                Vi prioriterer produkter som norske forbrukere faktisk vurderer å kjøpe.
              </p>
            </div>

            <div className="bg-muted/50 p-6 rounded-lg">
              <h3 className="font-semibold mb-3 flex items-center gap-2">
                <span className="bg-primary text-primary-foreground rounded-full w-6 h-6 text-sm flex items-center justify-center">2</span>
                Innkjøp og testing
              </h3>
              <p className="text-sm text-muted-foreground">
                Vi kjøper produktet som vanlige forbrukere, venter på levering og tester det grundig over tid.
                Ingen betalte promoteringsavtaler eller gratis produkter fra selgere.
              </p>
            </div>

            <div className="bg-muted/50 p-6 rounded-lg">
              <h3 className="font-semibold mb-3 flex items-center gap-2">
                <span className="bg-primary text-primary-foreground rounded-full w-6 h-6 text-sm flex items-center justify-center">3</span>
                Dokumentasjon
              </h3>
              <p className="text-sm text-muted-foreground">
                Vi dokumenterer testing med video og bilder, noterer både positive og negative aspekter,
                og sammenligner med lignende produkter eller forventninger.
              </p>
            </div>

            <div className="bg-muted/50 p-6 rounded-lg">
              <h3 className="font-semibold mb-3 flex items-center gap-2">
                <span className="bg-primary text-primary-foreground rounded-full w-6 h-6 text-sm flex items-center justify-center">4</span>
                Publisering
              </h3>
              <p className="text-sm text-muted-foreground">
                Vi skriver balanserte anmeldelser med klare fordeler/ulemper, vurdering og anbefaling.
                Alt basert på faktisk erfaring, ikke markedsføring.
              </p>
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold">Vårt team</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {authors.map((author) => (
              <Card key={author.id}>
                <CardHeader className="text-center">
                  <div className="relative w-20 h-20 mx-auto">
                    <Image
                      src={author.avatarUrl || ''}
                      alt={author.name}
                      fill
                      className="object-cover rounded-full"
                      sizes="80px"
                    />
                  </div>
                  <CardTitle className="text-lg">{author.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground text-center">
                    {author.bio}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Financial Transparency */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold">Finansiell åpenhet</h2>

          <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-lg">
            <h3 className="font-semibold text-yellow-800 mb-3 flex items-center gap-2">
              <ExternalLink className="w-5 h-5" />
              Affiliate-lenker og provisjon
            </h3>
            <div className="space-y-3 text-sm text-yellow-700">
              <p>
                <strong>TemuGuiden inneholder affiliate-lenker til Temu.</strong> Dette betyr at vi kan motta en liten provisjon
                hvis du kjøper noe etter å ha klikket på våre lenker, uten ekstra kostnad for deg.
              </p>

              <p>
                Denne provisjonen hjelper oss med å dekke kostnadene ved å drive nettsiden, kjøpe produkter til testing,
                og produsere innhold. Den påvirker IKKE våre anmeldelser eller vurderinger på noen måte.
              </p>

              <p>
                <strong>Viktig:</strong> Vi kjøper alle produkter selv til full pris før vi anmelder dem.
                Vi mottar aldri gratis produkter eller betaling for positive anmeldelser.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold">Slik fungerer det:</h3>
            <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
              <li>Vi tester produkter og skriver ærlige anmeldelser</li>
              <li>Hvis vi anbefaler et produkt, lenker vi til det på Temu</li>
              <li>Lenken inneholder vår affiliate-kode</li>
              <li>Hvis du kjøper, får vi en liten provisjon (vanligvis 1-5%)</li>
              <li>Du betaler samme pris uansett</li>
            </ul>
          </div>
        </section>

        {/* Editorial Guidelines */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold">Retningslinjer for anmeldelser</h2>

          <div className="space-y-4">
            <h3 className="font-semibold">Vår metodikk:</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h4 className="font-medium text-green-700">Vi gjør:</h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                  <li>Tester produkter over flere dager/uker</li>
                  <li>Sammenligner med lignende produkter</li>
                  <li>Vurderer pris/kvalitet-forholdet</li>
                  <li>Dokumenterer med video og bilder</li>
                  <li>Gir balanserte fordeler/ulemper</li>
                  <li>Oppdaterer anmeldelser ved behov</li>
                </ul>
              </div>

              <div className="space-y-3">
                <h4 className="font-medium text-red-700">Vi gjør IKKE:</h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                  <li>Mottar betaling for positive anmeldelser</li>
                  <li>Tester kun basert på utpakking</li>
                  <li>Lar affiliate-inntekter påvirke vurderinger</li>
                  <li>Kopierer producentenes markedsføring</li>
                  <li>Skjuler negative aspekter</li>
                  <li>Anmelder produkter vi ikke har testet</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <div className="bg-primary/5 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Har du spørsmål eller forslag?</h2>
          <p className="text-muted-foreground mb-6">
            Vi setter pris på tilbakemeldinger og forslag til produkter vi bør teste
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/kontakt">
              <Button size="lg">
                <Mail className="w-4 h-4 mr-2" />
                Kontakt oss
              </Button>
            </Link>
            <Link href="/anmeldelser">
              <Button variant="outline" size="lg">
                <Star className="w-4 h-4 mr-2" />
                Se våre anmeldelser
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
