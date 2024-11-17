"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"

export function ModeToggle() {
  const { setTheme, resolvedTheme } = useTheme()

  return resolvedTheme === "dark" ? (
    <Button
      variant="outline"
      aria-label="Light mode"
      onClick={() => setTheme("light")}
    >
      <Sun className="h-5 w-5" />
    </Button>
  ) : (
    <Button
      variant="outline"
      aria-label="Dark mode"
      onClick={() => setTheme("dark")}
    >
      <Moon className="h-5 w-5" />
    </Button>
  )
}
