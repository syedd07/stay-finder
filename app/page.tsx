import { Suspense } from "react"
import { SearchBar } from "@/components/search-bar"
import { PropertyGrid } from "@/components/property-grid"
import { Hero } from "@/components/hero"
import { Categories } from "@/components/categories"

export default function HomePage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  return (
    <div className="min-h-screen">
      <Hero />
      <div className="container mx-auto px-4 py-8">
        <SearchBar />
        <Categories />
        <Suspense fallback={<div>Loading properties...</div>}>
          <PropertyGrid searchParams={searchParams} />
        </Suspense>
      </div>
    </div>
  )
}
