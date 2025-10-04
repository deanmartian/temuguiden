import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Search, Menu } from "lucide-react"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TemuGuiden - Ærlige videoanmeldelser og kjøpsguide",
  description: "Få uavhengige anmeldelser av Temu-produkter med detaljerte videoer. Vi tester så du slipper å ta risikoen.",
  keywords: "Temu, anmeldelser, produkttest, kjøpsguide, video, norsk",
  authors: [{ name: "TemuGuiden" }],
  openGraph: {
    title: "TemuGuiden - Ærlige videoanmeldelser og kjøpsguide",
    description: "Få uavhengige anmeldelser av Temu-produkter med detaljerte videoer.",
    type: "website",
    locale: "nb_NO",
  },
  twitter: {
    card: "summary_large_image",
    title: "TemuGuiden - Ærlige videoanmeldelser og kjøpsguide",
    description: "Få uavhengige anmeldelser av Temu-produkter med detaljerte videoer.",
  },
  robots: {
    index: true,
    follow: true,
  }
};

function Navigation() {
  return (
    <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="bg-primary text-primary-foreground rounded-lg p-2">
              <Search className="w-5 h-5" />
            </div>
            <span className="font-bold text-xl">TemuGuiden</span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/anmeldelser" className="text-sm font-medium hover:text-primary transition-colors">
              Anmeldelser
            </Link>
            <Link href="/kategorier" className="text-sm font-medium hover:text-primary transition-colors">
              Kategorier
            </Link>
            <Link href="/tips" className="text-sm font-medium hover:text-primary transition-colors">
              Tips
            </Link>
            <Link href="/om-oss" className="text-sm font-medium hover:text-primary transition-colors">
              Om oss
            </Link>
            <Link href="/kontakt">
              <Button size="sm">
                Kontakt
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="sm" className="md:hidden">
            <Menu className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </nav>
  )
}

function Footer() {
  return (
    <footer className="border-t bg-muted/50 mt-16">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <div className="bg-primary text-primary-foreground rounded-lg p-2">
                <Search className="w-5 h-5" />
              </div>
              <span className="font-bold text-xl">TemuGuiden</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Ærlige videoanmeldelser av Temu-produkter. Vi tester så du slipper å ta risikoen.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold">Anmeldelser</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/anmeldelser" className="text-muted-foreground hover:text-foreground">Alle anmeldelser</Link></li>
              <li><Link href="/kategorier/elektronikk" className="text-muted-foreground hover:text-foreground">Elektronikk</Link></li>
              <li><Link href="/kategorier/kjokken" className="text-muted-foreground hover:text-foreground">Kjøkken</Link></li>
              <li><Link href="/kategorier/tilbehor" className="text-muted-foreground hover:text-foreground">Tilbehør</Link></li>
            </ul>
          </div>

          {/* Info */}
          <div className="space-y-4">
            <h3 className="font-semibold">Informasjon</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/om-oss" className="text-muted-foreground hover:text-foreground">Om oss</Link></li>
              <li><Link href="/tips" className="text-muted-foreground hover:text-foreground">Kjøpsguide</Link></li>
              <li><Link href="/kontakt" className="text-muted-foreground hover:text-foreground">Kontakt oss</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-semibold">Kontakt</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>Har du forslag til produkter?</p>
              <Link href="/kontakt">
                <Button size="sm" variant="outline">
                  Send forslag
                </Button>
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>
            © 2024 TemuGuiden. Vi er uavhengige. Sidene kan inneholde affiliate-lenker til Temu.
            Vi kan motta provisjon uten ekstra kostnad for deg.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="nb">
      <body className={inter.className}>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
