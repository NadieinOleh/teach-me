"use client"

import { usePathname, useRouter } from "next/navigation"
import { useLocale } from "next-intl"
import { Globe } from "lucide-react"
import { Button } from "@/components/ui/button"

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu"

const languages = [
  { code: "uk", label: "Українська", flag: "🇺🇦" },
  { code: "de", label: "Deutsch", flag: "🇩🇪" },
  { code: "en", label: "English", flag: "en" },
]

export function LanguagesToggle() {
  const router = useRouter()
  const pathname = usePathname()
  const currentLocale = useLocale()

  const handleChange = (lang: string) => {
    const segments = pathname.split("/")
    segments[1] = lang 
    router.push(segments.join("/"))
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline"  className="flex items-center gap-2">
          <Globe className="size-4" />
          {languages.find((l) => l.code === currentLocale)?.flag}
          {/* {languages.find((l) => l.code === currentLocale)?.label} */}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {languages.map((lang) => (
          <DropdownMenuItem key={lang.code} onClick={() => handleChange(lang.code)}>
            {/* <span className="mr-2">{lang.flag}</span> */}
            {lang.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
