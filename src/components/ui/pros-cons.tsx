import { Check, X } from "lucide-react"
import { cn } from "@/lib/utils"

interface ProsConsProps {
  pros: string[]
  cons: string[]
  className?: string
}

export function ProsCons({ pros, cons, className }: ProsConsProps) {
  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-2 gap-6", className)}>
      {/* Pros Section */}
      <div className="space-y-3">
        <h3 className="text-lg font-semibold text-green-700 flex items-center gap-2">
          <Check className="w-5 h-5" />
          Fordeler
        </h3>
        <ul className="space-y-2" role="list">
          {pros.map((pro, index) => (
            <li
              key={index}
              className="flex items-start gap-2 text-sm"
            >
              <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <span>{pro}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Cons Section */}
      <div className="space-y-3">
        <h3 className="text-lg font-semibold text-red-700 flex items-center gap-2">
          <X className="w-5 h-5" />
          Ulemper
        </h3>
        <ul className="space-y-2" role="list">
          {cons.map((con, index) => (
            <li
              key={index}
              className="flex items-start gap-2 text-sm"
            >
              <X className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <span>{con}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
