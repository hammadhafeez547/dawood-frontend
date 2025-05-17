"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Car,
  Users,
  Building,
  Calendar,
  Landmark,
  Shield,
  Star,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function ServicesPage() {
  const [activeTab, setActiveTab] = useState("all");

  const services = [
   {
    id: "makkah-to-madinah",
    title: "Makkah to Madinah Transport",
    description:
      "Comfortable and reliable transportation services between the holy cities of Makkah and Madinah.",
    icon: <Car className="h-10 w-10 text-orange-500" />,
    image: "/makkah-madinah.jpg",
    category: "transportation",
    featured: true,
  },
  {
    id: "jeddah-to-madinah",
    title: "Jeddah to Madinah Transport",
    description:
      "Efficient transport from Jeddah to the serene city of Madinah with experienced drivers.",
    icon: <Car className="h-10 w-10 text-orange-500" />,
    image: "/jeddah-madinah.jpg",
    category: "transportation",
    featured: true,
  },
  {
    id: "jeddah-to-makkah",
    title: "Jeddah to Makkah Transport",
    description:
      "Quick and comfortable transport from Jeddah to the holy city of Makkah.",
    icon: <Car className="h-10 w-10 text-orange-500" />,
    image: "/jeddah-makkah.jpg",
    category: "transportation",
    featured: true,
  },
  {
    id: "madinah-hotel-to-makkah-hotel",
    title: "Madinah Hotel to Makkah Hotel",
    description:
      "Hotel-to-hotel transport between Madinah and Makkah for pilgrims seeking door-to-door service.",
    icon: <Car className="h-10 w-10 text-orange-500" />,
    image: "/madinah-makkah-hotel.jpg",
    category: "transportation",
    featured: true,
  },
    {
      id: "City-tours",
      title: "City Tours (Ziyarat)",
      description:
        "Guided Ziyarat tours with experienced drivers across historical Islamic landmarks.",
      icon: <Landmark className="h-10 w-10 text-orange-500" />,
      image: "/city-tour.jpg",
      category: "tours",
    },
    {
      id: "airport-transfers",
      title: "Airport Transfers",
      description:
        "24/7 airport pick-up and drop-off services with premium comfort and punctuality.",
      icon: <Calendar className="h-10 w-10 text-orange-500" />,
      image: "/airport-transfer.jpg",
      category: "transportation",
    },
    {
      id: "Group-transport",
      title: "Group Transport",
      description:
        "Spacious vehicles available for families, groups, and Hajj/Umrah pilgrims’ group travel.",
      icon: <Users className="h-10 w-10 text-orange-500" />,
      image: "/group-transport.jpg",
      category: "transportation",
    },
    {
      id: "Hotel-pickup",
      title: "Hotel Pickup & Drop",
      description:
        "Comfortable travel to/from your hotel to Masjid al-Haram or Masjid al-Nabawi.",
      icon: <Building className="h-10 w-10 text-orange-500" />,
      image: "/hotel-pickup.jpg",
      category: "transportation",
    },
  ];

  // Filter services based on active tab
  const filteredServices =
    activeTab === "all"
      ? services
      : services.filter((service) => service.category === activeTab);

  // Get featuorange services
  const featuredServices = services.filter((service) => service.featured);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };

  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-gray-900 to-gray-800 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/madina2.jpg"
            alt="Madina Background"
            fill
            sizes="100vw"
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-black/80" />
          <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-10" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center text-white max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Our Services
            </h1>
            <div className="w-24 h-1 bg-orange-500 mx-auto my-6"></div>
            <p className="text-lg text-gray-300 mb-8">
              Comprehensive pilgrimage solutions designed to make your spiritual
              journey comfortable, meaningful, and hassle-free.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featuorange Services */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-800">
              Featuorange Services
            </h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto my-4"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our most popular services designed to provide you with a seamless
              and spiritually enriching pilgrimage experience.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {featuredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group"
              >
                <div className="relative h-64">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-orange-600 hover:bg-orange-700">
                      Featured
                    </Badge>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-orange-100 rounded-lg mr-4">
                      {service.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <div className="flex">
                        {[1, 2, 3, 4, 5].map((_, i) => (
                          <Star
                            key={i}
                            className="h-4 w-4 text-yellow-400 fill-current"
                          />
                        ))}
                      </div>
                      <span className="text-sm text-gray-500 ml-2">
                        5.0 (120+ reviews)
                      </span>
                    </div>
                    <Link href={`/Services/${service.id}`}>
                      <Button className="bg-orange-600 hover:bg-orange-700">
                        Learn More
                      </Button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* All Services */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-800">
              Explore Our Services
            </h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto my-4"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Browse our comprehensive range of services designed to make your
              pilgrimage journey comfortable and spiritually fulfilling.
            </p>
          </motion.div>

          <Tabs
            defaultValue="all"
            value={activeTab}
            onValueChange={setActiveTab}
            className="w-full"
          >
            <div className="flex justify-center mb-8">
              <TabsList className="bg-white/80 backdrop-blur-sm">
                <TabsTrigger value="all">All Services</TabsTrigger>
                <TabsTrigger value="packages">Packages</TabsTrigger>
                <TabsTrigger value="transportation">Transportation</TabsTrigger>
                <TabsTrigger value="accommodation">Accommodation</TabsTrigger>
                <TabsTrigger value="tours">Tours</TabsTrigger>
                <TabsTrigger value="support">Support</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value={activeTab} className="mt-0">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredServices.map((service, index) => (
                  <motion.div
                    key={index}
                    custom={index}
                    initial="hidden"
                    animate="visible"
                    variants={fadeIn}
                    className="h-full"
                  >
                    <Card className="h-full flex flex-col hover:shadow-lg transition-shadow">
                      <div className="relative h-48">
                        <Image
                          src={service.image || "/placeholder.svg"}
                          alt={service.title}
                          fill
                          className="object-cover rounded-t-lg"
                        />
                      </div>
                      <CardHeader className="pb-2">
                        <div className="flex items-center gap-3">
                          <div className="p-2 bg-orange-100 rounded-lg">
                            {service.icon}
                          </div>
                          <CardTitle>{service.title}</CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-gray-600">
                          {service.description}
                        </CardDescription>
                      </CardContent>
                      <CardFooter className="mt-auto pt-2">
                        <Link
                          href={`/Services/${service.id}`}
                          className="w-full"
                        >
                          <Button
                            variant="outline"
                            className="w-full text-orange-600 border-orange-200 hover:bg-orange-50 hover:text-orange-700"
                          >
                            View Details
                          </Button>
                        </Link>
                      </CardFooter>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-orange-600 to-orange-500 rounded-xl overflow-hidden shadow-xl">
            <div className="p-8 md:p-12 text-center text-white">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Ready to Begin Your Spiritual Journey?
              </h2>
              <p className="text-white/90 mb-8 max-w-2xl mx-auto">
                Contact us today to learn more about our services and start
                planning your pilgrimage.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-white text-orange-600 hover:bg-gray-100">
                  View All Packages
                </Button>
                <Button
                  variant="outline"
                  className="text-white border-white/30 hover:bg-white/10"
                >
                  Contact Our Team
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
