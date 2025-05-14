"use client"

import { useEffect, useRef } from "react"
import { ArrowRight, Asterisk, CheckCircle } from "lucide-react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import CircularImageDesign from "./CircularImageDesign"

export default function AboutSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLDivElement>(null)
  const featuresRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
      },
    })

    tl.from(imageRef.current, {
      x: -50,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    })
      .from(
        textRef.current,
        {
          x: 50,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
        },
        "-=0.7",
      )
      .from(
        featuresRef.current?.children,
        {
          y: 20,
          opacity: 0,
          duration: 0.5,
          stagger: 0.1,
          ease: "power2.out",
        },
        "-=0.5",
      )

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  const features = [
    "Licensed and certified drivers",
    "Modern, comfortable vehicles",
    "24/7 customer support",
    "Flexible booking options",
  ]

  return (
    <section className="relative py-16 md:py-24 overflow-hidden bg-gradient-to-b from-white to-gray-50">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute -right-24 -top-24 w-96 h-96 rounded-full bg-orange-500" />
        <div className="absolute -left-24 -bottom-24 w-96 h-96 rounded-full bg-orange-500" />
      </div>

      <div
        ref={containerRef}
        className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-12 lg:gap-16"
      >
        {/* IMAGE PART */}
        <div ref={imageRef} className="w-full lg:w-1/2 flex justify-center lg:justify-start">
          <CircularImageDesign />
        </div>

        {/* TEXT PART */}
        <div ref={textRef} className="w-full lg:w-1/2 flex flex-col items-center lg:items-start">
          <div className="w-full max-w-xl text-center lg:text-left">
            <div className="inline-flex items-center justify-center lg:justify-start mb-4">
              <Asterisk className="w-6 h-6 text-orange-500 mr-2" />
              <span className="font-semibold text-orange-500 uppercase tracking-wider text-sm">About Us</span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Your Trusted Partner for a <span className="text-orange-500">Blessed Journey</span>
            </h2>

            <p className="text-gray-700 text-base md:text-lg mb-8 leading-relaxed">
              We offer trusted and comfortable car services for Umrah travelers, including transport between Makkah and
              Madinah, hotel transfers, and guided Ziyarat — all with peace of mind and professionalism.
            </p>

            <div ref={featuresRef} className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-2 text-gray-700">
                  <CheckCircle className="h-5 w-5 text-orange-500 flex-shrink-0" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <Link href="/book-now">
                <Button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-md flex items-center gap-2 transition-all shadow-lg hover:shadow-xl">
                  Book Now <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  variant="outline"
                  className="border-orange-500 text-orange-500 hover:bg-orange-50 px-6 py-2 rounded-md"
                >
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
