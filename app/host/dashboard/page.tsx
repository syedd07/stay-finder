import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Plus, Home, Calendar, DollarSign, Users } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { getHostListings, getHostStats } from "@/lib/actions"

const hostListingImages = [
  "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
  "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
]

export default async function HostDashboard() {
  const [listings, stats] = await Promise.all([getHostListings(), getHostStats()])

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Host Dashboard</h1>
          <p className="text-gray-600 mt-2">Manage your properties and bookings</p>
        </div>
        <Link href="/host/listings/new">
          <Button className="bg-rose-500 hover:bg-rose-600">
            <Plus className="mr-2 h-4 w-4" />
            Add Listing
          </Button>
        </Link>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Listings</CardTitle>
            <Home className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.totalListings}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Bookings</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.activeBookings}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Monthly Revenue</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${stats.monthlyRevenue}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Guests</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.totalGuests}</div>
          </CardContent>
        </Card>
      </div>

      {/* Listings */}
      <Card>
        <CardHeader>
          <CardTitle>Your Listings</CardTitle>
          <CardDescription>Manage your property listings</CardDescription>
        </CardHeader>
        <CardContent>
          {listings.length === 0 ? (
            <div className="text-center py-8">
              <Home className="mx-auto h-12 w-12 text-gray-400 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">No listings yet</h3>
              <p className="text-gray-600 mb-4">Create your first listing to start hosting</p>
              <Link href="/host/listings/new">
                <Button className="bg-rose-500 hover:bg-rose-600">
                  <Plus className="mr-2 h-4 w-4" />
                  Create Listing
                </Button>
              </Link>
            </div>
          ) : (
            <div className="space-y-4">
              {listings.map((listing, index) => (
                <div key={listing.id} className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-gray-200 rounded-lg overflow-hidden">
                      <Image
                        src={hostListingImages[index % hostListingImages.length] || "/placeholder.svg"}
                        alt={listing.title}
                        width={64}
                        height={64}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold">{listing.title}</h3>
                      <p className="text-gray-600 text-sm">{listing.location}</p>
                      <div className="flex items-center gap-2 mt-1">
                        <Badge variant={listing.status === "active" ? "default" : "secondary"}>{listing.status}</Badge>
                        <span className="text-sm text-gray-600">${listing.price}/night</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Link href={`/host/listings/${listing.id}/edit`}>
                      <Button variant="outline" size="sm">
                        Edit
                      </Button>
                    </Link>
                    <Link href={`/listings/${listing.id}`}>
                      <Button variant="ghost" size="sm">
                        View
                      </Button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
