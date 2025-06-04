"use client"
import { JSXElementConstructor, Key, ReactElement, ReactNode, ReactPortal, useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Car, Users, Gauge, Calendar, CheckCircle, Filter, Search, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import Footer from "@/app/components/Footer"
import Navbar from "@/app/components/Navbar"


export default function VehiclesPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCapacity, setSelectedCapacity] = useState<number | null>(null)
  const [selectedVehicle, setSelectedVehicle] = useState<any>(null)

  // Vehicle data
  const vehicles = [
    {
      id: 1,
      name: "Toyota Camry",
      category: "sedan",
      capacity: 4,
      features: ["Air Conditioning", "Comfortable Seating", "Luggage Space", "USB Charging", "Bottled Water"],
      description:
        "A comfortable sedan perfect for small groups or families. The Toyota Camry offers a smooth ride with ample space for luggage.",
      image: "/placeholder.svg?height=400&width=600",
      rating: 4.8,
      reviews: 124,
      pricePerDay: "$80",
      year: 2022,
      popular: true,
    },
    {
      id: 2,
      name: "Hyundai H1",
      category: "van",
      capacity: 7,
      features: [
        "Air Conditioning",
        "Comfortable Seating",
        "Spacious Luggage Area",
        "USB Charging",
        "Bottled Water",
        "WiFi Available",
      ],
      description:
        "A spacious van ideal for medium-sized groups. The Hyundai H1 provides comfort and space for longer journeys between holy sites.",
      image: "/placeholder.svg?height=400&width=600",
      rating: 4.7,
      reviews: 98,
      pricePerDay: "$120",
      year: 2021,
    },
    {
      id: 3,
      name: "Toyota Hiace",
      category: "van",
      capacity: 11,
      features: [
        "Air Conditioning",
        "Reclining Seats",
        "Large Luggage Space",
        "USB Charging",
        "Bottled Water",
        "WiFi Available",
        "Reading Lights",
      ],
      description:
        "A larger van perfect for bigger groups or families traveling together. The Toyota Hiace offers ample space and comfort for all passengers.",
      image: "/placeholder.svg?height=400&width=600",
      rating: 4.9,
      reviews: 156,
      pricePerDay: "$150",
      year: 2023,
      popular: true,
    },
    {
      id: 4,
      name: "GMC Yukon XL",
      category: "suv",
      capacity: 6,
      features: [
        "Premium Air Conditioning",
        "Leather Seating",
        "Spacious Luggage Area",
        "USB & Wireless Charging",
        "Premium Refreshments",
        "WiFi Available",
        "Entertainment System",
      ],
      description:
        "A luxury SUV offering premium comfort and amenities. The GMC Yukon XL is perfect for those seeking a high-end transportation experience.",
      image: "/placeholder.svg?height=400&width=600",
      rating: 5.0,
      reviews: 87,
      pricePerDay: "$200",
      year: 2023,
      popular: true,
    },
    {
      id: 5,
      name: "Toyota Coaster",
      category: "bus",
      capacity: 23,
      features: [
        "Air Conditioning",
        "Comfortable Seating",
        "Large Luggage Space",
        "USB Charging",
        "Bottled Water",
        "WiFi Available",
        "Reading Lights",
        "Microphone System",
      ],
      description:
        "A mini-bus ideal for larger groups. The Toyota Coaster provides comfortable transportation for pilgrim groups traveling together.",
      image: "/placeholder.svg?height=400&width=600",
      rating: 4.6,
      reviews: 112,
      pricePerDay: "$250",
      year: 2022,
    },
    {
      id: 6,
      name: "Hyundai Sonata",
      category: "sedan",
      capacity: 4,
      features: ["Air Conditioning", "Comfortable Seating", "Luggage Space", "USB Charging", "Bottled Water"],
      description:
        "A reliable sedan offering comfort and efficiency. The Hyundai Sonata is perfect for small families or couples.",
      image: "/placeholder.svg?height=400&width=600",
      rating: 4.7,
      reviews: 93,
      pricePerDay: "$75",
      year: 2022,
    },
    {
      id: 7,
      name: "Hyundai Staria",
      category: "van",
      capacity: 11,
      features: [
        "Air Conditioning",
        "Premium Seating",
        "Spacious Luggage Area",
        "USB Charging",
        "Bottled Water",
        "WiFi Available",
        "Reading Lights",
        "Modern Design",
      ],
      description:
        ".A modern van with premium features and spacious interior. The Hyundai Staria offers comfort and style for group travel",
      image: "/placeholder.svg?height=400&width=600",
      rating: 4.9,
      reviews: 76,
      pricePerDay: "$160",
      year: 2023,
    },
    {
      id: 8,
      name: "Mercedes-Benz S-Class",
      category: "luxury",
      capacity: 3,
      features: [
        "Premium Climate Control",
        "Luxury Leather Seating",
        "Executive Luggage Space",
        "Wireless Charging",
        "Premium Refreshments",
        "High-Speed WiFi",
        "Entertainment System",
        "Privacy Partition",
      ],
      description:
        "The ultimate luxury sedan for VIP transportation. The Mercedes-Benz S-Class offers unparalleled comfort and prestige.",
      image: "/placeholder.svg?height=400&width=600",
      rating: 5.0,
      reviews: 64,
      pricePerDay: "$350",
      year: 2023,
      popular: true,
    },
    {
      id: 9,
      name: "Toyota Land Cruiser",
      category: "suv",
      capacity: 5,
      features: [
        "Dual-Zone Air Conditioning",
        "Comfortable Seating",
        "Ample Luggage Space",
        "USB Charging",
        "Bottled Water",
        "WiFi Available",
        "Rugged Reliability",
      ],
      description:
        "A reliable and comfortable SUV perfect for all terrains. The Toyota Land Cruiser combines luxury with practicality.",
      image: "/placeholder.svg?height=400&width=600",
      rating: 4.8,
      reviews: 108,
      pricePerDay: "$180",
      year: 2022,
    },
  ]

  // Filter vehicles based on search and capacity
  const filteredVehicles = vehicles.filter((vehicle) => {
    const matchesSearch = vehicle.name.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCapacity = selectedCapacity ? vehicle.capacity >= selectedCapacity : true
    return matchesSearch && matchesCapacity
  })

  // Get popular vehicles
  const popularVehicles = vehicles.filter((vehicle) => vehicle.popular)

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  }

  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-gray-900 to-gray-800 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/madina2.jpg" alt="Background" fill sizes="100vw" className="object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-black/80" />
          <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-10" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center text-white max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Vehicle Fleet</h1>
            <div className="w-24 h-1 bg-orange-500 mx-auto my-6"></div>
            <p className="text-lg text-gray-300 mb-8">
              Explore our modern fleet of comfortable and reliable vehicles for your pilgrimage journey. From sedans to
              luxury vans, we have the perfect transportation solution for your needs.
            </p>

            <div className="max-w-xl mx-auto flex flex-col sm:flex-row gap-4">
              <div className="relative flex-grow">
                <Input
                  type="text"
                  placeholder="Search vehicles..."
                  className="pl-10 py-6 bg-white/10 backdrop-blur-sm border-white/20 text-white placeholder:text-gray-400"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              </div>
              <div className="relative">
                <select
                  className="h-12 px-4 rounded-md bg-white/10 backdrop-blur-sm border border-white/20 text-white appearance-none pr-10 w-full sm:w-auto"
                  onChange={(e) => setSelectedCapacity(e.target.value ? Number.parseInt(e.target.value) : null)}
                  value={selectedCapacity || ""}
                >
                  <option value="">All Capacities</option>
                  <option value="4">4+ Passengers</option>
                  <option value="6">6+ Passengers</option>
                  <option value="10">10+ Passengers</option>
                  <option value="20">20+ Passengers</option>
                </select>
                <Filter className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Popular Vehicles */}
      {!searchQuery && !selectedCapacity && (
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-800">Popular Vehicles</h2>
              <div className="w-24 h-1 bg-orange-500 mx-auto my-4"></div>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Our most requested vehicles, known for their comfort, reliability, and excellent service.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {popularVehicles.map((vehicle, index) => (
                <motion.div
                  key={vehicle.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group"
                >
                  <div className="relative h-56">
                    <Image
                      src={vehicle.image || "/placeholder.svg"}
                      alt={vehicle.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-orange-600 hover:bg-orange-700">Popular</Badge>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-bold text-gray-800">{vehicle.name}</h3>
                      <div className="text-lg font-bold text-orange-600">{vehicle.pricePerDay}</div>
                    </div>
                    <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
                      <div className="flex items-center gap-1">
                        <Users className="h-4 w-4 text-orange-500" />
                        <span>{vehicle.capacity} Passengers</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Car className="h-4 w-4 text-orange-500" />
                        <span>{vehicle.category.charAt(0).toUpperCase() + vehicle.category.slice(1)}</span>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-6 line-clamp-2">{vehicle.description}</p>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <div className="flex">
                          {[1, 2, 3, 4, 5].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-4 w-4 ${
                                i < Math.floor(vehicle.rating) ? "text-yellow-400 fill-current" : "text-gray-300"
                              }`}
                            />
                          ))}
                        </div>
                        <span className="text-sm text-gray-500 ml-2">
                          {vehicle.rating} ({vehicle.reviews} reviews)
                        </span>
                      </div>
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button
                            className="bg-orange-600 hover:bg-orange-700"
                            onClick={() => setSelectedVehicle(vehicle)}
                          >
                            View Details
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[600px]">
                          <DialogHeader>
                            <DialogTitle>{selectedVehicle?.name}</DialogTitle>
                            <DialogDescription>Vehicle details and specifications</DialogDescription>
                          </DialogHeader>
                          {selectedVehicle && (
                            <div className="mt-4">
                              <div className="relative h-64 w-full mb-4 rounded-lg overflow-hidden">
                                <Image
                                  src={selectedVehicle.image || "/placeholder.svg"}
                                  alt={selectedVehicle.name}
                                  fill
                                  className="object-cover"
                                />
                              </div>
                              <div className="grid grid-cols-2 gap-4 mb-4">
                                <div className="flex items-center gap-2">
                                  <Users className="h-5 w-5 text-orange-500" />
                                  <div>
                                    <p className="text-sm text-gray-500">Capacity</p>
                                    <p className="font-medium">{selectedVehicle.capacity} Passengers</p>
                                  </div>
                                </div>
                                <div className="flex items-center gap-2">
                                  <Car className="h-5 w-5 text-orange-500" />
                                  <div>
                                    <p className="text-sm text-gray-500">Category</p>
                                    <p className="font-medium">
                                      {selectedVehicle.category.charAt(0).toUpperCase() +
                                        selectedVehicle.category.slice(1)}
                                    </p>
                                  </div>
                                </div>
                                <div className="flex items-center gap-2">
                                  <Calendar className="h-5 w-5 text-orange-500" />
                                  <div>
                                    <p className="text-sm text-gray-500">Year</p>
                                    <p className="font-medium">{selectedVehicle.year}</p>
                                  </div>
                                </div>
                                <div className="flex items-center gap-2">
                                  <Gauge className="h-5 w-5 text-orange-500" />
                                  <div>
                                    <p className="text-sm text-gray-500">Daily Rate</p>
                                    <p className="font-medium">{selectedVehicle.pricePerDay}</p>
                                  </div>
                                </div>
                              </div>
                              <p className="text-gray-600 mb-4">{selectedVehicle.description}</p>
                              <div className="mb-4">
                                <h4 className="font-medium text-gray-800 mb-2">Features:</h4>
                                <ul className="grid grid-cols-2 gap-x-4 gap-y-1">
                                  {selectedVehicle.features.map((feature: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined, i: Key | null | undefined) => (
                                    <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                                      <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                                      <span>{feature}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                              <div className="flex justify-between items-center mt-6">
                                <div className="flex">
                                  {[1, 2, 3, 4, 5].map((_, i) => (
                                    <Star
                                      key={i}
                                      className={`h-5 w-5 ${
                                        i < Math.floor(selectedVehicle.rating)
                                          ? "text-yellow-400 fill-current"
                                          : "text-gray-300"
                                      }`}
                                    />
                                  ))}
                                  <span className="text-sm text-gray-500 ml-2">
                                    {selectedVehicle.rating} ({selectedVehicle.reviews} reviews)
                                  </span>
                                </div>
                                <Button className="bg-orange-600 hover:bg-orange-700">Book Now</Button>
                              </div>
                            </div>
                          )}
                        </DialogContent>
                      </Dialog>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Vehicles */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-800">
              {searchQuery || selectedCapacity ? "Search Results" : "Our Complete Fleet"}
            </h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto my-4"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {searchQuery || selectedCapacity
                ? `Found ${filteredVehicles.length} vehicles matching your criteria`
                : "Browse our comprehensive range of vehicles designed to make your journey comfortable and convenient."}
            </p>
          </motion.div>

          <Tabs defaultValue="all" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="bg-white/80 backdrop-blur-sm">
                <TabsTrigger value="all">All Vehicles</TabsTrigger>
                <TabsTrigger value="sedan">Sedans</TabsTrigger>
                <TabsTrigger value="suv">SUVs</TabsTrigger>
                <TabsTrigger value="van">Vans</TabsTrigger>
                <TabsTrigger value="bus">Buses</TabsTrigger>
                <TabsTrigger value="luxury">Luxury</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="all" className="mt-0">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredVehicles.map((vehicle, index) => (
                  <motion.div
                    key={vehicle.id}
                    custom={index}
                    initial="hidden"
                    animate="visible"
                    variants={fadeIn}
                    className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow group"
                  >
                    <div className="relative h-48">
                      <Image
                        src={vehicle.image || "/placeholder.svg"}
                        alt={vehicle.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-lg font-bold text-gray-800">{vehicle.name}</h3>
                        <div className="text-lg font-bold text-orange-600">{vehicle.pricePerDay}</div>
                      </div>
                      <div className="flex items-center gap-4 mb-3 text-sm text-gray-600">
                        <div className="flex items-center gap-1">
                          <Users className="h-4 w-4 text-orange-500" />
                          <span>{vehicle.capacity} Passengers</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4 text-orange-500" />
                          <span>{vehicle.year}</span>
                        </div>
                      </div>
                      <p className="text-gray-600 mb-4 text-sm line-clamp-2">{vehicle.description}</p>
                      <div className="flex justify-between items-center">
                        <div className="flex items-center">
                          <div className="flex">
                            {[1, 2, 3, 4, 5].map((_, i) => (
                              <Star
                                key={i}
                                className={`h-3 w-3 ${
                                  i < Math.floor(vehicle.rating) ? "text-yellow-400 fill-current" : "text-gray-300"
                                }`}
                              />
                            ))}
                          </div>
                          <span className="text-xs text-gray-500 ml-1">{vehicle.rating}</span>
                        </div>
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button
                              variant="outline"
                              className="text-orange-600 border-orange-200 hover:bg-orange-50"
                              onClick={() => setSelectedVehicle(vehicle)}
                            >
                              View Details
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="sm:max-w-[600px]">
                            <DialogHeader>
                              <DialogTitle>{selectedVehicle?.name}</DialogTitle>
                              <DialogDescription>Vehicle details and specifications</DialogDescription>
                            </DialogHeader>
                            {selectedVehicle && (
                              <div className="mt-4">
                                <div className="relative h-64 w-full mb-4 rounded-lg overflow-hidden">
                                  <Image
                                    src={selectedVehicle.image || "/placeholder.svg"}
                                    alt={selectedVehicle.name}
                                    fill
                                    className="object-cover"
                                  />
                                </div>
                                <div className="grid grid-cols-2 gap-4 mb-4">
                                  <div className="flex items-center gap-2">
                                    <Users className="h-5 w-5 text-orange-500" />
                                    <div>
                                      <p className="text-sm text-gray-500">Capacity</p>
                                      <p className="font-medium">{selectedVehicle.capacity} Passengers</p>
                                    </div>
                                  </div>
                                  <div className="flex items-center gap-2">
                                    <Car className="h-5 w-5 text-orange-500" />
                                    <div>
                                      <p className="text-sm text-gray-500">Category</p>
                                      <p className="font-medium">
                                        {selectedVehicle.category.charAt(0).toUpperCase() +
                                          selectedVehicle.category.slice(1)}
                                      </p>
                                    </div>
                                  </div>
                                  <div className="flex items-center gap-2">
                                    <Calendar className="h-5 w-5 text-orange-500" />
                                    <div>
                                      <p className="text-sm text-gray-500">Year</p>
                                      <p className="font-medium">{selectedVehicle.year}</p>
                                    </div>
                                  </div>
                                  <div className="flex items-center gap-2">
                                    <Gauge className="h-5 w-5 text-orange-500" />
                                    <div>
                                      <p className="text-sm text-gray-500">Daily Rate</p>
                                      <p className="font-medium">{selectedVehicle.pricePerDay}</p>
                                    </div>
                                  </div>
                                </div>
                                <p className="text-gray-600 mb-4">{selectedVehicle.description}</p>
                                <div className="mb-4">
                                  <h4 className="font-medium text-gray-800 mb-2">Features:</h4>
                                  <ul className="grid grid-cols-2 gap-x-4 gap-y-1">
                                    {selectedVehicle.features.map((feature: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined, i: Key | null | undefined) => (
                                      <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                                        <span>{feature}</span>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                                <div className="flex justify-between items-center mt-6">
                                  <div className="flex">
                                    {[1, 2, 3, 4, 5].map((_, i) => (
                                      <Star
                                        key={i}
                                        className={`h-5 w-5 ${
                                          i < Math.floor(selectedVehicle.rating)
                                            ? "text-yellow-400 fill-current"
                                            : "text-gray-300"
                                        }`}
                                      />
                                    ))}
                                    <span className="text-sm text-gray-500 ml-2">
                                      {selectedVehicle.rating} ({selectedVehicle.reviews} reviews)
                                    </span>
                                  </div>
                                  <Button className="bg-orange-600 hover:bg-orange-700">Book Now</Button>
                                </div>
                              </div>
                            )}
                          </DialogContent>
                        </Dialog>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            {["sedan", "suv", "van", "bus", "luxury"].map((category) => (
              <TabsContent key={category} value={category} className="mt-0">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredVehicles
                    .filter((vehicle) => vehicle.category === category)
                    .map((vehicle, index) => (
                      <motion.div
                        key={vehicle.id}
                        custom={index}
                        initial="hidden"
                        animate="visible"
                        variants={fadeIn}
                        className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow group"
                      >
                        <div className="relative h-48">
                          <Image
                            src={vehicle.image || "/placeholder.svg"}
                            alt={vehicle.name}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        <div className="p-6">
                          <div className="flex justify-between items-start mb-2">
                            <h3 className="text-lg font-bold text-gray-800">{vehicle.name}</h3>
                            <div className="text-lg font-bold text-orange-600">{vehicle.pricePerDay}</div>
                          </div>
                          <div className="flex items-center gap-4 mb-3 text-sm text-gray-600">
                            <div className="flex items-center gap-1">
                              <Users className="h-4 w-4 text-orange-500" />
                              <span>{vehicle.capacity} Passengers</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Calendar className="h-4 w-4 text-orange-500" />
                              <span>{vehicle.year}</span>
                            </div>
                          </div>
                          <p className="text-gray-600 mb-4 text-sm line-clamp-2">{vehicle.description}</p>
                          <div className="flex justify-between items-center">
                            <div className="flex items-center">
                              <div className="flex">
                                {[1, 2, 3, 4, 5].map((_, i) => (
                                  <Star
                                    key={i}
                                    className={`h-3 w-3 ${
                                      i < Math.floor(vehicle.rating) ? "text-yellow-400 fill-current" : "text-gray-300"
                                    }`}
                                  />
                                ))}
                              </div>
                              <span className="text-xs text-gray-500 ml-1">{vehicle.rating}</span>
                            </div>
                            <Dialog>
                              <DialogTrigger asChild>
                                <Button
                                  variant="outline"
                                  className="text-orange-600 border-orange-200 hover:bg-orange-50"
                                  onClick={() => setSelectedVehicle(vehicle)}
                                >
                                  View Details
                                </Button>
                              </DialogTrigger>
                              <DialogContent className="sm:max-w-[600px]">
                                <DialogHeader>
                                  <DialogTitle>{selectedVehicle?.name}</DialogTitle>
                                  <DialogDescription>Vehicle details and specifications</DialogDescription>
                                </DialogHeader>
                                {selectedVehicle && (
                                  <div className="mt-4">
                                    <div className="relative h-64 w-full mb-4 rounded-lg overflow-hidden">
                                      <Image
                                        src={selectedVehicle.image || "/placeholder.svg"}
                                        alt={selectedVehicle.name}
                                        fill
                                        className="object-cover"
                                      />
                                    </div>
                                    <div className="grid grid-cols-2 gap-4 mb-4">
                                      <div className="flex items-center gap-2">
                                        <Users className="h-5 w-5 text-orange-500" />
                                        <div>
                                          <p className="text-sm text-gray-500">Capacity</p>
                                          <p className="font-medium">{selectedVehicle.capacity} Passengers</p>
                                        </div>
                                      </div>
                                      <div className="flex items-center gap-2">
                                        <Car className="h-5 w-5 text-orange-500" />
                                        <div>
                                          <p className="text-sm text-gray-500">Category</p>
                                          <p className="font-medium">
                                            {selectedVehicle.category.charAt(0).toUpperCase() +
                                              selectedVehicle.category.slice(1)}
                                          </p>
                                        </div>
                                      </div>
                                      <div className="flex items-center gap-2">
                                        <Calendar className="h-5 w-5 text-orange-500" />
                                        <div>
                                          <p className="text-sm text-gray-500">Year</p>
                                          <p className="font-medium">{selectedVehicle.year}</p>
                                        </div>
                                      </div>
                                      <div className="flex items-center gap-2">
                                        <Gauge className="h-5 w-5 text-orange-500" />
                                        <div>
                                          <p className="text-sm text-gray-500">Daily Rate</p>
                                          <p className="font-medium">{selectedVehicle.pricePerDay}</p>
                                        </div>
                                      </div>
                                    </div>
                                    <p className="text-gray-600 mb-4">{selectedVehicle.description}</p>
                                    <div className="mb-4">
                                      <h4 className="font-medium text-gray-800 mb-2">Features:</h4>
                                      <ul className="grid grid-cols-2 gap-x-4 gap-y-1">
                                        {selectedVehicle.features.map((feature: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined, i: Key | null | undefined) => (
                                          <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                                            <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                                            <span>{feature}</span>
                                          </li>
                                        ))}
                                      </ul>
                                    </div>
                                    <div className="flex justify-between items-center mt-6">
                                      <div className="flex">
                                        {[1, 2, 3, 4, 5].map((_, i) => (
                                          <Star
                                            key={i}
                                            className={`h-5 w-5 ${
                                              i < Math.floor(selectedVehicle.rating)
                                                ? "text-yellow-400 fill-current"
                                                : "text-gray-300"
                                            }`}
                                          />
                                        ))}
                                        <span className="text-sm text-gray-500 ml-2">
                                          {selectedVehicle.rating} ({selectedVehicle.reviews} reviews)
                                        </span>
                                      </div>
                                      <Button className="bg-orange-600 hover:bg-orange-700">Book Now</Button>
                                    </div>
                                  </div>
                                )}
                              </DialogContent>
                            </Dialog>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-800">Why Choose Our Vehicles</h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto my-4"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our fleet is maintained to the highest standards to ensure your comfort, safety, and satisfaction
              throughout your journey.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <CheckCircle className="h-10 w-10 text-orange-500" />,
                title: "Regularly Maintained",
                description:
                  "All our vehicles undergo regular maintenance checks to ensure optimal performance and safety.",
              },
              {
                icon: <Users className="h-10 w-10 text-orange-500" />,
                title: "Professional Drivers",
                description:
                  "Our experienced drivers are knowledgeable, courteous, and trained to provide excellent service.",
              },
              {
                icon: <Car className="h-10 w-10 text-orange-500" />,
                title: "Modern Fleet",
                description:
                  "Our fleet consists of modern vehicles equipped with the latest amenities for your comfort.",
              },
              {
                icon: <Calendar className="h-10 w-10 text-orange-500" />,
                title: "Flexible Booking",
                description: "We offer flexible booking options to accommodate your schedule and transportation needs.",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-100"
              >
                <div className="mb-4 p-3 bg-orange-100 rounded-lg inline-block">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Process */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-800">How to Book</h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto my-4"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Booking a vehicle with us is simple and straightforward. Follow these easy steps to secure your
              transportation.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                title: "Choose Your Vehicle",
                description: "Browse our fleet and select the vehicle that best suits your needs and group size.",
              },
              {
                step: "02",
                title: "Select Dates",
                description: "Choose your pickup and return dates, along with your preferred pickup location.",
              },
              {
                step: "03",
                title: "Confirm Booking",
                description: "Review your booking details and confirm your reservation with a small deposit.",
              },
              {
                step: "04",
                title: "Enjoy Your Journey",
                description: "Our driver will meet you at the designated location, and you're ready to go!",
              },
            ].map((step, index) => (
              <motion.div
                key={index}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                className="bg-white rounded-lg overflow-hidden shadow-md relative"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-orange-500"></div>
                <div className="p-6">
                  <div className="text-3xl font-bold text-orange-500 mb-4">{step.step}</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-orange-600 to-orange-500 rounded-xl overflow-hidden shadow-xl">
            <div className="p-8 md:p-12 text-center text-white">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Book Your Transportation?</h2>
              <p className="text-white/90 mb-8 max-w-2xl mx-auto">
                Contact us today to reserve the perfect vehicle for your pilgrimage journey. Our team is ready to assist
                you with any questions or special requirements.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-white text-orange-600 hover:bg-gray-100">Book a Vehicle</Button>
                <Button variant="outline" className="text-white border-white/30 hover:bg-white/10">
                  Contact Our Team
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
