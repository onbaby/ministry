import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { BookIcon as Bible, Heart, Users, Hammer, Shield } from "lucide-react"
import AnimatedSection from "@/components/animated-section"

export const metadata = {
  title: "About Us - 007 Ministry",
  description:
    "Learn about our mission, values, and the impact we're making in young men's lives through faith and work.",
}

export default function AboutPage() {
  return (
    <div className="container px-4 py-12 md:px-6 md:py-24">
      <div className="mx-auto max-w-4xl space-y-12">
        <AnimatedSection animation="fade">
          <div className="space-y-4">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center text-stone-800">
              Our Story
            </h1>
            <div className="grid gap-8 md:grid-cols-2 items-center">
              <Image
                src="/placeholder-5usrd.png"
                width={400}
                height={400}
                alt="Our ministry team and participants"
                className="rounded-lg mx-auto"
              />
              <div className="space-y-4">
                <p className="text-stone-600">
                  007 Ministry was founded in 2015 by a group of Christian business owners and church leaders
                  who saw a growing need to help young men find purpose and direction through meaningful work.
                </p>
                <p className="text-stone-600">
                  What began as a small mentorship program has grown into a comprehensive ministry that provides
                  housing, job training, and spiritual guidance to young men seeking a fresh start.
                </p>
                <p className="text-stone-600">
                  Today, we've helped hundreds of young men rebuild their lives, revitalize their communities, and
                  restore the dignity that comes from honest work and faithful living.
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection animation="slide-up">
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-center text-stone-800">Our Core Values</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <AnimatedSection animation="scale" delay={0.1}>
                <Card className="bg-stone-50">
                  <CardContent className="pt-6">
                    <div className="flex flex-col items-center text-center space-y-2">
                      <Bible className="h-10 w-10 text-amber-600 mb-2" />
                      <h3 className="font-bold text-stone-800">Faith-Centered</h3>
                      <p className="text-stone-600">
                        We believe that spiritual growth is essential to personal transformation. Our programs are
                        rooted in Christian principles and values.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
              <AnimatedSection animation="scale" delay={0.2}>
                <Card className="bg-stone-50">
                  <CardContent className="pt-6">
                    <div className="flex flex-col items-center text-center space-y-2">
                      <Hammer className="h-10 w-10 text-amber-600 mb-2" />
                      <h3 className="font-bold text-stone-800">Dignity of Work</h3>
                      <p className="text-stone-600">
                        We believe in the inherent dignity and value of work. Through meaningful labor, young men
                        develop skills, character, and purpose.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
              <AnimatedSection animation="scale" delay={0.3}>
                <Card className="bg-stone-50">
                  <CardContent className="pt-6">
                    <div className="flex flex-col items-center text-center space-y-2">
                      <Heart className="h-10 w-10 text-amber-600 mb-2" />
                      <h3 className="font-bold text-stone-800">Compassionate Service</h3>
                      <p className="text-stone-600">
                        We approach each individual with compassion, recognizing their unique challenges and potential
                        for growth through our support and guidance.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
              <div className="lg:col-span-3 flex justify-center gap-6">
                <AnimatedSection animation="scale" delay={0.4} className="w-full max-w-sm">
                  <Card className="bg-stone-50">
                    <CardContent className="pt-6">
                      <div className="flex flex-col items-center text-center space-y-2">
                        <Users className="h-10 w-10 text-amber-600 mb-2" />
                        <h3 className="font-bold text-stone-800">Community Partnership</h3>
                        <p className="text-stone-600">
                          We believe in the power of community. By connecting young men with mentors, employers, and
                          housing providers, we create a network of support.
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </AnimatedSection>
                <AnimatedSection animation="scale" delay={0.5} className="w-full max-w-sm">
                  <Card className="bg-stone-50">
                    <CardContent className="pt-6">
                      <div className="flex flex-col items-center text-center space-y-2">
                        <Shield className="h-10 w-10 text-amber-600 mb-2" />
                        <h3 className="font-bold text-stone-800">Accountability & Trust</h3>
                        <p className="text-stone-600">
                          We maintain high standards of accountability and trust, ensuring that all participants are
                          reliable, trustworthy, and committed to personal growth.
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection animation="slide-up">
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-center text-stone-800">Our Approach</h2>
            <div className="space-y-4">
              <p className="text-stone-600">
                Our comprehensive approach addresses the whole person - mind, body, and spirit. We believe that
                sustainable change requires attention to all aspects of a young man's life:
              </p>
              <div className="grid gap-4 md:grid-cols-2">
                <AnimatedSection animation="slide-right" delay={0.1}>
                  <div className="space-y-2 bg-stone-50 p-4 rounded-lg">
                    <h3 className="font-bold text-stone-800">Spiritual Formation</h3>
                    <p className="text-stone-600">
                      Regular Bible study, prayer, and mentorship help participants develop a strong spiritual
                      foundation.
                    </p>
                  </div>
                </AnimatedSection>
                <AnimatedSection animation="slide-right" delay={0.2}>
                  <div className="space-y-2 bg-stone-50 p-4 rounded-lg">
                    <h3 className="font-bold text-stone-800">Vocational Training</h3>
                    <p className="text-stone-600">
                      Hands-on training in trades like construction, landscaping, automotive repair, and more.
                    </p>
                  </div>
                </AnimatedSection>
                <AnimatedSection animation="slide-right" delay={0.3}>
                  <div className="space-y-2 bg-stone-50 p-4 rounded-lg">
                    <h3 className="font-bold text-stone-800">Life Skills Development</h3>
                    <p className="text-stone-600">
                      Financial literacy, conflict resolution, time management, and other essential skills for
                      independent living.
                    </p>
                  </div>
                </AnimatedSection>
                <AnimatedSection animation="slide-right" delay={0.4}>
                  <div className="space-y-2 bg-stone-50 p-4 rounded-lg">
                    <h3 className="font-bold text-stone-800">Community Integration</h3>
                    <p className="text-stone-600">
                      Connecting participants with churches, employers, and other community resources for long-term
                      support.
                    </p>
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection animation="fade">
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-center text-stone-800">Our Certification Process</h2>
            <p className="text-stone-600 text-center">
              We maintain high standards for all program participants to ensure trust and reliability:
            </p>
            <div className="grid gap-4 md:grid-cols-3">
              <AnimatedSection animation="slide-up" delay={0.1}>
                <div className="flex flex-col items-center text-center p-4">
                  <div className="bg-amber-100 rounded-full h-12 w-12 flex items-center justify-center mb-4">
                    <span className="text-amber-700 font-bold">1</span>
                  </div>
                  <h3 className="font-bold text-stone-800 mb-2">Application & Screening</h3>
                  <p className="text-stone-600">
                    Thorough application process and initial interviews to assess commitment and fit.
                  </p>
                </div>
              </AnimatedSection>
              <AnimatedSection animation="slide-up" delay={0.2}>
                <div className="flex flex-col items-center text-center p-4">
                  <div className="bg-amber-100 rounded-full h-12 w-12 flex items-center justify-center mb-4">
                    <span className="text-amber-700 font-bold">2</span>
                  </div>
                  <h3 className="font-bold text-stone-800 mb-2">Background Verification</h3>
                  <p className="text-stone-600">
                    Comprehensive background checks and reference verification for all participants.
                  </p>
                </div>
              </AnimatedSection>
              <AnimatedSection animation="slide-up" delay={0.3}>
                <div className="flex flex-col items-center text-center p-4">
                  <div className="bg-amber-100 rounded-full h-12 w-12 flex items-center justify-center mb-4">
                    <span className="text-amber-700 font-bold">3</span>
                  </div>
                  <h3 className="font-bold text-stone-800 mb-2">Skills Certification</h3>
                  <p className="text-stone-600">
                    Participants earn certifications in their trade areas and receive character references.
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  )
}
