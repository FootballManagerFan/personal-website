"use client"

import { useState, useEffect } from "react"
import { Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function DarkModeToggle() {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    // Check if user has a preference stored
    const stored = localStorage.getItem("darkMode")
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches

    if (stored) {
      setIsDark(stored === "true")
    } else {
      setIsDark(prefersDark)
    }
  }, [])

  useEffect(() => {
    // Apply dark mode to document
    if (isDark) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
    localStorage.setItem("darkMode", isDark.toString())
  }, [isDark])

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setIsDark(!isDark)}
      className="fixed top-4 right-4 z-50 bg-white dark:bg-gray-800 backdrop-blur-sm border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700"
    >
      {isDark ? <Sun className="h-5 w-5 text-yellow-500" /> : <Moon className="h-5 w-5 text-gray-700" />}
      <span className="sr-only">Toggle dark mode</span>
    </Button>
  )
}
