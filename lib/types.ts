export interface User {
  id: string
  name: string
  email: string
  avatar?: string
  createdAt: string
}

export interface Host {
  id: string
  name: string
  avatar?: string
  joinedAt: string
  isVerified: boolean
}

export interface Listing {
  id: string
  title: string
  description: string
  location: string
  price: number
  images: string[]
  maxGuests: number
  bedrooms: number
  bathrooms: number
  amenities: string[]
  type: string
  rating: number
  reviewCount: number
  featured: boolean
  status: "active" | "inactive"
  host: Host
  createdAt: string
}

export interface Booking {
  id: string
  listingId: string
  userId: string
  checkIn: string
  checkOut: string
  guests: number
  totalPrice: number
  status: "pending" | "confirmed" | "cancelled"
  createdAt: string
  listing?: Listing
  user?: User
}

export interface Review {
  id: string
  listingId: string
  userId: string
  rating: number
  comment: string
  createdAt: string
  user?: User
}
