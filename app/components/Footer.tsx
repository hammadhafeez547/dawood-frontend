import { Facebook, Instagram, Youtube, Phone, Mail, MapPin } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  return (
    <div className="flex justify-center items-center">
      <div className="bg-black w-[95%] max-w-[1800px] text-white p-8 rounded-xl relative overflow-hidden lg:min-w-[900px]">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="absolute top-10 left-14 text-neutral-400 transform rotate-45 opacity-20">
            <span className="material-symbols-outlined text-3xl">star</span>
          </div>
          <div className="absolute top-40 right-24 text-neutral-400 transform -rotate-15 opacity-20">
            <span className="material-symbols-outlined text-3xl">star</span>
          </div>
          <div className="absolute bottom-10 left-1/4 text-neutral-400 transform rotate-20 opacity-20">
            <span className="material-symbols-outlined text-3xl">star</span>
          </div>
          <div className="absolute top-1/4 right-10 text-neutral-400 transform rotate-30 opacity-20">
            <span className="material-symbols-outlined text-3xl">star</span>
          </div>
          <div className="absolute bottom-1/3 right-1/2 text-neutral-400 transform -rotate-25 opacity-20">
            <span className="material-symbols-outlined text-3xl">star</span>
          </div>
        </div>

        <div className="relative z-10 flex flex-col md:flex-row justify-between mb-8">
          <div className="mb-4 md:mb-0">
            <h2 className="text-2xl font-bold">
              <span className="text-primary-500">DAW</span>
              <span className="text-orange-500">OOD</span>
            </h2>
            <h4 className="text-[12px]">Travels & Transportations</h4>
            <p className="text-sm mt-3 text-gray-400 max-w-xs">
              Experience comfortable and reliable transportation services for your pilgrimage journey.
            </p>
            <div className="space-x-3 flex mt-6">
              <Link
                href="#"
                className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition-colors"
              >
                <Facebook className="text-gray-400 hover:text-white transition-colors" size={16} />
              </Link>
              <Link
                href="#"
                className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition-colors"
              >
                <Instagram className="text-gray-400 hover:text-white transition-colors" size={16} />
              </Link>
              <Link
                href="#"
                className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition-colors"
              >
                <Youtube className="text-gray-400 hover:text-white transition-colors" size={16} />
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-3">Contact Us</h3>
              <ul className="space-y-3">
                <li className="text-sm text-gray-400 hover:text-white transition-all flex items-start">
                  <Phone className="mr-2 h-4 w-4 mt-0.5 text-orange-500" />
                  <span>+966 12 345 6789</span>
                </li>
                <li className="text-sm text-gray-400 hover:text-white transition-all flex items-start">
                  <Mail className="mr-2 h-4 w-4 mt-0.5 text-orange-500" />
                  <span>info@dawoodtours.com</span>
                </li>
                <li className="text-sm text-gray-400 hover:text-white transition-all flex items-start">
                  <MapPin className="mr-2 h-4 w-4 mt-0.5 text-orange-500" />
                  <span>123 Al Noor Street, Makkah, Saudi Arabia</span>
                </li>
                <li className="text-sm text-gray-400 hover:text-white transition-all">
                  <Link href="/Contact" className="inline-block hover:translate-x-1 transition-transform">
                    View All Locations
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
              <ul className="space-y-2">
                <li className="text-sm text-gray-400 hover:text-white transition-all">
                  <Link href="/" className="inline-block hover:translate-x-1 transition-transform">
                    Home
                  </Link>
                </li>
                <li className="text-sm text-gray-400 hover:text-white transition-all">
                  <Link href="/About" className="inline-block hover:translate-x-1 transition-transform">
                    About Us
                  </Link>
                </li>
                <li className="text-sm text-gray-400 hover:text-white transition-all">
                  <Link href="/OurVehicles" className="inline-block hover:translate-x-1 transition-transform">
                    Our Vehicles
                  </Link>
                </li>
                <li className="text-sm text-gray-400 hover:text-white transition-all">
                  <Link href="/Book" className="inline-block hover:translate-x-1 transition-transform">
                    Book Now
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Our Services</h3>
              <ul className="space-y-2">
                <li className="text-sm text-gray-400 hover:text-white transition-all">
                  <Link
                    href="/services/makkah-to-madinah"
                    className="inline-block hover:translate-x-1 transition-transform"
                  >
                    Makkah to Madinah
                  </Link>
                </li>
                <li className="text-sm text-gray-400 hover:text-white transition-all">
                  <Link href="/services" className="inline-block hover:translate-x-1 transition-transform">
                    Airport Transfers
                  </Link>
                </li>
                <li className="text-sm text-gray-400 hover:text-white transition-all">
                  <Link href="/services" className="inline-block hover:translate-x-1 transition-transform">
                    City Tours
                  </Link>
                </li>
                <li className="text-sm text-gray-400 hover:text-white transition-all">
                  <Link href="/services" className="inline-block hover:translate-x-1 transition-transform">
                    Ziyarat Transportation
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent w-full my-4"></div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-4">
          <p className="text-sm text-gray-400 mb-4 md:mb-0">© 2024 Dawood Tours. All rights reserved.</p>

          <div className="flex space-x-3">
            <Link
              href="#"
              className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition-colors"
            >
              <Facebook className="text-gray-400 hover:text-white transition-colors" size={16} />
            </Link>
            <Link
              href="#"
              className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition-colors"
            >
              <Instagram className="text-gray-400 hover:text-white transition-colors" size={16} />
            </Link>
            <Link
              href="#"
              className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition-colors"
            >
              <Youtube className="text-gray-400 hover:text-white transition-colors" size={16} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
