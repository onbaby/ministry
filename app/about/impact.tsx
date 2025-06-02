import AnimatedSection from "@/components/animated-section"
import ImpactTestimonial from "@/components/impact-testimonial"
import { TrendingUp, Users, Briefcase, HomeIcon, Award } from "lucide-react"

export default function ImpactSection() {
  return (
    <div className="py-16 bg-stone-50">
      <div className="container px-4 md:px-6">
        <AnimatedSection animation="fade">
          <div className="text-center mb-12">
            <div className="inline-flex items-center rounded-full bg-amber-100 px-3 py-1 mb-4">
              <TrendingUp className="mr-2 h-4 w-4 text-amber-700" />
              <span className="text-sm font-medium text-amber-700">Our Impact</span>
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-stone-800 mb-4">
              Transforming Lives and Communities
            </h2>
            <p className="text-stone-600 max-w-3xl mx-auto">
              Our work has made a meaningful difference in the lives of young people and the communities they serve. Here
              are some of the ways we're creating lasting change.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <ImpactTestimonial
            quote="This program gave me more than just job skills - it gave me purpose. I now have a career in construction and am mentoring others."
            name="Michael J."
            role="Program Graduate, 2019"
            delay={0.1}
          />
          <ImpactTestimonial
            quote="After struggling with homelessness, the housing support and job training changed everything. I'm now employed full-time and have my own apartment."
            name="David W."
            role="Program Graduate, 2020"
            delay={0.2}
          />
          <ImpactTestimonial
            quote="As a business partner, we've hired 5 program graduates. They're some of our most dedicated and skilled employees."
            name="Sarah T."
            role="Business Partner"
            delay={0.3}
          />
          <ImpactTestimonial
            quote="Mentoring these young people has been as transformative for me as it has been for them. The spiritual growth I've witnessed is incredible."
            name="Pastor Robert"
            role="Mentor"
            delay={0.4}
          />
        </div>

        <AnimatedSection animation="fade">
          <div className="bg-white rounded-lg p-8 shadow-md">
            <h3 className="text-xl font-bold text-stone-800 mb-4">Impact By The Numbers</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-amber-100 mb-2">
                  <Users className="h-6 w-6 text-amber-600" />
                </div>
                <p className="text-2xl font-bold text-stone-800">250+</p>
                <p className="text-sm text-stone-600">Young People Helped</p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-amber-100 mb-2">
                  <Briefcase className="h-6 w-6 text-amber-600" />
                </div>
                <p className="text-2xl font-bold text-stone-800">120+</p>
                <p className="text-sm text-stone-600">Job Placements</p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-amber-100 mb-2">
                  <HomeIcon className="h-6 w-6 text-amber-600" />
                </div>
                <p className="text-2xl font-bold text-stone-800">85+</p>
                <p className="text-sm text-stone-600">Housing Solutions</p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-amber-100 mb-2">
                  <Award className="h-6 w-6 text-amber-600" />
                </div>
                <p className="text-2xl font-bold text-stone-800">45+</p>
                <p className="text-sm text-stone-600">Business Partners</p>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  )
}
