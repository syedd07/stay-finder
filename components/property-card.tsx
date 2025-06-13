"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Heart, Star, MapPin } from "lucide-react"
import type { Listing } from "@/lib/types"

interface PropertyCardProps {
  listing: Listing
}

const propertyImages = [
  "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
]

export function PropertyCard({ listing }: PropertyCardProps) {
  const [isFavorited, setIsFavorited] = useState(false)

  // Use a consistent image based on listing ID
  const imageIndex = Number.parseInt(listing.id.slice(-1), 16) % propertyImages.length
  const imageUrl = propertyImages[imageIndex]

  return (
    <Card className="group overflow-hidden border-0 shadow-sm hover:shadow-lg transition-shadow">
      <div className="relative aspect-square overflow-hidden">
        {/* Make the entire image clickable */}
        <Link href={`/listings/${listing.id}`} className="block w-full h-full">
          <Image
            src={imageUrl || "/placeholder.svg"}
            alt={listing.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </Link>
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-3 right-3 bg-white/80 hover:bg-white z-10"
          onClick={(e) => {
            e.preventDefault()
            e.stopPropagation()
            setIsFavorited(!isFavorited)
          }}
        >
          <Heart className={`h-4 w-4 ${isFavorited ? "fill-rose-500 text-rose-500" : ""}`} />
        </Button>
        {listing.featured && <Badge className="absolute top-3 left-3 bg-rose-500 z-10">Featured</Badge>}
      </div>

      <CardContent className="p-4">
        <Link href={`/listings/${listing.id}`}>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-gray-900 truncate">{listing.title}</h3>
              <div className="flex items-center gap-1">
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <span className="text-sm font-medium">{listing.rating}</span>
              </div>
            </div>

            <div className="flex items-center text-gray-600 text-sm">
              <MapPin className="h-4 w-4 mr-1" />
              <span className="truncate">{listing.location}</span>
            </div>

            <p className="text-gray-600 text-sm line-clamp-2">{listing.description}</p>

            <div className="flex items-center justify-between pt-2">
              <div>
                <span className="text-lg font-bold text-gray-900">${listing.price}</span>
                <span className="text-gray-600 text-sm"> / night</span>
              </div>
              <Badge variant="secondary" className="text-xs">
                {listing.type}
              </Badge>
            </div>
          </div>
        </Link>
      </CardContent>
    </Card>
  )
}
