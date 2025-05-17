"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { ChevronDown, Calendar, MapPin, Users, Star, Phone } from "lucide-react"
import { useEffect, useState } from "react"
import Link from "next/link"

export default function Home() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <main className="relative overflow-x-hidden">
      {/* WhatsApp Button - Fixed Position */}
      <Link
        href="https://wa.me/1234567890?text=I'm%20interested%20in%20your%20Umrah%20services"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center"
      >
        <div className="relative">
          <span className="absolute inset-0 rounded-full bg-green-500 opacity-75 animate-ping"></span>
          <div className="relative flex items-center gap-2 bg-green-600 text-white px-4 py-3 rounded-full shadow-lg hover:bg-green-700 transition-all duration-300 group">
            <Phone className="w-6 h-6" />
            <span className="font-medium hidden md:inline group-hover:translate-x-1 transition-transform duration-300">
              Chat on WhatsApp
            </span>
          </div>
        </div>
      </Link>

      {/* Hero Section */}
      <div className="relative w-full h-screen overflow-hidden">
        <div
          className="absolute inset-0 z-0 scale-110"
          style={{
            transform: `translateY(${scrollY * 0.3}px) scale(${1 + scrollY * 0.0002})`,
            height: `calc(100% + ${scrollY * 0.3}px)`,
          }}
        >
          <Image
            src="/madina2.jpg"
            alt="Madina Background"
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80 z-2" />

        <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-15 z-3" style={{ transform: `translateX(${scrollY * 0.05}px)` }} />

        <div className="absolute inset-0 z-20 flex items-center justify-center px-4">
          <div className="text-white text-center max-w-[1100px]">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="mb-3 inline-block"
            >
              <span className="px-4 py-1 border border-orange-400/60 rounded-full text-sm md:text-base font-medium tracking-wider text-orange-200">
                TRUSTED SINCE 2024
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-2 tracking-wide"
            >
              Dawood Tours & Travels
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
              className="text-base md:text-xl font-light leading-relaxed max-w-3xl mx-auto text-gray-200"
            >
              Experience the spiritual journey of a lifetime. We offer premier Hajj & Umrah services with dedication,
              guidance, and comfort for an unforgettable pilgrimage experience.
            </motion.p>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
              className="flex flex-wrap justify-center gap-6 mt-6"
            >
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                <span className="text-sm text-gray-300">5-Star Rated Service</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-orange-400" />
                <span className="text-sm text-gray-300">10,000+ Satisfied Pilgrims</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-orange-400" />
                <span className="text-sm text-gray-300">Premium Locations</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
              className="mt-8 flex flex-col sm:flex-row justify-center gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05, backgroundColor: "#ea580c" }}
                whileTap={{ scale: 0.95 }}
                className="bg-orange-600 text-white px-8 py-3.5 rounded-md shadow-lg transition duration-300 font-medium flex items-center justify-center gap-2 group"
              >
                <Calendar className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                <span className="group-hover:translate-x-1 transition-transform duration-300">View Packages</span>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05, backgroundColor: "#f8fafc" }}
                whileTap={{ scale: 0.95 }}
                className="bg-white/90 hover:bg-white text-gray-800 px-8 py-3.5 rounded-md shadow-lg transition duration-300 font-medium flex items-center justify-center gap-2 group"
              >
                <Phone className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                <span className="group-hover:translate-x-1 transition-transform duration-300">Contact Us</span>
              </motion.button>
            </motion.div>
          </div>
        </div>

        {/* Scroll Down Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 text-white flex flex-col items-center"
        >
          <span className="text-sm mb-2 text-gray-300">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
            className="bg-orange-500/20 rounded-full p-2"
          >
            <ChevronDown className="w-6 h-6" />
          </motion.div>
        </motion.div>
      </div>
    </main>
  )
}


      {/* Services Section */}
      {/* <section className="py-20 bg-gradient-to-b from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-16"
          >
            <motion.span variants={fadeInUp} custom={0} className="text-red-400 font-medium">
              OUR SERVICES
            </motion.span>
            <motion.h2 variants={fadeInUp} custom={1} className="text-3xl md:text-4xl font-bold mt-2">
              Comprehensive Pilgrimage Solutions
            </motion.h2>
            <motion.div variants={fadeInUp} custom={2} className="w-24 h-1 bg-red-500 mx-auto my-6" />
            <motion.p variants={fadeInUp} custom={3} className="max-w-2xl mx-auto text-gray-300">
              We provide end-to-end services to make your spiritual journey comfortable, meaningful, and hassle-free.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Hajj Packages",
                description:
                  "Comprehensive Hajj packages with experienced guides, premium accommodations, and transportation.",
                icon: <Users className="w-10 h-10 text-red-400" />,
                delay: 0,
              },
              {
                title: "Umrah Services",
                description:
                  "Flexible Umrah packages designed for individuals, families, and groups with year-round availability.",
                icon: <Calendar className="w-10 h-10 text-red-400" />,
                delay: 1,
              },
              {
                title: "Ziyarat Tours",
                description:
                  "Guided tours to historical Islamic sites with knowledgeable scholars to enhance your spiritual experience.",
                icon: <MapPin className="w-10 h-10 text-red-400" />,
                delay: 2,
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeInUp}
                custom={service.delay}
                className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-lg border border-gray-700 hover:border-red-500/50 transition-all duration-300 hover:shadow-red-500/10 hover:shadow-lg group"
              >
                <div className="mb-6 inline-block p-4 bg-gray-700/50 rounded-lg group-hover:bg-red-500/10 transition-all duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-red-400 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-400">{service.description}</p>
                <div className="mt-6 pt-6 border-t border-gray-700">
                  <a
                    href="#"
                    className="text-red-400 hover:text-red-300 font-medium flex items-center gap-2 group-hover:gap-3 transition-all duration-300"
                  >
                    Learn more <ChevronDown className="w-4 h-4 rotate-[-90deg]" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Testimonials Section */}
      {/* <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-16"
          >
            <motion.span variants={fadeInUp} custom={0} className="text-red-600 font-medium">
              TESTIMONIALS
            </motion.span>
            <motion.h2 variants={fadeInUp} custom={1} className="text-3xl md:text-4xl font-bold mt-2 text-gray-800">
              What Our Pilgrims Say
            </motion.h2>
            <motion.div variants={fadeInUp} custom={2} className="w-24 h-1 bg-red-500 mx-auto my-6" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Ahmed Khan",
                location: "London, UK",
                quote:
                  "The attention to detail and spiritual guidance provided by Dawood Tours made my Hajj journey truly transformative.",
                rating: 5,
                delay: 0,
              },
              {
                name: "Fatima Rahman",
                location: "Toronto, Canada",
                quote:
                  "As a woman traveling alone for Umrah, I felt completely safe and supported throughout my journey. Highly recommended!",
                rating: 5,
                delay: 1,
              },
              {
                name: "Mohammed Ali",
                location: "Sydney, Australia",
                quote:
                  "The accommodations were excellent and the guides were knowledgeable. Will definitely use their services again.",
                rating: 4,
                delay: 2,
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeInUp}
                custom={testimonial.delay}
                className="bg-white p-8 rounded-lg shadow-lg relative"
              >
                <div className="absolute -top-5 left-8 w-10 h-10 bg-red-500 rounded-full flex items-center justify-center text-white text-xl font-bold">
                  "
                </div>
                <p className="text-gray-600 mb-6 pt-4">{testimonial.quote}</p>
                <div className="flex items-center gap-1 mb-4">
                  {Array(testimonial.rating)
                    .fill(0)
                    .map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-red-400 text-red-400" />
                    ))}
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-300 rounded-full mr-4 overflow-hidden">
                    <Image
                      src={`/placeholder.svg?height=48&width=48`}
                      alt={testimonial.name}
                      width={48}
                      height={48}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.location}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      {/* <section className="py-20 bg-gradient-to-r from-red-600 to-red-500 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Begin Your Spiritual Journey?</h2>
            <p className="text-lg mb-8 text-white/90">
              Contact us today to learn more about our packages and start planning your pilgrimage.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-red-600 px-8 py-3.5 rounded-md shadow-lg transition duration-300 font-medium"
              >
                View All Packages
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-red-700 text-white px-8 py-3.5 rounded-md shadow-lg transition duration-300 font-medium border border-white/20"
              >
                Contact Our Team
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section> */}

      {/* Footer */}
      {/* <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-red-600 to-red-400 flex items-center justify-center text-white font-bold text-sm mr-2">
                  DT
                </div>
                <span className="font-bold text-xl bg-gradient-to-r from-red-400 to-red-300 bg-clip-text text-transparent">
                  Dawood Tours
                </span>
              </h3>
              <p className="text-gray-400 mb-4">
                Providing premium Hajj and Umrah services since 1995. Your trusted partner for spiritual journeys.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-red-400 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-red-400 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-red-400 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-red-400 transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-red-400 transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-red-400 transition-colors">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-red-400 transition-colors">
                    Packages
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-red-400 transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Our Services</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-red-400 transition-colors">
                    Hajj Packages
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-red-400 transition-colors">
                    Umrah Services
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-red-400 transition-colors">
                    Ziyarat Tours
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-red-400 transition-colors">
                    Hotel Bookings
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-red-400 transition-colors">
                    Transportation
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-red-400 mt-0.5" />
                  <span className="text-gray-400">123 Tour Street, City, Country</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-red-400" />
                  <span className="text-gray-400">+1 (555) 123-4567</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-red-400" />
                  <span className="text-gray-400">contact@dawoodtours.com</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400 text-sm">
            <p>© {new Date().getFullYear()} Dawood Tours & Travels. All rights reserved.</p>
          </div>
        </div>
      </footer> */}
  
