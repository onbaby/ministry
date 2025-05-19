"use client"

import { type ReactNode } from "react"
import { motion } from "framer-motion"
import { usePathname } from "next/navigation"

type PageTransitionProps = {
  children: ReactNode
}

export default function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname()

  return (
    <motion.div
      key={pathname}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2 }}
      style={{ position: "relative", width: "100%" }}
    >
      {children}
    </motion.div>
  )
}
