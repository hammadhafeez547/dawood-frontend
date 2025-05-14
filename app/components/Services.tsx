"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Asterisk, Car, Plane, UserCheck, MapPin, ChevronRight } from "lucide-react"
import { motion } from "framer-motion"
import { useState } from "react"

function ServicesSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const services = [
    {
      title: "Car Rental With Driver",
      description: "Professional drivers with luxury vehicles for comfortable travel throughout your journey.",
      icon: <Car className="h-8 w-8" />,
      color: "bg-orange-50",
      accentColor: "bg-orange-500",
      hoverColor: "group-hover:bg-orange-100",
    },
    {
      title: "Airport Transfer",
      description: "Reliable pickup and drop-off services at all major airports with flight tracking.",
      icon: <Plane className="h-8 w-8" />,
      color: "bg-blue-50",
      accentColor: "bg-blue-500",
      hoverColor: "group-hover:bg-blue-100",
    },
    {
      title: "Chauffeur Services",
      description: "Experienced chauffeurs for business meetings, special events, and VIP transportation.",
      icon: <UserCheck className="h-8 w-8" />,
      color: "bg-green-50",
      accentColor: "bg-green-500",
      hoverColor: "group-hover:bg-green-100",
    },
    {
      title: "City Tours",
      description: "Guided tours of holy sites and attractions with knowledgeable local drivers.",
      icon: <MapPin className="h-8 w-8" />,
      color: "bg-purple-50",
      accentColor: "bg-purple-500",
      hoverColor: "group-hover:bg-purple-100",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section className="py-20 bg-gradient-to-b from-amber-50 to-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-orange-100 rounded-full -translate-x-20 -translate-y-32 opacity-50"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-amber-100 rounded-full translate-x-[-30%] translate-y-[30%] opacity-40"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center mb-16"
        >
          <div className="flex items-center gap-2 mb-4">
            <Asterisk className="w-6 h-6 text-orange-500" />
            <span className="font-bold text-orange-500 uppercase tracking-wider text-sm">Our Services</span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center max-w-3xl mb-6">
            <span className="text-gray-900">Explore our wide range of rental</span>
            <span className="text-orange-500 block md:inline"> Services</span>
          </h2>

          <div className="w-20 h-1 bg-orange-500 rounded-full mb-6"></div>

          <p className="text-gray-600 text-center max-w-2xl text-lg">
            Premium transportation solutions for Umrah travelers, ensuring comfort and reliability throughout your
            sacred journey.
          </p>
        </motion.div>

        {/* Services grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`group relative rounded-xl overflow-hidden shadow-lg transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl ${service.color}`}
            >
              {/* Card background with hover effect */}
              <div className={`absolute inset-0 transition-colors duration-300 ${service.hoverColor}`}></div>

              {/* Card content */}
              <div className="relative z-10 p-6 flex flex-col h-full">
                {/* Icon container */}
                <div className={`p-4 rounded-lg ${service.color} mb-5 inline-block`}>
                  <div className="text-gray-800">{service.icon}</div>
                </div>

                <h3 className="text-xl font-bold mb-3 text-gray-900">{service.title}</h3>

                <p className="text-gray-600 mb-6 flex-grow">{service.description}</p>

                {/* Arrow button */}
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-gray-900">Learn more</span>
                  <div
                    className={`rounded-full p-2.5 transition-all duration-300 ${service.accentColor} text-white transform ${hoveredIndex === index ? "rotate-45" : "rotate-0"}`}
                  >
                    <ChevronRight className="h-4 w-4" />
                  </div>
                </div>

                {/* Decorative corner accent */}
                <div
                  className={`absolute top-0 right-0 w-16 h-16 ${service.accentColor} opacity-10 rounded-bl-full`}
                ></div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center space-y-8"
        >
          <div className="text-gray-600 max-w-2xl mx-auto">
            <p className="text-lg">
              Discover our comprehensive range of transportation services designed to meet all your travel needs during
              your sacred journey.
            </p>
            <p className="text-lg mt-2">From luxury vehicles to experienced drivers familiar with holy sites.</p>
          </div>

          <div className="flex items-center justify-center gap-4 flex-wrap">
            <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-6 rounded-lg text-lg font-medium transition-all duration-300 hover:shadow-lg">
              View All Services
            </Button>

            <Button
              variant="outline"
              className="border-orange-500 text-orange-500 hover:bg-orange-50 px-8 py-6 rounded-lg text-lg font-medium flex items-center gap-2 transition-all duration-300"
            >
              Contact Us <ArrowRight className="h-5 w-5" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ServicesSection
