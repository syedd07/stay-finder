"use client"

import { useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Search, MapPin, CalendarIcon, Users } from "lucide-react"
import { format } from "date-fns"

export function SearchBar() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [location, setLocation] = useState(searchParams.get("location") || "")
  const [checkIn, setCheckIn] = useState<Date>()
  const [checkOut, setCheckOut] = useState<Date>()
  const [guests, setGuests] = useState(searchParams.get("guests") || "1")

  const handleSearch = () => {
    const params = new URLSearchParams()
    if (location) params.set("location", location)
    if (checkIn) params.set("checkIn", checkIn.toISOString())
    if (checkOut) params.set("checkOut", checkOut.toISOString())
    if (guests) params.set("guests", guests)

    router.push(`/?${params.toString()}`)
  }

  return (
    <div className="bg-white rounded-full shadow-lg border p-2 flex flex-col md:flex-row gap-2 mb-8">
      <div className="flex-1 flex items-center px-4 py-2">
        <MapPin className="h-5 w-5 text-gray-400 mr-2" />
        <Input
          placeholder="Where are you going?"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="border-0 focus-visible:ring-0 p-0"
        />
      </div>

      <div className="flex-1 flex items-center px-4 py-2 border-l">
        <CalendarIcon className="h-5 w-5 text-gray-400 mr-2" />
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="ghost" className="p-0 h-auto font-normal">
              {checkIn ? format(checkIn, "MMM dd") : "Check in"}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0">
            <Calendar mode="single" selected={checkIn} onSelect={setCheckIn} initialFocus />
          </PopoverContent>
        </Popover>
        <span className="mx-2 text-gray-400">-</span>
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="ghost" className="p-0 h-auto font-normal">
              {checkOut ? format(checkOut, "MMM dd") : "Check out"}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0">
            <Calendar mode="single" selected={checkOut} onSelect={setCheckOut} initialFocus />
          </PopoverContent>
        </Popover>
      </div>

      <div className="flex-1 flex items-center px-4 py-2 border-l">
        <Users className="h-5 w-5 text-gray-400 mr-2" />
        <Input
          type="number"
          placeholder="Guests"
          value={guests}
          onChange={(e) => setGuests(e.target.value)}
          className="border-0 focus-visible:ring-0 p-0"
          min="1"
        />
      </div>

      <Button onClick={handleSearch} className="bg-rose-500 hover:bg-rose-600 rounded-full px-8">
        <Search className="h-5 w-5" />
      </Button>
    </div>
  )
}
