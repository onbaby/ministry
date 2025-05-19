"use client"

import type { ReactNode } from "react"
import { motion } from "framer-motion"
import { Card, type CardProps } from "@/components/ui/card"

interface AnimatedCardProps extends CardProps {
  children: ReactNode
}

export default function AnimatedCard({ children, className, ...props }: AnimatedCardProps) {
  return (
    <motion.div whileHover={{ y: -5, boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)" }} transition={{ duration: 0.3 }}>
      <Card className={className} {...props}>
        {children}
      </Card>
    </motion.div>
  )
}
