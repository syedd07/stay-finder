"use server"

import { neon } from "@neondatabase/serverless"
import type { Listing, Booking, User } from "./types"

const sql = neon(process.env.DATABASE_URL!)

export async function getListings(searchParams: { [key: string]: string | string[] | undefined }): Promise<Listing[]> {
  try {
    let query = `
      SELECT 
        l.*,
        u.name as host_name,
        u.avatar as host_avatar,
        u.created_at as host_joined_at,
        COALESCE(AVG(r.rating), 4.5) as avg_rating,
        COUNT(r.id) as review_count
      FROM listings l
      JOIN users u ON l.host_id = u.id
      LEFT JOIN reviews r ON l.id = r.listing_id
      WHERE l.status = 'active'
    `

    const params: any[] = []
    let paramIndex = 1

    // Add location filter
    if (searchParams.location) {
      const location = Array.isArray(searchParams.location) ? searchParams.location[0] : searchParams.location
      query += ` AND l.location ILIKE $${paramIndex}`
      params.push(`%${location}%`)
      paramIndex++
    }

    // Add guests filter
    if (searchParams.guests) {
      const guests = Number.parseInt(Array.isArray(searchParams.guests) ? searchParams.guests[0] : searchParams.guests)
      query += ` AND l.max_guests >= $${paramIndex}`
      params.push(guests)
      paramIndex++
    }

    query += ` GROUP BY l.id, u.name, u.avatar, u.created_at ORDER BY l.featured DESC, l.created_at DESC`

    // Use sql.query() for parameterized queries
    const result = params.length > 0 ? await sql.query(query, params) : await sql.query(query)

    // Check if result has rows
    const rows = result.rows || result
    if (!Array.isArray(rows)) {
      console.log("Invalid result structure:", result)
      return getMockListings()
    }

    return rows.map((row) => ({
      id: row.id,
      title: row.title,
      description: row.description,
      location: row.location,
      price: Number(row.price),
      images: row.images || [],
      maxGuests: row.max_guests,
      bedrooms: row.bedrooms,
      bathrooms: row.bathrooms,
      amenities: row.amenities || [],
      type: row.type,
      rating: Number(Number(row.avg_rating).toFixed(1)),
      reviewCount: Number(row.review_count),
      featured: row.featured,
      status: row.status,
      host: {
        id: row.host_id,
        name: row.host_name,
        avatar: row.host_avatar,
        joinedAt: row.host_joined_at,
        isVerified: true,
      },
      createdAt: row.created_at,
    }))
  } catch (error) {
    console.error("Error fetching listings:", error)
    // Fallback to mock data if database query fails
    return getMockListings()
  }
}

// Add a fallback function for mock listings
function getMockListings(): Listing[] {
  return [
    {
      id: "660e8400-e29b-41d4-a716-446655440001",
      title: "Cozy Mountain Cabin",
      description: "A beautiful cabin nestled in the mountains with stunning views and modern amenities.",
      location: "Aspen, Colorado",
      price: 250,
      images: ["/placeholder.svg?height=300&width=400"],
      maxGuests: 6,
      bedrooms: 3,
      bathrooms: 2,
      amenities: ["wifi", "parking", "kitchen", "tv"],
      type: "Cabin",
      rating: 4.8,
      reviewCount: 124,
      featured: true,
      status: "active",
      host: {
        id: "550e8400-e29b-41d4-a716-446655440001",
        name: "Sarah Johnson",
        avatar: "/placeholder.svg?height=40&width=40",
        joinedAt: "2020-01-15",
        isVerified: true,
      },
      createdAt: "2023-01-15",
    },
    {
      id: "660e8400-e29b-41d4-a716-446655440002",
      title: "Modern Downtown Apartment",
      description: "Stylish apartment in the heart of the city with easy access to restaurants and attractions.",
      location: "New York, NY",
      price: 180,
      images: ["/placeholder.svg?height=300&width=400"],
      maxGuests: 4,
      bedrooms: 2,
      bathrooms: 1,
      amenities: ["wifi", "ac", "tv"],
      type: "Apartment",
      rating: 4.6,
      reviewCount: 89,
      featured: false,
      status: "active",
      host: {
        id: "550e8400-e29b-41d4-a716-446655440002",
        name: "Mike Chen",
        avatar: "/placeholder.svg?height=40&width=40",
        joinedAt: "2019-06-20",
        isVerified: true,
      },
      createdAt: "2023-02-10",
    },
    {
      id: "660e8400-e29b-41d4-a716-446655440003",
      title: "Beachfront Villa",
      description: "Luxurious villa right on the beach with private pool and breathtaking ocean views.",
      location: "Malibu, California",
      price: 450,
      images: ["/placeholder.svg?height=300&width=400"],
      maxGuests: 8,
      bedrooms: 4,
      bathrooms: 3,
      amenities: ["wifi", "pool", "parking", "kitchen", "tv"],
      type: "Villa",
      rating: 4.9,
      reviewCount: 67,
      featured: true,
      status: "active",
      host: {
        id: "550e8400-e29b-41d4-a716-446655440003",
        name: "Emma Davis",
        avatar: "/placeholder.svg?height=40&width=40",
        joinedAt: "2021-03-10",
        isVerified: true,
      },
      createdAt: "2023-03-05",
    },
  ]
}

export async function getListingById(id: string): Promise<Listing | null> {
  try {
    // First try to validate if it's a UUID format
    const isUUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(id)

    if (!isUUID) {
      // If not UUID, try to find in mock data
      const mockListings = getMockListings()
      return mockListings.find((listing) => listing.id === id) || null
    }

    const result = await sql`
      SELECT 
        l.*,
        u.name as host_name,
        u.avatar as host_avatar,
        u.created_at as host_joined_at,
        COALESCE(AVG(r.rating), 4.5) as avg_rating,
        COUNT(r.id) as review_count
      FROM listings l
      JOIN users u ON l.host_id = u.id
      LEFT JOIN reviews r ON l.id = r.listing_id
      WHERE l.id = ${id}
      GROUP BY l.id, u.name, u.avatar, u.created_at
    `

    if (result.length === 0) return null

    const row = result[0]
    return {
      id: row.id,
      title: row.title,
      description: row.description,
      location: row.location,
      price: Number(row.price),
      images: row.images || [],
      maxGuests: row.max_guests,
      bedrooms: row.bedrooms,
      bathrooms: row.bathrooms,
      amenities: row.amenities || [],
      type: row.type,
      rating: Number(Number(row.avg_rating).toFixed(1)),
      reviewCount: Number(row.review_count),
      featured: row.featured,
      status: row.status,
      host: {
        id: row.host_id,
        name: row.host_name,
        avatar: row.host_avatar,
        joinedAt: row.host_joined_at,
        isVerified: true,
      },
      createdAt: row.created_at,
    }
  } catch (error) {
    console.error("Error fetching listing by ID:", error)
    // Fallback to mock data
    const mockListings = getMockListings()
    return mockListings.find((listing) => listing.id === id) || null
  }
}

export async function getUserBookings(userId: string): Promise<Booking[]> {
  try {
    const result = await sql`
      SELECT 
        b.*,
        l.title as listing_title,
        l.location as listing_location,
        l.images as listing_images
      FROM bookings b
      JOIN listings l ON b.listing_id = l.id
      WHERE b.user_id = ${userId}
      ORDER BY b.created_at DESC
    `

    return result.map((row) => ({
      id: row.id,
      listingId: row.listing_id,
      userId: row.user_id,
      checkIn: row.check_in,
      checkOut: row.check_out,
      guests: row.guests,
      totalPrice: Number(row.total_price),
      status: row.status,
      createdAt: row.created_at,
      listing: {
        id: row.listing_id,
        title: row.listing_title,
        location: row.listing_location,
        images: row.listing_images || [],
      },
    }))
  } catch (error) {
    console.error("Error fetching user bookings:", error)
    return []
  }
}

export async function createBooking(bookingData: {
  listingId: string
  checkIn: string
  checkOut: string
  guests: number
  totalPrice: number
}): Promise<Booking> {
  try {
    // Get current user ID (in a real app, this would come from session/auth)
    const userId = "550e8400-e29b-41d4-a716-446655440004" // Demo user ID

    // Check if listingId is a UUID format
    const isUUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(bookingData.listingId)

    if (!isUUID) {
      // For mock listings, create a mock booking
      const booking: Booking = {
        id: Math.random().toString(36).substr(2, 9),
        userId: userId,
        listingId: bookingData.listingId,
        checkIn: bookingData.checkIn,
        checkOut: bookingData.checkOut,
        guests: bookingData.guests,
        totalPrice: bookingData.totalPrice,
        status: "confirmed",
        createdAt: new Date().toISOString(),
      }
      return booking
    }

    const result = await sql`
      INSERT INTO bookings (listing_id, user_id, check_in, check_out, guests, total_price, status)
      VALUES (${bookingData.listingId}, ${userId}, ${bookingData.checkIn}, ${bookingData.checkOut}, ${bookingData.guests}, ${bookingData.totalPrice}, 'confirmed')
      RETURNING *
    `

    const booking = result[0]
    return {
      id: booking.id,
      listingId: booking.listing_id,
      userId: booking.user_id,
      checkIn: booking.check_in,
      checkOut: booking.check_out,
      guests: booking.guests,
      totalPrice: Number(booking.total_price),
      status: booking.status,
      createdAt: booking.created_at,
    }
  } catch (error) {
    console.error("Error creating booking:", error)
    throw new Error("Failed to create booking")
  }
}

export async function getHostListings(): Promise<Listing[]> {
  // Mock implementation - get listings for current host
  const allListings = await getListings({})
  return allListings.slice(0, 2) // Return first 2 as example
}

export async function getHostStats() {
  // Mock implementation
  return {
    totalListings: 3,
    activeBookings: 8,
    monthlyRevenue: 2450,
    totalGuests: 156,
  }
}

export async function authenticateUser(email: string, password: string): Promise<User> {
  // Mock implementation - replace with actual authentication
  if (email === "demo@stayfinder.com" && password === "password") {
    return {
      id: "user1",
      name: "Demo User",
      email: "demo@stayfinder.com",
      avatar: "/placeholder.svg?height=40&width=40",
      createdAt: "2023-01-01",
    }
  }
  throw new Error("Invalid credentials")
}

export async function createUser(name: string, email: string, password: string): Promise<User> {
  // Mock implementation - replace with actual user creation
  return {
    id: Math.random().toString(36).substr(2, 9),
    name,
    email,
    createdAt: new Date().toISOString(),
  }
}
