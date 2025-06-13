"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Separator } from "@/components/ui/separator"
import { Star, CalendarIcon } from "lucide-react"
import { format, differenceInDays } from "date-fns"
import { createBooking } from "@/lib/actions"
import { useAuth } from "@/hooks/use-auth"
import { useToast } from "@/hooks/use-toast"
import type { Listing } from "@/lib/types"

interface BookingCardProps {
  listing: Listing
}

export function BookingCard({ listing }: BookingCardProps) {
  const router = useRouter()
  const { user } = useAuth()
  const { toast } = useToast()
  const [checkIn, setCheckIn] = useState<Date>()
  const [checkOut, setCheckOut] = useState<Date>()
  const [guests, setGuests] = useState(1)
  const [isLoading, setIsLoading] = useState(false)
  const [checkInOpen, setCheckInOpen] = useState(false)
  const [checkOutOpen, setCheckOutOpen] = useState(false)

  const nights = checkIn && checkOut ? differenceInDays(checkOut, checkIn) : 0
  const subtotal = nights * listing.price
  const serviceFee = subtotal * 0.1
  const total = subtotal + serviceFee

  const handleCheckInSelect = (date: Date | undefined) => {
    setCheckIn(date)
    if (date) {
      // Close check-in popover and open check-out popover
      setCheckInOpen(false)
      setTimeout(() => {
        setCheckOutOpen(true)
      }, 100)
    }
  }

  const handleCheckOutSelect = (date: Date | undefined) => {
    setCheckOut(date)
    if (date) {
      // Close check-out popover automatically
      setCheckOutOpen(false)
    }
  }

  const handleBooking = async () => {
    if (!user) {
      // Store current page URL for redirect after login
      localStorage.setItem("redirectAfterLogin", window.location.pathname + window.location.search)
      router.push("/auth/login")
      return
    }

    if (!checkIn || !checkOut) {
      toast({
        title: "Please select dates",
        description: "Check-in and check-out dates are required",
        variant: "destructive",
      })
      return
    }

    setIsLoading(true)
    try {
      await createBooking({
        listingId: listing.id,
        checkIn: checkIn.toISOString(),
        checkOut: checkOut.toISOString(),
        guests,
        totalPrice: total,
      })

      toast({
        title: "Booking confirmed!",
        description: "Your reservation has been created successfully.",
      })

      router.push("/bookings")
    } catch (error) {
      toast({
        title: "Booking failed",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Card className="sticky top-8">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <div>
            <span className="text-2xl font-bold">${listing.price}</span>
            <span className="text-gray-600 font-normal"> / night</span>
          </div>
          <div className="flex items-center gap-1">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span className="font-medium">{listing.rating}</span>
            <span className="text-gray-600">({listing.reviewCount})</span>
          </div>
        </CardTitle>
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 gap-2">
          <div>
            <Label>Check-in</Label>
            <Popover open={checkInOpen} onOpenChange={setCheckInOpen}>
              <PopoverTrigger asChild>
                <Button variant="outline" className="w-full justify-start">
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {checkIn ? format(checkIn, "MMM dd") : "Add date"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={checkIn}
                  onSelect={handleCheckInSelect}
                  disabled={(date) => date < new Date()}
                />
              </PopoverContent>
            </Popover>
          </div>

          <div>
            <Label>Check-out</Label>
            <Popover open={checkOutOpen} onOpenChange={setCheckOutOpen}>
              <PopoverTrigger asChild>
                <Button variant="outline" className="w-full justify-start">
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {checkOut ? format(checkOut, "MMM dd") : "Add date"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={checkOut}
                  onSelect={handleCheckOutSelect}
                  disabled={(date) => date < new Date() || (checkIn && date <= checkIn)}
                />
              </PopoverContent>
            </Popover>
          </div>
        </div>

        <div>
          <Label>Guests</Label>
          <Input
            type="number"
            value={guests}
            onChange={(e) => setGuests(Number.parseInt(e.target.value) || 1)}
            min={1}
            max={listing.maxGuests}
          />
        </div>

        <Button
          className="w-full bg-rose-500 hover:bg-rose-600"
          size="lg"
          onClick={handleBooking}
          disabled={isLoading || !checkIn || !checkOut}
        >
          {isLoading ? "Booking..." : "Reserve"}
        </Button>

        {nights > 0 && (
          <>
            <p className="text-center text-sm text-gray-600">You won't be charged yet</p>

            <div className="space-y-2">
              <div className="flex justify-between">
                <span>
                  ${listing.price} x {nights} nights
                </span>
                <span>${subtotal}</span>
              </div>
              <div className="flex justify-between">
                <span>Service fee</span>
                <span>${serviceFee.toFixed(2)}</span>
              </div>
              <Separator />
              <div className="flex justify-between font-semibold">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>
          </>
        )}
      </CardContent>
    </Card>
  )
}
