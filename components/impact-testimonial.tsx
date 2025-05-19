"use client"

import { motion } from "framer-motion"
import { Quote } from "lucide-react"

interface ImpactTestimonialProps {
  quote: string
  name: string
  role: string
  delay?: number
}

export default function ImpactTestimonial({ quote, name, role, delay = 0 }: ImpactTestimonialProps) {
  return (
    <motion.div
      className="bg-white rounded-lg p-6 shadow-md border-l-4 border-amber-500"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <Quote className="h-6 w-6 text-amber-400 mb-4" />
      <p className="text-stone-700 italic mb-4">"{quote}"</p>
      <div className="flex items-center">
        <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center mr-3">
          <span className="text-amber-700 font-bold">{name.charAt(0)}</span>
        </div>
        <div>
          <p className="font-bold text-stone-800">{name}</p>
          <p className="text-sm text-stone-600">{role}</p>
        </div>
      </div>
    </motion.div>
  )
}
