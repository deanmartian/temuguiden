import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import {
  Smartphone,
  ChefHat,
  Package,
  Home,
  Dumbbell,
  Shirt,
  Tag
} from "lucide-react"

interface CategoryBadgeProps {
  category: string
  categorySlug?: string
  size?: "sm" | "md" | "lg"
  variant?: "default" | "secondary" | "outline"
  clickable?: boolean
  className?: string
}

const getCategoryIcon = (category: string) => {
  const iconMap: Record<string, React.ComponentType<any>> = {
    "Elektronikk": Smartphone,
    "Kjøkken": ChefHat,
    "Tilbehør": Package,
    "Hjem & Hage": Home,
    "Sport & Fritid": Dumbbell,
    "Klær & Mote": Shirt
  }

  const IconComponent = iconMap[category] || Tag
  return IconComponent
}

const getCategoryColor = (category: string) => {
  const colorMap: Record<string, string> = {
    "Elektronikk": "bg-blue-100 text-blue-800 hover:bg-blue-200",
    "Kjøkken": "bg-orange-100 text-orange-800 hover:bg-orange-200",
    "Tilbehør": "bg-purple-100 text-purple-800 hover:bg-purple-200",
    "Hjem & Hage": "bg-green-100 text-green-800 hover:bg-green-200",
    "Sport & Fritid": "bg-red-100 text-red-800 hover:bg-red-200",
    "Klær & Mote": "bg-pink-100 text-pink-800 hover:bg-pink-200"
  }

  return colorMap[category] || "bg-gray-100 text-gray-800 hover:bg-gray-200"
}

export function CategoryBadge({
  category,
  categorySlug,
  size = "md",
  variant = "secondary",
  clickable = false,
  className
}: CategoryBadgeProps) {
  const IconComponent = getCategoryIcon(category)
  const colorClasses = getCategoryColor(category)

  const sizeClasses = {
    sm: "text-xs px-2 py-1",
    md: "text-sm px-3 py-1.5",
    lg: "text-base px-4 py-2"
  }

  const iconSizes = {
    sm: "w-3 h-3",
    md: "w-4 h-4",
    lg: "w-5 h-5"
  }

  const badgeContent = (
    <Badge
      variant={variant}
      className={cn(
        "inline-flex items-center gap-1.5 font-medium transition-colors",
        sizeClasses[size],
        clickable && colorClasses,
        clickable && "cursor-pointer",
        className
      )}
    >
      <IconComponent className={iconSizes[size]} aria-hidden="true" />
      <span>{category}</span>
    </Badge>
  )

  if (clickable && categorySlug) {
    return (
      <Link href={`/kategorier/${categorySlug}`} className="inline-block">
        {badgeContent}
      </Link>
    )
  }

  return badgeContent
}
