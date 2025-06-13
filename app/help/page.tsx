"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Search, MessageCircle, Phone, Mail, Book, Users, Home, CreditCard, Shield, HelpCircle } from "lucide-react"
import Link from "next/link"
import { useEffect } from "react"

export default function HelpCenterPage() {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const categories = [
    {
      icon: Book,
      title: "Getting Started",
      description: "Learn the basics of using StayFinder",
      articles: 12,
    },
    {
      icon: Users,
      title: "For Guests",
      description: "Booking, payments, and travel tips",
      articles: 18,
    },
    {
      icon: Home,
      title: "For Hosts",
      description: "Listing, hosting, and earning guides",
      articles: 24,
    },
    {
      icon: CreditCard,
      title: "Payments & Pricing",
      description: "Billing, refunds, and pricing help",
      articles: 15,
    },
    {
      icon: Shield,
      title: "Trust & Safety",
      description: "Security, verification, and policies",
      articles: 10,
    },
    {
      icon: HelpCircle,
      title: "Account & Profile",
      description: "Settings, verification, and privacy",
      articles: 8,
    },
  ]

  const popularArticles = [
    "How do I cancel my reservation?",
    "What is the cancellation policy?",
    "How do I contact my host?",
    "When will I be charged for my reservation?",
    "How do I leave a review?",
    "What if I need to change my reservation?",
    "How do I report a problem with my stay?",
    "What is Superhost status?",
  ]

  const faqs = [
    {
      question: "How do I make a reservation?",
      answer:
        "To make a reservation, search for your destination, select your dates and number of guests, then choose a listing. Click 'Reserve' and follow the booking process to complete your reservation.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept all major credit cards (Visa, Mastercard, American Express), PayPal, Apple Pay, and Google Pay. Payment is processed securely through our platform.",
    },
    {
      question: "Can I cancel my reservation?",
      answer:
        "Yes, you can cancel your reservation. The refund amount depends on the host's cancellation policy and when you cancel. Check your reservation details for specific cancellation terms.",
    },
    {
      question: "How do I contact customer support?",
      answer:
        "You can contact our customer support team 24/7 through live chat, phone, or email. Visit our Contact Us page for all available options.",
    },
    {
      question: "What if there's an issue with my stay?",
      answer:
        "If you encounter any issues during your stay, contact your host first. If the issue isn't resolved, you can contact our customer support team for assistance.",
    },
    {
      question: "How do I become a Superhost?",
      answer:
        "To become a Superhost, you need to maintain a 4.8+ overall rating, 90%+ response rate, less than 1% cancellation rate, and complete at least 10 stays in the past year.",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-white border-b">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center max-w-2xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">How can we help you?</h1>
            <p className="text-xl text-gray-600 mb-8">Find answers to your questions and get the support you need</p>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input placeholder="Search for help articles..." className="pl-10 pr-4 py-3 text-lg" />
              <Button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-rose-500 hover:bg-rose-600">
                Search
              </Button>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Quick Help Options */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Get help quickly</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="p-6 text-center">
                <MessageCircle className="h-12 w-12 text-rose-500 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Live Chat</h3>
                <p className="text-gray-600 mb-4">Chat with our support team in real-time</p>
                <Badge className="bg-green-100 text-green-800">Available 24/7</Badge>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="p-6 text-center">
                <Phone className="h-12 w-12 text-rose-500 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Call Us</h3>
                <p className="text-gray-600 mb-4">Speak directly with a support agent</p>
                <Badge className="bg-blue-100 text-blue-800">1-800-STAYFINDER</Badge>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="p-6 text-center">
                <Mail className="h-12 w-12 text-rose-500 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Email Support</h3>
                <p className="text-gray-600 mb-4">Send us a detailed message</p>
                <Badge className="bg-purple-100 text-purple-800">Response in 24h</Badge>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Help Categories */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Browse by category</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category, index) => {
              const Icon = category.icon
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <div className="bg-rose-100 p-2 rounded-lg">
                        <Icon className="h-6 w-6 text-rose-600" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">{category.title}</CardTitle>
                        <CardDescription>{category.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">{category.articles} articles</span>
                      <Button variant="ghost" size="sm">
                        View all →
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Popular Articles */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Popular articles</h2>
            <Card>
              <CardContent className="p-6">
                <div className="space-y-4">
                  {popularArticles.map((article, index) => (
                    <div key={index} className="flex items-center justify-between py-2 border-b last:border-b-0">
                      <Link href="#" className="text-gray-700 hover:text-rose-600 transition-colors">
                        {article}
                      </Link>
                      <Button variant="ghost" size="sm">
                        →
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </section>

          {/* FAQs */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently asked questions</h2>
            <Card>
              <CardContent className="p-6">
                <Accordion type="single" collapsible className="w-full">
                  {faqs.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                      <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                      <AccordionContent className="text-gray-600">{faq.answer}</AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          </section>
        </div>

        {/* Contact Section */}
        <section className="mt-12 text-center">
          <Card className="bg-rose-50 border-rose-200">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Still need help?</h3>
              <p className="text-gray-600 mb-6">
                Can't find what you're looking for? Our support team is here to help you 24/7.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button className="bg-rose-500 hover:bg-rose-600">Contact Support</Button>
                </Link>
                <Button variant="outline">Community Forum</Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  )
}
