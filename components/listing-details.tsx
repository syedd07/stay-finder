"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { MapPin, Users, Bed, Bath, Wifi, Car, Coffee, Tv, Wind, Waves, Star, Share, Heart } from "lucide-react"
import type { Listing } from "@/lib/types"

interface ListingDetailsProps {
  listing: Listing
}

const amenityIcons = {
  wifi: Wifi,
  parking: Car,
  kitchen: Coffee,
  tv: Tv,
  ac: Wind,
  pool: Waves,
}

const listingImages = [
  "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
  "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
  "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
  "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
]

export function ListingDetails({ listing }: ListingDetailsProps) {
  const [showAllPhotos, setShowAllPhotos] = useState(false)
  const [isFavorited, setIsFavorited] = useState(false)

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">{listing.title}</h1>
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div className="flex items-center gap-4 text-sm">
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <span className="font-medium">{listing.rating}</span>
              <span className="text-gray-600">({listing.reviewCount} reviews)</span>
            </div>
            <div className="flex items-center gap-1 text-gray-600">
              <MapPin className="h-4 w-4" />
              <span>{listing.location}</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm">
              <Share className="h-4 w-4 mr-2" />
              Share
            </Button>
            <Button variant="ghost" size="sm" onClick={() => setIsFavorited(!isFavorited)}>
              <Heart className={`h-4 w-4 mr-2 ${isFavorited ? "fill-rose-500 text-rose-500" : ""}`} />
              Save
            </Button>
          </div>
        </div>
      </div>

      {/* Photo Gallery */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-2 rounded-xl overflow-hidden">
        <div className="md:col-span-2 md:row-span-2">
          <Image
            src={listingImages[0] || "/placeholder.svg"}
            alt={listing.title}
            width={600}
            height={400}
            className="w-full h-full object-cover"
          />
        </div>
        {listingImages.slice(1, 5).map((image, index) => (
          <div key={index} className="aspect-square">
            <Image
              src={image || "/placeholder.svg"}
              alt={`${listing.title} ${index + 2}`}
              width={200}
              height={200}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
        {listingImages.length > 5 && (
          <Button variant="outline" className="absolute bottom-4 right-4" onClick={() => setShowAllPhotos(true)}>
            Show all photos
          </Button>
        )}
      </div>

      {/* Host Info */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold mb-2">Hosted by {listing.host.name}</h2>
          <div className="flex items-center gap-4 text-gray-600">
            <span className="flex items-center gap-1">
              <Users className="h-4 w-4" />
              {listing.maxGuests} guests
            </span>
            <span className="flex items-center gap-1">
              <Bed className="h-4 w-4" />
              {listing.bedrooms} bedrooms
            </span>
            <span className="flex items-center gap-1">
              <Bath className="h-4 w-4" />
              {listing.bathrooms} bathrooms
            </span>
          </div>
        </div>
        <Avatar className="h-12 w-12">
          <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" />
          <AvatarFallback>{listing.host.name.charAt(0)}</AvatarFallback>
        </Avatar>
      </div>

      <Separator />

      {/* Description */}
      <div>
        <h3 className="text-lg font-semibold mb-3">About this place</h3>
        <p className="text-gray-700 leading-relaxed">{listing.description}</p>
      </div>

      <Separator />

      {/* Amenities */}
      <div>
        <h3 className="text-lg font-semibold mb-4">What this place offers</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {listing.amenities.map((amenity) => {
            const Icon = amenityIcons[amenity as keyof typeof amenityIcons] || Wifi
            return (
              <div key={amenity} className="flex items-center gap-3">
                <Icon className="h-5 w-5 text-gray-600" />
                <span className="capitalize">{amenity.replace("_", " ")}</span>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
