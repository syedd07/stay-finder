"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { toast } from "@/hooks/use-toast"
import {
  ArrowLeft,
  ArrowRight,
  Home,
  MapPin,
  Camera,
  DollarSign,
  Users,
  Wifi,
  Car,
  Utensils,
  Tv,
  AirVent,
  Waves,
  Dumbbell,
  TreePine,
  Flame,
  Gamepad2,
  Coffee,
  Shirt,
  Shield,
} from "lucide-react"
import { createListing } from "@/lib/actions"

const propertyTypes = [
  { value: "house", label: "House", icon: Home },
  { value: "apartment", label: "Apartment", icon: Home },
  { value: "condo", label: "Condo", icon: Home },
  { value: "villa", label: "Villa", icon: Home },
  { value: "cabin", label: "Cabin", icon: TreePine },
  { value: "cottage", label: "Cottage", icon: Home },
  { value: "loft", label: "Loft", icon: Home },
  { value: "studio", label: "Studio", icon: Home },
]

const amenities = [
  { id: "wifi", label: "WiFi", icon: Wifi },
  { id: "parking", label: "Free Parking", icon: Car },
  { id: "kitchen", label: "Kitchen", icon: Utensils },
  { id: "tv", label: "TV", icon: Tv },
  { id: "ac", label: "Air Conditioning", icon: AirVent },
  { id: "pool", label: "Pool", icon: Waves },
  { id: "gym", label: "Gym", icon: Dumbbell },
  { id: "garden", label: "Garden", icon: TreePine },
  { id: "fireplace", label: "Fireplace", icon: Flame },
  { id: "games", label: "Games", icon: Gamepad2 },
  { id: "coffee", label: "Coffee Machine", icon: Coffee },
  { id: "washer", label: "Washer", icon: Shirt },
  { id: "security", label: "Security System", icon: Shield },
]

interface ListingFormData {
  title: string
  description: string
  type: string
  location: string
  address: string
  city: string
  state: string
  zipCode: string
  country: string
  price: number
  maxGuests: number
  bedrooms: number
  bathrooms: number
  amenities: string[]
  images: string[]
  houseRules: string
  checkInTime: string
  checkOutTime: string
  cancellationPolicy: string
}

export default function CreateListingPage() {
  const router = useRouter()
  const [currentStep, setCurrentStep] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState<ListingFormData>({
    title: "",
    description: "",
    type: "",
    location: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    country: "",
    price: 0,
    maxGuests: 1,
    bedrooms: 1,
    bathrooms: 1,
    amenities: [],
    images: [],
    houseRules: "",
    checkInTime: "15:00",
    checkOutTime: "11:00",
    cancellationPolicy: "moderate",
  })

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const totalSteps = 6
  const progress = (currentStep / totalSteps) * 100

  const handleInputChange = (field: keyof ListingFormData, value: any) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const handleAmenityToggle = (amenityId: string) => {
    setFormData((prev) => ({
      ...prev,
      amenities: prev.amenities.includes(amenityId)
        ? prev.amenities.filter((id) => id !== amenityId)
        : [...prev.amenities, amenityId],
    }))
  }

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep((prev) => prev + 1)
      window.scrollTo(0, 0)
    }
  }

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1)
      window.scrollTo(0, 0)
    }
  }

  const handleSubmit = async () => {
    setIsSubmitting(true)
    try {
      // Combine location fields
      const fullLocation = `${formData.city}, ${formData.state}, ${formData.country}`

      const listingData = {
        ...formData,
        location: fullLocation,
        images:
          formData.images.length > 0
            ? formData.images
            : [
                "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=1000&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1000&auto=format&fit=crop",
              ],
      }

      await createListing(listingData)

      toast({
        title: "Success!",
        description: "Your listing has been created successfully.",
      })

      router.push("/host/dashboard")
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to create listing. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Home className="h-5 w-5" />
                Property Type & Basic Info
              </CardTitle>
              <CardDescription>Tell us about your property and what makes it special</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <Label htmlFor="title">Property Title *</Label>
                <Input
                  id="title"
                  placeholder="e.g., Cozy Mountain Cabin with Stunning Views"
                  value={formData.title}
                  onChange={(e) => handleInputChange("title", e.target.value)}
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="description">Description *</Label>
                <Textarea
                  id="description"
                  placeholder="Describe your property, its unique features, and what guests can expect..."
                  value={formData.description}
                  onChange={(e) => handleInputChange("description", e.target.value)}
                  rows={4}
                  className="mt-1"
                />
              </div>

              <div>
                <Label>Property Type *</Label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-2">
                  {propertyTypes.map((type) => {
                    const Icon = type.icon
                    return (
                      <div
                        key={type.value}
                        className={`p-4 border rounded-lg cursor-pointer transition-colors ${
                          formData.type === type.value
                            ? "border-rose-500 bg-rose-50"
                            : "border-gray-200 hover:border-gray-300"
                        }`}
                        onClick={() => handleInputChange("type", type.value)}
                      >
                        <Icon className="h-6 w-6 mx-auto mb-2" />
                        <p className="text-sm text-center font-medium">{type.label}</p>
                      </div>
                    )
                  })}
                </div>
              </div>
            </CardContent>
          </Card>
        )

      case 2:
        return (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="h-5 w-5" />
                Location Details
              </CardTitle>
              <CardDescription>Help guests find your property with accurate location information</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="address">Street Address *</Label>
                <Input
                  id="address"
                  placeholder="123 Main Street"
                  value={formData.address}
                  onChange={(e) => handleInputChange("address", e.target.value)}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="city">City *</Label>
                  <Input
                    id="city"
                    placeholder="San Francisco"
                    value={formData.city}
                    onChange={(e) => handleInputChange("city", e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="state">State/Province *</Label>
                  <Input
                    id="state"
                    placeholder="California"
                    value={formData.state}
                    onChange={(e) => handleInputChange("state", e.target.value)}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="zipCode">ZIP/Postal Code</Label>
                  <Input
                    id="zipCode"
                    placeholder="94102"
                    value={formData.zipCode}
                    onChange={(e) => handleInputChange("zipCode", e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="country">Country *</Label>
                  <Select value={formData.country} onValueChange={(value) => handleInputChange("country", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select country" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="US">United States</SelectItem>
                      <SelectItem value="CA">Canada</SelectItem>
                      <SelectItem value="UK">United Kingdom</SelectItem>
                      <SelectItem value="AU">Australia</SelectItem>
                      <SelectItem value="DE">Germany</SelectItem>
                      <SelectItem value="FR">France</SelectItem>
                      <SelectItem value="IT">Italy</SelectItem>
                      <SelectItem value="ES">Spain</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>
        )

      case 3:
        return (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                Property Details
              </CardTitle>
              <CardDescription>Specify the capacity and layout of your property</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <Label htmlFor="maxGuests">Maximum Guests *</Label>
                  <Select
                    value={formData.maxGuests.toString()}
                    onValueChange={(value) => handleInputChange("maxGuests", Number.parseInt(value))}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 14, 16].map((num) => (
                        <SelectItem key={num} value={num.toString()}>
                          {num} guest{num > 1 ? "s" : ""}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="bedrooms">Bedrooms *</Label>
                  <Select
                    value={formData.bedrooms.toString()}
                    onValueChange={(value) => handleInputChange("bedrooms", Number.parseInt(value))}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                        <SelectItem key={num} value={num.toString()}>
                          {num} bedroom{num !== 1 ? "s" : ""}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="bathrooms">Bathrooms *</Label>
                  <Select
                    value={formData.bathrooms.toString()}
                    onValueChange={(value) => handleInputChange("bathrooms", Number.parseInt(value))}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {[0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5].map((num) => (
                        <SelectItem key={num} value={num.toString()}>
                          {num} bathroom{num !== 1 ? "s" : ""}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <Label htmlFor="price">Price per Night (USD) *</Label>
                <div className="relative mt-1">
                  <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    id="price"
                    type="number"
                    placeholder="150"
                    value={formData.price || ""}
                    onChange={(e) => handleInputChange("price", Number.parseInt(e.target.value) || 0)}
                    className="pl-10"
                  />
                </div>
                <p className="text-sm text-gray-500 mt-1">Set a competitive price for your area</p>
              </div>
            </CardContent>
          </Card>
        )

      case 4:
        return (
          <Card>
            <CardHeader>
              <CardTitle>Amenities & Features</CardTitle>
              <CardDescription>Select all amenities available at your property</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {amenities.map((amenity) => {
                  const Icon = amenity.icon
                  const isSelected = formData.amenities.includes(amenity.id)
                  return (
                    <div
                      key={amenity.id}
                      className={`p-4 border rounded-lg cursor-pointer transition-colors ${
                        isSelected ? "border-rose-500 bg-rose-50" : "border-gray-200 hover:border-gray-300"
                      }`}
                      onClick={() => handleAmenityToggle(amenity.id)}
                    >
                      <Icon className="h-6 w-6 mx-auto mb-2" />
                      <p className="text-sm text-center font-medium">{amenity.label}</p>
                    </div>
                  )
                })}
              </div>

              {formData.amenities.length > 0 && (
                <div className="mt-6">
                  <Label>Selected Amenities:</Label>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {formData.amenities.map((amenityId) => {
                      const amenity = amenities.find((a) => a.id === amenityId)
                      return amenity ? (
                        <Badge key={amenityId} variant="secondary">
                          {amenity.label}
                        </Badge>
                      ) : null
                    })}
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        )

      case 5:
        return (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Camera className="h-5 w-5" />
                Photos & Images
              </CardTitle>
              <CardDescription>Add photos to showcase your property (we'll use sample images for now)</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                <Camera className="h-12 w-12 mx-auto text-gray-400 mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">Add Photos</h3>
                <p className="text-gray-500 mb-4">
                  Upload high-quality photos of your property. The first photo will be your main listing image.
                </p>
                <Button variant="outline" disabled>
                  <Camera className="mr-2 h-4 w-4" />
                  Upload Photos (Coming Soon)
                </Button>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <p className="text-blue-800 text-sm">
                  <strong>Photo Tips:</strong> Include photos of bedrooms, bathrooms, kitchen, living areas, and any
                  special features. Natural lighting works best, and make sure spaces are clean and well-organized.
                </p>
              </div>
            </CardContent>
          </Card>
        )

      case 6:
        return (
          <Card>
            <CardHeader>
              <CardTitle>House Rules & Policies</CardTitle>
              <CardDescription>Set clear expectations for your guests</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <Label htmlFor="houseRules">House Rules</Label>
                <Textarea
                  id="houseRules"
                  placeholder="e.g., No smoking, No pets, Quiet hours after 10 PM..."
                  value={formData.houseRules}
                  onChange={(e) => handleInputChange("houseRules", e.target.value)}
                  rows={4}
                  className="mt-1"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="checkInTime">Check-in Time</Label>
                  <Select
                    value={formData.checkInTime}
                    onValueChange={(value) => handleInputChange("checkInTime", value)}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="12:00">12:00 PM</SelectItem>
                      <SelectItem value="13:00">1:00 PM</SelectItem>
                      <SelectItem value="14:00">2:00 PM</SelectItem>
                      <SelectItem value="15:00">3:00 PM</SelectItem>
                      <SelectItem value="16:00">4:00 PM</SelectItem>
                      <SelectItem value="17:00">5:00 PM</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="checkOutTime">Check-out Time</Label>
                  <Select
                    value={formData.checkOutTime}
                    onValueChange={(value) => handleInputChange("checkOutTime", value)}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="09:00">9:00 AM</SelectItem>
                      <SelectItem value="10:00">10:00 AM</SelectItem>
                      <SelectItem value="11:00">11:00 AM</SelectItem>
                      <SelectItem value="12:00">12:00 PM</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <Label htmlFor="cancellationPolicy">Cancellation Policy</Label>
                <Select
                  value={formData.cancellationPolicy}
                  onValueChange={(value) => handleInputChange("cancellationPolicy", value)}
                >
                  <SelectTrigger className="mt-1">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="flexible">Flexible - Full refund 1 day prior to arrival</SelectItem>
                    <SelectItem value="moderate">Moderate - Full refund 5 days prior to arrival</SelectItem>
                    <SelectItem value="strict">Strict - 50% refund up until 1 week prior to arrival</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>
        )

      default:
        return null
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="mb-8">
          <Button variant="ghost" onClick={() => router.back()} className="mb-4">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back
          </Button>

          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Create Your Listing</h1>
            <p className="text-gray-600">
              Step {currentStep} of {totalSteps}
            </p>
          </div>

          {/* Progress Bar */}
          <div className="mt-6">
            <Progress value={progress} className="h-2" />
          </div>
        </div>

        {/* Form Content */}
        <div className="mb-8">{renderStep()}</div>

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <Button variant="outline" onClick={handlePrevious} disabled={currentStep === 1}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Previous
          </Button>

          {currentStep < totalSteps ? (
            <Button
              onClick={handleNext}
              disabled={
                (currentStep === 1 && (!formData.title || !formData.description || !formData.type)) ||
                (currentStep === 2 && (!formData.address || !formData.city || !formData.state || !formData.country)) ||
                (currentStep === 3 &&
                  (!formData.maxGuests || !formData.bedrooms || !formData.bathrooms || !formData.price))
              }
            >
              Next
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          ) : (
            <Button onClick={handleSubmit} disabled={isSubmitting} className="bg-rose-500 hover:bg-rose-600">
              {isSubmitting ? "Creating..." : "Create Listing"}
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}
