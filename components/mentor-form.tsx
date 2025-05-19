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
  occupation: z.string().min(2, {
    message: "Occupation must be at least 2 characters.",
  }),
  mentorType: z.string({
    required_error: "Please select the type of mentorship you can provide.",
  }),
  experience: z.string().min(50, {
    message: "Please provide at least 50 characters about your relevant experience.",
  }),
  faithBackground: z.string().min(20, {
    message: "Please share at least 20 characters about your faith background.",
  }),
  availability: z.string({
    required_error: "Please select your availability.",
  }),
  backgroundCheck: z.boolean().default(true),
  agreeToTerms: z.boolean().refine((val) => val === true, {
    message: "You must agree to the terms and conditions.",
  }),
})

export default function MentorForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [submittedData, setSubmittedData] = useState<z.infer<typeof formSchema> | null>(null)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      occupation: "",
      mentorType: "",
      experience: "",
      faithBackground: "",
      availability: "",
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
      title: "Mentor Application Submitted",
      description: "Thank you for your interest in mentoring. We'll contact you soon to discuss next steps.",
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
          <CardTitle className="text-center text-2xl text-green-800">Mentor Application Submitted!</CardTitle>
        </CardHeader>
        <CardContent className="text-center space-y-4">
          <p className="text-green-700">
            Thank you, {submittedData?.name}! Your application to become a{" "}
            {submittedData?.mentorType?.replace("-", " ")} mentor has been received.
          </p>
          <div className="bg-white rounded-lg p-4 border border-green-100 text-left">
            <h3 className="font-medium text-stone-800 mb-2">What happens next?</h3>
            <ol className="list-decimal pl-5 space-y-1 text-stone-600">
              <li>Our mentorship coordinator will review your application within 5 business days</li>
              <li>
                We'll contact you at <span className="font-medium">{submittedData?.email}</span> to schedule an
                interview
              </li>
              <li>You'll be invited to attend a mentor orientation and training session</li>
              <li>
                Once approved, we'll begin the process of matching you with a mentee based on your expertise and their
                needs
              </li>
            </ol>
          </div>
          <p className="text-stone-600">
            If you have any questions, please contact our mentorship team at{" "}
            <a href="mailto:mentors@faithandwork.org" className="text-amber-600 hover:underline">
              mentors@faithandwork.org
            </a>
          </p>
        </CardContent>
        <CardFooter className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button variant="outline" onClick={handleStartNew}>
            Submit Another Application
          </Button>
          <Link href="/programs/mentorship">
            <Button className="bg-amber-600 hover:bg-amber-700">
              Learn More About Our Mentorship Program <ArrowRight className="ml-2 h-4 w-4" />
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
              name="occupation"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Occupation</FormLabel>
                  <FormControl>
                    <Input placeholder="Your Profession" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
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
          </div>
          <FormField
            control={form.control}
            name="mentorType"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Mentorship Type</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select mentorship type" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="career">Career Mentorship</SelectItem>
                    <SelectItem value="spiritual">Spiritual Mentorship</SelectItem>
                    <SelectItem value="life-skills">Life Skills Mentorship</SelectItem>
                    <SelectItem value="financial">Financial Mentorship</SelectItem>
                    <SelectItem value="trade">Trade/Skill Mentorship</SelectItem>
                    <SelectItem value="general">General Mentorship</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="experience"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Relevant Experience</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Describe your relevant experience and skills that would benefit young men in our program..."
                    className="min-h-[120px]"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="faithBackground"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Faith Background</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Share about your faith journey and church involvement..."
                    className="min-h-[120px]"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="availability"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Availability</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your availability" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="weekly">Weekly (1-2 hours)</SelectItem>
                    <SelectItem value="biweekly">Bi-weekly (2-3 hours)</SelectItem>
                    <SelectItem value="monthly">Monthly (3-4 hours)</SelectItem>
                    <SelectItem value="flexible">Flexible Schedule</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
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
                  <FormLabel>I am willing to undergo a background check</FormLabel>
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
                  <FormLabel>I agree to the mentorship guidelines and Christian values of the ministry</FormLabel>
                  <FormMessage />
                </div>
              </FormItem>
            )}
          />
        </div>

        <Button type="submit" className="w-full bg-amber-600 hover:bg-amber-700" disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Submit Mentor Application"}
        </Button>
      </form>
    </Form>
  )
}
