"use"

import { Button } from "@/components/ui/button"
import { ModeToggle } from "./components/ModeToggle"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-24">
      <Button>Click me</Button>
      <ModeToggle />
      
    </div>
  )
}