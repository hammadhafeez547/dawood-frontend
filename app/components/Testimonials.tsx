"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { ArrowRight, ArrowLeft, Star, Quote } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const sliderRef = useRef<HTMLDivElement>(null)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  const testimonials = [
    {
      id: 1,
      name: "Annette Black",
      position: "Umrah Pilgrim",
      rating: 5,
      text: "Dawood Tours provided exceptional service during our Umrah journey. The transportation was comfortable, punctual, and the driver was very knowledgeable about all the holy sites.",
      image: "/annette-black.png",
    },
    {
      id: 2,
      name: "Leslie Alexander",
      position: "Hajj Pilgrim",
      rating: 5,
      text: "Our family's Hajj experience was made so much better with Dawood Tours. Their vehicles were spacious, clean, and the air conditioning was perfect for the hot weather in Saudi Arabia.",
      image: "/leslie-alexander.png",
    },
    {
      id: 3,
      name: "Alis White",
      position: "Business Traveler",
      rating: 4,
      text: "I regularly use Dawood Tours for business travel between Makkah and Madinah. Their service is reliable, professional, and their drivers are always courteous and helpful.",
      image: "/alis-white.png",
    },
    {
      id: 4,
      name: "Mohammed Rahman",
      position: "Family Traveler",
      rating: 5,
      text: "Traveling with a large family can be challenging, but Dawood Tours made it seamless. Their spacious vehicles accommodated all of us comfortably, and the driver was patient and friendly.",
      image: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 5,
      name: "Fatima Zahra",
      position: "Solo Traveler",
      rating: 5,
      text: "As a woman traveling alone, safety was my priority. Dawood Tours provided a professional and respectful service that made me feel secure throughout my journey in Saudi Arabia.",
      image: "/placeholder.svg?height=40&width=40",
    },
  ]

  const nextTestimonial = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    resetAutoplay()
  }

  const prevTestimonial = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
    resetAutoplay()
  }

  const goToTestimonial = (index: number) => {
    if (isAnimating || index === currentIndex) return
    setIsAnimating(true)
    setCurrentIndex(index)
    resetAutoplay()
  }

  const resetAutoplay = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
    }
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }, 6000)
  }

  useEffect(() => {
    // Start autoplay
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }, 6000)

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [testimonials.length])

  // Get visible testimonials (3 on desktop, 1 on mobile)
  const getVisibleTestimonials = () => {
    const visibleCount = typeof window !== "undefined" && window.innerWidth >= 768 ? 3 : 1
    const result = []

    for (let i = 0; i < visibleCount; i++) {
      const index = (currentIndex + i) % testimonials.length
      result.push({
        ...testimonials[index],
        position: i, // Position in the visible set
      })
    }

    return result
  }

  return (
    <div className="w-full flex flex-col justify-center items-center mb-16">
      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-orange-50/50 to-white relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-orange-200 rounded-full opacity-10 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-orange-300 rounded-full opacity-10 translate-x-1/3 translate-y-1/3"></div>
        <div className="absolute top-1/4 right-10 w-20 h-20 bg-orange-400 rounded-full opacity-10"></div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 mb-3 bg-orange-100/80 px-4 py-1.5 rounded-full">
              <span className="text-orange-500">★</span>
              <span className="text-sm font-medium text-orange-600">Client Testimonials</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">What Our Clients Say About Us</h2>
            <div className="w-20 h-1 bg-orange-500 mx-auto mb-6"></div>
            <p className="max-w-2xl mx-auto text-gray-600">
              Discover why thousands of pilgrims and travelers choose Dawood Tours for their transportation needs in
              Saudi Arabia.
            </p>
          </motion.div>

          {/* Desktop Testimonials Slider */}
          <div className="relative">
            <div ref={sliderRef} className="overflow-hidden">
              <div className="hidden md:grid md:grid-cols-3 gap-6">
                <AnimatePresence mode="wait" onExitComplete={() => setIsAnimating(false)}>
                  {getVisibleTestimonials().map((testimonial) => (
                    <motion.div
                      key={`${testimonial.id}-${currentIndex}`}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -50 }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                      className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 relative group hover:shadow-xl transition-all duration-300"
                    >
                      {/* Quote Icon */}
                      <div className="absolute -top-4 -left-4 w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-white shadow-md">
                        <Quote className="w-5 h-5" />
                      </div>

                      <div className="flex mb-4">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            size={18}
                            className={`${
                              i < testimonial.rating ? "text-orange-500 fill-orange-500" : "text-gray-300 fill-gray-300"
                            } transition-all duration-300 group-hover:scale-110 group-hover:rotate-[5deg]`}
                            style={{
                              transitionDelay: `${i * 50}ms`,
                            }}
                          />
                        ))}
                      </div>
                      <p className="text-gray-700 mb-6 leading-relaxed">"{testimonial.text}"</p>
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-orange-200 shadow-sm">
                          <Image
                            src={testimonial.image || "/placeholder.svg?height=48&width=48"}
                            alt={testimonial.name}
                            width={48}
                            height={48}
                            className="object-cover w-full h-full"
                          />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                          <p className="text-orange-600 text-sm">{testimonial.position}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>

              {/* Mobile Testimonial Slider */}
              <div className="md:hidden">
                <AnimatePresence mode="wait" onExitComplete={() => setIsAnimating(false)}>
                  <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.5 }}
                    className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 relative"
                  >
                    {/* Quote Icon */}
                    <div className="absolute -top-4 -left-4 w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white shadow-md">
                      <Quote className="w-4 h-4" />
                    </div>

                    <div className="flex mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={16}
                          className={`${
                            i < testimonials[currentIndex].rating
                              ? "text-orange-500 fill-orange-500"
                              : "text-gray-300 fill-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <p className="text-gray-700 mb-6 text-sm leading-relaxed">"{testimonials[currentIndex].text}"</p>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-orange-200">
                        <Image
                          src={testimonials[currentIndex].image || "/placeholder.svg?height=40&width=40"}
                          alt={testimonials[currentIndex].name}
                          width={40}
                          height={40}
                          className="object-cover w-full h-full"
                        />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">{testimonials[currentIndex].name}</h4>
                        <p className="text-orange-600 text-xs">{testimonials[currentIndex].position}</p>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Navigation Controls */}
            <div className="flex justify-center mt-10 gap-3 items-center">
              <button
                onClick={prevTestimonial}
                className="w-10 h-10 rounded-full bg-white border border-orange-200 flex items-center justify-center text-orange-500 hover:bg-orange-500 hover:text-white hover:border-orange-500 transition-all duration-300 shadow-sm"
                aria-label="Previous testimonial"
              >
                <ArrowLeft size={18} />
              </button>

              {/* Pagination Dots */}
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToTestimonial(index)}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                      currentIndex === index ? "bg-orange-500 w-6" : "bg-orange-200 hover:bg-orange-300"
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={nextTestimonial}
                className="w-10 h-10 rounded-full bg-white border border-orange-200 flex items-center justify-center text-orange-500 hover:bg-orange-500 hover:text-white hover:border-orange-500 transition-all duration-300 shadow-sm"
                aria-label="Next testimonial"
              >
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-gray-900 to-black relative w-[90%] max-w-[1600px] rounded-2xl overflow-hidden shadow-xl">
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-15">
          <div className="grid grid-cols-12 h-full w-full">
            {[...Array(144)].map((_, i) => (
              <div key={i} className="border-[0.5px] border-gray-500"></div>
            ))}
          </div>
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-orange-600/10 to-transparent"></div>

        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500 rounded-full opacity-10 translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-orange-400 rounded-full opacity-10 -translate-x-1/3 translate-y-1/3"></div>

        <div className="container mx-auto py-16 px-4 sm:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-white"
            >
              <div className="inline-flex items-center gap-2 mb-6 bg-white/10 px-4 py-1.5 rounded-full backdrop-blur-sm">
                <span className="text-orange-400">★</span>
                <span className="text-sm font-medium text-orange-200">Premium Transportation</span>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold mb-2 text-white">Ready for a comfortable</h2>
              <h3 className="text-3xl md:text-4xl font-bold mb-2 text-orange-400">and safe journey?</h3>
              <div className="w-20 h-1 bg-orange-500 mb-6"></div>

              <p className="text-gray-300 mb-8 leading-relaxed max-w-lg">
                Our professional drivers and modern vehicles are ready to provide you with an exceptional travel
                experience throughout Saudi Arabia. Book your transportation today and enjoy a stress-free journey.
              </p>

              <div className="flex flex-wrap gap-4">
                <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3.5 rounded-full inline-flex items-center gap-2 transition-all duration-300 shadow-lg hover:shadow-orange-500/20 group">
                  Book Now
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
                </button>

                <button className="bg-transparent hover:bg-white/10 text-white border border-white/30 px-8 py-3.5 rounded-full inline-flex items-center gap-2 transition-all duration-300">
                  Contact Us
                </button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex justify-center md:justify-end"
            >
              <div className="relative w-full max-w-md">
                <div className="absolute -inset-4 bg-orange-500/20 rounded-full blur-2xl"></div>
                <Image
                  src="/car-img.png"
                  alt="Luxury Vehicle"
                  width={500}
                  height={300}
                  className="object-contain relative z-10 drop-shadow-2xl"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
