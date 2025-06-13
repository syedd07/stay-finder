import Link from "next/link"
import { Home } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Home className="h-6 w-6 text-rose-500" />
              <span className="text-xl font-bold">StayFinder</span>
            </div>
            <p className="text-gray-600 text-sm">
              Discover unique accommodations around the world and create unforgettable travel experiences.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <Link href="/help" className="hover:text-gray-900">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="/safety" className="hover:text-gray-900">
                  Safety Information
                </Link>
              </li>
              <li>
                <Link href="/cancellation" className="hover:text-gray-900">
                  Cancellation Options
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-gray-900">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Community</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <Link href="/blog" className="hover:text-gray-900">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/forum" className="hover:text-gray-900">
                  Community Forum
                </Link>
              </li>
              <li>
                <Link href="/events" className="hover:text-gray-900">
                  Events
                </Link>
              </li>
              <li>
                <Link href="/referrals" className="hover:text-gray-900">
                  Referrals
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Hosting</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <Link href="/host" className="hover:text-gray-900">
                  Become a Host
                </Link>
              </li>
              <li>
                <Link href="/host/resources" className="hover:text-gray-900">
                  Host Resources
                </Link>
              </li>
              <li>
                <Link href="/host/community" className="hover:text-gray-900">
                  Host Community
                </Link>
              </li>
              <li>
                <Link href="/host/insurance" className="hover:text-gray-900">
                  Host Insurance
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-600">© 2024 StayFinder. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="text-sm text-gray-600 hover:text-gray-900">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-sm text-gray-600 hover:text-gray-900">
              Terms of Service
            </Link>
            <Link href="/cookies" className="text-sm text-gray-600 hover:text-gray-900">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
