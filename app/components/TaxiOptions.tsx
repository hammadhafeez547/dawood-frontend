"use client"

import Image from "next/image"
import { Users, Briefcase, ChevronRight, Star, Shield, Clock } from "lucide-react"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import axios from "axios"

export default function TaxiOptions() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
    const [cars, setCars] = useState<any[]>([]);

   useEffect(() => {
      fetchCars();
        

    }, []);
  
    const fetchCars = async () => {
      try {
        const res = await axios.get("https://dawood-backend-five.vercel.app/cars/all-cars");
              console.log("Cars loaded:", res.data);

        setCars(res.data);
        console.log(cars);
        
      } catch (error) {
        console.error(error);
        alert("Failed to fetch cars");
      }
    };


  // const vehicles = [
  //   {
  //     id: 1,
  //     name: "Sonata",
  //     image: "/1.png",
  //     people: 3,
  //     luggage: "3 Luggage",
  //     category: "sedan",
  //     rating: 4.8,
  //     features: ["Air Conditioning", "Free WiFi", "Bottled Water"],
  //     price: "SAR 150",
  //     popular: true,
  //   },
  //   {
  //     id: 2,
  //     name: "Hiace",
  //     image: "/2.png",
  //     people: 11,
  //     luggage: "15 luggage",
  //     category: "van",
  //     rating: 4.7,
  //     features: ["Air Conditioning", "Free WiFi", "Spacious"],
  //     price: "SAR 350",
  //     popular: true,
  //   },
  //   {
  //     id: 3,
  //     name: "GMC Yukon XL",
  //     image: "/3.png",
  //     people: 7,
  //     luggage: "7 Luggage",
  //     category: "suv",
  //     rating: 4.9,
  //     features: ["Premium Interior", "Free WiFi", "Refreshments"],
  //     price: "SAR 450",
  //     popular: true,
  //   },
  //   {
  //     id: 4,
  //     name: "H1 Hyundai",
  //     image: "/7.png",
  //     people: 4,
  //     luggage: "3 Luggage",
  //     category: "van",
  //     rating: 4.6,
  //     features: ["Air Conditioning", "Free WiFi", "Comfortable Seating"],
  //     price: "SAR 250",
  //   },
  //   {
  //     id: 5,
  //     name: "Camry",
  //     image: "/4.png",
  //     people: 3,
  //     luggage: "3 Luggage",
  //     category: "sedan",
  //     rating: 4.7,
  //     features: ["Air Conditioning", "Free WiFi", "Bottled Water"],
  //     price: "SAR 140",
  //   },
  //   {
  //     id: 6,
  //     name: "Coaster",
  //     image: "/5.png",
  //     people: 15,
  //     luggage: "20 Luggage",
  //     category: "bus",
  //     rating: 4.8,
  //     features: ["Air Conditioning", "Free WiFi", "Large Storage"],
  //     price: "SAR 550",
  //   },
  //   {
  //     id: 7,
  //     name: "Staria",
  //     image: "/6.png",
  //     people: 7,
  //     luggage: "7 Luggage",
  //     category: "van",
  //     rating: 4.8,
  //     features: ["Premium Interior", "Free WiFi", "USB Charging"],
  //     price: "SAR 350",
  //   },
  // ]

  const filteredVehicles =
    selectedCategory === "all" ? cars : cars.filter((vehicle) => vehicle.category === selectedCategory)

  const categories = [
    { id: "all", name: "All Vehicles" },
    { id: "sedan", name: "Sedans" },
    { id: "suv", name: "SUVs" },
    { id: "van", name: "Vans" },
    { id: "bus", name: "Buses" },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-orange-50 to-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-orange-100 rounded-full opacity-30 -translate-x-20 -translate-y-20"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-orange-100 rounded-full opacity-30 -translate-x-40 translate-y-40"></div>

      <div className="container mx-auto relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1 bg-orange-100 text-orange-600 rounded-full text-sm font-medium mb-4">
            Premium Transportation
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Our Premium Fleet</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Experience comfort and luxury with our diverse range of vehicles tailored for couples, families, and groups.
          </p>
          <div className="w-20 h-1 bg-orange-500 mx-auto mt-6"></div>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                selectedCategory === category.id
                  ? "bg-orange-500 text-white shadow-md"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              {category.name}
            </button>
          ))}
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {filteredVehicles.map((vehicle) => (
            <motion.div
              key={vehicle.id}
              className="group relative rounded-xl overflow-hidden bg-white shadow-lg transition-all duration-300"
              style={{
                boxShadow:
                  hoveredCard === vehicle.id
                    ? "0 20px 25px -5px rgba(249, 115, 22, 0.2), 0 8px 10px -6px rgba(249, 115, 22, 0.2)"
                    : "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)",
              }}
              onMouseEnter={() => setHoveredCard(vehicle.id)}
              onMouseLeave={() => setHoveredCard(null)}
              variants={item}
              whileHover={{ y: -5 }}
            >
              {/* Popular tag */}
              {vehicle.popular && (
                <div className="absolute top-4 left-4 z-20">
                  <div className="bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm flex items-center gap-1">
                    <Star className="w-3 h-3" />
                    Popular Choice
                  </div>
                </div>
              )}

              <div className="relative h-56 bg-gradient-to-r from-orange-500 to-orange-400 overflow-hidden">
                {/* Company logo in top right */}
                <div className="absolute top-3 right-3 w-16 h-16 z-10">
                  <div className="relative w-full h-full">
                    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                      <path d="M32 8L40 24L56 32L40 40L32 56L24 40L8 32L24 24L32 8Z" fill="#1A1A4B" />
                      <path d="M32 16L36 24L44 28L36 32L32 40L28 32L20 28L28 24L32 16Z" fill="#F9B233" />
                    </svg>
                    <div className="absolute bottom-0 left-0 right-0 text-center text-[6px] text-white font-bold">
                      DAWOOD TOURS
                    </div>
                  </div>
                </div>

                {/* Vehicle image */}
                <div className="absolute inset-0 flex items-center justify-center transform transition-transform duration-500 group-hover:scale-110">
                  <Image
                    src={vehicle.imageUrl || "/placeholder.svg?height=200&width=300"}
                    alt={vehicle.name}
                    width={300}
                    height={200}
                    className="object-contain p-2"
                  />
                </div>

                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-gray-900">{vehicle.name}</h3>
                  <div className="flex items-center bg-orange-50 px-2 py-1 rounded text-sm">
                    <Star className="w-4 h-4 text-orange-500 mr-1" />
                    <span className="font-medium text-gray-800">{vehicle.rating}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-6 text-sm mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center">
                      <Users size={16} className="text-orange-500" />
                    </div>
                    <span className="text-gray-700 font-medium">{vehicle.passengers} Passengers</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center">
                      <Briefcase size={16} className="text-orange-500" />
                    </div>
                    <span className="text-gray-700 font-medium">{vehicle.luggage}</span>
                  </div>
                </div>

                {/* Features */}
                <div className="mb-5">
                  <div className="flex flex-wrap gap-2">
                    {/* {cars.features.map((feature, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded"
                      >
                        {feature}
                      </span>
                    ))} */}
                  </div>
                </div>

                <div className="flex items-center justify-between mb-4">
                  <div className="text-gray-900 font-bold text-lg">{vehicle.price}</div>
                  <div className="text-xs text-gray-500">per day</div>
                </div>

                <Link href="/Book" className="block">
                  <button className="w-full bg-orange-500 text-white py-3 rounded-lg font-medium hover:bg-orange-600 transition-colors flex items-center justify-center group-hover:shadow-md">
                    Book Now
                    <ChevronRight
                      size={18}
                      className="ml-1 transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </button>
                </Link>
              </div>

              {/* Decorative corner accent */}
              <div className="absolute top-0 left-0 w-10 h-10 overflow-hidden">
                <div className="absolute transform rotate-45 bg-white opacity-30 w-10 h-10 -translate-y-5 -translate-x-5"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom section with benefits */}
        <motion.div
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center mb-4">
              <Shield className="w-6 h-6 text-orange-500" />
            </div>
            <h3 className="text-lg font-bold mb-2 text-gray-900">Safety Guaranteed</h3>
            <p className="text-gray-600">
              All our vehicles are regularly maintained and equipped with safety features for your peace of mind.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center mb-4">
              <Clock className="w-6 h-6 text-orange-500" />
            </div>
            <h3 className="text-lg font-bold mb-2 text-gray-900">Punctual Service</h3>
            <p className="text-gray-600">
              We value your time. Our drivers are trained to be punctual and provide efficient service.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center mb-4">
              <Star className="w-6 h-6 text-orange-500" />
            </div>
            <h3 className="text-lg font-bold mb-2 text-gray-900">Premium Experience</h3>
            <p className="text-gray-600">
              Enjoy a comfortable journey with amenities like WiFi, refreshments, and professional chauffeurs.
            </p>
          </div>
        </motion.div>

        {/* Call to action */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Link href="/Contact">
            <button className="bg-gray-900 hover:bg-gray-800 text-white font-medium px-8 py-3 rounded-full shadow-md transition-all duration-300 hover:shadow-lg hover:translate-y-[-2px]">
              Contact Us for Custom Requirements
            </button>
          </Link>
          <p className="text-gray-500 text-sm mt-4">
            Special discounts available for long-term bookings and corporate clients
          </p>
        </motion.div>
      </div>
    </section>
  )
}
