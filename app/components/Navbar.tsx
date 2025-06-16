"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, Phone, Mail, Facebook, Twitter, Instagram, Youtube, MapPin, ChevronDown, Calendar, Car,  User, Home, Info, Settings, Star } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [logoLoaded, setLogoLoaded] = useState(false)

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    const handleClickOutside = (e: MouseEvent) => {
      if (isMenuOpen && !(e.target as HTMLElement).closest(".mobile-menu") && !(e.target as HTMLElement).closest(".menu-button")) {
        setIsMenuOpen(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      window.removeEventListener("scroll", handleScroll)
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [isMenuOpen])

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name)
  }

  return (
    <div className="relative">
      {/* Top Announcement Bar */}
      {/* <div className="fixed top-0 left-0 right-0 w-full bg-gradient-to-r from-orange-700 to-amber-700 text-white py-2 px-4 text-sm z-50 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Calendar className="h-4 w-4 text-orange-200" />
              <span className="hidden sm:inline">2024 Hajj Packages Now Available!</span>
              <span className="sm:hidden">Hajj 2024 Open!</span>
            </div>
            <div className="hidden md:flex items-center space-x-2 animate-pulse">
              <Car className="h-4 w-4 text-orange-200" />
              <span>24/7 Transport Services</span>
            </div>
          </div>
          <Link href="/special-offers" className="flex items-center group">
            <span className="group-hover:underline underline-offset-4 decoration-orange-200">Limited Time Offers</span>
            <ChevronDown className="ml-1 h-4 w-4 text-orange-200 group-hover:translate-y-0.5 transition-transform" />
          </Link>
        </div>
      </div> */}

      {/* Contact Info Bar */}
      <div className="fixed top-0 left-0 right-0 w-full bg-orange-800 text-white py-2 px-4 text-sm z-40 border-b border-orange-700/50">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <Link href="tel:+966580563933" className="flex items-center space-x-2 group">
              <div className="bg-orange-700/50 rounded-full p-1.5 group-hover:bg-orange-600 transition-all">
                <Phone className="h-4 w-4 text-orange-100" />
              </div>
              <span className="group-hover:text-orange-200 transition-colors">+966 58 056 3933</span>
            </Link>
            <Link href="mailto:DiamondDawood@gmail.com" className="hidden md:flex items-center space-x-2 group">
              <div className="bg-orange-700/50 rounded-full p-1.5 group-hover:bg-orange-600 transition-all">
                <Mail className="h-4 w-4 text-orange-100" />
              </div>
              <span className="group-hover:text-orange-200 transition-colors">DiamondDawood@gmail.com</span>
            </Link>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center space-x-2 group">
              <div className="bg-orange-700/50 rounded-full p-1.5 group-hover:bg-orange-600 transition-all">
                <User className="h-4 w-4 text-orange-100" />
              </div>
              <Link href="/client-portal" className="group-hover:text-orange-200 transition-colors">
                Client Portal
              </Link>
            </div>
            
            <div className="flex items-center space-x-3">
              {['facebook', 'instagram', 'youtube'].map((social) => (
                <Link 
                  key={social}
                  href={`https://${social}.com`}
                  aria-label={social}
                  className="bg-orange-700/30 hover:bg-orange-600 rounded-full p-1.5 transition-all"
                >
                  {social === 'facebook' && <Facebook className="h-4 w-4" />}
                  {social === 'instagram' && <Instagram className="h-4 w-4" />}
                  {social === 'youtube' && <Youtube className="h-4 w-4" />}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <header className={`fixed top-[45px] left-0 right-0 w-full z-30 transition-all duration-300 ${scrolled ? 'py-2 bg-white/95 backdrop-blur-md shadow-lg' : 'py-4 bg-white'}`}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            {/* Logo with Loading State */}
            <Link href="/" className="flex items-center group" aria-label="Dawood Hajj Transport Home">
              <div className={`relative transition-all ${logoLoaded ? 'opacity-100' : 'opacity-0'}`}>
                <Image
                  src="/logo.png"
                  alt="Dawood Hajj Transport Logo"
                  width={220}
                  height={80}
                  className={`h-12 w-auto object-contain group-hover:scale-105 transition-transform ${scrolled ? 'h-10' : 'h-12'}`}
                  priority
                  onLoadingComplete={() => setLogoLoaded(true)}
                />
              </div>
              <div className="hidden md:block ml-3">
                <h1 className={`font-bold ${scrolled ? 'text-xl' : 'text-2xl'} bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent`}>
                  Dawood <span className="font-normal">Transport</span>
                </h1>
                <p className={`${scrolled ? 'text-xs' : 'text-sm'} text-gray-500 tracking-wider`}>Premium Pilgrimage Services</p>
              </div>
              {!logoLoaded && (
                <div className="absolute flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-orange-100 to-orange-200 animate-pulse"></div>
                </div>
              )}
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {[
                { href: "/", label: "Home", icon: <Home className="h-4 w-4" /> },
                { href: "/About", label: "About", icon: <Info className="h-4 w-4" /> },
                { 
                  href: "/Services", 
                  label: "Services", 
                  icon: <Settings className="h-4 w-4" />,
                  // dropdown: [
                  //   { href: "/services/hajj", label: "Hajj Packages", icon: <Star className="h-4 w-4" /> },
                  //   { href: "/services/umrah", label: "Umrah Packages", icon: <Star className="h-4 w-4" /> },
                  //   { href: "/services/transport", label: "City Transport", icon: <Car className="h-4 w-4" /> }
                  // ]
                },
                { href: "/OurVehicles", label: "Our Fleet", icon: <Car className="h-4 w-4" /> },
                { href: "/Contact", label: "Contact", icon: <Phone className="h-4 w-4" /> }
              ].map((item) => (
                <div key={item.label} className="relative group">
                
                    <Link
                      href={item.href}
                      className="flex items-center px-4 py-2 text-gray-700 hover:text-orange-600 font-medium transition-colors"
                    >
                      <span className="mr-2">{item.icon}</span>
                      {item.label}
                    </Link>
                  
                </div>
              ))}
              
              <div className="ml-4">
                <Link href="/Book">
                  <Button className="bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700 text-white px-6 py-2 rounded-full shadow-md hover:shadow-lg transition-all flex items-center">
                    <Calendar className="h-4 w-4 mr-2" />
                    Book Now
                  </Button>
                </Link>
              </div>
            </nav>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-md text-orange-600 hover:bg-orange-50 transition-colors"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden fixed inset-0 z-40 transition-opacity duration-300 ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
          <div className="absolute inset-0 bg-black/50" onClick={() => setIsMenuOpen(false)} />
          <div className={`absolute top-[45px] right-0 h-full w-80 bg-white shadow-xl transform transition-transform duration-300 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
            <div className="flex justify-between items-center p-4 border-b border-gray-200">
              <Link href="/" className="flex items-center" onClick={() => setIsMenuOpen(false)}>
                <Image src="/logo.png" alt="Logo" width={160} height={60} className="h-10 w-auto" />
              </Link>
              <button onClick={() => setIsMenuOpen(false)} className="p-2 text-gray-500 hover:text-orange-600">
                <X className="h-6 w-6" />
              </button>
            </div>
            
            <div className="h-[calc(100vh-120px)] overflow-y-auto py-4 px-2">
              {[
                { href: "/", label: "Home", icon: <Home className="h-5 w-5" /> },
                { href: "/About", label: "About", icon: <Info className="h-5 w-5" /> },
                { 
                  href: "/Services", 
                  label: "Services", 
                  icon: <Settings className="h-5 w-5" />,
                 
                },
                { href: "/OurVehicles", label: "Our Fleet", icon: <Car className="h-5 w-5" /> },
                { href: "/Contact", label: "Contact", icon: <Phone className="h-5 w-5" /> }
              ].map((item) => (
                <div key={item.label} className="mb-1">
                  {
                    <Link
                      href={item.href}
                      className="flex items-center px-4 py-3 text-gray-700 hover:bg-orange-50 rounded-md transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <span className="mr-3 text-orange-500">{item.icon}</span>
                      {item.label}
                    </Link>
                  }
                </div>
              ))}
              
              <div className="mt-6 px-4">
                <Link href="/Book" onClick={() => setIsMenuOpen(false)}>
                  <Button className="w-full bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700 text-white py-3 rounded-lg shadow-md transition-all">
                    Book Transportation
                  </Button>
                </Link>
              </div>
              
              <div className="mt-8 px-4">
                <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">Contact Us</h3>
                <div className="space-y-3">
                  <Link href="tel:+966580563933" className="flex items-center text-gray-700 hover:text-orange-600 transition-colors">
                    <Phone className="h-5 w-5 mr-3 text-orange-500" />
                    +966 58 056 3933
                  </Link>
                  <Link href="mailto:DiamondDawood@gmail.com" className="flex items-center text-gray-700 hover:text-orange-600 transition-colors">
                    <Mail className="h-5 w-5 mr-3 text-orange-500" />
                    DiamondDawood@gmail.com
                  </Link>
                </div>
                
                <div className="mt-6">
                  <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">Follow Us</h3>
                  <div className="flex space-x-3">
                    {['facebook', 'instagram', 'youtube'].map((social) => (
                      <Link
                        key={social}
                        href={`https://${social}.com`}
                        aria-label={social}
                        className="bg-gray-100 hover:bg-orange-100 p-2.5 rounded-full text-gray-700 hover:text-orange-600 transition-colors"
                      >
                        {social === 'facebook' && <Facebook className="h-5 w-5" />}
                        {social === 'instagram' && <Instagram className="h-5 w-5" />}
                        {social === 'youtube' && <Youtube className="h-5 w-5" />}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
 <div className="h-[125px]"></div>
      {/* WhatsApp Floating Button */}
      {/* <Link
        href="https://wa.me/966580563933"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50"
      >
        <div className="relative">
          <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-30"></div>
          <div className="relative bg-green-500 text-white p-4 rounded-full shadow-xl hover:bg-green-600 transition-colors flex items-center justify-center">
            <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335 .157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
          </div>
        </div>
      </Link> */}
    </div>
  )
}