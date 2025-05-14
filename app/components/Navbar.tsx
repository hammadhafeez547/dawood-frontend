"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Phone, Mail, Facebook, Twitter, Instagram, Youtube, MapPin, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsMenuOpen(false)
        setActiveDropdown(null)
      }
    }

    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (isMenuOpen && !target.closest(".mobile-menu") && !target.closest(".menu-button")) {
        setIsMenuOpen(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    document.addEventListener("keydown", handleEscape)
    document.addEventListener("mousedown", handleClickOutside)
    document.body.style.overflow = isMenuOpen ? "hidden" : ""

    return () => {
      window.removeEventListener("scroll", handleScroll)
      document.removeEventListener("keydown", handleEscape)
      document.removeEventListener("mousedown", handleClickOutside)
      document.body.style.overflow = ""
    }
  }, [isMenuOpen])

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name)
  }

  return (
    <div className="relative">
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-orange-800 to-orange-700 text-white py-2.5 px-4 text-sm z-20">
        <div className="container mx-auto">
          <div className="hidden sm:flex justify-between items-center">
            <div className="flex items-center space-x-8">
              <div className="flex items-center space-x-2 group">
                <div className="bg-orange-700 bg-opacity-50 rounded-full p-1.5 group-hover:bg-orange-600 transition-all duration-300">
                  <Phone className="h-3.5 w-3.5 text-orange-100" />
                </div>
                <span className="group-hover:text-orange-200 transition-colors duration-300">+966 58 056 3933</span>
              </div>
              <div className="flex items-center space-x-2 group">
                <div className="bg-orange-700 bg-opacity-50 rounded-full p-1.5 group-hover:bg-orange-600 transition-all duration-300">
                  <MapPin className="h-3.5 w-3.5 text-orange-100" />
                </div>
                <span className="group-hover:text-orange-200 transition-colors duration-300">Saudi Arabia</span>
              </div>
              <div className="flex items-center space-x-2 group">
                <div className="bg-orange-700 bg-opacity-50 rounded-full p-1.5 group-hover:bg-orange-600 transition-all duration-300">
                  <Mail className="h-3.5 w-3.5 text-orange-100" />
                </div>
                <span className="group-hover:text-orange-200 transition-colors duration-300">
                  DiamondDawood@gmail.com
                </span>
              </div>
            </div>
            <div className="flex items-center space-x-5">
              <Link
                href="https://facebook.com"
                aria-label="Facebook"
                className="transition-all duration-300 hover:scale-110 hover:text-orange-300"
              >
                <div className="bg-orange-700 bg-opacity-50 rounded-full p-1.5 hover:bg-orange-600 transition-all duration-300">
                  <Facebook className="h-3.5 w-3.5" />
                </div>
              </Link>
              <Link
                href="https://twitter.com"
                aria-label="Twitter"
                className="transition-all duration-300 hover:scale-110 hover:text-orange-300"
              >
                <div className="bg-orange-700 bg-opacity-50 rounded-full p-1.5 hover:bg-orange-600 transition-all duration-300">
                  <Twitter className="h-3.5 w-3.5" />
                </div>
              </Link>
              <Link
                href="https://instagram.com"
                aria-label="Instagram"
                className="transition-all duration-300 hover:scale-110 hover:text-orange-300"
              >
                <div className="bg-orange-700 bg-opacity-50 rounded-full p-1.5 hover:bg-orange-600 transition-all duration-300">
                  <Instagram className="h-3.5 w-3.5" />
                </div>
              </Link>
              <Link
                href="https://youtube.com"
                aria-label="YouTube"
                className="transition-all duration-300 hover:scale-110 hover:text-orange-300"
              >
                <div className="bg-orange-700 bg-opacity-50 rounded-full p-1.5 hover:bg-orange-600 transition-all duration-300">
                  <Youtube className="h-3.5 w-3.5" />
                </div>
              </Link>
            </div>
          </div>

          <div className="sm:hidden flex flex-col space-y-1.5">
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-1.5">
                <div className="bg-orange-700 bg-opacity-50 rounded-full p-1">
                  <Phone className="h-3 w-3 text-orange-100" />
                </div>
                <span className="text-xs">+966 58 056 3933</span>
              </div>
              <div className="flex items-center space-x-3">
                <Link href="https://facebook.com" aria-label="Facebook">
                  <div className="bg-orange-700 bg-opacity-50 rounded-full p-1 hover:bg-orange-600 transition-all duration-300">
                    <Facebook className="h-3 w-3" />
                  </div>
                </Link>
                <Link href="https://twitter.com" aria-label="Twitter">
                  <div className="bg-orange-700 bg-opacity-50 rounded-full p-1 hover:bg-orange-600 transition-all duration-300">
                    <Twitter className="h-3 w-3" />
                  </div>
                </Link>
                <Link href="https://youtube.com" aria-label="YouTube">
                  <div className="bg-orange-700 bg-opacity-50 rounded-full p-1 hover:bg-orange-600 transition-all duration-300">
                    <Youtube className="h-3 w-3" />
                  </div>
                </Link>
              </div>
            </div>
            <div className="flex items-center space-x-1.5">
              <div className="bg-orange-700 bg-opacity-50 rounded-full p-1">
                <Mail className="h-3 w-3 text-orange-100" />
              </div>
              <span className="text-xs">DiamondDawood@gmail.com</span>
            </div>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <header
        className={`sticky top-0 left-0 right-0 w-full z-30 bg-white shadow-md transition-all duration-300 ${
          scrolled ? "py-2 shadow-lg" : "py-3"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="flex items-center group">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-orange-600 to-orange-400 flex items-center justify-center text-white font-bold text-xl mr-2 shadow-md group-hover:shadow-orange-300/50 transition-all duration-300 group-hover:scale-105">
                DT
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-2xl bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent">
                  Dawood Tours
                </span>
                <span className="text-xs text-gray-500 -mt-1">Premium Travel Services</span>
              </div>
            </Link>

            <div className="flex items-center gap-6">
              <nav className="hidden md:flex space-x-8">
                <Link href="/" className="text-slate-700 hover:text-orange-600 font-medium relative py-1 group">
                  Home
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
                </Link>
                <Link href="/About" className="text-slate-700 hover:text-orange-600 font-medium relative py-1 group">
                  About
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
                </Link>

                {/* Services Dropdown */}
                <div className="relative group">
                  <button
                    onClick={() => toggleDropdown("services")}
                    className={`text-slate-700 hover:text-orange-600 font-medium relative py-1 group flex items-center ${
                      activeDropdown === "services" ? "text-orange-600" : ""
                    }`}
                  >
                    Services
                    <ChevronDown
                      className={`ml-1 h-4 w-4 transition-transform ${
                        activeDropdown === "services" ? "rotate-180 text-orange-600" : ""
                      }`}
                    />
                    <span
                      className={`absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 ${
                        activeDropdown === "services" ? "w-full" : "group-hover:w-full"
                      }`}
                    ></span>
                  </button>

                  <div
                    className={`absolute top-full left-0 mt-1 w-64 bg-white rounded-md shadow-lg overflow-hidden transition-all duration-200 ${
                      activeDropdown === "services"
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 -translate-y-2 pointer-events-none"
                    }`}
                  >
                    <div className="py-2">
                      <Link
                        href="/Services"
                        className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors duration-200"
                        onClick={() => setActiveDropdown(null)}
                      >
                        All Services
                      </Link>
                      <Link
                        href="/services/hajj-packages"
                        className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors duration-200"
                        onClick={() => setActiveDropdown(null)}
                      >
                        Hajj Packages
                      </Link>
                      <Link
                        href="/services/umrah-packages"
                        className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors duration-200"
                        onClick={() => setActiveDropdown(null)}
                      >
                        Umrah Packages
                      </Link>
                      <Link
                        href="/services/makkah-to-madinah"
                        className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors duration-200"
                        onClick={() => setActiveDropdown(null)}
                      >
                        Makkah to Madinah Transport
                      </Link>
                      <Link
                        href="/services/umrah-transportation"
                        className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors duration-200"
                        onClick={() => setActiveDropdown(null)}
                      >
                        Umrah Transportation
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Vehicles Dropdown */}
                <div className="relative group">
                  <button
                    onClick={() => toggleDropdown("vehicles")}
                    className={`text-slate-700 hover:text-orange-600 font-medium relative py-1 group flex items-center ${
                      activeDropdown === "vehicles" ? "text-orange-600" : ""
                    }`}
                  >
                    Our Vehicles
                    <ChevronDown
                      className={`ml-1 h-4 w-4 transition-transform ${
                        activeDropdown === "vehicles" ? "rotate-180 text-orange-600" : ""
                      }`}
                    />
                    <span
                      className={`absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 ${
                        activeDropdown === "vehicles" ? "w-full" : "group-hover:w-full"
                      }`}
                    ></span>
                  </button>

                  <div
                    className={`absolute top-full left-0 mt-1 w-64 bg-white rounded-md shadow-lg overflow-hidden transition-all duration-200 ${
                      activeDropdown === "vehicles"
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 -translate-y-2 pointer-events-none"
                    }`}
                  >
                    <div className="py-2">
                      <Link
                        href="/OurVehicles"
                        className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors duration-200"
                        onClick={() => setActiveDropdown(null)}
                      >
                        All Vehicles
                      </Link>
                      <Link
                        href="/vehicles/luxury-sedans"
                        className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors duration-200"
                        onClick={() => setActiveDropdown(null)}
                      >
                        Luxury Sedans
                      </Link>
                      <Link
                        href="/vehicles/suvs"
                        className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors duration-200"
                        onClick={() => setActiveDropdown(null)}
                      >
                        SUVs
                      </Link>
                      <Link
                        href="/vehicles/buses"
                        className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors duration-200"
                        onClick={() => setActiveDropdown(null)}
                      >
                        Buses
                      </Link>
                    </div>
                  </div>
                </div>

                <Link href="/Contact" className="text-slate-700 hover:text-orange-600 font-medium relative py-1 group">
                  Contact
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </nav>

              <div className="hidden md:block">
                <Link href="/Book">
                  <Button className="bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600 text-white px-6 rounded-full transition-all duration-300 hover:shadow-lg">
                    Book Now
                  </Button>
                </Link>
              </div>
            </div>

            <div className="md:hidden">
              <button
                type="button"
                className="menu-button p-2 rounded-md text-orange-600 hover:bg-orange-50"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Overlay */}
        <div
          className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ${
            isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
          onClick={() => setIsMenuOpen(false)}
        />

        {/* Mobile Menu */}
        <div
          className={`mobile-menu fixed top-0 right-0 h-full w-72 bg-white z-50 shadow-xl transform transition-transform duration-300 ease-in-out ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex justify-between items-center p-4 border-b border-gray-100">
            <div className="flex items-center">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-orange-600 to-orange-400 flex items-center justify-center text-white font-bold text-sm mr-2">
                DT
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-xl bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent">
                  Dawood Tours
                </span>
                <span className="text-[10px] text-gray-500 -mt-1">Premium Travel Services</span>
              </div>
            </div>
            <button
              type="button"
              className="p-2 rounded-md text-orange-600 hover:bg-orange-50"
              onClick={() => setIsMenuOpen(false)}
              aria-label="Close menu"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          <div className="px-4 py-2 overflow-y-auto max-h-[calc(100vh-80px)]">
            <Link
              href="/"
              className="block px-3 py-3 rounded-md text-base font-medium text-slate-700 hover:bg-orange-50 hover:text-orange-600 transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/About"
              className="block px-3 py-3 rounded-md text-base font-medium text-slate-700 hover:bg-orange-50 hover:text-orange-600 transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>

            {/* Mobile Services Dropdown */}
            <Link
              href="/Services"
              className="block px-3 py-3 rounded-md text-base font-medium text-slate-700 hover:bg-orange-50 hover:text-orange-600 transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Service
            </Link>

            {/* Mobile Vehicles Dropdown */}
            <div className="block px-3 py-3 rounded-md text-base font-medium text-slate-700">
              <div className="flex items-center justify-between" onClick={() => toggleDropdown("mobile-vehicles")}>
                <span>Our Vehicles</span>
                <ChevronDown
                  className={`h-5 w-5 transition-transform ${activeDropdown === "mobile-vehicles" ? "rotate-180" : ""}`}
                />
              </div>

              <div className={`mt-2 ml-2 space-y-1 ${activeDropdown === "mobile-vehicles" ? "block" : "hidden"}`}>
                <Link
                  href="/vehicles"
                  className="block px-3 py-2 rounded-md text-sm font-medium text-slate-600 hover:bg-orange-50 hover:text-orange-600 transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  All Vehicles
                </Link>
                <Link
                  href="/vehicles/luxury-sedans"
                  className="block px-3 py-2 rounded-md text-sm font-medium text-slate-600 hover:bg-orange-50 hover:text-orange-600 transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Luxury Sedans
                </Link>
                <Link
                  href="/vehicles/suvs"
                  className="block px-3 py-2 rounded-md text-sm font-medium text-slate-600 hover:bg-orange-50 hover:text-orange-600 transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  SUVs
                </Link>
                <Link
                  href="/vehicles/buses"
                  className="block px-3 py-2 rounded-md text-sm font-medium text-slate-600 hover:bg-orange-50 hover:text-orange-600 transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Buses
                </Link>
              </div>
            </div>

            <Link
              href="/Contact"
              className="block px-3 py-3 rounded-md text-base font-medium text-slate-700 hover:bg-orange-50 hover:text-orange-600 transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>

            <div className="pt-6 pb-2">
              <Link href="/Book" onClick={() => setIsMenuOpen(false)}>
                <Button className="w-full bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600 text-white py-2.5 rounded-md transition-all duration-300">
                  Book Now
                </Button>
              </Link>
            </div>

            <div className="mt-6 pt-6 border-t border-gray-100">
              <p className="text-sm text-gray-500 mb-3">Contact Us</p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-sm text-gray-600">
                  <div className="bg-orange-100 p-1.5 rounded-full">
                    <Phone className="h-4 w-4 text-orange-600" />
                  </div>
                  <span>+966 58 056 3933</span>
                </div>
                <div className="flex items-center space-x-3 text-sm text-gray-600">
                  <div className="bg-orange-100 p-1.5 rounded-full">
                    <Mail className="h-4 w-4 text-orange-600" />
                  </div>
                  <span>DiamondDawood@gmail.com</span>
                </div>
                <div className="flex items-center space-x-3 text-sm text-gray-600">
                  <div className="bg-orange-100 p-1.5 rounded-full">
                    <MapPin className="h-4 w-4 text-orange-600" />
                  </div>
                  <span>Saudi Arabia</span>
                </div>
              </div>

              <div className="flex items-center space-x-4 mt-4 pt-4 border-t border-gray-100">
                <Link
                  href="https://facebook.com"
                  aria-label="Facebook"
                  className="bg-gray-100 p-2 rounded-full text-gray-500 hover:text-orange-600 hover:bg-orange-50 transition-colors duration-200"
                >
                  <Facebook className="h-4 w-4" />
                </Link>
                <Link
                  href="https://twitter.com"
                  aria-label="Twitter"
                  className="bg-gray-100 p-2 rounded-full text-gray-500 hover:text-orange-600 hover:bg-orange-50 transition-colors duration-200"
                >
                  <Twitter className="h-4 w-4" />
                </Link>
                <Link
                  href="https://instagram.com"
                  aria-label="Instagram"
                  className="bg-gray-100 p-2 rounded-full text-gray-500 hover:text-orange-600 hover:bg-orange-50 transition-colors duration-200"
                >
                  <Instagram className="h-4 w-4" />
                </Link>
                <Link
                  href="https://youtube.com"
                  aria-label="YouTube"
                  className="bg-gray-100 p-2 rounded-full text-gray-500 hover:text-orange-600 hover:bg-orange-50 transition-colors duration-200"
                >
                  <Youtube className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* WhatsApp Button */}
     <Link
        href="https://wa.me/966580563933?text=Hello%20Dawood%20Tours,%20I'm%20interested%20in%20your%20services"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center"
      >
        <div className="relative">
          <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-30"></div>
          <div className="relative bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-colors duration-300">
            <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
          </div>
        </div>
      </Link>
    </div>
  )
}
