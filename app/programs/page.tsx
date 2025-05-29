import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Briefcase, Home, Users, GraduationCap, Wallet, Heart } from "lucide-react"
import AnimatedSection from "@/components/animated-section"

export const metadata = {
  title: "Our Programs - 007 Ministry",
  description: "Learn about our job training, housing support, and mentorship programs for young men.",
}

export default function ProgramsPage() {
  return (
    <div className="container px-4 py-12 md:px-6 md:py-24">
      <div className="mx-auto max-w-4xl space-y-12">
        <AnimatedSection animation="fade">
          <div className="space-y-4 text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-stone-800">Our Programs</h1>
            <p className="mx-auto max-w-[700px] text-stone-600 md:text-xl">
              We offer comprehensive support through our three core programs designed to help young men rebuild their
              lives.
            </p>
          </div>
        </AnimatedSection>

        <div className="space-y-12">
          {/* Job Training Program */}
          <AnimatedSection animation="slide-up">
            <div className="relative rounded-xl overflow-hidden bg-stone-100">
              <div className="grid gap-8 md:grid-cols-2 items-center p-8">
                <div>
                  <div className="space-y-4">
                    <div className="inline-flex items-center rounded-md bg-amber-100 px-3 py-1">
                      <Briefcase className="mr-2 h-4 w-4 text-amber-700" />
                      <span className="text-sm font-medium text-amber-700">Job Training</span>
                    </div>
                    <h2 className="text-2xl font-bold text-stone-800">Skills for Sustainable Employment</h2>
                    <p className="text-stone-600">
                      Our job training program equips young men with practical skills in high-demand trades. Through
                      hands-on training, certification programs, and apprenticeships, participants develop marketable
                      skills that lead to sustainable employment.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-amber-600" />
                        <span className="text-stone-600">
                          Trade skills training (construction, landscaping, automotive, etc.)
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-amber-600" />
                        <span className="text-stone-600">Industry certifications and credentials</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-amber-600" />
                        <span className="text-stone-600">Apprenticeship placements with local businesses</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-amber-600" />
                        <span className="text-stone-600">
                          Job readiness training (resume building, interview skills)
                        </span>
                      </li>
                    </ul>
                    <div className="pt-4">
                      <Link href="/apply">
                        <Button className="bg-amber-600 hover:bg-amber-700">Apply for Training</Button>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center">
                  <Image
                    src="/placeholder-z5zqa.png"
                    width={400}
                    height={400}
                    alt="Job training program"
                    className="rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Housing Support Program */}
          <AnimatedSection animation="slide-up" delay={0.1}>
            <div className="relative rounded-xl overflow-hidden bg-stone-100">
              <div className="grid gap-8 md:grid-cols-2 items-center p-8">
                <div className="flex justify-center md:order-2">
                  <Image
                    src="/2ac4e716-831f-44cc-a330-83c66aed8331.png"
                    width={400}
                    height={400}
                    alt="Safe and stable housing support program"
                    className="rounded-lg shadow-lg"
                  />
                </div>
                <div className="md:order-1">
                  <div className="space-y-4">
                    <div className="inline-flex items-center rounded-md bg-amber-100 px-3 py-1">
                      <Home className="mr-2 h-4 w-4 text-amber-700" />
                      <span className="text-sm font-medium text-amber-700">Housing Support</span>
                    </div>
                    <h2 className="text-2xl font-bold text-stone-800">Safe and Stable Housing</h2>
                    <p className="text-stone-600">
                      Stable housing is essential for personal growth and success. Our housing program connects young
                      men with affordable, safe housing options while they participate in our training and mentorship
                      programs.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-amber-600" />
                        <span className="text-stone-600">
                          Network of homeowner partners offering affordable housing
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-amber-600" />
                        <span className="text-stone-600">Transitional housing options for program participants</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-amber-600" />
                        <span className="text-stone-600">Housing readiness training and financial literacy</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-amber-600" />
                        <span className="text-stone-600">Support for long-term housing stability</span>
                      </li>
                    </ul>
                    <div className="pt-4">
                      <Link href="/apply">
                        <Button className="bg-amber-600 hover:bg-amber-700">Apply for Housing</Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Mentorship Program */}
          <AnimatedSection animation="slide-up" delay={0.2}>
            <div className="relative rounded-xl overflow-hidden bg-stone-100">
              <div className="grid gap-8 md:grid-cols-2 items-center p-8">
                <div>
                  <div className="space-y-4">
                    <div className="inline-flex items-center rounded-md bg-amber-100 px-3 py-1">
                      <Users className="mr-2 h-4 w-4 text-amber-700" />
                      <span className="text-sm font-medium text-amber-700">Mentorship</span>
                    </div>
                    <h2 className="text-2xl font-bold text-stone-800">Guidance and Support</h2>
                    <p className="text-stone-600">
                      Our mentorship program pairs young men with experienced mentors who provide guidance,
                      accountability, and support. These relationships help participants navigate challenges and develop
                      character.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-amber-600" />
                        <span className="text-stone-600">One-on-one mentoring relationships</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-amber-600" />
                        <span className="text-stone-600">Spiritual formation and character development</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-amber-600" />
                        <span className="text-stone-600">Life skills coaching and personal development</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-amber-600" />
                        <span className="text-stone-600">Community integration and support network</span>
                      </li>
                    </ul>
                    <div className="pt-4">
                      <Link href="/apply">
                        <Button className="bg-amber-600 hover:bg-amber-700">Apply for Mentorship</Button>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center">
                  <Image
                    src="/mentor-mentee-conversation.png"
                    width={400}
                    height={400}
                    alt="Mentorship program"
                    className="rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Additional Support Services */}
        <AnimatedSection animation="fade">
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-center text-stone-800">Additional Support Services</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <Card className="bg-stone-50">
                <CardHeader className="pb-2">
                  <GraduationCap className="h-8 w-8 text-amber-600 mb-2" />
                  <CardTitle>Education Support</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-stone-600">
                    GED preparation, continuing education opportunities, and vocational certifications.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-stone-50">
                <CardHeader className="pb-2">
                  <Wallet className="h-8 w-8 text-amber-600 mb-2" />
                  <CardTitle>Financial Literacy</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-stone-600">
                    Budgeting, saving, credit building, and long-term financial planning.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-stone-50 sm:col-span-2 lg:col-span-1">
                <CardHeader className="pb-2">
                  <Heart className="h-8 w-8 text-amber-600 mb-2" />
                  <CardTitle>Wellness Support</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-stone-600">Physical, mental, and spiritual wellness resources and referrals.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </AnimatedSection>

        {/* Program Eligibility */}
        <AnimatedSection animation="slide-up">
          <div className="rounded-lg border p-6 bg-white">
            <h2 className="text-xl font-bold mb-4 text-stone-800">Program Eligibility</h2>
            <p className="text-stone-600 mb-4">Our programs are designed for young men who are:</p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-amber-600" />
                <span className="text-stone-600">Between the ages of 18-30</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-amber-600" />
                <span className="text-stone-600">Committed to personal growth and development</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-amber-600" />
                <span className="text-stone-600">Willing to participate in faith-based activities</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-amber-600" />
                <span className="text-stone-600">Ready to learn new skills and work diligently</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-amber-600" />
                <span className="text-stone-600">In need of housing, job training, or community support</span>
              </li>
            </ul>
            <div className="mt-6 text-center">
              <Link href="/apply">
                <Button className="bg-amber-600 hover:bg-amber-700">Apply Now</Button>
              </Link>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  )
}
