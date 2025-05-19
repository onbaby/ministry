"use client"

import type { ReactNode } from "react"
import { motion } from "framer-motion"
import AnimatedCounter from "@/components/animated-counter"

interface StatisticCardProps {
  icon: ReactNode
  value: string
  label: string
  description?: string
}

export default function StatisticCard({ icon, value, label, description }: StatisticCardProps) {
  return (
    <motion.div
      className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md border-t-4 border-amber-500 hover:shadow-lg transition-shadow"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <div className="mb-3 bg-amber-100 p-3 rounded-full">{icon}</div>
      <h3 className="text-4xl font-bold text-stone-800 mb-1">
        <AnimatedCounter value={value} />
      </h3>
      <p className="text-amber-700 font-medium mb-2">{label}</p>
      {description && <p className="text-stone-600 text-sm text-center mt-2">{description}</p>}
    </motion.div>
  )
}
