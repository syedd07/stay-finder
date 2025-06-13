"use client"

import { useState } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

interface ReviewSectionProps {
  listingId: string
}

const mockReviews = [
  {
    id: "1",
    user: {
      name: "Alice Johnson",
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
    },
    rating: 5,
    comment: "Amazing place! The views were incredible and the host was very responsive. Would definitely stay again.",
    createdAt: "2024-01-15",
  },
  {
    id: "2",
    user: {
      name: "Bob Smith",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
    },
    rating: 4,
    comment: "Great location and clean space. The kitchen was well-equipped and perfect for our needs.",
    createdAt: "2024-01-10",
  },
  {
    id: "3",
    user: {
      name: "Carol Davis",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
    },
    rating: 5,
    comment: "Exceeded our expectations! Beautiful property with all the amenities we needed. Highly recommend!",
    createdAt: "2024-01-05",
  },
]

export function ReviewSection({ listingId }: ReviewSectionProps) {
  const [showAllReviews, setShowAllReviews] = useState(false)
  const displayedReviews = showAllReviews ? mockReviews : mockReviews.slice(0, 2)

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-semibold">Reviews</h3>
        <div className="flex items-center gap-2">
          <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
          <span className="font-medium">4.8 (124 reviews)</span>
        </div>
      </div>

      <div className="space-y-4">
        {displayedReviews.map((review) => (
          <Card key={review.id}>
            <CardContent className="p-6">
              <div className="flex items-start space-x-4">
                <Avatar>
                  <AvatarImage src={review.user.avatar || "/placeholder.svg"} />
                  <AvatarFallback>{review.user.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold">{review.user.name}</h4>
                    <div className="flex items-center gap-1">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < review.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-700 mb-2">{review.comment}</p>
                  <p className="text-sm text-gray-500">{new Date(review.createdAt).toLocaleDateString()}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {mockReviews.length > 2 && (
        <Button variant="outline" onClick={() => setShowAllReviews(!showAllReviews)} className="w-full">
          {showAllReviews ? "Show Less" : `Show All ${mockReviews.length} Reviews`}
        </Button>
      )}
    </div>
  )
}
