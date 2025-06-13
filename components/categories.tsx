"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Home, Building, TreePine, Waves, Mountain, Castle, Tent, Sailboat } from "lucide-react"

const categories = [
  { id: "all", name: "All", icon: Home },
  { id: "apartments", name: "Apartments", icon: Building },
  { id: "cabins", name: "Cabins", icon: TreePine },
  { id: "beachfront", name: "Beachfront", icon: Waves },
  { id: "mountains", name: "Mountains", icon: Mountain },
  { id: "castles", name: "Castles", icon: Castle },
  { id: "camping", name: "Camping", icon: Tent },
  { id: "boats", name: "Boats", icon: Sailboat },
]

export function Categories() {
  const [selectedCategory, setSelectedCategory] = useState("all")

  return (
    <div className="flex gap-4 overflow-x-auto pb-4 mb-8 scrollbar-hide">
      {categories.map((category) => {
        const Icon = category.icon
        return (
          <Button
            key={category.id}
            variant={selectedCategory === category.id ? "default" : "ghost"}
            className={`flex flex-col items-center gap-2 h-auto py-3 px-4 min-w-[80px] ${
              selectedCategory === category.id ? "bg-rose-500 hover:bg-rose-600 text-white" : "hover:bg-gray-100"
            }`}
            onClick={() => setSelectedCategory(category.id)}
          >
            <Icon className="h-6 w-6" />
            <span className="text-xs font-medium">{category.name}</span>
          </Button>
        )
      })}
    </div>
  )
}
