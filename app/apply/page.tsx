import ApplicantForm from "@/components/applicant-form"

export const metadata = {
  title: "Apply for Assistance - 007 Ministry",
  description: "Apply for our programs and start your journey to a better life through faith and work.",
}

export default function ApplyPage() {
  return (
    <div className="container px-4 py-12 md:px-6 md:py-24">
      <div className="mx-auto max-w-3xl space-y-8">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-stone-800">
            Apply for Assistance
          </h1>
          <p className="mx-auto max-w-[700px] text-stone-600 md:text-xl">
            Take the first step toward a fresh start. Fill out the form below to apply for our program.
          </p>
        </div>
        <div className="space-y-4 rounded-lg border p-6 bg-white">
          <div className="space-y-2">
            <h2 className="text-xl font-bold text-stone-800">Program Eligibility</h2>
            <p className="text-stone-600">Our program is designed for young people who are:</p>
            <ul className="list-disc pl-5 text-stone-600 space-y-1">
              <li>Between the ages of 18-30</li>
              <li>Committed to personal growth and development</li>
              <li>Willing to participate in faith-based activities</li>
              <li>Ready to learn new skills and work diligently</li>
              <li>In need of housing, job training, or community support</li>
            </ul>
          </div>
        </div>
        <ApplicantForm />
      </div>
    </div>
  )
}
