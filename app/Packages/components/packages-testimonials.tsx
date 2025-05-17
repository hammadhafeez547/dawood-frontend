"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react'
import { Button } from "@/components/ui/button"

// Testimonial type
type Testimonial = {
  id: number
  name: string
  location: string
  image: string
  rating: number
  text: string
  packageType: string
}

// Sample testimonials data
const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Ahmed Khan",
    location: "United Kingdom",
    image: "/placeholder.svg?height=100&width=100",
    rating: 5,
    text: "The Hajj package exceeded all my expectations. The accommodations were comfortable, the transportation was reliable, and the guides were knowledgeable and supportive throughout our spiritual journey. I highly recommend Dawood Tours for anyone planning their pilgrimage.",
    packageType: "Hajj Premium Package",
  },
  {
    id: 2,
    name: "Fatima Ali",
    location: "United States",
    image: "/placeholder.svg?height=100&width=100",
    rating: 5,
    text: "My Umrah experience with Dawood Tours was truly memorable. From the moment we arrived, everything was well-organized. The hotels were conveniently located near the Haram, and the staff was always ready to assist. The Ziyarat tours provided deep insights into the historical sites.",
    packageType: "Umrah Standard Package",
  },
  {
    id: 3,
    name: "Mohammad Rahman",
    location: "Canada",
    image: "/placeholder.svg?height=100&width=100",
    rating: 4,
    text: "The transportation services were excellent. Our driver was punctual, professional, and knew all the routes well. The vehicle was comfortable and air-conditioned, which was essential in the hot weather. The journey between Makkah and Madinah was smooth and pleasant.",
    packageType: "Makkah to Madinah Transfer",
  },
  {
    id: 4,
    name: "Aisha Patel",
    location: "Australia",
    image: "/placeholder.svg?height=100&width=100",
    rating: 5,
    text: "As a first-time pilgrim, I was nervous about the journey, but Dawood Tours made everything seamless. The Ramadan Umrah package was perfectly tailored for the holy month, with convenient suhoor and iftar arrangements. The spiritual guidance provided by the scholars enriched our experience.",
    packageType: "Ramadan Umrah Special",
  },
  {
    id: 5,
    name: "Yusuf Abdullah",
    location: "South Africa",
    image: "/placeholder.svg?height=100&width=100",
    rating: 5,
    text: "The Luxury Hajj Package was worth every penny. The 5-star accommodations, private transportation, and personalized service made our pilgrimage comfortable and stress-free. The guides were knowledgeable and patient, ensuring we performed all rituals correctly.",
    packageType: "Luxury Hajj Package",
  },
]

export default function PackagesTestimonials() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  useEffect(() => {
    if (!autoplay) return

    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [autoplay])

  const nextTestimonial = () => {
    setAutoplay(false)
    setActiveIndex((current) => (current + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setAutoplay(false)
    setActiveIndex((current) => (current - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold text-gray-900 mb-4"
          >
            What Our Pilgrims Say
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
            Read testimonials from our satisfied customers who have experienced our services and packages.
          </motion.p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute top-10 left-0 text-orange-500 opacity-20">
            <Quote className="h-24 w-24" />
          </div>

          <div className="relative z-10">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, x: 100 }}
                animate={{
                  opacity: index === activeIndex ? 1 : 0,
                  x: index === activeIndex ? 0 : 100,
                  display: index === activeIndex ? "block" : "none",
                }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-xl p-8 shadow-md"
              >
                <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="relative w-20 h-20 rounded-full overflow-hidden">
                      <Image src={testimonial.image || "/placeholder.svg"} alt={testimonial.name} fill className="object-cover" />
                    </div>
                  </div>
                  <div className="flex-grow text-center md:text-left">
                    <div className="flex items-center justify-center md:justify-start mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < testimonial.rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <p className="text-gray-700 mb-4 italic">{testimonial.text}</p>
                    <div>
                      <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                      <p className="text-sm text-gray-500">{testimonial.location}</p>
                      <p className="text-sm text-orange-600 mt-1">{testimonial.packageType}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="flex justify-center mt-8 gap-4">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full border-gray-300 hover:border-orange-500 hover:text-orange-500"
              onClick={prevTestimonial}
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-2.5 h-2.5 rounded-full transition-colors ${
                    index === activeIndex ? "bg-orange-500" : "bg-gray-300 hover:bg-orange-300"
                  }`}
                  onClick={() => {
                    setAutoplay(false)
                    setActiveIndex(index)
                  }}
                ></button>
              ))}
            </div>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full border-gray-300 hover:border-orange-500 hover:text-orange-500"
              onClick={nextTestimonial}
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
