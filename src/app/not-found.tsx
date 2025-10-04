import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center space-y-6">
        <h1 className="text-4xl font-bold">404</h1>
        <h2 className="text-2xl">Siden ikke funnet</h2>
        <p className="text-muted-foreground max-w-md">
          Beklager, vi kunne ikke finne siden du leter etter.
        </p>
        <Link href="/">
          <Button>Tilbake til hjem</Button>
        </Link>
      </div>
    </div>
  )
}
