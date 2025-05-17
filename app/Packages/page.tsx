import { Metadata } from "next"
import PackagesHero from "./components/packages-hero"
import PackagesCTA from "./components/packages-cta"
import PackagesFAQ from "./components/packages-faq"
import PackagesList from "./components/packages-list"
import PackagesTestimonials from "./components/packages-testimonials"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"


export const metadata: Metadata = {
  title: "Travel Packages | Dawood Tours",
  description: "Explore our premium Hajj, Umrah, and Ziyarat packages designed for a spiritually fulfilling journey.",
}

export default function PackagesPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <PackagesHero />
      <PackagesList />
      <PackagesTestimonials />
      <PackagesFAQ />
      <PackagesCTA />
      <Footer />
    </main>
  )
}
