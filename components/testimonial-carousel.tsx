"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const testimonials = [
  {
    id: 1,
    name: "Michael Johnson",
    role: "Program Graduate",
    quote:
      "This ministry gave me the second chance I needed. I now have stable housing, a good job in construction, and a supportive community that believes in me.",
  },
  {
    id: 2,
    name: "David Williams",
    role: "Program Graduate",
    quote:
      "After struggling for years, I found purpose through this program. The job training and mentorship helped me develop skills I never knew I had.",
  },
  {
    id: 3,
    name: "James Rodriguez",
    role: "Program Graduate",
    quote:
      "The Christian values of this ministry helped me rebuild my faith while learning valuable trade skills. I'm now employed full-time and mentoring others.",
  },
]

export default function TestimonialCarousel() {
  const [current, setCurrent] = useState(0)

  const next = () => {
    setCurrent((current + 1) % testimonials.length)
  }

  const previous = () => {
    setCurrent((current - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-300 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="w-full flex-shrink-0 bg-white">
              <CardContent className="p-6 sm:p-8 flex flex-col items-center text-center">
                <Quote className="h-8 w-8 text-amber-600 mb-4" />
                <p className="text-lg text-stone-700 mb-6 italic">"{testimonial.quote}"</p>
                <div className="flex flex-col items-center">
                  <div className="relative h-16 w-16 rounded-full overflow-hidden mb-3 bg-gray-200 flex items-center justify-center">
                    <span className="text-gray-500 text-xs">Photo</span>
                  </div>
                  <h4 className="font-bold text-stone-800">{testimonial.name}</h4>
                  <p className="text-sm text-stone-600">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      <div className="flex justify-center mt-6 gap-2">
        <Button
          variant="outline"
          size="icon"
          className="rounded-full"
          onClick={previous}
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        {testimonials.map((_, index) => (
          <Button
            key={index}
            variant="outline"
            size="sm"
            className={`w-2 h-2 p-0 rounded-full ${
              index === current ? "bg-amber-600 border-amber-600" : "bg-transparent"
            }`}
            onClick={() => setCurrent(index)}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
        <Button variant="outline" size="icon" className="rounded-full" onClick={next} aria-label="Next testimonial">
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}
