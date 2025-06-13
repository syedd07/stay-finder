import { Button } from "@/components/ui/button"
import { Search } from "lucide-react"
import Image from "next/image"

export function Hero() {
  return (
    <div className="relative h-[60vh] flex items-center justify-center">
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-black/30 z-10" />
      <Image
        src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
        alt="Beautiful vacation rental"
        fill
        className="object-cover"
        priority
      />
      <div className="relative z-20 text-center text-white max-w-4xl mx-auto px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">Find Your Perfect Stay</h1>
        <p className="text-xl md:text-2xl mb-8 opacity-90">Discover unique accommodations around the world</p>
        <Button size="lg" className="bg-rose-500 hover:bg-rose-600 text-white">
          <Search className="mr-2 h-5 w-5" />
          Start Exploring
        </Button>
      </div>
    </div>
  )
}
