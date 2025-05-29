import Link from "next/link"
import { Facebook, Instagram, Twitter, Mail, Phone } from "lucide-react"

export default function Footer() {
  return (
    <footer className="w-full border-t bg-stone-50 py-6 md:py-12">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-stone-800">007 Ministry</h3>
            <p className="text-sm text-stone-600">Rebuilding lives through faith, work, and community.</p>
            <div className="flex space-x-4">
              <Link href="#" className="text-stone-600 hover:text-amber-600">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-stone-600 hover:text-amber-600">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-stone-600 hover:text-amber-600">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-stone-800">Programs</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/programs/job-training" className="text-stone-600 hover:text-amber-600">
                  Job Training
                </Link>
              </li>
              <li>
                <Link href="/programs/housing" className="text-stone-600 hover:text-amber-600">
                  Housing Support
                </Link>
              </li>
              <li>
                <Link href="/programs/mentorship" className="text-stone-600 hover:text-amber-600">
                  Community Mentorship
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-stone-800">Get Involved</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/apply" className="text-stone-600 hover:text-amber-600">
                  Apply for Help
                </Link>
              </li>
              <li>
                <Link href="/volunteer" className="text-stone-600 hover:text-amber-600">
                  Volunteer
                </Link>
              </li>
              <li>
                <Link href="/donate" className="text-stone-600 hover:text-amber-600">
                  Donate
                </Link>
              </li>
              <li>
                <Link href="/business-partners" className="text-stone-600 hover:text-amber-600">
                  Business Partners
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-stone-800">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2 text-stone-600">
                <Mail className="h-4 w-4 text-amber-600" />
                <span>info@faithandwork.org</span>
              </li>
              <li className="flex items-center gap-2 text-stone-600">
                <Phone className="h-4 w-4 text-amber-600" />
                <span>(555) 123-4567</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t pt-6 text-center text-sm text-stone-600">
          <p>&copy; {new Date().getFullYear()} 007 Ministry. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
