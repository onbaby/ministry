"use client"

import { useState, useEffect, useRef } from "react"
import { useInView } from "framer-motion"

interface AnimatedCounterProps {
  value: string
  duration?: number
  className?: string
}

export default function AnimatedCounter({ value, duration = 2, className = "" }: AnimatedCounterProps) {
  const [displayValue, setDisplayValue] = useState("0")
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })

  // Extract the numeric part and the suffix (like +)
  const numericMatch = value.match(/^(\d+)(.*)$/)
  const numericValue = numericMatch ? Number.parseInt(numericMatch[1]) : 0
  const suffix = numericMatch ? numericMatch[2] : ""

  useEffect(() => {
    if (!isInView) return

    let startTimestamp: number | null = null
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp
      const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1)
      const currentValue = Math.floor(progress * numericValue)

      setDisplayValue(`${currentValue}${suffix}`)

      if (progress < 1) {
        window.requestAnimationFrame(step)
      } else {
        setDisplayValue(value) // Ensure we end with the exact target value
      }
    }

    window.requestAnimationFrame(step)

    return () => {
      startTimestamp = null
    }
  }, [isInView, numericValue, duration, value, suffix])

  return (
    <span ref={ref} className={className}>
      {displayValue}
    </span>
  )
}
