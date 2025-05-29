"use client"

import { memo, useCallback } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface ActiveLinkProps {
  href: string
  children: ReactNode
  className?: string
  activeClassName?: string
  exact?: boolean
  onClick?: () => void
}

// Memoized ActiveLink component to prevent unnecessary re-renders
const ActiveLink = memo(function ActiveLink({
  href,
  children,
  className = "",
  activeClassName = "text-amber-600",
  exact = false,
  onClick,
}: ActiveLinkProps) {
  const pathname = usePathname()
  const isActive = exact ? pathname === href : pathname.startsWith(href)

  // Skip active styling for the home link when not on home page
  const skipActiveStyle = href === "/" && pathname !== "/"

  const linkClassName = `${className} text-sm font-medium transition-colors hover:text-amber-600 relative ${
    isActive && !skipActiveStyle ? activeClassName : "text-stone-700"
  }`

  // Use useCallback to ensure function reference stability
  const handleClick = useCallback(() => {
    if (onClick) onClick()
  }, [onClick])

  return (
    <Link href={href} className={linkClassName} onClick={handleClick}>
      {children}
      {isActive && !skipActiveStyle && (
        <motion.span
          className="absolute -bottom-1.5 left-0 right-0 h-0.5 bg-amber-600"
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          exit={{ opacity: 0, scaleX: 0 }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
        />
      )}
    </Link>
  )
})

export default ActiveLink
