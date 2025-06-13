"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Eye, Lock, Users } from "lucide-react"
import { useEffect } from "react"

export default function PrivacyPage() {
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
            <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Shield className="h-10 w-10 text-blue-600" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
            <p className="text-xl text-gray-600">
              Your privacy is important to us. This policy explains how we collect, use, and protect your personal
              information.
            </p>
            <p className="text-sm text-gray-500 mt-4">Last updated: January 15, 2024</p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Quick Overview */}
        <section className="mb-12">
          <Card className="bg-blue-50 border-blue-200">
            <CardHeader>
              <CardTitle className="text-blue-900">Privacy at a Glance</CardTitle>
              <CardDescription className="text-blue-700">
                Here's what you need to know about how we handle your data
              </CardDescription>
            </CardHeader>
            <CardContent className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <Eye className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                <h4 className="font-semibold text-blue-900 mb-1">Transparency</h4>
                <p className="text-sm text-blue-700">We're clear about what data we collect and why</p>
              </div>
              <div className="text-center">
                <Lock className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                <h4 className="font-semibold text-blue-900 mb-1">Security</h4>
                <p className="text-sm text-blue-700">Your data is encrypted and securely stored</p>
              </div>
              <div className="text-center">
                <Users className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                <h4 className="font-semibold text-blue-900 mb-1">Control</h4>
                <p className="text-sm text-blue-700">You control your data and privacy settings</p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Main Content */}
        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>1. Information We Collect</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Account Information</h4>
                <p className="text-gray-700">
                  When you create an account, we collect your name, email address, phone number, and profile photo.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Booking Information</h4>
                <p className="text-gray-700">
                  We collect details about your bookings, including dates, locations, guest information, and payment
                  details.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Usage Data</h4>
                <p className="text-gray-700">
                  We collect information about how you use our platform, including pages visited, features used, and
                  interaction patterns.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Device Information</h4>
                <p className="text-gray-700">
                  We collect device identifiers, browser type, operating system, and IP address for security and
                  optimization purposes.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>2. How We Use Your Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Service Provision</h4>
                <p className="text-gray-700">
                  We use your information to provide our booking services, process payments, and facilitate
                  communication between hosts and guests.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Safety and Security</h4>
                <p className="text-gray-700">
                  We use your data to verify identities, prevent fraud, and ensure the safety of our community.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Personalization</h4>
                <p className="text-gray-700">
                  We personalize your experience by showing relevant listings and recommendations based on your
                  preferences and history.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Communication</h4>
                <p className="text-gray-700">
                  We send you booking confirmations, updates, and promotional messages (which you can opt out of).
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>3. Information Sharing</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">With Hosts and Guests</h4>
                <p className="text-gray-700">
                  We share necessary booking information between hosts and guests to facilitate stays.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Service Providers</h4>
                <p className="text-gray-700">
                  We work with trusted third-party providers for payment processing, customer support, and other
                  services.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Legal Requirements</h4>
                <p className="text-gray-700">
                  We may share information when required by law or to protect our rights and the safety of our users.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Business Transfers</h4>
                <p className="text-gray-700">
                  In the event of a merger or acquisition, user information may be transferred as part of the business
                  assets.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>4. Data Security</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Encryption</h4>
                <p className="text-gray-700">
                  All sensitive data is encrypted in transit and at rest using industry-standard encryption protocols.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Access Controls</h4>
                <p className="text-gray-700">
                  We limit access to personal information to employees who need it to perform their job functions.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Regular Audits</h4>
                <p className="text-gray-700">
                  We conduct regular security audits and assessments to identify and address potential vulnerabilities.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Incident Response</h4>
                <p className="text-gray-700">
                  We have procedures in place to respond quickly to any security incidents and notify affected users
                  when required.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>5. Your Rights and Choices</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Access and Correction</h4>
                <p className="text-gray-700">
                  You can access and update your personal information through your account settings at any time.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Data Deletion</h4>
                <p className="text-gray-700">
                  You can request deletion of your account and personal data, subject to legal and business
                  requirements.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Marketing Preferences</h4>
                <p className="text-gray-700">
                  You can opt out of promotional emails and adjust your communication preferences in your account
                  settings.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Data Portability</h4>
                <p className="text-gray-700">
                  You can request a copy of your personal data in a machine-readable format.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>6. Cookies and Tracking</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Essential Cookies</h4>
                <p className="text-gray-700">
                  We use cookies that are necessary for the website to function properly, such as authentication and
                  security cookies.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Analytics Cookies</h4>
                <p className="text-gray-700">
                  We use analytics cookies to understand how users interact with our platform and improve our services.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Advertising Cookies</h4>
                <p className="text-gray-700">
                  We may use advertising cookies to show you relevant ads on other websites and measure ad
                  effectiveness.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Cookie Management</h4>
                <p className="text-gray-700">
                  You can manage your cookie preferences through your browser settings or our cookie preference center.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>7. International Data Transfers</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">
                StayFinder operates globally, and your information may be transferred to and processed in countries
                other than your own. We ensure appropriate safeguards are in place to protect your data during
                international transfers.
              </p>
              <p className="text-gray-700">
                For users in the European Union, we comply with GDPR requirements and use approved transfer mechanisms
                such as Standard Contractual Clauses when transferring data outside the EU.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>8. Children's Privacy</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">
                Our services are not intended for children under 18 years of age. We do not knowingly collect personal
                information from children under 18. If we become aware that we have collected personal information from
                a child under 18, we will take steps to delete such information.
              </p>
              <p className="text-gray-700">
                If you are a parent or guardian and believe your child has provided us with personal information, please
                contact us immediately.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>9. Changes to This Policy</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">
                We may update this privacy policy from time to time to reflect changes in our practices or applicable
                laws. We will notify you of any material changes by posting the updated policy on our website and, where
                appropriate, sending you an email notification.
              </p>
              <p className="text-gray-700">
                Your continued use of our services after any changes indicates your acceptance of the updated privacy
                policy.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>10. Contact Us</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">
                If you have any questions about this privacy policy or our data practices, please contact us:
              </p>
              <div className="space-y-2 text-gray-700">
                <p>
                  <strong>Email:</strong> privacy@stayfinder.com
                </p>
                <p>
                  <strong>Phone:</strong> 1-800-STAYFINDER
                </p>
                <p>
                  <strong>Mail:</strong> StayFinder Privacy Team, 123 Market Street, San Francisco, CA 94105
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
