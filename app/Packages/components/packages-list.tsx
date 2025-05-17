"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, Users, MapPin, Star, Coffee, Plane, Car, Hotel } from 'lucide-react'

// Package type definition
type Package = {
  id: string
  title: string
  type: "hajj" | "umrah" | "ziyarat" | "transportation"
  price: number
  duration: string
  image: string
  location: string
  rating: number
  featured?: boolean
  popular?: boolean
  description: string
  includes: string[]
  whatsappMessage: string 
}


// Sample packages data
const services = [
  {
    id: "ziyarat-makkah",
    title: "Makkah Ziyarat Tour",
    type: "ziyarat",
    price: 280, // SAR
    duration: "Half day",
    image: "/placeholder.svg?height=400&width=600",
    location: "Makkah",
    rating: 4.6,
    description:
      "Visit the historical and religious sites of Makkah with our guided Ziyarat tour, including Jabal al-Noor, Jabal Thawr, and other significant locations.",
    includes: [
      "Air-conditioned transportation",
      "English-speaking religious guide",
      "Entrance fees",
      "Bottled water",
      "Pick-up and drop-off at your hotel",
    ],
    whatsappMessage:
      "Hello, I am interested in your Makkah Ziyarat Tour for 280 SAR. Please share more details. Thank you!",
  },
  {
    id: "ziyarat-madinah",
    title: "Madinah Ziyarat Tour",
    type: "ziyarat",
    price: 340, // SAR
    duration: "Full day",
    image: "/placeholder.svg?height=400&width=600",
    location: "Madinah",
    rating: 4.7,
    description:
      "Explore the historical sites of Madinah with our comprehensive Ziyarat tour, including Masjid Quba, Masjid Qiblatain, and Mount Uhud.",
    includes: [
      "Air-conditioned transportation",
      "English-speaking religious guide",
      "Entrance fees",
      "Lunch included",
      "Bottled water",
      "Pick-up and drop-off at your hotel",
    ],
    whatsappMessage:
      "Hello, I am interested in your Madinah Ziyarat Tour for 340 SAR. Please share more details. Thank you!",
  },
  {
    id: "transport-makkah-madinah",
    title: "Makkah to Madinah Transfer",
    type: "transportation",
    price: 450, // SAR
    duration: "One-way",
    image: "/placeholder.svg?height=400&width=600",
    location: "Makkah to Madinah",
    rating: 4.8,
    popular: true,
    description:
      "Comfortable transportation service between Makkah and Madinah with experienced drivers familiar with the route.",
    includes: [
      "Luxury van or sedan",
      "Professional driver",
      "Air-conditioned vehicle",
      "Bottled water",
      "Flexible pick-up time",
      "Door-to-door service",
    ],
    whatsappMessage:
      "Hello, I am interested in your Makkah to Madinah Transfer service for 450 SAR. Please provide further details. Thank you!",
  },
  {
    id: "transport-airport",
    title: "Airport Transfer Service",
    type: "transportation",
    price: 190, // SAR
    duration: "One-way",
    image: "/placeholder.svg?height=400&width=600",
    location: "Jeddah/Madinah Airport",
    rating: 4.6,
    description:
      "Convenient airport transfer service between Jeddah Airport and your hotel in Makkah or Madinah.",
    includes: [
      "Meet and greet at airport",
      "Professional driver",
      "Air-conditioned vehicle",
      "Bottled water",
      "Flight tracking",
      "24/7 customer support",
    ],
    whatsappMessage:
      "Hello, I am interested in your Airport Transfer Service for 190 SAR. Please share more information. Thank you!",
  },
];



export default function PackagesList() {
  const [activeFilter, setActiveFilter] = useState<string>("all")

  const filteredPackages = services.filter((pkg) => {
    if (activeFilter === "all") return true
    if (activeFilter === "popular") return pkg.popular
    return pkg.type === activeFilter
  })

  return (
    <section className="py-20" id="packages">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold text-gray-900 mb-4"
          >
            Explore Our Packages
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-24 h-1 bg-orange-500 mx-auto mb-6"
          ></motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-gray-600 max-w-2xl mx-auto"
          >
            Choose from our wide range of carefully designed packages tailored to provide you with the best spiritual
            journey experience.
          </motion.p>
        </div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          <Button
            variant={activeFilter === "all" ? "default" : "outline"}
            className={
              activeFilter === "all"
                ? "bg-orange-600 hover:bg-orange-700 text-white"
                : "text-gray-700 hover:text-orange-600"
            }
            onClick={() => setActiveFilter("all")}
          >
            All Packages
          </Button>
          <Button
            variant={activeFilter === "featured" ? "default" : "outline"}
            className={
              activeFilter === "featured"
                ? "bg-orange-600 hover:bg-orange-700 text-white"
                : "text-gray-700 hover:text-orange-600"
            }
            onClick={() => setActiveFilter("featured")}
          >
            Featured
          </Button>
          <Button
            variant={activeFilter === "popular" ? "default" : "outline"}
            className={
              activeFilter === "popular"
                ? "bg-orange-600 hover:bg-orange-700 text-white"
                : "text-gray-700 hover:text-orange-600"
            }
            onClick={() => setActiveFilter("popular")}
          >
            Popular
          </Button>
          <Button
            variant={activeFilter === "hajj" ? "default" : "outline"}
            className={
              activeFilter === "hajj"
                ? "bg-orange-600 hover:bg-orange-700 text-white"
                : "text-gray-700 hover:text-orange-600"
            }
            onClick={() => setActiveFilter("hajj")}
          >
            Hajj
          </Button>
          <Button
            variant={activeFilter === "umrah" ? "default" : "outline"}
            className={
              activeFilter === "umrah"
                ? "bg-orange-600 hover:bg-orange-700 text-white"
                : "text-gray-700 hover:text-orange-600"
            }
            onClick={() => setActiveFilter("umrah")}
          >
            Umrah
          </Button>
          <Button
            variant={activeFilter === "ziyarat" ? "default" : "outline"}
            className={
              activeFilter === "ziyarat"
                ? "bg-orange-600 hover:bg-orange-700 text-white"
                : "text-gray-700 hover:text-orange-600"
            }
            onClick={() => setActiveFilter("ziyarat")}
          >
            Ziyarat
          </Button>
          <Button
            variant={activeFilter === "transportation" ? "default" : "outline"}
            className={
              activeFilter === "transportation"
                ? "bg-orange-600 hover:bg-orange-700 text-white"
                : "text-gray-700 hover:text-orange-600"
            }
            onClick={() => setActiveFilter("transportation")}
          >
            Transportation
          </Button>
        </motion.div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPackages.map((pkg, index) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * (index % 3) }}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow border border-gray-100"
            >
              <div className="relative h-56">
                <Image src={pkg.image || "/placeholder.svg"} alt={pkg.title} fill className="object-cover" />
              
                {pkg.popular && (
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-green-600 hover:bg-green-700 text-white">Popular</Badge>
                  </div>
                )}
                <div className="absolute bottom-4 right-4 bg-white px-2 py-1 rounded-md text-sm font-medium text-gray-900 flex items-center">
                  <Star className="h-4 w-4 text-yellow-500 mr-1" fill="currentColor" />
                  {pkg.rating}
                </div>
              </div>

              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-gray-900">{pkg.title}</h3>
                  <div className="text-orange-600 font-bold">
                    ${pkg.price}
                    <span className="text-sm text-gray-500 font-normal">/person</span>
                  </div>
                </div>

                <div className="flex items-center text-gray-500 text-sm mb-4">
                  <MapPin className="h-4 w-4 mr-1 text-orange-500" />
                  {pkg.location}
                </div>

                <p className="text-gray-600 mb-4 line-clamp-2">{pkg.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  <div className="flex items-center text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
                    <Clock className="h-3.5 w-3.5 mr-1 text-orange-500" />
                    {pkg.duration}
                  </div>
                  {pkg.type === "hajj" || pkg.type === "umrah" ? (
                    <div className="flex items-center text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
                      <Plane className="h-3.5 w-3.5 mr-1 text-orange-500" />
                      Flights Included
                    </div>
                  ) : null}
                  {pkg.includes.some((item) => item.includes("hotel")) && (
                    <div className="flex items-center text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
                      <Hotel className="h-3.5 w-3.5 mr-1 text-orange-500" />
                      Hotel Stay
                    </div>
                  )}
                </div>

                <div className="space-y-2 mb-4">
                  <h4 className="text-sm font-medium text-gray-700">Package Includes:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {pkg.includes.slice(0, 3).map((item, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        {item}
                      </li>
                    ))}
                    {pkg.includes.length > 3 && (
                      <li className="text-orange-600 text-xs font-medium">+{pkg.includes.length - 3} more inclusions</li>
                    )}
                  </ul>
                </div>

                <div className="flex justify-between items-center">
                  <Link href={`/packages/${pkg.id}`}>
                    <Button variant="outline" className="text-orange-600 border-orange-200 hover:bg-orange-50">
                      View Details
                    </Button>
                  </Link>
                 <a
  href={`https://wa.me/966580563933?text=${encodeURIComponent(pkg.whatsappMessage)}`}
  target="_blank"
  rel="noopener noreferrer"
>
  <Button className="bg-green-600 hover:bg-green-700 text-white">Contact on WhatsApp</Button>
</a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredPackages.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">No packages found matching your criteria.</p>
          </div>
        )}

        {/* View All Button */}
        {activeFilter !== "all" && filteredPackages.length > 0 && (
          <div className="text-center mt-12">
            <Button
              variant="outline"
              className="text-orange-600 border-orange-200 hover:bg-orange-50"
              onClick={() => setActiveFilter("all")}
            >
              View All Packages
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}
