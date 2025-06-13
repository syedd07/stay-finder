import { getListings } from "@/lib/actions"
import { PropertyCard } from "@/components/property-card"

interface PropertyGridProps {
  searchParams: { [key: string]: string | string[] | undefined }
}

export async function PropertyGrid({ searchParams }: PropertyGridProps) {
  const listings = await getListings(searchParams)

  if (listings.length === 0) {
    return (
      <div className="text-center py-12">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">No properties found</h3>
        <p className="text-gray-600">Try adjusting your search criteria</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {listings.map((listing) => (
        <PropertyCard key={listing.id} listing={listing} />
      ))}
    </div>
  )
}
