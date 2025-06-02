import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { BookIcon as Bible, Heart, Users, Hammer, Shield } from "lucide-react"
import AnimatedSection from "@/components/animated-section"

export const metadata = {
  title: "About Us - 007 Ministry",
  description:
    "Learn about our mission, values, and the impact we're making in young people's lives through faith and work.",
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
                src="/20250602_1647_Smiling in Orange Shirt_remix_01jws68zv3e66t5g2mg37mp8nb.png"
                width={400}
                height={400}
                alt="Our ministry team and participants"
                className="rounded-lg mx-auto"
              />
              <div className="space-y-4">
                <p className="text-stone-600">
                  007 Ministry was founded around 2000 by John Ingram, a small business owner working to build associates for his business team in North Georgia.
                </p>
                <p className="text-stone-600">
                  What began as John's vision to develop young people through structured business mentorship has evolved into a comprehensive four-phase program that guides participants from initial hiring and training all the way to launching their own businesses.
                </p>
                <p className="text-stone-600">
                  Over the years, we've helped countless young people not only develop valuable skills and character, but ultimately achieve the independence and fulfillment that comes from entrepreneurship and business ownership.
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
                <div className="flex flex-col items-center text-center p-6 bg-stone-50 rounded-lg h-48 justify-between">
                  <div className="flex flex-col items-center">
                    <Bible className="h-10 w-10 text-amber-600 mb-3" />
                    <h3 className="font-bold text-stone-800 mb-2">Faith-Centered</h3>
                    <p className="text-stone-600 text-sm">
                      Programs rooted in Christian principles for spiritual growth and personal transformation.
                    </p>
                  </div>
                </div>
              </AnimatedSection>
              <AnimatedSection animation="scale" delay={0.2}>
                <div className="flex flex-col items-center text-center p-6 bg-stone-50 rounded-lg h-48 justify-between">
                  <div className="flex flex-col items-center">
                    <Hammer className="h-10 w-10 text-amber-600 mb-3" />
                    <h3 className="font-bold text-stone-800 mb-2">Dignity of Work</h3>
                    <p className="text-stone-600 text-sm">
                      Building character, skills, and purpose through meaningful labor and hands-on experience.
                    </p>
                  </div>
                </div>
              </AnimatedSection>
              <AnimatedSection animation="scale" delay={0.3}>
                <div className="flex flex-col items-center text-center p-6 bg-stone-50 rounded-lg h-48 justify-between">
                  <div className="flex flex-col items-center">
                    <Heart className="h-10 w-10 text-amber-600 mb-3" />
                    <h3 className="font-bold text-stone-800 mb-2">Compassionate Service</h3>
                    <p className="text-stone-600 text-sm">
                      Approaching each individual with compassion and recognizing their unique potential.
                    </p>
                  </div>
                </div>
              </AnimatedSection>
              <div className="lg:col-span-3 flex flex-col sm:flex-row justify-center gap-6">
                <AnimatedSection animation="scale" delay={0.4} className="w-full max-w-sm">
                  <div className="flex flex-col items-center text-center p-6 bg-stone-50 rounded-lg h-48 justify-between">
                    <div className="flex flex-col items-center">
                      <Users className="h-10 w-10 text-amber-600 mb-3" />
                      <h3 className="font-bold text-stone-800 mb-2">Community Partnership</h3>
                      <p className="text-stone-600 text-sm">
                        Connecting participants with mentors, employers, and housing providers for lasting support.
                      </p>
                    </div>
                  </div>
                </AnimatedSection>
                <AnimatedSection animation="scale" delay={0.5} className="w-full max-w-sm">
                  <div className="flex flex-col items-center text-center p-6 bg-stone-50 rounded-lg h-48 justify-between">
                    <div className="flex flex-col items-center">
                      <Shield className="h-10 w-10 text-amber-600 mb-3" />
                      <h3 className="font-bold text-stone-800 mb-2">Accountability & Trust</h3>
                      <p className="text-stone-600 text-sm">
                        Maintaining high standards to ensure participants are reliable and committed to growth.
                      </p>
                    </div>
                  </div>
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
                sustainable change requires attention to all aspects of a young person's life:
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
            <h2 className="text-2xl font-bold text-center text-stone-800">Our Four-Phase Development Process</h2>
            <p className="text-stone-600 text-center">
              Our proven four-phase program guides participants from initial hiring to launching their own businesses:
            </p>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <AnimatedSection animation="slide-up" delay={0.1}>
                <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-sm border border-stone-100">
                  <div className="bg-amber-100 rounded-full h-12 w-12 flex items-center justify-center mb-4">
                    <span className="text-amber-700 font-bold">1</span>
                  </div>
                  <h3 className="font-bold text-stone-800 mb-2">Hire & Train</h3>
                  <p className="text-stone-600">
                    Join our team and develop essential skills through hands-on experience.
                  </p>
                </div>
              </AnimatedSection>
              <AnimatedSection animation="slide-up" delay={0.2}>
                <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-sm border border-stone-100">
                  <div className="bg-amber-100 rounded-full h-12 w-12 flex items-center justify-center mb-4">
                    <span className="text-amber-700 font-bold">2</span>
                  </div>
                  <h3 className="font-bold text-stone-800 mb-2">Mentor & Advise</h3>
                  <p className="text-stone-600">
                    Receive personalized guidance to build leadership and business skills.
                  </p>
                </div>
              </AnimatedSection>
              <AnimatedSection animation="slide-up" delay={0.3}>
                <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-sm border border-stone-100">
                  <div className="bg-amber-100 rounded-full h-12 w-12 flex items-center justify-center mb-4">
                    <span className="text-amber-700 font-bold">3</span>
                  </div>
                  <h3 className="font-bold text-stone-800 mb-2">Fund & Support</h3>
                  <p className="text-stone-600">
                    Access small business loans and expert advice to then launch your venture.
                  </p>
                </div>
              </AnimatedSection>
              <AnimatedSection animation="slide-up" delay={0.4}>
                <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-sm border border-stone-100 relative overflow-hidden">
                  <div className="bg-amber-100 rounded-full h-12 w-12 flex items-center justify-center mb-4">
                    <span className="text-amber-700 font-bold">4</span>
                  </div>
                  <h3 className="font-bold text-stone-800 mb-2">Launch & Succeed</h3>
                  <p className="text-stone-600">
                    Graduate to business ownership with ongoing alumni network support.
                  </p>
                  {/* Floating Rocket */}
                  <div className="absolute bottom-2 right-2">
                    <Image
                      src="/free-rocket-icon-3424-thumb.png"
                      width={24}
                      height={24}
                      alt="Launch rocket"
                      className="opacity-80 animate-float"
                    />
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  )
}
