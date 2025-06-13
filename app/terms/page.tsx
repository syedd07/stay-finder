"use client"

import { useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FileText, AlertTriangle } from "lucide-react"

export default function TermsPage() {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-white border-b">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center max-w-3xl mx-auto">
            <div className="bg-gray-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <FileText className="h-10 w-10 text-gray-600" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Terms of Service</h1>
            <p className="text-xl text-gray-600">
              These terms govern your use of StayFinder and outline the rights and responsibilities of all users.
            </p>
            <p className="text-sm text-gray-500 mt-4">Last updated: January 15, 2024</p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Important Notice */}
        <section className="mb-12">
          <Card className="bg-amber-50 border-amber-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-amber-900">
                <AlertTriangle className="h-5 w-5" />
                Important Notice
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-amber-800">
                By using StayFinder, you agree to these terms. Please read them carefully. If you don't agree with these
                terms, you may not use our services.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Main Content */}
        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>1. Acceptance of Terms</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">
                By accessing or using StayFinder's website, mobile application, or services, you agree to be bound by
                these Terms of Service and all applicable laws and regulations. If you do not agree with any of these
                terms, you are prohibited from using our services.
              </p>
              <p className="text-gray-700">
                These terms apply to all users of the service, including but not limited to guests, hosts, and visitors
                to our platform.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>2. Description of Service</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                StayFinder is an online platform that connects people who want to rent lodging (guests) with people who
                want to rent out their properties (hosts). We do not own, operate, manage or control any accommodations
                listed on our platform.
              </p>
              <div>
                <h4 className="font-semibold mb-2">Our Role</h4>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Provide a platform for hosts and guests to connect</li>
                  <li>Facilitate bookings and payments</li>
                  <li>Offer customer support services</li>
                  <li>Maintain safety and security measures</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>3. User Accounts</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Account Creation</h4>
                <p className="text-gray-700">
                  You must create an account to use certain features of our service. You are responsible for maintaining
                  the confidentiality of your account credentials.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Eligibility</h4>
                <p className="text-gray-700">
                  You must be at least 18 years old to create an account. By creating an account, you represent that you
                  meet this age requirement.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Account Responsibilities</h4>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Provide accurate and complete information</li>
                  <li>Keep your account information up to date</li>
                  <li>Maintain the security of your account</li>
                  <li>Notify us immediately of any unauthorized use</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>4. Booking and Payments</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Booking Process</h4>
                <p className="text-gray-700">
                  When you book a listing, you enter into a contract directly with the host. StayFinder facilitates this
                  transaction but is not a party to the agreement.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Payment Terms</h4>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Payment is due at the time of booking</li>
                  <li>We collect payment on behalf of hosts</li>
                  <li>Service fees are non-refundable except as required by law</li>
                  <li>Currency conversion fees may apply</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Cancellations and Refunds</h4>
                <p className="text-gray-700">
                  Cancellation policies are set by individual hosts. Refund eligibility depends on the specific
                  cancellation policy and timing of your cancellation.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>5. Host Responsibilities</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Listing Accuracy</h4>
                <p className="text-gray-700">
                  Hosts must provide accurate, complete, and up-to-date information about their listings, including
                  photos, descriptions, amenities, and availability.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Legal Compliance</h4>
                <p className="text-gray-700">
                  Hosts are responsible for complying with all applicable laws, regulations, and local ordinances
                  related to their listings and hosting activities.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Guest Safety</h4>
                <p className="text-gray-700">
                  Hosts must ensure their properties meet basic safety standards and disclose any potential hazards or
                  restrictions.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>6. Guest Responsibilities</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Property Care</h4>
                <p className="text-gray-700">
                  Guests must treat the host's property with care and respect, following all house rules and local
                  regulations.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Accurate Information</h4>
                <p className="text-gray-700">
                  Guests must provide accurate information about their identity and the purpose of their stay when
                  requested.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Communication</h4>
                <p className="text-gray-700">
                  Guests should communicate respectfully with hosts and respond promptly to reasonable requests for
                  information.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>7. Prohibited Activities</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">The following activities are strictly prohibited on our platform:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Providing false or misleading information</li>
                <li>Engaging in fraudulent or illegal activities</li>
                <li>Harassing, threatening, or discriminating against other users</li>
                <li>Violating intellectual property rights</li>
                <li>Attempting to circumvent our platform for bookings or payments</li>
                <li>Using the platform for commercial purposes without authorization</li>
                <li>Posting inappropriate content or spam</li>
                <li>Attempting to gain unauthorized access to our systems</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>8. Intellectual Property</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Our Content</h4>
                <p className="text-gray-700">
                  All content on our platform, including text, graphics, logos, and software, is owned by StayFinder or
                  our licensors and is protected by copyright and other intellectual property laws.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">User Content</h4>
                <p className="text-gray-700">
                  You retain ownership of content you post on our platform but grant us a license to use, display, and
                  distribute such content in connection with our services.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Respect for Rights</h4>
                <p className="text-gray-700">
                  You must respect the intellectual property rights of others and not post content that infringes on
                  copyrights, trademarks, or other proprietary rights.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>9. Limitation of Liability</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Service Disclaimer</h4>
                <p className="text-gray-700">
                  Our services are provided "as is" without warranties of any kind. We do not guarantee the accuracy,
                  completeness, or reliability of listings or user-generated content.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Limitation of Damages</h4>
                <p className="text-gray-700">
                  To the maximum extent permitted by law, StayFinder shall not be liable for any indirect, incidental,
                  special, or consequential damages arising from your use of our services.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Third-Party Actions</h4>
                <p className="text-gray-700">
                  We are not responsible for the actions or omissions of hosts, guests, or other third parties using our
                  platform.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>10. Dispute Resolution</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Resolution Process</h4>
                <p className="text-gray-700">
                  We encourage users to resolve disputes directly with each other. If that's not possible, you may
                  contact our customer support team for assistance.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Arbitration</h4>
                <p className="text-gray-700">
                  Any disputes that cannot be resolved through our support process may be subject to binding arbitration
                  as outlined in our separate arbitration agreement.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Governing Law</h4>
                <p className="text-gray-700">
                  These terms are governed by the laws of the State of California, without regard to conflict of law
                  principles.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>11. Termination</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Account Termination</h4>
                <p className="text-gray-700">
                  You may terminate your account at any time by contacting customer support. We may terminate or suspend
                  accounts that violate these terms.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Effect of Termination</h4>
                <p className="text-gray-700">
                  Upon termination, your right to use our services ceases immediately. Certain provisions of these terms
                  will survive termination.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>12. Changes to Terms</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">
                We may modify these terms from time to time. We will notify users of material changes by posting the
                updated terms on our website and, where appropriate, sending email notifications.
              </p>
              <p className="text-gray-700">
                Your continued use of our services after any changes constitutes acceptance of the new terms.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>13. Contact Information</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">
                If you have any questions about these Terms of Service, please contact us:
              </p>
              <div className="space-y-2 text-gray-700">
                <p>
                  <strong>Email:</strong> legal@stayfinder.com
                </p>
                <p>
                  <strong>Phone:</strong> 1-800-STAYFINDER
                </p>
                <p>
                  <strong>Mail:</strong> StayFinder Legal Team, 123 Market Street, San Francisco, CA 94105
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
