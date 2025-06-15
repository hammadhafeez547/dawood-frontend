"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Car,
  Clock,
  MapPin,
  Calendar,
  Users,
  CheckCircle,
  ArrowRight,
  Phone,
  Mail,
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
import { useParams, useRouter } from "next/navigation";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import axios from "axios";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
interface RouteInfo {
  routeId: string;
  title: string;
  category: string;
  distance: string;
  time: string;
  about: string[];
  journey: string;
}

interface TransportOption {
  title: string;
  description: string;
  price: string;
  perPerson: boolean;
  features: string[];
  image: string;
  vehicleType: string;
  capacity: string;
  duration: string;
  recommended: boolean;
  _id: string;
}

interface FAQ {
  question: string;
  answer: string;
  _id: string;
}

interface TransportService {
  _id: string;
  routeInfo: RouteInfo;
  transportOptions: TransportOption[];
  faqs: FAQ[];
  __v: number;
}



export default function ServiceDetails() {
  const router = useRouter()
  const params = useParams()

  const id = Array.isArray(params?.id)
    ? params.id[0]
    : params?.id
    ? decodeURIComponent(params.id)
    : null

  // ✅ UseEffect for redirect
  useEffect(() => {
    if (!id) return

    const redirectMap: Record<string, string> = {
      "City-tours": "/Services/City-tours",
      "Group-transport": "/Services/Group-transport",
      "Hotel-pickup": "/Services/Hotel-pickup",
      "umrah-transportation": "/Services/umrah-transportation",
      "ziyarat-transportation": "/Services/ziyarat-transportation",
    }

    if (redirectMap[id]) {
      router.replace(redirectMap[id])
    }
  }, [id, router])

  // ✅ State & API
  const [serviceType, setServiceType] = useState("standard")
  const [cars, setCars] = useState<TransportService | null>(null)
  const [selectedTab, setSelectedTab] = useState("overview")
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (!id) return
    fetchRoutes()
  }, [id])

  const fetchRoutes = async () => {
    setIsLoading(true)
    try {
      const res = await axios.get(`http://localhost:4000/service/${id}`)
      console.log("API Response:", res.data)
      setCars(res.data)
    } catch (err) {
      console.error("Error fetching cars:", err)
    } finally {
      setIsLoading(false)
    }
  }
  // ✅ Watch state update
  useEffect(() => {
    console.log("Updated cars state:", cars);
  }, [cars]);
  // Set default data if API fails
  //   setCars({
  //     title: "Makkah to Madinah",
  //     time: "4-6 Hour",
  //     distance: "450 km",
  //     about: [
  //       "Our Makkah to Madinah transportation service provides pilgrims with a comfortable, safe, and convenient journey between the two holy cities. We understand the spiritual significance of your journey and strive to make your travel experience as smooth as possible.",
  //       "The journey between Makkah and Madinah covers approximately 450 kilometers and typically takes between 4-6 hours depending on traffic, road conditions, and the type of service you choose. Our modern fleet of vehicles is well-maintained and operated by experienced drivers who are familiar with the route.",
  //       "We offer multiple departure times throughout the day to accommodate your schedule, and our services range from economical shared transportation to premium private options for those seeking additional comfort and flexibility.",
  //     ],
  //     journey:
  //       "The journey from Makkah to Madinah takes you through the historic Hijaz region of Saudi Arabia. Along the way, you'll pass through diverse landscapes, from mountains to desert plains. Our services include rest stops where you can refresh, perform prayers, and stretch your legs.",
  //     faqs: [
  //       {
  //         question: "How long does the journey from Makkah to Madinah take?",
  //         answer:
  //           "The journey typically takes between 4-6 hours depending on traffic, road conditions, and the type of transportation service you choose. Premium and VIP services may be slightly faster due to fewer stops and more direct routes.",
  //       },
  //       {
  //         question: "What is the distance between Makkah and Madinah?",
  //         answer:
  //           "The distance between Makkah and Madinah is approximately 450 kilometers (280 miles) via the Highway 15 route.",
  //       },
  //       {
  //         question: "Do you provide transportation from Jeddah Airport to Makkah or Madinah?",
  //         answer:
  //           "Yes, we provide transportation services from Jeddah Airport to both Makkah and Madinah. These can be booked separately or as part of a package.",
  //       },
  //     ],
  //   })

  const transportOptions = [
    {
      id: "economy",
      title: "Economy",
      description:
        "Comfortable transportation in shared vehicles with other pilgrims.",
      price: "$50",
      perPerson: true,
      features: [
        "Shared transportation",
        "Air-conditioned vehicles",
        "Standard seating",
        "One luggage per person",
        "Multiple pickup times",
        "Basic amenities",
      ],
      image: "/placeholder.svg?height=300&width=500",
      vehicleType: "Shared Bus",
      capacity: "40-50 passengers",
      duration: "5-6 hours",
    },
    {
      id: "standard",
      title: "Standard",
      description:
        "Semi-private transportation with fewer passengers for a more comfortable journey.",
      price: "$80",
      perPerson: true,
      features: [
        "Semi-private transportation",
        "Air-conditioned vehicles",
        "Comfortable seating",
        "Two luggage per person",
        "Multiple pickup times",
        "Refreshments included",
        "WiFi available",
      ],
      image: "/placeholder.svg?height=300&width=500",
      vehicleType: "Mini Bus",
      capacity: "15-20 passengers",
      duration: "4-5 hours",
      recommended: true,
    },
    {
      id: "premium",
      title: "Premium",
      description:
        "Private transportation for your group with premium vehicles and personalized service.",
      price: "$120",
      perPerson: true,
      features: [
        "Private transportation",
        "Luxury air-conditioned vehicles",
        "Premium comfortable seating",
        "Unlimited luggage (space permitting)",
        "Flexible pickup times",
        "Refreshments and snacks",
        "WiFi and charging ports",
        "Multilingual driver",
      ],
      image: "/placeholder.svg?height=300&width=500",
      vehicleType: "SUV or Luxury Van",
      capacity: "4-7 passengers",
      duration: "4 hours",
    },
    {
      id: "vip",
      title: "VIP",
      description:
        "Exclusive luxury transportation with premium amenities and personalized service.",
      price: "$500",
      perPerson: false,
      features: [
        "Exclusive luxury transportation",
        "Premium vehicles (Mercedes/BMW)",
        "Executive comfortable seating",
        "Unlimited luggage (space permitting)",
        "24/7 flexible pickup",
        "Premium refreshments and meals",
        "WiFi, entertainment, and charging ports",
        "Multilingual professional driver",
        "Personalized service",
      ],
      image: "/placeholder.svg?height=300&width=500",
      vehicleType: "Luxury Sedan or SUV",
      capacity: "2-4 passengers",
      duration: "3.5-4 hours",
    },
  ];

  const faqs = [
    {
      question: "How long does the journey from Makkah to Madinah take?",
      answer:
        "The journey typically takes between 4-6 hours depending on traffic, road conditions, and the type of transportation service you choose. Premium and VIP services may be slightly faster due to fewer stops and more direct routes.",
    },
    {
      question: "What is the distance between Makkah and Madinah?",
      answer:
        "The distance between Makkah and Madinah is approximately 450 kilometers (280 miles) via the Highway 15 route.",
    },
    {
      question:
        "Do you provide transportation from Jeddah Airport to Makkah or Madinah?",
      answer:
        "Yes, we provide transportation services from Jeddah Airport to both Makkah and Madinah. These can be booked separately or as part of a package.",
    },
    {
      question: "Can I book a round trip between Makkah and Madinah?",
      answer:
        "Yes, we offer round-trip bookings with discounted rates. You can specify your return date during the booking process.",
    },
    {
      question: "Is there a luggage limit for the journey?",
      answer:
        "Luggage limits vary by service level. Economy allows one piece per person, Standard allows two pieces, while Premium and VIP have more flexible allowances based on vehicle capacity.",
    },
    {
      question: "Are there restroom breaks during the journey?",
      answer:
        "Yes, all services include at least one rest stop during the journey where you can use restroom facilities, purchase refreshments, and perform prayers if needed.",
    },
    {
      question: "Can I request a female driver for my family?",
      answer:
        "We can accommodate requests for female drivers for family groups, particularly for our Premium and VIP services, subject to availability.",
    },
    {
      question: "Do you provide child seats if requested?",
      answer:
        "Yes, child seats can be provided upon request for an additional fee. Please specify this requirement during booking.",
    },
  ];

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
            <Badge className="bg-orange-600 hover:bg-orange-700 mb-4">
              Transportation Service
            </Badge>

            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {cars?.routeInfo?.title || "Makkah to Madinah"} Transportation
            </h1>
            <div className="w-24 h-1 bg-orange-500 mx-auto my-6"></div>
            <p className="text-lg text-gray-300 mb-8">
              Comfortable and reliable transportation services between the holy
              cities of Makkah and Madinah for a seamless pilgrimage experience.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <Clock className="h-5 w-5 text-orange-400" />
                <span>{cars?.routeInfo?.time || "4-6 Hour"} Journey</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <MapPin className="h-5 w-5 text-orange-400" />
                <span>{cars?.routeInfo?.distance || "450 km"} Distance</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <Car className="h-5 w-5 text-orange-400" />
                <span>Modern Vehicles</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <Calendar className="h-5 w-5 text-orange-400" />
                <span>Daily Departures</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content Area */}
            <div className="lg:col-span-2">
              <Tabs
                defaultValue="overview"
                value={selectedTab}
                onValueChange={setSelectedTab}
              >
                <TabsList className="w-full bg-white rounded-lg shadow-sm mb-6">
                  <TabsTrigger value="overview" className="flex-1">
                    Overview
                  </TabsTrigger>
                  <TabsTrigger value="options" className="flex-1">
                    Transport Options
                  </TabsTrigger>
                  <TabsTrigger value="schedule" className="flex-1">
                    Schedule
                  </TabsTrigger>
                  <TabsTrigger value="faq" className="flex-1">
                    FAQs
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="overview" className="mt-0">
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="bg-white rounded-lg shadow-md overflow-hidden"
                  >
                    <div className="relative h-80 w-full">
                      <Image
                        src="/about.jpg?height=600&width=1200"
                        alt="Makkah to Madinah Transportation"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <h2 className="text-2xl font-bold text-gray-800 mb-4">
                        About Our Makkah to Madinah Service
                      </h2>

                      {/* Safely map over 'about' content */}
                      {cars?.routeInfo.about?.map(
                        (point: string, index: number) => (
                          <p key={index} className="text-gray-600 mb-4">
                            {point}
                          </p>
                        )
                      )}

                      {/* Service Highlights */}
                      <div className="mt-8">
                        <h3 className="text-xl font-bold text-gray-800 mb-4">
                          Service Highlights
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {[
                            {
                              icon: <Car className="h-5 w-5 text-orange-500" />,
                              title: "Modern Fleet",
                              description:
                                "Well-maintained vehicles with air conditioning and comfortable seating",
                            },
                            {
                              icon: (
                                <Users className="h-5 w-5 text-orange-500" />
                              ),
                              title: "Experienced Drivers",
                              description:
                                "Professional drivers with extensive knowledge of the route",
                            },
                            {
                              icon: (
                                <Clock className="h-5 w-5 text-orange-500" />
                              ),
                              title: "Flexible Scheduling",
                              description:
                                "Multiple departure times to suit your itinerary",
                            },
                            {
                              icon: (
                                <CheckCircle className="h-5 w-5 text-orange-500" />
                              ),
                              title: "Safety First",
                              description:
                                "Strict safety protocols and regular vehicle maintenance",
                            },
                          ].map((item, idx) => (
                            <div
                              key={idx}
                              className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg"
                            >
                              <div className="p-2 bg-orange-100 rounded-full">
                                {item.icon}
                              </div>
                              <div>
                                <h4 className="font-medium text-gray-800">
                                  {item.title}
                                </h4>
                                <p className="text-sm text-gray-600">
                                  {item.description}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* The Journey Section */}
                      <div className="mt-8">
                        <h3 className="text-xl font-bold text-gray-800 mb-4">
                          The Journey
                        </h3>
                        <p className="text-gray-600 mb-4">
                          {cars?.routeInfo.journey}
                        </p>
                        <div className="relative h-64 w-full rounded-lg overflow-hidden mt-4">
                          <Image
                            src="/jouney.jpg?height=400&width=800"
                            alt="Journey Map"
                            fill
                            className="object-cover"
                          />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </TabsContent>

                <TabsContent value="options" className="mt-0">
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="text-2xl font-bold text-gray-800 mb-6">
                      Transportation Options
                    </h2>
                    <p className="text-gray-600 mb-8">
                      We offer a range of transportation options to suit
                      different preferences and budgets. Choose the service that
                      best meets your needs for a comfortable journey between
                      Makkah and Madinah.
                    </p>

                    <div className="space-y-6">
                      {cars?.transportOptions.map((option, index) => (
                        <motion.div
                          key={index}
                          custom={index}
                          initial="hidden"
                          animate="visible"
                          variants={fadeIn}
                          className={`bg-white rounded-lg shadow-md overflow-hidden border ${
                            option.recommended
                              ? "border-orange-400"
                              : "border-transparent"
                          }`}
                        >
                          {option.recommended && (
                            <div className="bg-orange-600 text-white text-center py-1.5 text-sm font-medium">
                              Recommended
                            </div>
                          )}
                          <div className="grid grid-cols-1 md:grid-cols-3">
                            <div className="relative h-48 md:h-auto">
                              <Image
                                src={option.image || "/placeholder.svg"}
                                alt={option.title}
                                fill
                                className="object-cover"
                              />
                            </div>
                            <div className="p-6 md:col-span-2">
                              <div className="flex justify-between items-start mb-2">
                                <h3 className="text-xl font-bold text-gray-800">
                                  {option.title}
                                </h3>
                                <div className="text-2xl font-bold text-orange-600">
                                  {option.price}
                                  <span className="text-sm font-normal text-gray-500">
                                    {option.perPerson ? "/person" : "/vehicle"}
                                  </span>
                                </div>
                              </div>
                              <p className="text-gray-600 mb-4">
                                {option.description}
                              </p>

                              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                                <div className="flex items-center gap-2">
                                  <Car className="h-4 w-4 text-orange-500" />
                                  <span className="text-sm text-gray-600">
                                    {option.vehicleType}
                                  </span>
                                </div>
                                <div className="flex items-center gap-2">
                                  <Users className="h-4 w-4 text-orange-500" />
                                  <span className="text-sm text-gray-600">
                                    {option.capacity}
                                  </span>
                                </div>
                                <div className="flex items-center gap-2">
                                  <Clock className="h-4 w-4 text-orange-500" />
                                  <span className="text-sm text-gray-600">
                                    {option.duration}
                                  </span>
                                </div>
                              </div>

                              <div className="mb-4">
                                <h4 className="font-medium text-gray-800 mb-2">
                                  Features:
                                </h4>
                                <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-1">
                                  {option.features.map((feature, i) => (
                                    <li
                                      key={i}
                                      className="flex items-center gap-2 text-sm text-gray-600"
                                    >
                                      <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                                      <span>{feature}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>

                              <Button className="bg-orange-600 hover:bg-orange-700">
                                Book Now
                              </Button>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </TabsContent>

                <TabsContent value="schedule" className="mt-0">
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="bg-white rounded-lg shadow-md p-6"
                  >
                    <h2 className="text-2xl font-bold text-gray-800 mb-6">
                      On-Demand Transportation Service
                    </h2>
                    <p className="text-gray-600 mb-8">
                      Unlike traditional bus services with fixed schedules, our
                      Makkah to Madinah transportation service operates 24/7
                      with vehicles available on-demand. Book your journey at a
                      time that suits your itinerary.
                    </p>

                    {/* Service Availability Card */}
                    <div className="bg-orange-50 rounded-lg p-6 border border-orange-100 mb-8">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-3 bg-orange-100 rounded-full">
                          <Clock className="h-6 w-6 text-orange-600" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-800">
                          24/7 Service Availability
                        </h3>
                      </div>
                      <p className="text-gray-600 mb-4">
                        Our fleet of vehicles is available around the clock to
                        accommodate your travel needs. Whether you need an early
                        morning departure or late-night transportation, we've
                        got you covered.
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                        <div className="bg-white p-4 rounded-lg shadow-sm">
                          <h4 className="font-medium text-gray-800 mb-2">
                            Standard Response Time
                          </h4>
                          <p className="text-sm text-gray-600">
                            Vehicle arrives within 30-60 minutes of booking
                          </p>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow-sm">
                          <h4 className="font-medium text-gray-800 mb-2">
                            Advanced Booking
                          </h4>
                          <p className="text-sm text-gray-600">
                            Schedule your ride up to 30 days in advance
                          </p>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow-sm">
                          <h4 className="font-medium text-gray-800 mb-2">
                            Express Service
                          </h4>
                          <p className="text-sm text-gray-600">
                            Premium & VIP services available within 15-30
                            minutes
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* How It Works */}
                    <h3 className="text-xl font-bold text-gray-800 mb-4">
                      How Our Service Works
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                      {[
                        {
                          step: 1,
                          title: "Book Your Ride",
                          description:
                            "Use our website, app, or call our 24/7 hotline to book your transportation",
                          icon: <Phone className="h-6 w-6 text-orange-600" />,
                        },
                        {
                          step: 2,
                          title: "Confirmation",
                          description:
                            "Receive instant confirmation with driver details and estimated arrival time",
                          icon: (
                            <CheckCircle className="h-6 w-6 text-orange-600" />
                          ),
                        },
                        {
                          step: 3,
                          title: "Driver Arrival",
                          description:
                            "Your driver will arrive at your location at the scheduled time",
                          icon: <Car className="h-6 w-6 text-orange-600" />,
                        },
                        {
                          step: 4,
                          title: "Comfortable Journey",
                          description:
                            "Enjoy a safe and comfortable journey to your destination",
                          icon: <Users className="h-6 w-6 text-orange-600" />,
                        },
                      ].map((step, index) => (
                        <div key={index} className="relative">
                          <div className="bg-white rounded-lg p-6 h-full border border-gray-100 shadow-sm flex flex-col">
                            <div className="absolute -top-4 left-6 w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                              {step.step}
                            </div>
                            <div className="mb-4 mt-2">{step.icon}</div>
                            <h4 className="font-medium text-gray-800 mb-2">
                              {step.title}
                            </h4>
                            <p className="text-sm text-gray-600">
                              {step.description}
                            </p>
                          </div>
                          {index < 3 && (
                            <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                              <ArrowRight className="h-5 w-5 text-orange-400" />
                            </div>
                          )}
                        </div>
                      ))}
                    </div>

                    {/* Pickup Locations */}
                    <h3 className="text-xl font-bold text-gray-800 mb-4">
                      Flexible Pickup Locations
                    </h3>
                    <p className="text-gray-600 mb-6">
                      We offer pickup services from various locations in Makkah
                      to ensure convenience for all our customers.
                    </p>
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse">
                        <thead>
                          <tr className="bg-gray-100">
                            <th className="border px-4 py-3 text-left text-gray-700">
                              Pickup Area
                            </th>
                            <th className="border px-4 py-3 text-left text-gray-700">
                              Service Types Available
                            </th>
                            <th className="border px-4 py-3 text-left text-gray-700">
                              Typical Journey Time
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {[
                            {
                              area: "Haram Area Hotels",
                              services: "All Services",
                              time: "4-5 hours",
                            },
                            {
                              area: "Aziziyah District",
                              services: "All Services",
                              time: "4-5 hours",
                            },
                            {
                              area: "Rusaifah District",
                              services: "All Services",
                              time: "4-5 hours",
                            },
                            {
                              area: "Ibrahim Al-Khalil Street",
                              services: "All Services",
                              time: "4-5 hours",
                            },
                            {
                              area: "Makkah Bus Station",
                              services: "Economy, Standard",
                              time: "4-5 hours",
                            },
                            {
                              area: "Custom Location",
                              services: "Premium, VIP",
                              time: "4-5 hours",
                            },
                          ].map((location, index) => (
                            <tr
                              key={index}
                              className={
                                index % 2 === 0 ? "bg-white" : "bg-gray-50"
                              }
                            >
                              <td className="border px-4 py-3 text-gray-800 font-medium">
                                {location.area}
                              </td>
                              <td className="border px-4 py-3 text-gray-600">
                                {location.services}
                              </td>
                              <td className="border px-4 py-3 text-gray-600">
                                {location.time}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>

                    <div className="mt-8 bg-orange-50 border border-orange-200 rounded-lg p-4">
                      <h3 className="text-lg font-medium text-gray-800 mb-2">
                        Important Information:
                      </h3>
                      <ul className="space-y-2 text-gray-600">
                        <li className="flex items-start gap-2">
                          <ArrowRight className="h-5 w-5 text-orange-500 mt-0.5 flex-shrink-0" />
                          <span>
                            For immediate bookings, please allow 30-60 minutes
                            for vehicle preparation and arrival.
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <ArrowRight className="h-5 w-5 text-orange-500 mt-0.5 flex-shrink-0" />
                          <span>
                            During peak seasons (Hajj, Ramadan, holidays), we
                            recommend booking at least 24 hours in advance.
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <ArrowRight className="h-5 w-5 text-orange-500 mt-0.5 flex-shrink-0" />
                          <span>
                            VIP and Premium services include priority dispatch
                            and dedicated customer service.
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <ArrowRight className="h-5 w-5 text-orange-500 mt-0.5 flex-shrink-0" />
                          <span>
                            Journey times may vary based on traffic, weather
                            conditions, and prayer times.
                          </span>
                        </li>
                      </ul>
                    </div>

                    <div className="mt-8 text-center">
                      <Button className="bg-orange-600 hover:bg-orange-700">
                        Book Your Transportation Now
                      </Button>
                    </div>
                  </motion.div>
                </TabsContent>

                <TabsContent value="faq" className="mt-0">
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="bg-white rounded-lg shadow-md p-6"
                  >
                    <h2 className="text-2xl font-bold text-gray-800 mb-6">
                      Frequently Asked Questions
                    </h2>
                    <p className="text-gray-600 mb-8">
                      Find answers to common questions about our Makkah to
                      Madinah transportation services.
                    </p>

                    <Accordion type="single" collapsible className="w-full">
                      {(cars?.faqs?.length ? cars.faqs : faqs ?? []).map(
                        (faq, i) => (
                          <AccordionItem key={i} value={`item-${i}`}>
                            <AccordionTrigger className="text-left font-medium text-gray-800">
                              {faq.question}
                            </AccordionTrigger>
                            <AccordionContent className="text-gray-600">
                              {faq.answer}
                            </AccordionContent>
                          </AccordionItem>
                        )
                      )}
                    </Accordion>

                    <div className="mt-8 bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-lg font-medium text-gray-800 mb-4">
                        Still have questions?
                      </h3>
                      <p className="text-gray-600 mb-4">
                        If you couldn't find the answer to your question, please
                        feel free to contact our customer service team. We're
                        here to help!
                      </p>
                      <div className="flex flex-col sm:flex-row gap-4">
                        <Button className="bg-orange-600 hover:bg-orange-700 flex items-center gap-2">
                          <Phone className="h-4 w-4" />
                          Call Us
                        </Button>
                        <Button
                          variant="outline"
                          className="text-orange-600 border-orange-200 hover:bg-orange-50 flex items-center gap-2"
                        >
                          <Mail className="h-4 w-4" />
                          Email Us
                        </Button>
                      </div>
                    </div>
                  </motion.div>
                </TabsContent>
              </Tabs>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-6">
              {/* Booking Card */}
              <Card className="shadow-md">
                <CardHeader className="bg-orange-600 text-white rounded-t-lg">
                  <CardTitle className="text-xl">
                    Book Your Transportation
                  </CardTitle>
                  <CardDescription className="text-white/80">
                    Secure your journey between the holy cities
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Select Route
                      </label>
                      <select className="w-full p-2 border border-gray-300 rounded-md">
                        <option value="makkah-madinah">
                          Makkah to Madinah
                        </option>
                        <option value="madinah-makkah">
                          Madinah to Makkah
                        </option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Travel Date
                      </label>
                      <input
                        type="date"
                        className="w-full p-2 border border-gray-300 rounded-md"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Number of Passengers
                      </label>
                      <Select>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select passengers" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1">1 Passenger</SelectItem>
                          <SelectItem value="2">2 Passengers</SelectItem>
                          <SelectItem value="3">3 Passengers</SelectItem>
                          <SelectItem value="4">4 Passengers</SelectItem>
                          <SelectItem value="5">5+ Passengers</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Service Type
                      </label>
                      <select
                        className="w-full p-2 border border-gray-300 rounded-md"
                        value={serviceType}
                        onChange={(e) => setServiceType(e.target.value)}
                      >
                        <option value="economy">Economy</option>
                        <option value="standard">Standard</option>
                        <option value="premium">Premium</option>
                        <option value="vip">VIP</option>
                      </select>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex flex-col">
                  <Button className="w-full bg-orange-600 hover:bg-orange-700 mb-3">
                    Check Availability
                  </Button>
                  <p className="text-xs text-gray-500 text-center">
                    No payment required to check availability
                  </p>
                </CardFooter>
              </Card>

              {/* Reviews */}
              <Card className="shadow-md">
                <CardHeader>
                  <CardTitle className="text-xl">Customer Reviews</CardTitle>
                  <div className="flex items-center gap-2">
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((_, i) => (
                        <Star
                          key={i}
                          className="h-5 w-5 text-yellow-400 fill-current"
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-500">
                      4.9 (120+ reviews)
                    </span>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      {
                        name: "Ahmed Khan",
                        date: "March 15, 2023",
                        rating: 5,
                        comment:
                          "Excellent service! The vehicle was comfortable and the driver was very professional. We reached Madinah safely and on time.",
                      },
                      {
                        name: "Fatima Rahman",
                        date: "February 28, 2023",
                        rating: 5,
                        comment:
                          "We booked the Premium service and it was worth every penny. The journey was smooth and the amenities provided made it very comfortable.",
                      },
                      {
                        name: "Mohammed Ali",
                        date: "January 20, 2023",
                        rating: 4,
                        comment:
                          "Good service overall. The vehicle was clean and comfortable. The only issue was a slight delay in departure.",
                      },
                    ].map((review, index) => (
                      <div
                        key={index}
                        className={`pb-4 ${
                          index < 2 ? "border-b border-gray-200" : ""
                        }`}
                      >
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <h4 className="font-medium text-gray-800">
                              {review.name}
                            </h4>
                            <p className="text-xs text-gray-500">
                              {review.date}
                            </p>
                          </div>
                          <div className="flex">
                            {[1, 2, 3, 4, 5].map((_, i) => (
                              <Star
                                key={i}
                                className={`h-4 w-4 ${
                                  i < review.rating
                                    ? "text-yellow-400 fill-current"
                                    : "text-gray-300"
                                }`}
                              />
                            ))}
                          </div>
                        </div>
                        <p className="text-sm text-gray-600">
                          {review.comment}
                        </p>
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Link
                    href="#"
                    className="text-orange-600 hover:text-orange-700 text-sm font-medium"
                  >
                    View all reviews
                  </Link>
                </CardFooter>
              </Card>

              {/* Contact Card */}
              <Card className="shadow-md bg-gray-50">
                <CardHeader>
                  <CardTitle className="text-xl">Need Assistance?</CardTitle>
                  <CardDescription>
                    Our team is here to help with your transportation needs
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-orange-100 rounded-full">
                        <Phone className="h-5 w-5 text-orange-600" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Call us at</p>
                        <p className="font-medium text-gray-800">
                          +1 (555) 123-4567
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-orange-100 rounded-full">
                        <Mail className="h-5 w-5 text-orange-600" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Email us at</p>
                        <p className="font-medium text-gray-800">
                          transport@dawoodtours.com
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-orange-100 rounded-full">
                        <MapPin className="h-5 w-5 text-orange-600" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">
                          Visit our office
                        </p>
                        <p className="font-medium text-gray-800">
                          123 Tour Street, Makkah
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-800">
              Related Services
            </h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto my-4"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore our other transportation and travel services to enhance
              your pilgrimage experience.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Airport Transfers",
                description:
                  "Convenient transfers between Jeddah Airport and your hotel in Makkah or Madinah.",
                image: "/placeholder.svg?height=300&width=500",
                link: "/services/transportation/airport-transfers",
              },
              {
                title: "Ziyarat Tours",
                description:
                  "Guided tours of historical and religious sites in Makkah and Madinah.",
                image: "/placeholder.svg?height=300&width=500",
                link: "/services/transportation/ziyarat-tours",
              },
              {
                title: "Hotel Pickups",
                description:
                  "Reliable pickup services from your hotel to any destination.",
                image: "/placeholder.svg?height=300&width=500",
                link: "/services/transportation/hotel-pickup",
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow group"
              >
                <div className="relative h-48">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <Link href={service.link}>
                    <Button
                      variant="outline"
                      className="w-full text-orange-600 border-orange-200 hover:bg-orange-50"
                    >
                      Learn More
                    </Button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-orange-600 to-orange-500 rounded-xl overflow-hidden shadow-xl">
            <div className="p-8 md:p-12 text-center text-white">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Ready to Book Your Transportation?
              </h2>
              <p className="text-white/90 mb-8 max-w-2xl mx-auto">
                Secure your journey between Makkah and Madinah today and enjoy a
                comfortable, hassle-free travel experience.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-white text-orange-600 hover:bg-gray-100">
                  Book Now
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
