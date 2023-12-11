import * as React from "react"
import { Moon } from "lucide-react"

export function ModeToggle() {
  const [theme, setThemeState] = React.useState<"theme-light" | "dark" | "system">("dark")

  React.useEffect(() => {
    document.documentElement.classList.add("dark")
  }, [])

  return (
    <Moon className="h-[1.2rem] w-[1.2rem] dark:scale-100" />
  )
}
