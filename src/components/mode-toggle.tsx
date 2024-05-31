"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "./ui/button"

export function ModeToggle() {
  const {theme, setTheme } = useTheme()

  const toggleTheme = () => {
    if (theme === "light") {
        setTheme("dark")
    }else if (theme === "dark") {
        setTheme("light")
    }
  }
  return (
    <Button className=" border rounded-full" variant="outline" size="sm" onClick={()=> toggleTheme()}>
        <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        <span className="sr-only">Toggle theme</span>
  </Button>
  )
}
