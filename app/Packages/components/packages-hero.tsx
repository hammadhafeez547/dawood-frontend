"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Search, Calendar, Users } from 'lucide-react'

export default function PackagesHero() {
  return (
    <section className="relative">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/placeholder.svg?height=800&width=1600"
          alt="Kaaba in Makkah"
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70" />
        <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-10" />
      </div>

      {/* Hero Content */}
      <div className="container mx-auto px-4 pt-32 pb-20 relative z-10">
        <div className="max-w-3xl mx-auto text-center text-white">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Premium Travel Packages for Your Spiritual Journey
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-24 h-1 bg-orange-500 mx-auto my-6"
          ></motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-lg text-gray-200 mb-8"
          >
            Discover our carefully crafted Hajj, Umrah, and Ziyarat packages designed to provide a comfortable,
            meaningful, and spiritually enriching experience.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Link href="/book-now">
              <Button className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 rounded-full">
                Book Now
              </Button>
            </Link>
            <Link href="#packages">
              <Button variant="outline" className="border-white bg-black text-white hover:bg-white/10 px-6 py-2 rounded-full">
                Explore Packages
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Search Box */}
      <div className="container mx-auto px-4 relative z-10 -mt-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="bg-white rounded-xl shadow-xl p-6 max-w-4xl mx-auto"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                <Search className="h-4 w-4 text-orange-500" />
                Package Type
              </label>
              <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all">
                <option value="">Select Package Type</option>
                <option value="hajj">Hajj Packages</option>
                <option value="umrah">Umrah Packages</option>
                <option value="ziyarat">Ziyarat Tours</option>
                <option value="transportation">Transportation</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                <Calendar className="h-4 w-4 text-orange-500" />
                Travel Date
              </label>
              <input
                type="date"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                <Users className="h-4 w-4 text-orange-500" />
                Travelers
              </label>
              <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all">
                <option value="1">1 Person</option>
                <option value="2">2 People</option>
                <option value="3">3 People</option>
                <option value="4">4 People</option>
                <option value="5+">5+ People</option>
              </select>
            </div>
          </div>
          <div className="mt-4 flex justify-center">
            <Button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-2 rounded-full w-full md:w-auto">
              Search Packages
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
