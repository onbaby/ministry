import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import BusinessForm from "@/components/business-form"
import HomeownerForm from "@/components/homeowner-form"
import MentorForm from "@/components/mentor-form"

export const metadata = {
  title: "Volunteer",
  description: "Join our mission to help young people rebuild their lives through faith, work, and community.",
}

export default function VolunteerPage() {
  return (
    <div className="container px-4 py-12 md:px-6 md:py-24">
      <div className="mx-auto max-w-3xl space-y-8">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-stone-800">
            Partner With Us
          </h1>
          <p className="text-stone-600 max-w-3xl mx-auto">
            Join our mission by offering opportunities, housing, or mentorship to young people seeking a fresh start.
            Together, we can help transform lives and strengthen our community.
          </p>
        </div>

        <Tabs defaultValue="business" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="business">Business Partner</TabsTrigger>
            <TabsTrigger value="homeowner">Homeowner</TabsTrigger>
            <TabsTrigger value="mentor">Mentor</TabsTrigger>
          </TabsList>
          <TabsContent value="business" className="mt-6">
            <div className="space-y-4 rounded-lg border p-6 bg-white">
              <div className="space-y-2">
                <h2 className="text-xl font-bold text-stone-800">Business Partners</h2>
                <p className="text-stone-600">
                  As a business partner, you can provide job opportunities, internships, or training for our program
                  participants. Your business will gain access to motivated workers while making a significant impact in
                  their lives.
                </p>
              </div>
              <BusinessForm />
            </div>
          </TabsContent>
          <TabsContent value="homeowner" className="mt-6">
            <div className="space-y-4 rounded-lg border p-6 bg-white">
              <div className="space-y-2">
                <h2 className="text-xl font-bold text-stone-800">Homeowners</h2>
                <p className="text-stone-600">
                  Homeowners can provide affordable housing options for our program participants. This could be a room
                  for rent, a garage apartment, or other living space. All participants are vetted and certified through
                  our program.
                </p>
                <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mt-4">
                  <h3 className="font-bold text-amber-800 mb-2">💰 Special Benefit for Homeowners</h3>
                  <p className="text-amber-800">
                    <strong>Save money on home repairs!</strong> As a homeowner partner, you'll receive discounted rates when you hire our skilled contractors and program participants for home improvement projects, repairs, and maintenance work.
                  </p>
                  <p className="text-amber-700 text-sm mt-2">
                    Our trained participants work under the supervision of experienced contractors, providing quality work at reduced costs while gaining valuable hands-on experience.
                  </p>
                </div>
              </div>
              <HomeownerForm />
            </div>
          </TabsContent>
          <TabsContent value="mentor" className="mt-6">
            <div className="space-y-4 rounded-lg border p-6 bg-white">
              <div className="space-y-2">
                <h2 className="text-xl font-bold text-stone-800">Mentors</h2>
                <p className="text-stone-600">
                  Mentors provide guidance, support, and wisdom to our program participants. Share your life experience,
                  professional knowledge, and faith journey to help young people grow.
                </p>
              </div>
              <MentorForm />
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
