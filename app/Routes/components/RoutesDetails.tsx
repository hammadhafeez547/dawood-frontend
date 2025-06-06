"use client"
import { JSXElementConstructor, Key, ReactElement, ReactNode, ReactPortal, useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { MapPin, Clock, Users, Calendar, CheckCircle, Filter, Search, Star, ArrowRight } from "lucide-react"
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

import axios from "axios"
interface Route {
  id: number;
  name: string;
  distance: string;
  duration: string;
  stops: string[];
  description: string;
  image: string;
  price: string;
  popular?: boolean;
  features: string[];
}

import { useEffect } from "react"
import Navbar from "@/app/components/Navbar"
import Footer from "@/app/components/Footer"

export default function RoutesPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedRoute, setSelectedRoute] = useState<any>(null)

  // Route data
  const [routes, setRoutes] = useState<Route[]>([]);
    const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchRoutes();
  }, []);

  const fetchRoutes = async () => {
    try {
      const res = await axios.get("https://dawood-backend-oxho.vercel.app/routes/all-routes");
      setRoutes(res.data);
    } catch (error) {
      console.error(error);
      alert("Failed to fetch cars");        
    }
  };



  // Filter routes based on search
  const filteredRoutes = routes.filter((route) => {
    return route.name.toLowerCase().includes(searchQuery.toLowerCase())
  })

  // Get popular routes
  const popularRoutes = routes.filter((route) => route.popular)

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

      <section className="relative py-20 bg-gradient-to-b from-gray-900 to-gray-800 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/route-bg.jpg" alt="Background" fill sizes="100vw" className="object-cover opacity-30" />
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Transportation Routes</h1>
            <div className="w-24 h-1 bg-orange-500 mx-auto my-6"></div>
            <p className="text-lg text-gray-300 mb-8">
              Reliable transportation services connecting all holy sites and major locations in Saudi Arabia. 
              We specialize in pilgrim routes with comfort and convenience.
            </p>

            <div className="max-w-xl mx-auto">
              <div className="relative">
                <Input
                  type="text"
                  placeholder="Search routes..."
                  className="pl-10 py-6 bg-white/10 backdrop-blur-sm border-white/20 text-white placeholder:text-gray-400"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Popular Routes */}
      {!searchQuery && (
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-800">Popular Routes</h2>
              <div className="w-24 h-1 bg-orange-500 mx-auto my-4"></div>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Our most frequently booked routes for Hajj and Umrah pilgrims.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {popularRoutes.map((route, index) => (
                <motion.div
                  key={route.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group"
                >
                  <div className="relative h-56">
                    <Image
                      src={route.image || "/placeholder.svg"}
                      alt={route.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-orange-600 hover:bg-orange-700">Popular</Badge>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-bold text-gray-800">{route.name}</h3>
                      <div className="text-lg font-bold text-orange-600">{route.price}</div>
                    </div>
                    <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4 text-orange-500" />
                        <span>{route.distance}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4 text-orange-500" />
                        <span>{route.duration}</span>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-6 line-clamp-2">{route.description}</p>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        {route.stops.length > 0 && (
                          <span className="text-sm text-gray-500">
                            Stops: {route.stops.join(", ")}
                          </span>
                        )}
                      </div>
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button
                            className="bg-orange-600 hover:bg-orange-700"
                            onClick={() => setSelectedRoute(route)}
                          >
                            View Details
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[600px]">
                          <DialogHeader>
                            <DialogTitle>{selectedRoute?.name}</DialogTitle>
                            <DialogDescription>Route details and information</DialogDescription>
                          </DialogHeader>
                          {selectedRoute && (
                            <div className="mt-4">
                              <div className="relative h-64 w-full mb-4 rounded-lg overflow-hidden">
                                <Image
                                  src={selectedRoute.image || "/placeholder.svg"}
                                  alt={selectedRoute.name}
                                  fill
                                  className="object-cover"
                                />
                              </div>
                              <div className="grid grid-cols-2 gap-4 mb-4">
                                <div className="flex items-center gap-2">
                                  <MapPin className="h-5 w-5 text-orange-500" />
                                  <div>
                                    <p className="text-sm text-gray-500">Distance</p>
                                    <p className="font-medium">{selectedRoute.distance}</p>
                                  </div>
                                </div>
                                <div className="flex items-center gap-2">
                                  <Clock className="h-5 w-5 text-orange-500" />
                                  <div>
                                    <p className="text-sm text-gray-500">Duration</p>
                                    <p className="font-medium">{selectedRoute.duration}</p>
                                  </div>
                                </div>
                                <div className="flex items-center gap-2">
                                  <Users className="h-5 w-5 text-orange-500" />
                                  <div>
                                    <p className="text-sm text-gray-500">Price Range</p>
                                    <p className="font-medium">{selectedRoute.price}</p>
                                  </div>
                                </div>
                                {selectedRoute.stops.length > 0 && (
                                  <div className="flex items-center gap-2">
                                    <ArrowRight className="h-5 w-5 text-orange-500" />
                                    <div>
                                      <p className="text-sm text-gray-500">Stops</p>
                                      <p className="font-medium">{selectedRoute.stops.join(", ")}</p>
                                    </div>
                                  </div>
                                )}
                              </div>
                              <p className="text-gray-600 mb-4">{selectedRoute.description}</p>
                              <div className="mb-4">
                                <h4 className="font-medium text-gray-800 mb-2">Features:</h4>
                                <ul className="grid grid-cols-2 gap-x-4 gap-y-1">
                                  {selectedRoute.features.map((feature: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined, i: Key | null | undefined) => (
                                    <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                                      <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                                      <span>{feature}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                              <div className="flex justify-end mt-6">
                                <Button className="bg-orange-600 hover:bg-orange-700">Book This Route</Button>
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

      {/* All Routes */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-800">
              {searchQuery ? "Search Results" : "Our Complete Route Network"}
            </h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto my-4"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {searchQuery
                ? `Found ${filteredRoutes.length} routes matching your search`
                : "Comprehensive transportation services covering all essential locations for Hajj and Umrah pilgrims."}
            </p>
          </motion.div>

          <Tabs defaultValue="all" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="bg-white/80 backdrop-blur-sm">
                <TabsTrigger value="all">All Routes</TabsTrigger>
                <TabsTrigger value="hajj">Hajj Routes</TabsTrigger>
                <TabsTrigger value="umrah">Umrah Routes</TabsTrigger>
                <TabsTrigger value="airport">Airport Transfers</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="all" className="mt-0">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredRoutes.map((route, index) => (
                  <motion.div
                    key={route.id}
                    custom={index}
                    initial="hidden"
                    animate="visible"
                    variants={fadeIn}
                    className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow group"
                  >
                    <div className="relative h-48">
                      <Image
                        src={route.image || "/placeholder.svg"}
                        alt={route.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-lg font-bold text-gray-800">{route.name}</h3>
                        <div className="text-lg font-bold text-orange-600">{route.price}</div>
                      </div>
                      <div className="flex items-center gap-4 mb-3 text-sm text-gray-600">
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4 text-orange-500" />
                          <span>{route.distance}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4 text-orange-500" />
                          <span>{route.duration}</span>
                        </div>
                      </div>
                      <p className="text-gray-600 mb-4 text-sm line-clamp-2">{route.description}</p>
                      <div className="flex justify-between items-center">
                        {route.stops.length > 0 && (
                          <div className="text-xs text-gray-500">
                            Via: {route.stops.join(", ")}
                          </div>
                        )}
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button
                              variant="outline"
                              className="text-orange-600 border-orange-200 hover:bg-orange-50"
                              onClick={() => setSelectedRoute(route)}
                            >
                              View Details
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="sm:max-w-[600px]">
                            <DialogHeader>
                              <DialogTitle>{selectedRoute?.name}</DialogTitle>
                              <DialogDescription>Route details and information</DialogDescription>
                            </DialogHeader>
                            {selectedRoute && (
                              <div className="mt-4">
                                <div className="relative h-64 w-full mb-4 rounded-lg overflow-hidden">
                                  <Image
                                    src={selectedRoute.image || "/placeholder.svg"}
                                    alt={selectedRoute.name}
                                    fill
                                    className="object-cover"
                                  />
                                </div>
                                <div className="grid grid-cols-2 gap-4 mb-4">
                                  <div className="flex items-center gap-2">
                                    <MapPin className="h-5 w-5 text-orange-500" />
                                    <div>
                                      <p className="text-sm text-gray-500">Distance</p>
                                      <p className="font-medium">{selectedRoute.distance}</p>
                                    </div>
                                  </div>
                                  <div className="flex items-center gap-2">
                                    <Clock className="h-5 w-5 text-orange-500" />
                                    <div>
                                      <p className="text-sm text-gray-500">Duration</p>
                                      <p className="font-medium">{selectedRoute.duration}</p>
                                    </div>
                                  </div>
                                  <div className="flex items-center gap-2">
                                    <Users className="h-5 w-5 text-orange-500" />
                                    <div>
                                      <p className="text-sm text-gray-500">Price Range</p>
                                      <p className="font-medium">{selectedRoute.price}</p>
                                    </div>
                                  </div>
                                  {selectedRoute.stops.length > 0 && (
                                    <div className="flex items-center gap-2">
                                      <ArrowRight className="h-5 w-5 text-orange-500" />
                                      <div>
                                        <p className="text-sm text-gray-500">Stops</p>
                                        <p className="font-medium">{selectedRoute.stops.join(", ")}</p>
                                      </div>
                                    </div>
                                  )}
                                </div>
                                <p className="text-gray-600 mb-4">{selectedRoute.description}</p>
                                <div className="mb-4">
                                  <h4 className="font-medium text-gray-800 mb-2">Features:</h4>
                                  <ul className="grid grid-cols-2 gap-x-4 gap-y-1">
                                    {selectedRoute.features.map((feature: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined, i: Key | null | undefined) => (
                                      <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                                        <span>{feature}</span>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                                <div className="flex justify-end mt-6">
                                  <Button className="bg-orange-600 hover:bg-orange-700">Book This Route</Button>
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

            {["hajj", "umrah", "airport"].map((category) => (
              <TabsContent key={category} value={category} className="mt-0">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredRoutes
                    .filter((route) => {
                      if (category === "hajj") return route.name.includes("Mina") || route.name.includes("Arafat") || route.name.includes("Muzdalifah")
                      if (category === "umrah") return route.name.includes("Makkah") || route.name.includes("Madinah")
                      if (category === "airport") return route.name.includes("Airport")
                      return true
                    })
                    .map((route, index) => (
                      <motion.div
                        key={route.id}
                        custom={index}
                        initial="hidden"
                        animate="visible"
                        variants={fadeIn}
                        className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow group"
                      >
                        <div className="relative h-48">
                          <Image
                            src={route.image || "/placeholder.svg"}
                            alt={route.name}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        <div className="p-6">
                          <div className="flex justify-between items-start mb-2">
                            <h3 className="text-lg font-bold text-gray-800">{route.name}</h3>
                            <div className="text-lg font-bold text-orange-600">{route.price}</div>
                          </div>
                          <div className="flex items-center gap-4 mb-3 text-sm text-gray-600">
                            <div className="flex items-center gap-1">
                              <MapPin className="h-4 w-4 text-orange-500" />
                              <span>{route.distance}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock className="h-4 w-4 text-orange-500" />
                              <span>{route.duration}</span>
                            </div>
                          </div>
                          <p className="text-gray-600 mb-4 text-sm line-clamp-2">{route.description}</p>
                          <div className="flex justify-between items-center">
                            {route.stops.length > 0 && (
                              <div className="text-xs text-gray-500">
                                Via: {route.stops.join(", ")}
                              </div>
                            )}
                            <Dialog>
                              <DialogTrigger asChild>
                                <Button
                                  variant="outline"
                                  className="text-orange-600 border-orange-200 hover:bg-orange-50"
                                  onClick={() => setSelectedRoute(route)}
                                >
                                  View Details
                                </Button>
                              </DialogTrigger>
                              <DialogContent className="sm:max-w-[600px]">
                                <DialogHeader>
                                  <DialogTitle>{selectedRoute?.name}</DialogTitle>
                                  <DialogDescription>Route details and information</DialogDescription>
                                </DialogHeader>
                                {selectedRoute && (
                                  <div className="mt-4">
                                    <div className="relative h-64 w-full mb-4 rounded-lg overflow-hidden">
                                      <Image
                                        src={selectedRoute.image || "/placeholder.svg"}
                                        alt={selectedRoute.name}
                                        fill
                                        className="object-cover"
                                      />
                                    </div>
                                    <div className="grid grid-cols-2 gap-4 mb-4">
                                      <div className="flex items-center gap-2">
                                        <MapPin className="h-5 w-5 text-orange-500" />
                                        <div>
                                          <p className="text-sm text-gray-500">Distance</p>
                                          <p className="font-medium">{selectedRoute.distance}</p>
                                        </div>
                                      </div>
                                      <div className="flex items-center gap-2">
                                        <Clock className="h-5 w-5 text-orange-500" />
                                        <div>
                                          <p className="text-sm text-gray-500">Duration</p>
                                          <p className="font-medium">{selectedRoute.duration}</p>
                                        </div>
                                      </div>
                                      <div className="flex items-center gap-2">
                                        <Users className="h-5 w-5 text-orange-500" />
                                        <div>
                                          <p className="text-sm text-gray-500">Price Range</p>
                                          <p className="font-medium">{selectedRoute.price}</p>
                                        </div>
                                      </div>
                                      {selectedRoute.stops.length > 0 && (
                                        <div className="flex items-center gap-2">
                                          <ArrowRight className="h-5 w-5 text-orange-500" />
                                          <div>
                                            <p className="text-sm text-gray-500">Stops</p>
                                            <p className="font-medium">{selectedRoute.stops.join(", ")}</p>
                                          </div>
                                        </div>
                                      )}
                                    </div>
                                    <p className="text-gray-600 mb-4">{selectedRoute.description}</p>
                                    <div className="mb-4">
                                      <h4 className="font-medium text-gray-800 mb-2">Features:</h4>
                                      <ul className="grid grid-cols-2 gap-x-4 gap-y-1">
                                        {selectedRoute.features.map((feature: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined, i: Key | null | undefined) => (
                                          <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                                            <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                                            <span>{feature}</span>
                                          </li>
                                        ))}
                                      </ul>
                                    </div>
                                    <div className="flex justify-end mt-6">
                                      <Button className="bg-orange-600 hover:bg-orange-700">Book This Route</Button>
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
            <h2 className="text-3xl font-bold text-gray-800">Why Choose Our Routes</h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto my-4"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We specialize in pilgrim transportation with services designed specifically for Hajj and Umrah travelers.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <CheckCircle className="h-10 w-10 text-orange-500" />,
                title: "Pilgrim-Focused",
                description:
                  "Our routes and services are designed specifically for Hajj and Umrah pilgrims' unique needs.",
              },
              {
                icon: <Clock className="h-10 w-10 text-orange-500" />,
                title: "Timely Service",
                description:
                  "We understand the importance of timing during Hajj and ensure you reach each destination on schedule.",
              },
              {
                icon: <MapPin className="h-10 w-10 text-orange-500" />,
                title: "Route Expertise",
                description:
                  "Our drivers know all the holy sites and best routes to avoid congestion during peak times.",
              },
              {
                icon: <Users className="h-10 w-10 text-orange-500" />,
                title: "Group Accommodations",
                description:
                  "We offer vehicles of all sizes to accommodate individuals, families, and large groups.",
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
            <h2 className="text-3xl font-bold text-gray-800">How to Book a Route</h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto my-4"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Simple steps to secure your transportation for a hassle-free pilgrimage experience.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                title: "Select Your Route",
                description: "Choose from our comprehensive list of routes between holy sites and key locations.",
              },
              {
                step: "02",
                title: "Choose Vehicle",
                description: "Select the vehicle type that suits your group size and comfort preferences.",
              },
              {
                step: "03",
                title: "Pick Date & Time",
                description: "Specify your travel date and preferred departure time.",
              },
              {
                step: "04",
                title: "Confirm Booking",
                description: "Complete your booking and receive instant confirmation with all details.",
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
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Need Help Choosing a Route?</h2>
              <p className="text-white/90 mb-8 max-w-2xl mx-auto">
                Our transportation specialists are available 24/7 to help you select the best routes and vehicles for
                your pilgrimage journey.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-white text-orange-600 hover:bg-gray-100">
                  Contact Our Team
                </Button>
                <Button variant="outline" className="text-white border-white/30 hover:bg-white/10">
                  WhatsApp Chat
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

