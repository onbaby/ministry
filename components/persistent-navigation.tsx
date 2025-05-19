"use client"

import { usePathname } from "next/navigation"
import { useEffect } from "react"

/**
 * This component helps maintain navigation state across page transitions
 * It doesn't render anything visible but helps with persistence
 */
export default function PersistentNavigation() {
  const pathname = usePathname()

  // This effect runs when the pathname changes
  useEffect(() => {
    // You can add analytics tracking here
    console.log(`Navigation to: ${pathname}`)

    // You could also persist any navigation state to localStorage here
    // localStorage.setItem('lastVisitedPath', pathname)

    // Or trigger any animations needed for navigation
  }, [pathname])

  // This component doesn't render anything visible
  return null
}
