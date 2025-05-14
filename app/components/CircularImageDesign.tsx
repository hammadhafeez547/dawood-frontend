"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { Star, Asterisk } from "lucide-react"
import { motion } from "framer-motion"

export default function CircularImageDesign() {
  const containerRef = useRef<HTMLDivElement>(null)

  // Adjust container height based on viewport width
  useEffect(() => {
    const updateHeight = () => {
      if (containerRef.current) {
        const width = containerRef.current.offsetWidth
        const height = Math.max(400, Math.min(500, width * 0.9))
        containerRef.current.style.height = `${height}px`
      }
    }

    updateHeight()
    window.addEventListener("resize", updateHeight)
    return () => window.removeEventListener("resize", updateHeight)
  }, [])

  return (
    <div ref={containerRef} className="relative w-full max-w-xl mx-auto">
      {/* First circular image */}
      <motion.div
        initial={{ opacity: 0, x: -50, scale: 0.9 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ duration: 0.7 }}
        className="absolute left-0 top-0 w-[55%] aspect-square rounded-full overflow-hidden border-4 border-white shadow-xl z-10"
        style={{ maxWidth: "280px" }}
      >
        <div className="relative w-full h-full">
          <Image
            src="/man-with-car-1.jpg"
            alt="Luxury transportation"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 40vw, 280px"
          />
        </div>
      </motion.div>

      {/* Second circular image */}
      <motion.div
        initial={{ opacity: 0, x: 50, scale: 0.9 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="absolute right-0 bottom-0 w-[60%] aspect-square rounded-full overflow-hidden border-4 border-white shadow-xl z-20"
        style={{ maxWidth: "300px" }}
      >
        <div className="relative w-full h-full">
          <Image
            src="/man-with-car-12.jpg"
            alt="Professional driver service"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 45vw, 300px"
          />
        </div>
      </motion.div>

      {/* Decorative elements */}
      <motion.div
        initial={{ opacity: 0, scale: 0, rotate: -30 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="absolute right-[20%] top-[15%] text-orange-500 z-30"
      >
        <Asterisk className="w-10 h-10 md:w-16 md:h-16" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0, rotate: 30 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="absolute left-[25%] bottom-[10%] text-gray-900 z-30"
      >
        <Star className="w-8 h-8 md:w-10 md:h-10 fill-orange-500" />
      </motion.div>

      {/* Background accent */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="absolute left-[15%] top-[40%] w-[70%] h-[70%] rounded-full bg-orange-500 z-0"
      />
    </div>
  )
}
