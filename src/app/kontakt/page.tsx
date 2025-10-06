"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { ContactSubmission } from "@/lib/types"
import {
  ChevronRight,
  Mail,
  MessageCircle,
  Lightbulb,
  CheckCircle,
  Clock,
  HelpCircle
} from "lucide-react"

export default function KontaktPage() {
  const [formData, setFormData] = useState<ContactSubmission>({
    name: "",
    email: "",
    temuProductUrl: "",
    videoUrl: "",
    message: ""
  })
  const [honeypot, setHoneypot] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return re.test(email)
  }

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.name.trim()) {
      newErrors.name = "Navn er påkrevd"
    }

    if (!formData.email.trim()) {
      newErrors.email = "E-post er påkrevd"
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Ugyldig e-postadresse"
    }

    if (!formData.temuProductUrl.trim()) {
      newErrors.temuProductUrl = "Lenke til Temu-produkt er påkrevd"
    } else if (!formData.temuProductUrl.includes("temu.com")) {
      newErrors.temuProductUrl = "Vennligst oppgi en gyldig Temu-lenke"
    }

    if (!formData.message.trim()) {
      newErrors.message = "Melding er påkrevd"
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Meldingen må være minst 10 tegn"
    }

    if (formData.videoUrl && !formData.videoUrl.includes("youtube.com") && !formData.videoUrl.includes("youtu.be") && !formData.videoUrl.includes("tiktok.com")) {
      newErrors.videoUrl = "Vennligst oppgi en gyldig YouTube eller TikTok-lenke"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Honeypot check
    if (honeypot) {
      return // Bot detected
    }

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)

    try {
      // Simulate form submission (in real app, this would be an API call)
      await new Promise(resolve => setTimeout(resolve, 1000))

      console.log("Form submitted:", formData)
      setIsSubmitted(true)
    } catch (error) {
      console.error("Submission error:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (field: keyof ContactSubmission, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: "" }))
    }
  }

  if (isSubmitted) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto" />
            <h1 className="text-3xl font-bold">Takk for ditt forslag!</h1>
            <p className="text-muted-foreground text-lg">
              Vi har mottatt din henvendelse og vil vurdere produktet for testing.
            </p>
          </div>

          <Card>
            <CardContent className="p-6">
              <div className="space-y-4 text-left">
                <h3 className="font-semibold flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  Hva skjer nå?
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Vi vurderer produktet innen 1-2 uker</li>
                  <li>• Hvis vi bestemmer oss for å teste det, kjøper vi det selv</li>
                  <li>• Testing tar vanligvis 2-4 uker</li>
                  <li>• Du får beskjed når anmeldelsen publiseres</li>
                </ul>

                <p className="text-sm text-muted-foreground mt-4">
                  <strong>Merk:</strong> Vi kan ikke teste alle foreslåtte produkter,
                  men vi setter pris på alle forslag!
                </p>
              </div>
            </CardContent>
          </Card>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/anmeldelser">
              <Button size="lg">
                Se våre anmeldelser
              </Button>
            </Link>
            <Button
              variant="outline"
              size="lg"
              onClick={() => {
                setIsSubmitted(false)
                setFormData({
                  name: "",
                  email: "",
                  temuProductUrl: "",
                  videoUrl: "",
                  message: ""
                })
              }}
            >
              Send et nytt forslag
            </Button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="space-y-8">
        {/* Header */}
        <div className="space-y-4">
          <nav className="flex items-center space-x-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-foreground">Hjem</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-foreground font-medium">Kontakt</span>
          </nav>

          <h1 className="text-4xl font-bold">Kontakt oss</h1>
          <p className="text-muted-foreground text-lg">
            Har du et produkt du vil vi skal teste? Send oss et forslag!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Lightbulb className="w-5 h-5" />
                  Foreslå et produkt
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Honeypot field - hidden from users */}
                  <input
                    type="text"
                    value={honeypot}
                    onChange={(e) => setHoneypot(e.target.value)}
                    style={{ display: "none" }}
                    tabIndex={-1}
                    autoComplete="off"
                  />

                  {/* Name */}
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Navn *
                    </label>
                    <Input
                      id="name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      placeholder="Ditt navn"
                      className={errors.name ? "border-red-500" : ""}
                    />
                    {errors.name && (
                      <p className="text-sm text-red-500">{errors.name}</p>
                    )}
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      E-post *
                    </label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      placeholder="din@epost.no"
                      className={errors.email ? "border-red-500" : ""}
                    />
                    {errors.email && (
                      <p className="text-sm text-red-500">{errors.email}</p>
                    )}
                  </div>

                  {/* Temu Product URL */}
                  <div className="space-y-2">
                    <label htmlFor="temuProductUrl" className="text-sm font-medium">
                      Lenke til Temu-produkt *
                    </label>
                    <Input
                      id="temuProductUrl"
                      type="url"
                      value={formData.temuProductUrl}
                      onChange={(e) => handleInputChange("temuProductUrl", e.target.value)}
                      placeholder="https://temu.com/..."
                      className={errors.temuProductUrl ? "border-red-500" : ""}
                    />
                    {errors.temuProductUrl && (
                      <p className="text-sm text-red-500">{errors.temuProductUrl}</p>
                    )}
                    <p className="text-xs text-muted-foreground">
                      Kopier lenken fra produktsiden på Temu
                    </p>
                  </div>

                  {/* Video URL (optional) */}
                  <div className="space-y-2">
                    <label htmlFor="videoUrl" className="text-sm font-medium">
                      Video-lenke (valgfritt)
                    </label>
                    <Input
                      id="videoUrl"
                      type="url"
                      value={formData.videoUrl}
                      onChange={(e) => handleInputChange("videoUrl", e.target.value)}
                      placeholder="https://youtube.com/... eller https://tiktok.com/..."
                      className={errors.videoUrl ? "border-red-500" : ""}
                    />
                    {errors.videoUrl && (
                      <p className="text-sm text-red-500">{errors.videoUrl}</p>
                    )}
                    <p className="text-xs text-muted-foreground">
                      Har du sett en interessant video om produktet? Del lenken!
                    </p>
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Melding *
                    </label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      placeholder="Fortell oss hvorfor vi bør teste dette produktet..."
                      rows={4}
                      className={errors.message ? "border-red-500" : ""}
                    />
                    {errors.message && (
                      <p className="text-sm text-red-500">{errors.message}</p>
                    )}
                    <p className="text-xs text-muted-foreground">
                      Minimum 10 tegn. Beskriv hva som interesserer deg med produktet.
                    </p>
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full"
                  >
                    {isSubmitting ? "Sender..." : "Send forslag"}
                  </Button>

                  <p className="text-xs text-muted-foreground">
                    Ved å sende inn dette skjemaet godtar du at vi kontakter deg angående ditt forslag.
                    Vi deler ikke dine opplysninger med tredjeparter.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Info Card */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <HelpCircle className="w-5 h-5" />
                  Ofte spurte spørsmål
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-medium text-sm">Hvor lang tid tar det?</h4>
                  <p className="text-xs text-muted-foreground mt-1">
                    Vi vurderer forslag innen 1-2 uker. Testing tar 2-4 uker hvis vi bestemmer oss for å teste produktet.
                  </p>
                </div>

                <div>
                  <h4 className="font-medium text-sm">Tester dere alle forslag?</h4>
                  <p className="text-xs text-muted-foreground mt-1">
                    Nei, vi velger produkter basert på interesse, tilgjengelighet og våre prioriteringer. Men vi setter pris på alle forslag!
                  </p>
                </div>

                <div>
                  <h4 className="font-medium text-sm">Kan jeg få gratis produkter?</h4>
                  <p className="text-xs text-muted-foreground mt-1">
                    Vi gir ikke bort produkter. Vi kjøper alt selv for å opprettholde uavhengighet i våre anmeldelser.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mail className="w-5 h-5" />
                  Andre henvendelser
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm">
                <p className="text-muted-foreground">
                  For andre henvendelser enn produktforslag, kan du bruke samme skjema eller kontakte oss direkte.
                </p>
                <div className="space-y-2">
                  <div>
                    <strong>Responstid:</strong> 1-3 virkedager
                  </div>
                  <div>
                    <strong>Språk:</strong> Norsk eller engelsk
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
