"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Shield, CheckCircle, AlertTriangle, Users, Home, CreditCard, Phone, Eye } from "lucide-react"
import Link from "next/link"
import { useEffect } from "react"

export default function SafetyPage() {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const safetyFeatures = [
    {
      icon: Shield,
      title: "Verified Profiles",
      description:
        "All users go through identity verification to ensure authentic profiles and build trust in our community.",
    },
    {
      icon: Home,
      title: "Property Screening",
      description: "We review all listings to ensure they meet our quality and safety standards before they go live.",
    },
    {
      icon: CreditCard,
      title: "Secure Payments",
      description: "All payments are processed securely through our platform with fraud protection and encryption.",
    },
    {
      icon: Phone,
      title: "24/7 Support",
      description: "Our safety team is available around the clock to help with any concerns or emergencies.",
    },
    {
      icon: Eye,
      title: "Background Checks",
      description:
        "We conduct background checks on hosts and can provide additional screening for guests upon request.",
    },
    {
      icon: Users,
      title: "Community Standards",
      description: "Clear community guidelines and policies that all users must follow to maintain a safe environment.",
    },
  ]

  const guestSafetyTips = [
    "Research your destination and accommodation thoroughly before booking",
    "Read reviews from previous guests to understand the property and host",
    "Communicate with your host before arrival to establish expectations",
    "Share your travel plans with friends or family members",
    "Check that smoke detectors and safety equipment are present and working",
    "Keep important documents and emergency contacts easily accessible",
    "Trust your instincts - if something doesn't feel right, contact support",
    "Report any safety concerns immediately to our support team",
  ]

  const hostSafetyTips = [
    "Verify guest identities through our verification system",
    "Install and maintain smoke and carbon monoxide detectors",
    "Provide clear house rules and safety information to guests",
    "Keep emergency contact information readily available",
    "Ensure all locks and security features are working properly",
    "Consider security cameras in common areas (with proper disclosure)",
    "Have a first aid kit and emergency supplies available",
    "Report any concerning guest behavior to our support team",
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-white border-b">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center max-w-3xl mx-auto">
            <div className="bg-rose-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Shield className="h-10 w-10 text-rose-600" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Your Safety is Our Priority</h1>
            <p className="text-xl text-gray-600">
              We're committed to creating a safe and secure environment for all members of the StayFinder community.
              Learn about our safety features and best practices.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Safety Features */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How we keep you safe</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our comprehensive safety measures are designed to protect both guests and hosts throughout their
              StayFinder experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {safetyFeatures.map((feature, index) => {
              const Icon = feature.icon
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="bg-rose-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="h-6 w-6 text-rose-600" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </section>

        {/* Trust & Safety Standards */}
        <section className="mb-16">
          <Card className="bg-blue-50 border-blue-200">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-blue-900">Trust & Safety Standards</CardTitle>
              <CardDescription className="text-blue-700">
                Our commitment to maintaining the highest safety standards
              </CardDescription>
            </CardHeader>
            <CardContent className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                  <CheckCircle className="h-8 w-8 text-blue-600" />
                </div>
                <h4 className="font-semibold text-blue-900 mb-1">99.9%</h4>
                <p className="text-sm text-blue-700">Positive experiences</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Shield className="h-8 w-8 text-blue-600" />
                </div>
                <h4 className="font-semibold text-blue-900 mb-1">24/7</h4>
                <p className="text-sm text-blue-700">Safety support</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Users className="h-8 w-8 text-blue-600" />
                </div>
                <h4 className="font-semibold text-blue-900 mb-1">5M+</h4>
                <p className="text-sm text-blue-700">Verified users</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Home className="h-8 w-8 text-blue-600" />
                </div>
                <h4 className="font-semibold text-blue-900 mb-1">100%</h4>
                <p className="text-sm text-blue-700">Screened listings</p>
              </div>
            </CardContent>
          </Card>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Guest Safety */}
          <section>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-rose-600" />
                  Safety Tips for Guests
                </CardTitle>
                <CardDescription>Best practices to ensure a safe and enjoyable stay</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {guestSafetyTips.map((tip, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <p className="text-gray-700">{tip}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Host Safety */}
          <section>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Home className="h-5 w-5 text-rose-600" />
                  Safety Tips for Hosts
                </CardTitle>
                <CardDescription>Guidelines to protect your property and ensure guest safety</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {hostSafetyTips.map((tip, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <p className="text-gray-700">{tip}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </section>
        </div>

        {/* Emergency Support */}
        <section className="mt-16">
          <Card className="bg-red-50 border-red-200">
            <CardHeader className="text-center">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <AlertTriangle className="h-8 w-8 text-red-600" />
              </div>
              <CardTitle className="text-2xl text-red-900">Emergency Support</CardTitle>
              <CardDescription className="text-red-700">
                If you're experiencing a safety emergency, we're here to help immediately
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-semibold text-red-900 mb-2">Immediate Danger</h4>
                  <p className="text-red-700 mb-2">Call local emergency services first</p>
                  <Badge className="bg-red-600 text-white">911 (US) / 999 (UK) / 112 (EU)</Badge>
                </div>
                <div>
                  <h4 className="font-semibold text-red-900 mb-2">Safety Concerns</h4>
                  <p className="text-red-700 mb-2">Contact our 24/7 safety line</p>
                  <Badge className="bg-red-600 text-white">1-800-EMERGENCY</Badge>
                </div>
                <div>
                  <h4 className="font-semibold text-red-900 mb-2">Non-Emergency Issues</h4>
                  <p className="text-red-700 mb-2">Use our in-app support or call</p>
                  <Badge className="bg-red-600 text-white">1-800-STAYFINDER</Badge>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button className="bg-red-600 hover:bg-red-700">Contact Safety Team</Button>
                </Link>
                <Link href="/help">
                  <Button variant="outline" className="border-red-300 text-red-700 hover:bg-red-50">
                    View Help Center
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Additional Resources */}
        <section className="mt-16">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Additional Safety Resources</h2>
            <p className="text-gray-600">Learn more about staying safe while traveling</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="p-6 text-center">
                <h3 className="font-semibold mb-2">Travel Safety Guide</h3>
                <p className="text-gray-600 mb-4">Comprehensive guide to safe travel practices</p>
                <Button variant="outline" size="sm">
                  Read Guide
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="p-6 text-center">
                <h3 className="font-semibold mb-2">Community Guidelines</h3>
                <p className="text-gray-600 mb-4">Learn about our community standards and policies</p>
                <Button variant="outline" size="sm">
                  View Guidelines
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="p-6 text-center">
                <h3 className="font-semibold mb-2">Insurance Information</h3>
                <p className="text-gray-600 mb-4">Understand your coverage and protection options</p>
                <Button variant="outline" size="sm">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  )
}
