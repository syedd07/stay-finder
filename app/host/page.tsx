"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { DollarSign, Users, Shield, Star, ArrowRight, CheckCircle } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function BecomeHostPage() {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const benefits = [
    {
      icon: DollarSign,
      title: "Earn Extra Income",
      description: "Make money by sharing your space with travelers from around the world",
    },
    {
      icon: Users,
      title: "Meet New People",
      description: "Connect with guests from different cultures and backgrounds",
    },
    {
      icon: Shield,
      title: "Host Protection",
      description: "Comprehensive insurance coverage and 24/7 support for hosts",
    },
    {
      icon: Star,
      title: "Build Your Reputation",
      description: "Earn reviews and become a Superhost with great hospitality",
    },
  ]

  const steps = [
    {
      step: 1,
      title: "Tell us about your place",
      description: "Share some basic info, like where it is and how many guests can stay.",
    },
    {
      step: 2,
      title: "Make it stand out",
      description: "Add 5 or more photos plus a title and description—we'll help you out.",
    },
    {
      step: 3,
      title: "Finish and publish",
      description:
        "Choose if you'd like to start with an experienced guest, set a starting price, and publish your listing.",
    },
  ]

  const features = [
    "Free to list your space",
    "Set your own prices and availability",
    "Get paid 24 hours after check-in",
    "Host protection insurance included",
    "24/7 customer support",
    "Easy-to-use hosting tools",
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-rose-500 to-pink-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">Become a Host and start earning</h1>
              <p className="text-xl mb-8 opacity-90">
                Turn your extra space into extra income. Join millions of hosts on StayFinder and start your hosting
                journey today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/host/listings/new">
                  <Button size="lg" className="bg-white text-rose-600 hover:bg-gray-100">
                    Get Started
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-rose-600"
                >
                  Learn More
                </Button>
              </div>
            </div>
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Happy host with guests"
                width={600}
                height={400}
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why host on StayFinder?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Join our community of hosts and discover the benefits of sharing your space
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <Card key={index} className="text-center">
                  <CardContent className="p-6">
                    <div className="bg-rose-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-8 w-8 text-rose-600" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">It's easy to get started</h2>
            <p className="text-xl text-gray-600">Follow these simple steps to list your space</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-rose-500 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Everything you need to host successfully
              </h2>
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
                    <span className="text-lg text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1551836022-deb4988cc6c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                alt="Host dashboard"
                width={500}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Earnings Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">See how much you could earn</h2>
            <p className="text-xl text-gray-600 mb-8">
              Estimate your potential earnings based on your location and property type
            </p>
          </div>

          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle className="text-center">Earnings Calculator</CardTitle>
              <CardDescription className="text-center">
                Get an estimate of your potential monthly earnings
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-rose-600">$2,500</div>
                  <div className="text-sm text-gray-600">Average monthly</div>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-rose-600">15</div>
                  <div className="text-sm text-gray-600">Nights booked</div>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-rose-600">$167</div>
                  <div className="text-sm text-gray-600">Per night</div>
                </div>
              </div>
              <p className="text-sm text-gray-600 text-center">
                *Estimates based on similar listings in your area. Actual earnings may vary.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-rose-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to start hosting?</h2>
          <p className="text-xl mb-8 opacity-90">Join thousands of hosts who are already earning with StayFinder</p>
          <Link href="/host/listings/new">
            <Button size="lg" className="bg-white text-rose-600 hover:bg-gray-100">
              List Your Space
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
