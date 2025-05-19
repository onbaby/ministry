"use client"

import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { toast } from "@/hooks/use-toast"
import { CheckCircle, ArrowRight } from "lucide-react"
import Link from "next/link"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  phone: z.string().min(10, {
    message: "Please enter a valid phone number.",
  }),
  propertyType: z.string({
    required_error: "Please select your property type.",
  }),
  accommodationType: z.string({
    required_error: "Please select the type of accommodation.",
  }),
  location: z.string().min(5, {
    message: "Please provide your property's location.",
  }),
  description: z.string().min(50, {
    message: "Please provide at least 50 characters describing the accommodation.",
  }),
  monthlyRent: z.string().refine((val) => !isNaN(Number(val)), {
    message: "Please enter a valid amount.",
  }),
  availableFrom: z.string().min(1, {
    message: "Please provide an availability date.",
  }),
  requirements: z.string().optional(),
  backgroundCheck: z.boolean().default(true),
  agreeToTerms: z.boolean().refine((val) => val === true, {
    message: "You must agree to the terms and conditions.",
  }),
})

export default function HomeownerForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [submittedData, setSubmittedData] = useState<z.infer<typeof formSchema> | null>(null)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      propertyType: "",
      accommodationType: "",
      location: "",
      description: "",
      monthlyRent: "",
      availableFrom: "",
      requirements: "",
      backgroundCheck: true,
      agreeToTerms: false,
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))

    console.log(values)
    setIsSubmitting(false)
    setIsSubmitted(true)
    setSubmittedData(values)

    toast({
      title: "Housing Offer Submitted",
      description: "Thank you for your housing offer. We'll contact you soon to discuss the details.",
    })
  }

  function handleStartNew() {
    setIsSubmitted(false)
    form.reset()
  }

  if (isSubmitted) {
    return (
      <Card className="border-green-100 bg-green-50">
        <CardHeader className="pb-3">
          <div className="flex items-center justify-center mb-4">
            <div className="rounded-full bg-green-100 p-3">
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
          </div>
          <CardTitle className="text-center text-2xl text-green-800">Housing Offer Submitted!</CardTitle>
        </CardHeader>
        <CardContent className="text-center space-y-4">
          <p className="text-green-700">
            Thank you, {submittedData?.name}! Your housing offer for a {submittedData?.accommodationType} in{" "}
            {submittedData?.location} has been received.
          </p>
          <div className="bg-white rounded-lg p-4 border border-green-100 text-left">
            <h3 className="font-medium text-stone-800 mb-2">What happens next?</h3>
            <ol className="list-decimal pl-5 space-y-1 text-stone-600">
              <li>Our housing coordinator will review your offer within 3 business days</li>
              <li>
                We'll contact you at <span className="font-medium">{submittedData?.email}</span> to schedule a property
                assessment
              </li>
              <li>We'll discuss housing requirements, expectations, and support services</li>
              <li>Once approved, we'll begin matching suitable program participants with your housing offer</li>
            </ol>
          </div>
          <p className="text-stone-600">
            If you have any questions, please contact our housing team at{" "}
            <a href="mailto:housing@faithandwork.org" className="text-amber-600 hover:underline">
              housing@faithandwork.org
            </a>
          </p>
        </CardContent>
        <CardFooter className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button variant="outline" onClick={handleStartNew}>
            Submit Another Housing Offer
          </Button>
          <Link href="/programs/housing">
            <Button className="bg-amber-600 hover:bg-amber-700">
              Learn More About Our Housing Program <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </CardFooter>
      </Card>
    )
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="space-y-4">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Your Name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="your.email@example.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone Number</FormLabel>
                <FormControl>
                  <Input placeholder="(555) 123-4567" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <FormField
              control={form.control}
              name="propertyType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Property Type</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select property type" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="house">House</SelectItem>
                      <SelectItem value="apartment">Apartment</SelectItem>
                      <SelectItem value="townhouse">Townhouse</SelectItem>
                      <SelectItem value="condo">Condominium</SelectItem>
                      <SelectItem value="mobile-home">Mobile Home</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="accommodationType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Accommodation Type</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select accommodation type" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="room">Room in House</SelectItem>
                      <SelectItem value="basement">Basement Apartment</SelectItem>
                      <SelectItem value="garage">Garage Apartment</SelectItem>
                      <SelectItem value="guesthouse">Guesthouse</SelectItem>
                      <SelectItem value="full-unit">Full Housing Unit</SelectItem>
                      <SelectItem value="shared">Shared Accommodation</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name="location"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Property Location</FormLabel>
                <FormControl>
                  <Input placeholder="City, State, Zip Code" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Accommodation Description</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Describe the accommodation, amenities, and any other relevant details..."
                    className="min-h-[120px]"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <FormField
              control={form.control}
              name="monthlyRent"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Monthly Rent ($)</FormLabel>
                  <FormControl>
                    <Input type="number" placeholder="500" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="availableFrom"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Available From</FormLabel>
                  <FormControl>
                    <Input type="date" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name="requirements"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Special Requirements (Optional)</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Any specific requirements or house rules..."
                    className="min-h-[80px]"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="backgroundCheck"
            render={({ field }) => (
              <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                <FormControl>
                  <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                </FormControl>
                <div className="space-y-1 leading-none">
                  <FormLabel>I understand that all program participants undergo background checks</FormLabel>
                </div>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="agreeToTerms"
            render={({ field }) => (
              <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                <FormControl>
                  <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                </FormControl>
                <div className="space-y-1 leading-none">
                  <FormLabel>I agree to the housing partnership terms and conditions</FormLabel>
                  <FormMessage />
                </div>
              </FormItem>
            )}
          />
        </div>

        <Button type="submit" className="w-full bg-amber-600 hover:bg-amber-700" disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Submit Housing Offer"}
        </Button>
      </form>
    </Form>
  )
}
