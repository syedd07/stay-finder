import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, Users } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { getUserBookings } from "@/lib/actions"

const bookingImages = [
  "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
  "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
  "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
]

export default async function BookingsPage() {
  // In a real app, get user ID from authentication context
  const userId = "550e8400-e29b-41d4-a716-446655440004" // Demo user ID
  const bookings = await getUserBookings(userId)

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">My Bookings</h1>
        <p className="text-gray-600 mt-2">Manage your upcoming and past reservations</p>
      </div>

      {bookings.length === 0 ? (
        <Card>
          <CardContent className="text-center py-12">
            <Calendar className="mx-auto h-12 w-12 text-gray-400 mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">No bookings yet</h3>
            <p className="text-gray-600 mb-4">Start exploring and book your first stay</p>
            <Link href="/">
              <Button className="bg-rose-500 hover:bg-rose-600">Explore Properties</Button>
            </Link>
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-6">
          {bookings.map((booking, index) => (
            <Card key={booking.id}>
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="w-full md:w-48 h-32 relative rounded-lg overflow-hidden">
                    <Image
                      src={bookingImages[index % bookingImages.length] || "/placeholder.svg"}
                      alt={booking.listing?.title || "Property"}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold mb-2">{booking.listing?.title}</h3>
                        <div className="flex items-center text-gray-600 mb-2">
                          <MapPin className="h-4 w-4 mr-1" />
                          <span>{booking.listing?.location}</span>
                        </div>
                      </div>
                      <Badge
                        variant={booking.status === "confirmed" ? "default" : "secondary"}
                        className={booking.status === "confirmed" ? "bg-green-500" : ""}
                      >
                        {booking.status}
                      </Badge>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-gray-500" />
                        <div>
                          <p className="text-sm text-gray-500">Check-in</p>
                          <p className="font-medium">{new Date(booking.checkIn).toLocaleDateString()}</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-gray-500" />
                        <div>
                          <p className="text-sm text-gray-500">Check-out</p>
                          <p className="font-medium">{new Date(booking.checkOut).toLocaleDateString()}</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        <Users className="h-4 w-4 text-gray-500" />
                        <div>
                          <p className="text-sm text-gray-500">Guests</p>
                          <p className="font-medium">{booking.guests}</p>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-2xl font-bold">${booking.totalPrice}</p>
                        <p className="text-sm text-gray-500">Total price</p>
                      </div>

                      <div className="flex gap-2">
                        <Link href={`/listings/${booking.listingId}`}>
                          <Button variant="outline">View Property</Button>
                        </Link>
                        {booking.status === "confirmed" && (
                          <Button variant="outline" className="text-red-600 hover:text-red-700">
                            Cancel Booking
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}
