"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Check,
  MapPin,
  Clock,
  Users,
  Calendar,
  Car,
  Phone,
  Mail,
  Star,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Navbar from "@/app/components/Navbar";
import Link from "next/link";
import Footer from "@/app/components/Footer";

export default function CityToursServices() {
  const [activeTab, setActiveTab] = useState("makkah");

  const cityTours = {
    makkah: {
      title: "Makkah City Tours",
      description:
        "Explore the historic and spiritual sites of Makkah with our guided city tours.",
      image: "/tours-makka.jpg?height=600&width=800",
      highlights: [
        "Visit historical mosques and Islamic landmarks",
        "Explore the Museum of the Two Holy Mosques",
        "Tour the Clock Tower Museum",
        "Visit Jabal al-Nour (Mountain of Light)",
        "Explore the Cave of Hira",
        "Visit the Birthplace of Prophet Muhammad (PBUH)",
      ],
      duration: "4-8 hours",
      groupSize: "1-15 people",
      includes: [
        "Professional tour guide",
        "Luxury air-conditioned vehicle",
        "Hotel pickup and drop-off",
        "Bottled water",
        "All entrance fees",
      ],
      pricing: [
        { type: "Standard Tour (4 hours)", price: "SAR 500", persons: "1-4" },
        { type: "Extended Tour (8 hours)", price: "SAR 900", persons: "1-4" },
        { type: "Group Tour (4 hours)", price: "SAR 1200", persons: "5-15" },
      ],
    },
    madinah: {
      title: "Madinah City Tours",
      description:
        "Discover the spiritual and historical significance of Madinah with our comprehensive city tours.",
      image: "/tours-madina.jpg?height=600&width=800",
      highlights: [
        "Visit Masjid Al-Nabawi (Prophet's Mosque)",
        "Explore Quba Mosque, the first mosque in Islam",
        "Visit the Seven Mosques historical site",
        "Tour the Uhud Mountain and Martyrs of Uhud",
        "Visit Al-Baqi Cemetery",
        "Explore the Qur'an Exhibition",
      ],
      duration: "4-8 hours",
      groupSize: "1-15 people",
      includes: [
        "Professional tour guide",
        "Luxury air-conditioned vehicle",
        "Hotel pickup and drop-off",
        "Bottled water",
        "All entrance fees",
      ],
      pricing: [
        { type: "Standard Tour (4 hours)", price: "SAR 500", persons: "1-4" },
        { type: "Extended Tour (8 hours)", price: "SAR 900", persons: "1-4" },
        { type: "Group Tour (4 hours)", price: "SAR 1200", persons: "5-15" },
      ],
    },
    jeddah: {
      title: "Jeddah City Tours",
      description:
        "Experience the blend of modern and traditional in Jeddah, the gateway to Makkah and Madinah.",
      image: "/tours-jeddah.jpg?height=600&width=800",
      highlights: [
        "Explore Al-Balad (Historic Jeddah)",
        "Visit the Floating Mosque",
        "Tour the Jeddah Corniche and Fountain",
        "Visit the Open-Air Museum",
        "Explore Tahlia Street for shopping",
        "Visit the Red Sea Mall",
      ],
      duration: "4-8 hours",
      groupSize: "1-15 people",
      includes: [
        "Professional tour guide",
        "Luxury air-conditioned vehicle",
        "Hotel pickup and drop-off",
        "Bottled water",
        "All entrance fees",
      ],
      pricing: [
        { type: "Standard Tour (4 hours)", price: "SAR 500", persons: "1-4" },
        { type: "Extended Tour (8 hours)", price: "SAR 900", persons: "1-4" },
        { type: "Group Tour (4 hours)", price: "SAR 1200", persons: "5-15" },
      ],
    },
  };

  const activeTour = cityTours[activeTab as keyof typeof cityTours];

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero Section */}
    <section className="relative py-20 bg-gradient-to-b from-gray-900 to-gray-800 overflow-hidden">
  <div className="absolute inset-0 z-0">
    <Image
      src="/city-tour-banner.jpg"
      alt="City Tours Background"
      fill
      sizes="100vw"
      className="object-cover opacity-40" // Slightly higher for better visibility
    />
    <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-black/50 to-black/70" />
    <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-10" />
  </div>

  <div className="container mx-auto px-4 relative z-10">
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-center text-white max-w-3xl mx-auto"
    >
      <h1 className="text-4xl md:text-5xl font-bold mb-4">City Tours</h1>
      <div className="w-24 h-1 bg-orange-500 mx-auto my-6"></div>
      <p className="text-lg text-gray-300 mb-8">
        Explore the rich history, culture, and spiritual significance of
        Saudi Arabia's holy cities with our guided tours.
      </p>
    </motion.div>
  </div>
</section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            {/* City Selection Tabs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
                Select Your City Tour
              </h2>
              <Tabs
                defaultValue="makkah"
                value={activeTab}
                onValueChange={setActiveTab}
                className="w-full"
              >
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="makkah">Makkah</TabsTrigger>
                  <TabsTrigger value="madinah">Madinah</TabsTrigger>
                  <TabsTrigger value="jeddah">Jeddah</TabsTrigger>
                </TabsList>
              </Tabs>
            </motion.div>

            {/* Selected City Tour Content */}
            <motion.div
              key={activeTab}
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              className="space-y-12"
            >
              {/* Tour Overview */}
              <div className="bg-white rounded-xl shadow-md overflow-hidden ">
                <div className="md:flex">
                  {/* Image Section */}
                  <div className="md:w-1/2 w-full relative aspect-[4/3] md:aspect-auto h-64 md:h-auto">
                    <Image
                      src={activeTour.image || "/placeholder.svg"}
                      alt={activeTour.title}
                      fill
                      className="object-cover"
                      sizes="(min-width: 768px) 50vw, 100vw"
                      priority
                    />
                  </div>

                  {/* Content Section */}
                  <div className="p-8 md:w-1/2">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">
                      {activeTour.title}
                    </h3>
                    <p className="text-gray-600 mb-6">
                      {activeTour.description}
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex items-center">
                        <Clock className="h-5 w-5 text-orange-500 mr-2" />
                        <span className="text-gray-700">
                          {activeTour.duration}
                        </span>
                      </div>
                      <div className="flex items-center">
                        <Users className="h-5 w-5 text-orange-500 mr-2" />
                        <span className="text-gray-700">
                          {activeTour.groupSize}
                        </span>
                      </div>
                      <div className="flex items-center">
                        <MapPin className="h-5 w-5 text-orange-500 mr-2" />
                        <span className="text-gray-700">
                          Multiple Locations
                        </span>
                      </div>
                      <div className="flex items-center">
                        <Calendar className="h-5 w-5 text-orange-500 mr-2" />
                        <span className="text-gray-700">Available Daily</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tour Highlights */}
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-6">
                  Tour Highlights
                </h3>
                <motion.div
                  variants={staggerContainer}
                  initial="hidden"
                  animate="visible"
                  className="grid md:grid-cols-2 gap-4"
                >
                  {activeTour.highlights.map((highlight, index) => (
                    <motion.div
                      key={index}
                      variants={fadeIn}
                      className="flex items-start"
                    >
                      <div className="bg-orange-100 rounded-full p-1 mr-3 mt-1">
                        <Check className="h-4 w-4 text-orange-600" />
                      </div>
                      <p className="text-gray-700">{highlight}</p>
                    </motion.div>
                  ))}
                </motion.div>
              </div>

              {/* What's Included */}
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-6">
                  What's Included
                </h3>
                <div className="bg-gray-50 rounded-xl p-6">
                  <ul className="grid md:grid-cols-2 gap-4">
                    {activeTour.includes.map((item, index) => (
                      <li key={index} className="flex items-center">
                        <div className="bg-green-100 rounded-full p-1 mr-3">
                          <Check className="h-4 w-4 text-green-600" />
                        </div>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Pricing */}
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-6">
                  Tour Pricing
                </h3>
                <div className="grid md:grid-cols-3 gap-6">
                  {activeTour.pricing.map((price, index) => (
                    <Card key={index} className="overflow-hidden">
                      <div className="bg-gradient-to-r from-orange-600 to-orange-500 py-4 px-6 text-white">
                        <h4 className="font-bold text-lg">{price.type}</h4>
                      </div>
                      <CardContent className="p-6">
                        <div className="text-center mb-4">
                          <span className="text-3xl font-bold text-gray-800">
                            {price.price}
                          </span>
                          <span className="text-gray-500 block text-sm">
                            For {price.persons} persons
                          </span>
                        </div>
                        <Button className="w-full bg-orange-600 hover:bg-orange-700">
                          Book Now
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Booking Process */}
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-6">
                  How to Book
                </h3>
                <div className="grid md:grid-cols-3 gap-6 text-center">
                  <div className="bg-white p-6 rounded-xl shadow-md">
                    <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Calendar className="h-8 w-8 text-orange-600" />
                    </div>
                    <h4 className="font-bold text-lg mb-2">
                      1. Select Date & Time
                    </h4>
                    <p className="text-gray-600">
                      Choose your preferred date and time for the tour
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-md">
                    <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Users className="h-8 w-8 text-orange-600" />
                    </div>
                    <h4 className="font-bold text-lg mb-2">
                      2. Provide Details
                    </h4>
                    <p className="text-gray-600">
                      Enter the number of participants and your contact
                      information
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-md">
                    <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Car className="h-8 w-8 text-orange-600" />
                    </div>
                    <h4 className="font-bold text-lg mb-2">
                      3. Confirm Booking
                    </h4>
                    <p className="text-gray-600">
                      Receive confirmation and prepare for your tour
                    </p>
                  </div>
                </div>
              </div>

              {/* FAQs */}
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-6">
                  Frequently Asked Questions
                </h3>
                <Accordion
                  type="single"
                  collapsible
                  className="bg-white rounded-xl shadow-md"
                >
                  <AccordionItem value="item-1">
                    <AccordionTrigger className="px-6">
                      What should I wear for the city tour?
                    </AccordionTrigger>
                    <AccordionContent className="px-6">
                      For tours in Saudi Arabia, we recommend modest clothing.
                      Men should wear long pants and shirts with sleeves. Women
                      should wear loose-fitting clothes that cover arms, legs,
                      and hair with a headscarf (especially when visiting
                      mosques).
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger className="px-6">
                      Can I customize the tour itinerary?
                    </AccordionTrigger>
                    <AccordionContent className="px-6">
                      Yes, we offer customized tours to meet your specific
                      interests and requirements. Please contact our customer
                      service team to arrange a personalized tour experience.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger className="px-6">
                      Are meals included in the tour?
                    </AccordionTrigger>
                    <AccordionContent className="px-6">
                      Meals are not included in the standard tour packages.
                      However, our guides can recommend excellent local
                      restaurants, and we can arrange meal stops during the tour
                      upon request.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-4">
                    <AccordionTrigger className="px-6">
                      What languages do your tour guides speak?
                    </AccordionTrigger>
                    <AccordionContent className="px-6">
                      Our tour guides are fluent in Arabic and English. Guides
                      who speak other languages such as Urdu, French, Turkish,
                      and Malay can be arranged with advance notice, subject to
                      availability.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>

              {/* Testimonials */}
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-6">
                  What Our Customers Say
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white p-6 rounded-xl shadow-md">
                    <div className="flex mb-4">
                      {[1, 2, 3, 4, 5].map((_, i) => (
                        <Star
                          key={i}
                          className="h-5 w-5 text-yellow-400 fill-current"
                        />
                      ))}
                    </div>
                    <p className="text-gray-600 italic mb-4">
                      "The Makkah city tour was incredibly informative and
                      spiritually enriching. Our guide was knowledgeable and
                      accommodating. Highly recommended for anyone visiting the
                      holy city!"
                    </p>
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-gray-300 rounded-full mr-3"></div>
                      <div>
                        <p className="font-medium">Ahmed S.</p>
                        <p className="text-sm text-gray-500">United Kingdom</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-md">
                    <div className="flex mb-4">
                      {[1, 2, 3, 4, 5].map((_, i) => (
                        <Star
                          key={i}
                          className="h-5 w-5 text-yellow-400 fill-current"
                        />
                      ))}
                    </div>
                    <p className="text-gray-600 italic mb-4">
                      "The tour was well-organized and comprehensive. We visited
                      all the important sites with enough time to appreciate
                      each one. The air-conditioned vehicle was a blessing in
                      the heat!"
                    </p>
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-gray-300 rounded-full mr-3"></div>
                      <div>
                        <p className="font-medium">Fatima R.</p>
                        <p className="text-sm text-gray-500">Malaysia</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="bg-gradient-to-r from-orange-600 to-orange-500 rounded-xl overflow-hidden shadow-xl">
                <div className="p-8 md:p-12 text-center text-white">
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">
                    Ready to Explore?
                  </h3>
                  <p className="text-white/90 mb-8 max-w-2xl mx-auto">
                    Book your city tour today and discover the rich history and
                    spiritual significance of Saudi Arabia's holy cities.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link href={"/Book"}>
                      {" "}
                      <Button className="bg-white text-orange-600 hover:bg-gray-100">
                        Book Now
                      </Button>
                    </Link>
                    <Button className="bg-white text-orange-600 hover:bg-gray-100">
                      Book Now
                    </Button>
                    <Link href={"/Contact"}>
                      {" "}
                      <Button
                        variant="outline"
                        className="text-white bg-orange-500 border-white/30 hover:bg-white/10"
                      >
                        Contact Us
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-800 mb-6">
                    Need More Information?
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="flex items-start">
                      <div className="bg-orange-100 rounded-full p-3 mr-4">
                        <Phone className="h-6 w-6 text-orange-600" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-800">Call Us</p>
                        <p className="text-gray-600">+966 58 056 3933</p>
                        <p className="text-gray-600">Available 24/7</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-orange-100 rounded-full p-3 mr-4">
                        <Mail className="h-6 w-6 text-orange-600" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-800">Email Us</p>
                        <p className="text-gray-600">DiamondDawood@gmail.com</p>
                        <p className="text-gray-600">
                          We'll respond within 24 hours
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
