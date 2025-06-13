"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Menu, User, Home, LogOut, Settings } from "lucide-react"
import { useAuth } from "@/hooks/use-auth"

export function Header() {
  const { user, logout } = useAuth()

  return (
    <header className="border-b bg-white sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Home className="h-8 w-8 text-rose-500" />
          <span className="text-2xl font-bold text-gray-900">StayFinder</span>
        </Link>

        <div className="flex items-center space-x-4">
          {user ? (
            <>
              <Link href="/host">
                <Button variant="ghost" className="hidden sm:inline-flex">
                  Become a Host
                </Button>
              </Link>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="flex items-center space-x-2 border rounded-full p-2">
                    <Menu className="h-4 w-4" />
                    <Avatar className="h-6 w-6">
                      <AvatarImage src={user.avatar || "/placeholder.svg"} />
                      <AvatarFallback>{user.name?.charAt(0) || user.email.charAt(0)}</AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <DropdownMenuItem asChild>
                    <Link href="/profile">
                      <User className="mr-2 h-4 w-4" />
                      Profile
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/bookings">
                      <Settings className="mr-2 h-4 w-4" />
                      My Bookings
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/host/dashboard">
                      <Home className="mr-2 h-4 w-4" />
                      Host Dashboard
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={logout}>
                    <LogOut className="mr-2 h-4 w-4" />
                    Log out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </>
          ) : (
            <div className="flex items-center space-x-2">
              <Link href="/auth/login">
                <Button variant="ghost">Log in</Button>
              </Link>
              <Link href="/auth/register">
                <Button>Sign up</Button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
