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
  businessName: z.string().min(2, {
    message: "Business name must be at least 2 characters.",
  }),
  contactName: z.string().min(2, {
    message: "Contact name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  phone: z.string().min(10, {
    message: "Please enter a valid phone number.",
  }),
  businessType: z.string({
    required_error: "Please select your business type.",
  }),
  opportunityType: z.string({
    required_error: "Please select the type of opportunity.",
  }),
  description: z.string().min(50, {
    message: "Please provide at least 50 characters describing the opportunity.",
  }),
  requirements: z.string().optional(),
  backgroundCheck: z.boolean().default(true),
  agreeToTerms: z.boolean().refine((val) => val === true, {
    message: "You must agree to the terms and conditions.",
  }),
})

export default function BusinessForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [submittedData, setSubmittedData] = useState<z.infer<typeof formSchema> | null>(null)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      businessName: "",
      contactName: "",
      email: "",
      phone: "",
      businessType: "",
      opportunityType: "",
      description: "",
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
      title: "Partnership Request Submitted",
      description: "Thank you for your interest. We'll contact you soon to discuss the partnership.",
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
          <CardTitle className="text-center text-2xl text-green-800">Partnership Request Submitted!</CardTitle>
        </CardHeader>
        <CardContent className="text-center space-y-4">
          <p className="text-green-700">
            Thank you, {submittedData?.contactName} from {submittedData?.businessName}! Your business partnership
            request has been received.
          </p>
          <div className="bg-white rounded-lg p-4 border border-green-100 text-left">
            <h3 className="font-medium text-stone-800 mb-2">What happens next?</h3>
            <ol className="list-decimal pl-5 space-y-1 text-stone-600">
              <li>Our business partnerships team will review your request within 3 business days</li>
              <li>
                We'll contact you at <span className="font-medium">{submittedData?.email}</span> to schedule an initial
                consultation
              </li>
              <li>
                We'll discuss how your {submittedData?.opportunityType} opportunity can best support our program
                participants
              </li>
              <li>Once approved, we'll match you with suitable candidates from our program</li>
            </ol>
          </div>
          <p className="text-stone-600">
            If you have any questions, please contact our business partnerships team at{" "}
            <a href="mailto:007ministries@gmail.com" className="text-amber-600 hover:underline">
              007ministries@gmail.com
            </a>
          </p>
        </CardContent>
        <CardFooter className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button variant="outline" onClick={handleStartNew}>
            Submit Another Request
          </Button>
          <Link href="/programs">
            <Button className="bg-amber-600 hover:bg-amber-700">
              Learn More About Our Programs <ArrowRight className="ml-2 h-4 w-4" />
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
              name="businessName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Business Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Your Business Name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="contactName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Contact Person</FormLabel>
                  <FormControl>
                    <Input placeholder="Your Name" {...field} />
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
                    <Input type="email" placeholder="contact@business.com" {...field} />
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
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <FormField
              control={form.control}
              name="businessType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Business Type</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select business type" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="construction">Construction</SelectItem>
                      <SelectItem value="landscaping">Landscaping</SelectItem>
                      <SelectItem value="retail">Retail</SelectItem>
                      <SelectItem value="food-service">Food Service</SelectItem>
                      <SelectItem value="manufacturing">Manufacturing</SelectItem>
                      <SelectItem value="automotive">Automotive</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="opportunityType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Opportunity Type</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select opportunity type" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="full-time">Full-time Employment</SelectItem>
                      <SelectItem value="part-time">Part-time Employment</SelectItem>
                      <SelectItem value="apprenticeship">Apprenticeship</SelectItem>
                      <SelectItem value="internship">Internship</SelectItem>
                      <SelectItem value="training">Training Program</SelectItem>
                      <SelectItem value="contract">Contract Work</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Opportunity Description</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Describe the job opportunity, skills needed, and expectations..."
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
            name="requirements"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Special Requirements (Optional)</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Any specific requirements or qualifications needed..."
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
                  <FormLabel>I agree to the partnership terms and conditions</FormLabel>
                  <FormMessage />
                </div>
              </FormItem>
            )}
          />
        </div>

        <Button type="submit" className="w-full bg-amber-600 hover:bg-amber-700" disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Submit Partnership Request"}
        </Button>
      </form>
    </Form>
  )
}
