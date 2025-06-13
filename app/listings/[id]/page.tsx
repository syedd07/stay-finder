import { notFound } from "next/navigation"
import { getListingById } from "@/lib/actions"
import { ListingDetails } from "@/components/listing-details"
import { BookingCard } from "@/components/booking-card"
import { ReviewSection } from "@/components/review-section"

interface ListingPageProps {
  params: { id: string }
}

export default async function ListingPage({ params }: ListingPageProps) {
  const listing = await getListingById(params.id)

  if (!listing) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <ListingDetails listing={listing} />
          <ReviewSection listingId={listing.id} />
        </div>
        <div className="lg:col-span-1">
          <BookingCard listing={listing} />
        </div>
      </div>
    </div>
  )
}
