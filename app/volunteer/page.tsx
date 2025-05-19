import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import BusinessForm from "@/components/business-form"
import HomeownerForm from "@/components/homeowner-form"
import MentorForm from "@/components/mentor-form"

export const metadata = {
  title: "Volunteer & Partner - Faith & Work Ministry",
  description:
    "Offer your support as a business mentor, homeowner, or volunteer to help young men rebuild their lives.",
}

export default function VolunteerPage() {
  return (
    <div className="container px-4 py-12 md:px-6 md:py-24">
      <div className="mx-auto max-w-3xl space-y-8">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-stone-800">
            Partner With Us
          </h1>
          <p className="mx-auto max-w-[700px] text-stone-600 md:text-xl">
            Join our mission by offering opportunities, housing, or mentorship to young men seeking a fresh start.
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
                  professional knowledge, and faith journey to help young men grow.
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
