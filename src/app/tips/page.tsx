import Link from "next/link"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Shield,
  CreditCard,
  Truck,
  Star,
  Search,
  AlertTriangle,
  CheckCircle,
  HelpCircle,
  ShoppingCart,
  ChevronRight
} from "lucide-react"

export const metadata = {
  title: "Kjøpsguide og Tips - TemuGuiden",
  description: "Lær hvordan du handler trygt på Temu med våre ekspertråd, sikkerhetstips og vanlige spørsmål."
}

export default function TipsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="space-y-12">
        {/* Header */}
        <div className="space-y-4">
          <nav className="flex items-center space-x-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-foreground">Hjem</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-foreground font-medium">Tips</span>
          </nav>

          <h1 className="text-4xl font-bold">Kjøpsguide og Tips</h1>
          <p className="text-muted-foreground text-lg">
            Lær hvordan du handler smart og trygt på Temu med våre ekspertråd og sikkerhetstips
          </p>
        </div>

        {/* Quick Tips Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader className="text-center">
              <Shield className="w-8 h-8 mx-auto text-blue-500" />
              <CardTitle className="text-lg">Sikker handel</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground text-center">
                Sjekk alltid selger, les anmeldelser og bruk sikre betalingsmetoder
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="text-center">
              <Star className="w-8 h-8 mx-auto text-yellow-500" />
              <CardTitle className="text-lg">Les anmeldelser</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground text-center">
                Vurder både positive og negative anmeldelser før du kjøper
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="text-center">
              <CreditCard className="w-8 h-8 mx-auto text-green-500" />
              <CardTitle className="text-lg">Smart betaling</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground text-center">
                Bruk kredittkort eller PayPal for ekstra kjøperbeskyttelse
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Buying Guide */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold flex items-center gap-2">
            <ShoppingCart className="w-6 h-6" />
            Kjøpsguide for Temu
          </h2>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="research">
              <AccordionTrigger>
                <div className="flex items-center gap-2">
                  <Search className="w-5 h-5" />
                  1. Undersøk produktet grundig
                </div>
              </AccordionTrigger>
              <AccordionContent className="space-y-4">
                <p>Før du kjøper, gjør din research:</p>
                <ul className="list-disc list-inside space-y-2 text-sm">
                  <li>Les produktbeskrivelsen nøye</li>
                  <li>Sjekk produktbilder fra flere vinkler</li>
                  <li>Sammenlign priser med andre nettsteder</li>
                  <li>Se etter produktvideoer eller demonstrasjoner</li>
                  <li>Undersøk om produktet har nødvendige sertifiseringer</li>
                </ul>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-sm text-blue-800">
                    💡 <strong>Tips:</strong> Bruk våre anmeldelser som utgangspunkt for research av lignende produkter
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="seller">
              <AccordionTrigger>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  2. Evaluer selgeren
                </div>
              </AccordionTrigger>
              <AccordionContent className="space-y-4">
                <p>Ikke alle selgere er like pålitelige:</p>
                <ul className="list-disc list-inside space-y-2 text-sm">
                  <li>Sjekk selgerens rating og antall anmeldelser</li>
                  <li>Les både positive og negative tilbakemeldinger</li>
                  <li>Se hvor lenge selgeren har vært aktiv</li>
                  <li>Kontroller om selgeren svarer på spørsmål</li>
                  <li>Unngå selgere med veldig få anmeldelser</li>
                </ul>
                <div className="bg-green-50 p-4 rounded-lg">
                  <p className="text-sm text-green-800">
                    ✅ <strong>Anbefalt:</strong> Velg selgere med 95%+ positiv rating og minst 1000 anmeldelser
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="reviews">
              <AccordionTrigger>
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5" />
                  3. Forstå anmeldelsene
                </div>
              </AccordionTrigger>
              <AccordionContent className="space-y-4">
                <p>Les anmeldelser strategisk:</p>
                <ul className="list-disc list-inside space-y-2 text-sm">
                  <li>Fokuser på anmeldelser med bilder</li>
                  <li>Les 3-4 stjerner anmeldelser for balansert syn</li>
                  <li>Se etter anmeldelser som nevner kvalitet og holdbarhet</li>
                  <li>Vær skeptisk til for mange 5-stjerner anmeldelser uten tekst</li>
                  <li>Noter leveringstid og emballasje-kommentarer</li>
                </ul>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <p className="text-sm text-yellow-800">
                    ⚠️ <strong>Obs:</strong> Falske anmeldelser finnes. Se etter naturlig språk og spesifikke detaljer
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="payment">
              <AccordionTrigger>
                <div className="flex items-center gap-2">
                  <CreditCard className="w-5 h-5" />
                  4. Velg riktig betalingsmetode
                </div>
              </AccordionTrigger>
              <AccordionContent className="space-y-4">
                <p>Beskytt deg selv med smart betaling:</p>
                <ul className="list-disc list-inside space-y-2 text-sm">
                  <li><strong>Kredittkort:</strong> Best beskyttelse mot svindel</li>
                  <li><strong>PayPal:</strong> God kjøperbeskyttelse</li>
                  <li><strong>Debetkort:</strong> OK, men mindre beskyttelse</li>
                  <li><strong>Unngå:</strong> Bankoverføring eller kontanter</li>
                </ul>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-sm text-blue-800">
                    💳 <strong>Tips:</strong> Mange kredittkort tilbyr chargeback-rettigheter ved problemer
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="shipping">
              <AccordionTrigger>
                <div className="flex items-center gap-2">
                  <Truck className="w-5 h-5" />
                  5. Forstå levering og toll
                </div>
              </AccordionTrigger>
              <AccordionContent className="space-y-4">
                <p>Viktig informasjon om levering:</p>
                <ul className="list-disc list-inside space-y-2 text-sm">
                  <li>Forvent 1-3 uker leveringstid fra Kina</li>
                  <li>Sjekk om toll og moms er inkludert i prisen</li>
                  <li>Lagre sporingsnummer og følg pakken</li>
                  <li>Ta bilder når du pakker opp (ved eventuelle problemer)</li>
                  <li>Vær tålmodig - forsinkelser kan forekomme</li>
                </ul>
                <div className="bg-orange-50 p-4 rounded-lg">
                  <p className="text-sm text-orange-800">
                    📦 <strong>Norge-spesifikt:</strong> Pakker over 350 kr kan påløpe toll og moms
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>

        {/* Safety Tips */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold flex items-center gap-2">
            <Shield className="w-6 h-6" />
            Sikkerhetstips
          </h2>

          <div className="bg-red-50 border border-red-200 p-6 rounded-lg">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-6 h-6 text-red-600 mt-1 flex-shrink-0" />
              <div className="space-y-3">
                <h3 className="font-semibold text-red-800">Unngå disse produktene:</h3>
                <ul className="list-disc list-inside space-y-1 text-sm text-red-700">
                  <li>Medisinske produkter uten godkjenning</li>
                  <li>Elektronikk uten CE-merking</li>
                  <li>Kosmetikk med ukjente ingredienser</li>
                  <li>Batterier uten sikkerhetssertifisering</li>
                  <li>Barneleker uten aldersmerking</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  Gjør dette
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Sjekk sertifiseringer (CE, FCC)</li>
                  <li>• Les instruksjoner på norsk</li>
                  <li>• Test produktet umiddelbart</li>
                  <li>• Behold kvittering og emballasje</li>
                  <li>• Rapporter problemer raskt</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-red-600" />
                  Unngå dette
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Kjøp basert kun på pris</li>
                  <li>• Ignorer dårlige anmeldelser</li>
                  <li>• Bruk ukjente betalingsmetoder</li>
                  <li>• Køp kontrafei varer</li>
                  <li>• Glem å sjekke returpolicy</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* FAQ */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold flex items-center gap-2">
            <HelpCircle className="w-6 h-6" />
            Vanlige spørsmål
          </h2>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="delivery-time">
              <AccordionTrigger>Hvor lang tid tar levering fra Temu?</AccordionTrigger>
              <AccordionContent>
                <p>Leveringstiden varierer avhengig av forsendelsesmetode:</p>
                <ul className="list-disc list-inside mt-2 space-y-1 text-sm">
                  <li><strong>Standard shipping:</strong> 7-15 arbeidsdager</li>
                  <li><strong>Express shipping:</strong> 5-10 arbeidsdager</li>
                  <li><strong>Forsinkelser:</strong> Kan forekomme under høytider eller ved tollbehandling</li>
                </ul>
                <p className="mt-3 text-sm text-muted-foreground">
                  Vi anbefaler å bestille i god tid hvis du trenger produktet til en spesiell anledning.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="customs">
              <AccordionTrigger>Må jeg betale toll og moms?</AccordionTrigger>
              <AccordionContent>
                <p>I Norge gjelder følgende regler:</p>
                <ul className="list-disc list-inside mt-2 space-y-1 text-sm">
                  <li><strong>Under 350 kr:</strong> Ingen avgifter</li>
                  <li><strong>Over 350 kr:</strong> 25% moms + eventuell toll</li>
                  <li><strong>Behandlingsgebyr:</strong> Ca. 120-200 kr fra Posten/Bring</li>
                </ul>
                <p className="mt-3 text-sm text-muted-foreground">
                  Mange Temu-leverandører merker pakker med lavere verdi, men dette er ikke lovlig.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="returns">
              <AccordionTrigger>Kan jeg returnere produkter til Temu?</AccordionTrigger>
              <AccordionContent>
                <p>Temu har en returpolicy, men den kan være komplisert:</p>
                <ul className="list-disc list-inside mt-2 space-y-1 text-sm">
                  <li><strong>Returperiode:</strong> Vanligvis 90 dager</li>
                  <li><strong>Returkostnad:</strong> Ofte på kjøperens regning</li>
                  <li><strong>Refund:</strong> Kan ta 1-2 uker å behandle</li>
                  <li><strong>Tilstand:</strong> Produktet må være ubrukt</li>
                </ul>
                <p className="mt-3 text-sm text-muted-foreground">
                  Kontakt kundeservice umiddelbart ved problemer for best resultat.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="quality">
              <AccordionTrigger>Hvordan kan jeg vurdere kvaliteten før kjøp?</AccordionTrigger>
              <AccordionContent>
                <p>Bruk disse metodene for å vurdere kvalitet:</p>
                <ul className="list-disc list-inside mt-2 space-y-1 text-sm">
                  <li><strong>Anmeldelser:</strong> Les flere anmeldelser med bilder</li>
                  <li><strong>Pris:</strong> Vær skeptisk til ekstrem lav pris</li>
                  <li><strong>Selger:</strong> Velg etablerte selgere med høy rating</li>
                  <li><strong>Våre anmeldelser:</strong> Sjekk om vi har testet lignende produkter</li>
                </ul>
                <p className="mt-3 text-sm text-muted-foreground">
                  Husk: Du får vanligvis det du betaler for. Forvent ikke premium kvalitet til lavpris.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="complaints">
              <AccordionTrigger>Hva gjør jeg hvis noe går galt?</AccordionTrigger>
              <AccordionContent>
                <p>Følg disse trinnene ved problemer:</p>
                <ol className="list-decimal list-inside mt-2 space-y-1 text-sm">
                  <li>Kontakt selger først gjennom Temu-appen</li>
                  <li>Ta bilder av defekte produkter</li>
                  <li>Åpne en dispute om selger ikke svarer</li>
                  <li>Kontakt din bank/PayPal hvis Temu ikke hjelper</li>
                  <li>Rapporter til forbrukertilsynet ved alvorlige problemer</li>
                </ol>
                <p className="mt-3 text-sm text-muted-foreground">
                  Dokumenter alt og vær tålmodig - problemløsning kan ta tid.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>

        {/* CTA */}
        <div className="bg-primary/5 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Trenger du råd om et spesifikt produkt?</h2>
          <p className="text-muted-foreground mb-6">
            Send oss en melding så kan vi hjelpe deg med å vurdere om et produkt er verdt å kjøpe
          </p>
          <Link href="/kontakt">
            <Button size="lg">
              Kontakt oss
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
