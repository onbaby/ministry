import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Heart, DollarSign, Calendar, Award } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Donate - Faith & Work Ministry",
  description: "Support our mission to help young men rebuild their lives through faith, work, and community.",
}

export default function DonatePage() {
  return (
    <div className="container px-4 py-12 md:px-6 md:py-24">
      <div className="mx-auto max-w-3xl space-y-8">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-stone-800">
            Support Our Mission
          </h1>
          <p className="mx-auto max-w-[700px] text-stone-600 md:text-xl">
            Your generous donation helps young men rebuild their lives through faith, work, and community.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Card className="border-amber-200">
            <CardHeader className="pb-4">
              <CardTitle className="text-center">One-Time Gift</CardTitle>
              <CardDescription className="text-center">Support our immediate needs</CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <DollarSign className="mx-auto h-12 w-12 text-amber-600 mb-4" />
              <div className="flex justify-center gap-2 mb-4">
                <Button variant="outline" className="rounded-full h-10 w-10 p-0">
                  $25
                </Button>
                <Button variant="outline" className="rounded-full h-10 w-10 p-0">
                  $50
                </Button>
                <Button variant="outline" className="rounded-full h-10 w-10 p-0">
                  $100
                </Button>
                <Button variant="outline" className="rounded-full h-10 w-10 p-0">
                  $250
                </Button>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-amber-600 hover:bg-amber-700">
                <Heart className="mr-2 h-4 w-4" /> Donate Now
              </Button>
            </CardFooter>
          </Card>

          <Card className="border-amber-200">
            <CardHeader className="pb-4">
              <CardTitle className="text-center">Monthly Partner</CardTitle>
              <CardDescription className="text-center">Provide ongoing support</CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <Calendar className="mx-auto h-12 w-12 text-amber-600 mb-4" />
              <div className="flex justify-center gap-2 mb-4">
                <Button variant="outline" className="rounded-full h-10 w-10 p-0">
                  $10
                </Button>
                <Button variant="outline" className="rounded-full h-10 w-10 p-0">
                  $25
                </Button>
                <Button variant="outline" className="rounded-full h-10 w-10 p-0">
                  $50
                </Button>
                <Button variant="outline" className="rounded-full h-10 w-10 p-0">
                  $100
                </Button>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-amber-600 hover:bg-amber-700">
                <Heart className="mr-2 h-4 w-4" /> Become a Partner
              </Button>
            </CardFooter>
          </Card>

          <Card className="border-amber-200 sm:col-span-2 lg:col-span-1">
            <CardHeader className="pb-4">
              <CardTitle className="text-center">Sponsor a Participant</CardTitle>
              <CardDescription className="text-center">Fund a young man's journey</CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <Award className="mx-auto h-12 w-12 text-amber-600 mb-4" />
              <p className="text-stone-600 mb-4">
                $500 sponsors one young man through our 3-month program, providing housing, job training, and
                mentorship.
              </p>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-amber-600 hover:bg-amber-700">
                <Heart className="mr-2 h-4 w-4" /> Sponsor Now
              </Button>
            </CardFooter>
          </Card>
        </div>

        <div className="rounded-lg border p-6 bg-white">
          <h2 className="text-xl font-bold mb-4 text-stone-800">Other Ways to Give</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <h3 className="font-bold text-stone-800">By Check</h3>
              <p className="text-stone-600">
                Make checks payable to "Faith & Work Ministry" and mail to:
                <br />
                123 Ministry Lane
                <br />
                Anytown, USA 12345
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-bold text-stone-800">In-Kind Donations</h3>
              <p className="text-stone-600">
                We accept donations of tools, equipment, clothing, and other items that can help our participants.
              </p>
              <Link href="/contact" className="text-amber-600 hover:underline">
                Contact us to learn more
              </Link>
            </div>
          </div>
        </div>

        <div className="text-center text-stone-600 text-sm">
          <p>Faith & Work Ministry is a 501(c)(3) nonprofit organization. All donations are tax-deductible.</p>
        </div>
      </div>
    </div>
  )
}
