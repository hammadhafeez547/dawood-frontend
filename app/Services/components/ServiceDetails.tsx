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
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

export default function ServicesPage() {
  const [activeTab, setActiveTab] = useState("all");

  const services = [
    {
      id: "makkah-to-madinah",
      title: "Makkah to Madinah Transport",
      description:
        "Comfortable and reliable transportation services between the holy cities of Makkah and Madinah.",
      icon: <Car className="h-10 w-10 text-orange-500" />,
      image: "/r4.png",
      category: "transportation",
      featured: true,
    },
    {
      id: "jeddah-to-madinah",
      title: "Jeddah to Madinah Transport",
      description:
        "Efficient transport from Jeddah to the serene city of Madinah with experienced drivers.",
      icon: <Car className="h-10 w-10 text-orange-500" />,
      image: "/r1.png",
      category: "transportation",
      featured: true,
    },
    {
      id: "jeddah-to-makkah",
      title: "Jeddah to Makkah Transport",
      description:
        "Quick and comfortable transport from Jeddah to the holy city of Makkah.",
      icon: <Car className="h-10 w-10 text-orange-500" />,
      image: "/r2.png",
      category: "transportation",
      featured: true,
    },
    {
      id: "madinah-hotel-to-makkah-hotel",
      title: "Madinah Hotel to Makkah Hotel",
      description:
        "Hotel-to-hotel transport between Madinah and Makkah for pilgrims seeking door-to-door service.",
      icon: <Car className="h-10 w-10 text-orange-500" />,
      image: "/r3.png",
      category: "transportation",
      featured: true,
    },
    {
      id: "City-tours",
      title: "City Tours (Ziyarat)",
      description:
        "Guided Ziyarat tours with experienced drivers across historical Islamic landmarks.",
      icon: <Landmark className="h-10 w-10 text-orange-500" />,
      image: "/ziyarat.jpg",
      category: "tours",
    },
    {
      id: "airport-transfers",
      title: "Airport Transfers",
      description:
        "24/7 airport pick-up and drop-off services with premium comfort and punctuality.",
      icon: <Calendar className="h-10 w-10 text-orange-500" />,
      image: "/airport.jpg",
      category: "transportation",
    },
    {
      id: "Group-transport",
      title: "Group Transport",
      description:
        "Spacious vehicles available for families, groups, and Hajj/Umrah pilgrims’ group travel.",
      icon: <Users className="h-10 w-10 text-orange-500" />,
      image: "/group.jpg",
      category: "transportation",
    },
    {
      id: "Hotel-pickup",
      title: "Hotel Pickup & Drop",
      description:
        "Comfortable travel to/from your hotel to Masjid al-Haram or Masjid al-Nabawi.",
      icon: <Building className="h-10 w-10 text-orange-500" />,
      image: "/hotel.jpg",
      category: "transportation",
    },
  ];
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "ItemList",
        itemListElement: services.map((service, index) => ({
          "@type": "ListItem",
          position: index + 1,
          item: {
            "@type": "Service",
            name: service.title,
            description: service.description,
            offeredBy: {
              "@type": "Organization",
              name: "Dawood Hajj and Umrah Transportation",
            },
            areaServed: "Makkah, Madinah, Jeddah",
            serviceOutput: "Pilgrim transportation",
            price: "200 SAR",
            priceCurrency: "SAR",
          },
        })),
      }),
    }}
  />;

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
                      <div className="relative w-full h-70">
                        <Image
                          src={service.image || "/placeholder.svg"}
                          alt={service.title}
                          layout="fill" // Ensures the image fills the parent container
                          objectFit="cover" // Keeps the image proportional (covering the area without stretching)
                          className="rounded-t-lg absolute top-0 left-0" // Ensure it aligns at the top left of the container
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
                <Link href={"/Packages"}>
                  {" "}
                  <Button className="bg-white text-orange-600 hover:bg-gray-100">
                    View All Packages
                  </Button>
                </Link>

                <Link href={"/Contact"}>
                  {" "}
                  <Button
                    variant="outline"
                    className="text-white bg-orange-500 border-white/30 hover:bg-white/10"
                  >
                    Contact Our Team
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
