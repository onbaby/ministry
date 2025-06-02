"use client"

import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { toast } from "@/hooks/use-toast"
import { CheckCircle, ArrowRight } from "lucide-react"
import Link from "next/link"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

const formSchema = z.object({
  firstName: z.string().min(2, {
    message: "First name must be at least 2 characters.",
  }),
  lastName: z.string().min(2, {
    message: "Last name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  phone: z.string().min(10, {
    message: "Please enter a valid phone number.",
  }),
  age: z
    .string()
    .refine((val) => !isNaN(Number.parseInt(val)) && Number.parseInt(val) >= 18 && Number.parseInt(val) <= 30, {
      message: "You must be between 18 and 30 years old to apply.",
    }),
  currentSituation: z.string({
    required_error: "Please select your current situation.",
  }),
  needsHousing: z.boolean().default(false),
  needsJobTraining: z.boolean().default(false),
  needsMentorship: z.boolean().default(false),
  backgroundStory: z.string().min(50, {
    message: "Please share at least 50 characters about your background.",
  }),
  goals: z.string().min(50, {
    message: "Please share at least 50 characters about your goals.",
  }),
  faithJourney: z.string().optional(),
  agreeToTerms: z.boolean().refine((val) => val === true, {
    message: "You must agree to the terms and conditions.",
  }),
})

export default function ApplicantForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [submittedData, setSubmittedData] = useState<z.infer<typeof formSchema> | null>(null)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      age: "",
      currentSituation: "",
      needsHousing: false,
      needsJobTraining: false,
      needsMentorship: false,
      backgroundStory: "",
      goals: "",
      faithJourney: "",
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
      title: "Application Submitted",
      description: "We've received your application and will contact you soon.",
    })
  }

  function handleStartNewApplication() {
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
          <CardTitle className="text-center text-2xl text-green-800">Application Submitted Successfully!</CardTitle>
        </CardHeader>
        <CardContent className="text-center space-y-4">
          <p className="text-green-700">
            Thank you, {submittedData?.firstName}! Your application has been received and is being reviewed by our team.
          </p>
          <div className="bg-white rounded-lg p-4 border border-green-100 text-left">
            <h3 className="font-medium text-stone-800 mb-2">What happens next?</h3>
            <ol className="list-decimal pl-5 space-y-1 text-stone-600">
              <li>Our team will review your application within 3-5 business days</li>
              <li>
                You'll receive an email at <span className="font-medium">{submittedData?.email}</span> with further
                instructions
              </li>
              <li>We may contact you at {submittedData?.phone} for a brief phone interview</li>
              <li>If approved, you'll be invited to an orientation session</li>
            </ol>
          </div>
          <p className="text-stone-600">
            If you have any questions, please contact our support team at{" "}
            <a href="mailto:007ministries@gmail.com" className="text-amber-600 hover:underline">
              007ministries@gmail.com
            </a>
          </p>
        </CardContent>
        <CardFooter className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button variant="outline" onClick={handleStartNewApplication}>
            Submit Another Application
          </Button>
          <Link href="/programs">
            <Button className="bg-amber-600 hover:bg-amber-700">
              Explore Our Programs <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </CardFooter>
      </Card>
    )
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 bg-white rounded-lg border p-6">
        <div className="space-y-2">
          <h2 className="text-xl font-bold text-stone-800">Personal Information</h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>First Name</FormLabel>
                  <FormControl>
                    <Input placeholder="John" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Last Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Doe" {...field} />
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
                    <Input type="email" placeholder="john.doe@example.com" {...field} />
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
                    <Input placeholder="+1 (678) 906-7100" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name="age"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Age</FormLabel>
                <FormControl>
                  <Input type="number" min="18" max="30" {...field} />
                </FormControl>
                <FormDescription>You must be between 18 and 30 years old to apply.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-bold text-stone-800">Current Situation & Needs</h2>
          <FormField
            control={form.control}
            name="currentSituation"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Current Situation</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your current situation" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="unemployed">Unemployed</SelectItem>
                    <SelectItem value="part-time">Working Part-Time</SelectItem>
                    <SelectItem value="temporary">Temporary Work</SelectItem>
                    <SelectItem value="homeless">Currently Homeless</SelectItem>
                    <SelectItem value="unstable-housing">Unstable Housing</SelectItem>
                    <SelectItem value="recently-released">Recently Released</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="space-y-2">
            <h3 className="text-sm font-medium mb-2">What assistance do you need? (Select all that apply)</h3>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              <FormField
                control={form.control}
                name="needsHousing"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                    <FormControl>
                      <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel>Housing Support</FormLabel>
                    </div>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="needsJobTraining"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                    <FormControl>
                      <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel>Job Training</FormLabel>
                    </div>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="needsMentorship"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                    <FormControl>
                      <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel>Mentorship</FormLabel>
                    </div>
                  </FormItem>
                )}
              />
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-bold text-stone-800">Your Story</h2>
          <FormField
            control={form.control}
            name="backgroundStory"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Tell us about your background and current challenges</FormLabel>
                <FormControl>
                  <Textarea placeholder="Share your story with us..." className="min-h-[120px]" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="goals"
            render={({ field }) => (
              <FormItem>
                <FormLabel>What are your goals and aspirations?</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="What do you hope to achieve through our program?"
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
            name="faithJourney"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Faith Journey (Optional)</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Share about your faith journey or spiritual background..."
                    className="min-h-[120px]"
                    {...field}
                  />
                </FormControl>
                <FormDescription>This is optional, but helps us understand your spiritual background.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="agreeToTerms"
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-3 space-y-0">
              <FormControl>
                <Checkbox checked={field.value} onCheckedChange={field.onChange} />
              </FormControl>
              <div className="space-y-1 leading-none">
                <FormLabel>
                  I agree to the program requirements and understand that faith-based activities are part of this
                  ministry.
                </FormLabel>
                <FormMessage />
              </div>
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full bg-amber-600 hover:bg-amber-700" disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Submit Application"}
        </Button>
      </form>
    </Form>
  )
}
