"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { User, Mail, Phone, MapPin, Shield, Star, Camera } from "lucide-react"
import { useAuth } from "@/hooks/use-auth"
import { useToast } from "@/hooks/use-toast"

export default function ProfilePage() {
  const { user } = useAuth()
  const { toast } = useToast()
  const [isEditing, setIsEditing] = useState(false)
  const [formData, setFormData] = useState({
    name: user?.name || "",
    email: user?.email || "",
    phone: "+1 (555) 123-4567",
    location: "San Francisco, CA",
    bio: "Travel enthusiast who loves exploring new places and meeting new people. I enjoy both hosting guests and staying at unique properties around the world.",
    languages: ["English", "Spanish"],
  })

  const handleSave = () => {
    // In a real app, this would update the user profile in the database
    toast({
      title: "Profile updated",
      description: "Your profile has been successfully updated.",
    })
    setIsEditing(false)
  }

  const stats = {
    totalTrips: 12,
    reviewsReceived: 8,
    averageRating: 4.9,
    yearsHosting: 2,
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">My Profile</h1>
        <p className="text-gray-600 mt-2">Manage your account settings and preferences</p>
      </div>

      <Tabs defaultValue="profile" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="profile">Profile</TabsTrigger>
          <TabsTrigger value="reviews">Reviews</TabsTrigger>
          <TabsTrigger value="verification">Verification</TabsTrigger>
          <TabsTrigger value="preferences">Preferences</TabsTrigger>
        </TabsList>

        <TabsContent value="profile" className="space-y-6">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="relative">
                    <Avatar className="h-20 w-20">
                      <AvatarImage src={user?.avatar || "/placeholder.svg"} />
                      <AvatarFallback className="text-2xl">
                        {user?.name?.charAt(0) || user?.email.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                    <Button size="icon" variant="outline" className="absolute -bottom-2 -right-2 h-8 w-8 rounded-full">
                      <Camera className="h-4 w-4" />
                    </Button>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold">{user?.name || "Demo User"}</h2>
                    <p className="text-gray-600">
                      Member since {new Date(user?.createdAt || "2023-01-01").getFullYear()}
                    </p>
                    <div className="flex items-center gap-2 mt-2">
                      <Badge variant="secondary">
                        <Shield className="h-3 w-3 mr-1" />
                        Verified
                      </Badge>
                      <Badge variant="outline">
                        <Star className="h-3 w-3 mr-1" />
                        Superhost
                      </Badge>
                    </div>
                  </div>
                </div>
                <Button onClick={() => setIsEditing(!isEditing)} variant={isEditing ? "outline" : "default"}>
                  {isEditing ? "Cancel" : "Edit Profile"}
                </Button>
              </div>
            </CardHeader>

            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <Card>
                  <CardContent className="p-4 text-center">
                    <div className="text-2xl font-bold text-rose-500">{stats.totalTrips}</div>
                    <div className="text-sm text-gray-600">Total Trips</div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4 text-center">
                    <div className="text-2xl font-bold text-rose-500">{stats.reviewsReceived}</div>
                    <div className="text-sm text-gray-600">Reviews</div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4 text-center">
                    <div className="text-2xl font-bold text-rose-500">{stats.averageRating}</div>
                    <div className="text-sm text-gray-600">Rating</div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4 text-center">
                    <div className="text-2xl font-bold text-rose-500">{stats.yearsHosting}</div>
                    <div className="text-sm text-gray-600">Years Hosting</div>
                  </CardContent>
                </Card>
              </div>

              <Separator />

              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Full Name</Label>
                    <div className="flex items-center space-x-2 mt-1">
                      <User className="h-4 w-4 text-gray-400" />
                      {isEditing ? (
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        />
                      ) : (
                        <span className="text-gray-900">{formData.name}</span>
                      )}
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email">Email</Label>
                    <div className="flex items-center space-x-2 mt-1">
                      <Mail className="h-4 w-4 text-gray-400" />
                      {isEditing ? (
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />
                      ) : (
                        <span className="text-gray-900">{formData.email}</span>
                      )}
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="phone">Phone</Label>
                    <div className="flex items-center space-x-2 mt-1">
                      <Phone className="h-4 w-4 text-gray-400" />
                      {isEditing ? (
                        <Input
                          id="phone"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        />
                      ) : (
                        <span className="text-gray-900">{formData.phone}</span>
                      )}
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="location">Location</Label>
                    <div className="flex items-center space-x-2 mt-1">
                      <MapPin className="h-4 w-4 text-gray-400" />
                      {isEditing ? (
                        <Input
                          id="location"
                          value={formData.location}
                          onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                        />
                      ) : (
                        <span className="text-gray-900">{formData.location}</span>
                      )}
                    </div>
                  </div>
                </div>

                <div>
                  <Label htmlFor="bio">About Me</Label>
                  {isEditing ? (
                    <Textarea
                      id="bio"
                      value={formData.bio}
                      onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
                      className="mt-1"
                      rows={4}
                    />
                  ) : (
                    <p className="text-gray-900 mt-1">{formData.bio}</p>
                  )}
                </div>

                <div>
                  <Label>Languages</Label>
                  <div className="flex gap-2 mt-1">
                    {formData.languages.map((language) => (
                      <Badge key={language} variant="secondary">
                        {language}
                      </Badge>
                    ))}
                  </div>
                </div>

                {isEditing && (
                  <div className="flex gap-2">
                    <Button onClick={handleSave} className="bg-rose-500 hover:bg-rose-600">
                      Save Changes
                    </Button>
                    <Button variant="outline" onClick={() => setIsEditing(false)}>
                      Cancel
                    </Button>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="reviews">
          <Card>
            <CardHeader>
              <CardTitle>Reviews from Guests</CardTitle>
              <CardDescription>See what guests have said about their stays</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[1, 2, 3].map((review) => (
                  <div key={review} className="border rounded-lg p-4">
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex items-center space-x-3">
                        <Avatar>
                          <AvatarImage src="/placeholder.svg" />
                          <AvatarFallback>JD</AvatarFallback>
                        </Avatar>
                        <div>
                          <h4 className="font-semibold">John Doe</h4>
                          <div className="flex items-center">
                            {Array.from({ length: 5 }).map((_, i) => (
                              <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            ))}
                          </div>
                        </div>
                      </div>
                      <span className="text-sm text-gray-500">2 weeks ago</span>
                    </div>
                    <p className="text-gray-700">
                      Amazing host! Very responsive and helpful. The place was exactly as described and perfectly clean.
                      Would definitely stay again!
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="verification">
          <Card>
            <CardHeader>
              <CardTitle>Account Verification</CardTitle>
              <CardDescription>Verify your identity to build trust with the community</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-green-500" />
                    <div>
                      <h4 className="font-medium">Email Address</h4>
                      <p className="text-sm text-gray-600">Verified</p>
                    </div>
                  </div>
                  <Badge className="bg-green-500">Verified</Badge>
                </div>

                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-green-500" />
                    <div>
                      <h4 className="font-medium">Phone Number</h4>
                      <p className="text-sm text-gray-600">Verified</p>
                    </div>
                  </div>
                  <Badge className="bg-green-500">Verified</Badge>
                </div>

                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center space-x-3">
                    <Shield className="h-5 w-5 text-gray-400" />
                    <div>
                      <h4 className="font-medium">Government ID</h4>
                      <p className="text-sm text-gray-600">Not verified</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    Verify
                  </Button>
                </div>

                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center space-x-3">
                    <User className="h-5 w-5 text-gray-400" />
                    <div>
                      <h4 className="font-medium">Profile Photo</h4>
                      <p className="text-sm text-gray-600">Not verified</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    Add Photo
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="preferences">
          <Card>
            <CardHeader>
              <CardTitle>Account Preferences</CardTitle>
              <CardDescription>Manage your notification and privacy settings</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="font-medium mb-3">Notifications</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Booking confirmations</p>
                      <p className="text-sm text-gray-600">Get notified when bookings are confirmed</p>
                    </div>
                    <Button variant="outline" size="sm">
                      On
                    </Button>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Marketing emails</p>
                      <p className="text-sm text-gray-600">Receive promotional offers and updates</p>
                    </div>
                    <Button variant="outline" size="sm">
                      Off
                    </Button>
                  </div>
                </div>
              </div>

              <Separator />

              <div>
                <h4 className="font-medium mb-3">Privacy</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Profile visibility</p>
                      <p className="text-sm text-gray-600">Control who can see your profile</p>
                    </div>
                    <Button variant="outline" size="sm">
                      Public
                    </Button>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Show reviews</p>
                      <p className="text-sm text-gray-600">Display reviews on your profile</p>
                    </div>
                    <Button variant="outline" size="sm">
                      On
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
