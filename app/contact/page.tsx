"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { MapPin, Phone, Mail, Clock, MessageCircle, Send } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export default function ContactPage() {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const { toast } = useToast()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    category: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))

    toast({
      title: "Message sent!",
      description: "We'll get back to you within 24 hours.",
    })

    setFormData({
      name: "",
      email: "",
      subject: "",
      category: "",
      message: "",
    })
    setIsSubmitting(false)
  }

  const contactMethods = [
    {
      icon: MessageCircle,
      title: "Live Chat",
      description: "Chat with our support team",
      detail: "Available 24/7",
      badge: "Fastest Response",
      badgeColor: "bg-green-100 text-green-800",
    },
    {
      icon: Phone,
      title: "Phone Support",
      description: "Call us directly",
      detail: "1-800-STAYFINDER",
      badge: "Mon-Sun 6AM-12AM",
      badgeColor: "bg-blue-100 text-blue-800",
    },
    {
      icon: Mail,
      title: "Email Support",
      description: "Send us a detailed message",
      detail: "support@stayfinder.com",
      badge: "Response in 24h",
      badgeColor: "bg-purple-100 text-purple-800",
    },
  ]

  const offices = [
    {
      city: "San Francisco",
      address: "123 Market Street, Suite 400",
      zipcode: "San Francisco, CA 94105",
      phone: "+1 (415) 555-0123",
    },
    {
      city: "New York",
      address: "456 Broadway, Floor 12",
      zipcode: "New York, NY 10013",
      phone: "+1 (212) 555-0456",
    },
    {
      city: "London",
      address: "789 Oxford Street",
      zipcode: "London W1C 1JN, UK",
      phone: "+44 20 7946 0789",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-white border-b">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center max-w-2xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
            <p className="text-xl text-gray-600">
              We're here to help! Get in touch with our support team for any questions or assistance.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Contact Methods */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Choose how you'd like to reach us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {contactMethods.map((method, index) => {
              const Icon = method.icon
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
                  <CardContent className="p-6 text-center">
                    <div className="bg-rose-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-8 w-8 text-rose-600" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{method.title}</h3>
                    <p className="text-gray-600 mb-2">{method.description}</p>
                    <p className="font-medium text-gray-900 mb-3">{method.detail}</p>
                    <Badge className={method.badgeColor}>{method.badge}</Badge>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <section>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Send className="h-5 w-5" />
                  Send us a message
                </CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="category">Category</Label>
                    <Select
                      value={formData.category}
                      onValueChange={(value) => setFormData({ ...formData, category: value })}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select a category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="booking">Booking Issue</SelectItem>
                        <SelectItem value="payment">Payment Problem</SelectItem>
                        <SelectItem value="host">Host Support</SelectItem>
                        <SelectItem value="guest">Guest Support</SelectItem>
                        <SelectItem value="technical">Technical Issue</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      rows={6}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please describe your issue or question in detail..."
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full bg-rose-500 hover:bg-rose-600" disabled={isSubmitting}>
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </section>

          {/* Office Locations & Info */}
          <section className="space-y-6">
            {/* Office Hours */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  Support Hours
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="font-medium">Live Chat</span>
                    <span className="text-gray-600">24/7</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Phone Support</span>
                    <span className="text-gray-600">6:00 AM - 12:00 AM (PST)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Email Support</span>
                    <span className="text-gray-600">24/7 (Response within 24h)</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Office Locations */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5" />
                  Our Offices
                </CardTitle>
                <CardDescription>Visit us at one of our global locations</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {offices.map((office, index) => (
                    <div key={index} className="border-b last:border-b-0 pb-4 last:pb-0">
                      <h4 className="font-semibold text-gray-900 mb-1">{office.city}</h4>
                      <p className="text-gray-600 text-sm mb-1">{office.address}</p>
                      <p className="text-gray-600 text-sm mb-1">{office.zipcode}</p>
                      <p className="text-gray-600 text-sm">{office.phone}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Emergency Contact */}
            <Card className="bg-red-50 border-red-200">
              <CardHeader>
                <CardTitle className="text-red-800">Emergency Support</CardTitle>
                <CardDescription className="text-red-700">For urgent safety issues during your stay</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p className="font-semibold text-red-800">24/7 Emergency Hotline</p>
                  <p className="text-red-700">1-800-EMERGENCY</p>
                  <p className="text-sm text-red-600">
                    For immediate safety concerns, property damage, or urgent travel disruptions
                  </p>
                </div>
              </CardContent>
            </Card>
          </section>
        </div>
      </div>
    </div>
  )
}
