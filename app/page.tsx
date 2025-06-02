import Link from "next/link"
import Image from "next/image"
import { ChevronRight, Heart, Briefcase, Users, Award, HomeIcon, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import StatisticCard from "@/components/statistic-card"
import AnimatedSection from "@/components/animated-section"
import AnimatedButton from "@/components/animated-button"

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section with Background Image - Removed extra padding */}
      <section
        className="relative w-full min-h-[80vh] flex items-center bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0)), url('/pexels-ivan-samkov-9630189.jpg')",
        }}
      >
        <div className="container px-4 md:px-6 relative z-10">
          <AnimatedSection animation="slide-up" className="max-w-3xl">
            <div className="flex flex-col justify-center space-y-6">
              <div className="space-y-4">
                <div className="inline-flex items-center rounded-full px-3 py-1 mb-2">
                  
                </div>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-white">
                  Rebuilding Lives Through<br className="sm:hidden" /> Faith and Work
                </h1>
                <p className="text-stone-100 md:text-xl max-w-2xl">
                  Connecting young adults with housing, job training, and community support to revitalize the American
                  labor force.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <AnimatedButton className="bg-amber-600 hover:bg-amber-700 w-[200px] text-white">
                  <Link href="/apply" className="flex items-center justify-center">
                    I Need Help <ChevronRight className="ml-2 h-4 w-4" />
                  </Link>
                </AnimatedButton>
                <AnimatedButton variant="outline" className="border-amber-600 text-amber-600 hover:bg-amber-50 w-[200px]">
                  <Link href="/volunteer" className="flex items-center justify-center">
                    I Want to Help <ChevronRight className="ml-2 h-4 w-4" />
                  </Link>
                </AnimatedButton>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Mission Statement - Adjusted padding */}
      <AnimatedSection animation="fade" className="w-full py-10 md:py-16 lg:py-20 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col items-start justify-center space-y-4">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-amber-100 px-3 py-1 text-sm text-amber-700">Our Mission</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-stone-800">
                  Guided by Faith, Committed to Service
                </h2>
                <p className="text-stone-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our ministry is dedicated to revitalizing the American labor force by providing young men with the
                  skills, support, and opportunities they need to build meaningful careers and lives.
                </p>
                <p className="text-stone-600 md:text-lg mt-4">
                  We believe that through faith-centered guidance, vocational training, and community support, we can
                  help young men discover their purpose and contribute positively to society.
                </p>
                <div className="pt-4">
                  <Link href="/about">
                    <Button variant="outline" className="border-amber-600 text-amber-600 hover:bg-amber-50">
                      Learn More About Us <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/pexels-rezwan-1216589.webp"
                  alt="Young men working together on a construction project"
                  width={600}
                  height={400}
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-amber-900/40 to-transparent"></div>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-amber-100 rounded-lg p-4 shadow-lg hidden md:block">
                <blockquote className="text-amber-800 italic text-sm max-w-xs">
                  "Through faith and work, we're not just building careers, we're rebuilding lives and communities."
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Statistics - Adjusted padding */}
      <section 
        className="w-full py-12 md:py-16 bg-gradient-to-b from-stone-50 to-amber-50 relative overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 
            "linear-gradient(to bottom, rgba(255, 255, 255, 0.8) 0%, rgba(250, 250, 249, 0.9) 15%, rgba(255, 251, 235, 0.9) 85%, rgba(255, 255, 255, 0.8) 100%), url('/pexels-steffen-coonan-1005786-2098624.jpg')",
        }}
      >
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-stone-50 to-transparent z-10"></div>
          <div className="grid grid-cols-10 grid-rows-10 h-full w-full">
            {Array.from({ length: 100 }).map((_, i) => (
              <div key={i} className="border-r border-b border-amber-900/10"></div>
            ))}
          </div>
        </div>

        <div className="container px-4 md:px-6 relative z-10">
          <AnimatedSection animation="fade">
            <div className="text-center mb-10 max-w-3xl mx-auto">
              <div className="inline-flex items-center rounded-full bg-amber-100 px-3 py-1 mb-4">
                <TrendingUp className="mr-2 h-4 w-4 text-amber-700" />
                <span className="text-sm font-medium text-amber-700">Making A Difference</span>
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-stone-800 mb-4">
                Our Impact By The Numbers
              </h2>
              <p className="text-stone-600 md:text-lg">
                Since 2000, we've been working to transform lives and build entrepreneurs through John Ingram's proven four-phase business development process.
                Here's what we've accomplished together:
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <AnimatedSection animation="scale" delay={0.1}>
              <StatisticCard
                icon={<Users className="h-8 w-8 text-amber-600" />}
                value="150+"
                label="Young Men Developed"
                description="Participants who have gone through our four-phase business development program"
              />
            </AnimatedSection>
            <AnimatedSection animation="scale" delay={0.2}>
              <StatisticCard
                icon={<Briefcase className="h-8 w-8 text-amber-600" />}
                value="85+"
                label="Businesses Launched"
                description="Successful ventures started by program graduates who completed all four phases"
              />
            </AnimatedSection>
            <AnimatedSection animation="scale" delay={0.3}>
              <StatisticCard
                icon={<HomeIcon className="h-8 w-8 text-amber-600" />}
                value="$2.5M+"
                label="Loans Provided"
                description="Small business funding provided to help participants launch their ventures"
              />
            </AnimatedSection>
            <AnimatedSection animation="scale" delay={0.4}>
              <StatisticCard
                icon={<Award className="h-8 w-8 text-amber-600" />}
                value="24+"
                label="Years of Impact"
                description="Building entrepreneurs and strengthening communities since 2000"
              />
            </AnimatedSection>
          </div>

          <AnimatedSection animation="fade" delay={0.5}>
            <div className="mt-10 p-6 bg-white rounded-lg shadow-md border-l-4 border-amber-500">
              <p className="text-stone-700 text-center">
                <strong>As Mr. Ingram reaches retirement age, he is seeking to focus more of his time on the Ministry so that it can grow and flourish after he passes on.</strong>
                {" "}His dedication to developing the next generation of entrepreneurs continues to drive our mission forward.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fade" delay={0.6}>
            <div className="mt-10 text-center">
              <Link href="/about">
                <Button variant="outline" className="border-amber-600 text-amber-600 hover:bg-amber-50">
                  Learn More About Our Impact
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Programs - Adjusted padding */}
      <section className="w-full py-10 md:py-16 lg:py-20 bg-white">
        <div className="container px-4 md:px-6">
          <AnimatedSection animation="slide-up">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-stone-800">Our Programs</h2>
              <p className="max-w-[700px] text-stone-600">
                We guide young adults through our proven four-phase program designed to build entrepreneurs and business owners.
              </p>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimatedSection animation="slide-up" delay={0.1}>
              <div className="flex flex-col items-center p-6 bg-stone-50 rounded-lg shadow-sm h-56 justify-between">
                <div className="flex flex-col items-center text-center">
                  <Briefcase className="h-12 w-12 text-amber-600 mb-4" />
                  <h3 className="text-xl font-bold mb-2 text-stone-800">Business Training</h3>
                  <p className="text-center text-stone-600">
                    Comprehensive training and mentorship through our four-phase program leading to business ownership.
                  </p>
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection animation="slide-up" delay={0.2}>
              <div className="flex flex-col items-center p-6 bg-stone-50 rounded-lg shadow-sm h-56 justify-between">
                <div className="flex flex-col items-center text-center">
                  <HomeIcon className="h-12 w-12 text-amber-600 mb-4" />
                  <h3 className="text-xl font-bold mb-2 text-stone-800">Financial Support</h3>
                  <p className="text-center text-stone-600">
                    Small business loans and financial guidance to help launch your own successful venture.
                  </p>
                </div>
              </div>
              <div className="mt-4 p-3 bg-amber-50 rounded-lg border border-amber-200">
                <p className="text-center text-amber-800 text-sm font-medium">
                  <strong>Special Offer for Homeowners:</strong> Get discounted rates when you use our skilled contractors and students for home repairs!
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection animation="slide-up" delay={0.3}>
              <div className="flex flex-col items-center p-6 bg-stone-50 rounded-lg shadow-sm h-56 justify-between">
                <div className="flex flex-col items-center text-center">
                  <Users className="h-12 w-12 text-amber-600 mb-4" />
                  <h3 className="text-xl font-bold mb-2 text-stone-800">Entrepreneurship Mentorship</h3>
                  <p className="text-center text-stone-600">
                    One-on-one guidance from experienced business owners who've walked the path to success.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="w-full py-12 md:py-16 bg-white">
        <div className="container px-4 md:px-6">
          <AnimatedSection animation="fade">
            <div className="text-center mb-12">
              <div className="inline-flex items-center rounded-full bg-amber-100 px-3 py-1 mb-4">
                <Heart className="mr-2 h-4 w-4 text-amber-700" />
                <span className="text-sm font-medium text-amber-700">Success Stories</span>
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-stone-800 mb-4">
                What Our Participants Say
              </h2>
              <p className="text-stone-600 max-w-3xl mx-auto">
                Real stories from people whose lives have been transformed through our four-phase business development program.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimatedSection animation="slide-up" delay={0.1}>
              <div className="p-6 bg-stone-50 rounded-xl border border-stone-100">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center mr-4">
                    <span className="text-amber-700 font-bold">A</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-stone-800">Anthony M.</h4>
                    <p className="text-sm text-stone-600">Business Owner, Program Graduate 2022</p>
                  </div>
                </div>
                <p className="text-stone-700 italic">
                  "Mr. Ingram's program gave me more than business skills - it gave me a future. I went from having nothing to owning my own landscaping company. The four phases taught me everything from basic work ethic to managing finances and employees."
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="slide-up" delay={0.2}>
              <div className="p-6 bg-stone-50 rounded-xl border border-stone-100">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center mr-4">
                    <span className="text-amber-700 font-bold">M</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-stone-800">Marcus T.</h4>
                    <p className="text-sm text-stone-600">Construction Contractor, Program Graduate 2021</p>
                  </div>
                </div>
                <p className="text-stone-700 italic">
                  "I was living in my car when I found this ministry. Through the housing support and job training, I learned construction skills. Now I have my own crew and just bought my first house. This program literally saved my life."
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="slide-up" delay={0.3}>
              <div className="p-6 bg-stone-50 rounded-xl border border-stone-100">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center mr-4">
                    <span className="text-amber-700 font-bold">S</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-stone-800">Sarah K.</h4>
                    <p className="text-sm text-stone-600">Auto Repair Shop Owner, Program Graduate 2020</p>
                  </div>
                </div>
                <p className="text-stone-700 italic">
                  "As a single mom, I needed a way to support my family. The automotive training and small business loan helped me open my own repair shop. I'm now financially independent and can provide for my children."
                </p>
              </div>
            </AnimatedSection>
          </div>

          <AnimatedSection animation="fade" delay={0.7}>
            <div className="mt-12 text-center">
              <div className="bg-amber-50 rounded-lg p-6 max-w-3xl mx-auto">
                <h3 className="text-lg font-bold text-amber-800 mb-2">Ready to Write Your Success Story?</h3>
                <p className="text-amber-700 mb-4">
                  Join the 150+ individuals who have transformed their lives through our four-phase business development program.
                </p>
                <Link href="/apply">
                  <Button className="bg-amber-600 hover:bg-amber-700">
                    Apply Today
                  </Button>
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Call to Action - Adjusted padding */}
      <AnimatedSection animation="slide-up">
        <div 
          className="w-full py-10 md:py-16 bg-amber-600 text-white relative overflow-hidden bg-cover bg-no-repeat"
          style={{
            backgroundImage: 
              "linear-gradient(to right, rgba(217, 119, 6, 1) 0%, rgba(217, 119, 6, 1) 55%, rgba(217, 119, 6, 0) 100%), url('/pexels-pixabay-415571.jpg')",
            backgroundPosition: "center 30%",
          }}
        >
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 sm:px-10 md:gap-12 md:grid-cols-2 items-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Join Our Mission Today</h2>
                <p className="max-w-[600px] opacity-90">
                  Whether you need help, can offer opportunities, or want to support our work, there's a place for you in
                  our community.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-end">
                <Link href="/donate" className="w-full sm:w-auto">
                  <Button className="w-full bg-white text-amber-600 hover:bg-stone-100">
                    <Heart className="mr-2 h-4 w-4" /> Donate Now
                  </Button>
                </Link>
                <Link href="/contact" className="w-full sm:w-auto">
                  <Button variant="outline" className="w-full bg-amber-600 border-white text-white hover:bg-amber-700 hover:text-white">
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </div>
  )
}
