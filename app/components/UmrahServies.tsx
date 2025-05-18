"use client"
import { useState } from "react"
import type * as React from "react"
import { format } from "date-fns"
import Image from "next/image"
import { motion } from "framer-motion"
import {
  CalendarIcon,
  CheckCircle2,
  MapPin,
  Car,
  Clock,
  Users,
  Building,
  Landmark,
  Phone,
  Mail,
  AlertCircle,
  Shield,
  Award,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Calendar } from "@/components/ui/calendar"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"

function UmrahServices() {
  const [date, setDate] = useState<Date | undefined>(undefined)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    vehicle: "",
    message: "",
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [activeTab, setActiveTab] = useState("quote")

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    // Clear error when user types
    if (errors[field]) {
      setErrors((prev) => {
        const newErrors = { ...prev }
        delete newErrors[field]
        return newErrors
      })
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Validate form
    const newErrors: Record<string, string> = {}
    if (!formData.name.trim()) newErrors.name = "Name is required"
    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid"
    }
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required"
    if (!formData.location) newErrors.location = "Please select a route"
    if (!date) newErrors.date = "Please select a date"
    if (!formData.vehicle) newErrors.vehicle = "Please select a vehicle"

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    // Submit form
    setIsSubmitting(true)
    const message = `Name: ${formData.name}\nPickup Location: ${formData.location}`
    const whatsappLink = `https://wa.me/923207882400?text=${encodeURIComponent(message)}`
    window.open(whatsappLink, "_blank")

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        location: "",
        vehicle: "",
        message: "",
      })
      setDate(undefined)
      // Show success message or redirect
      alert("Your quote request has been submitted successfully!")
    }, 1500)
  }

  const services = [
    {
      icon: <Car className="h-5 w-5" />,
      title: "Airport Transfers",
      description: "Comfortable and timely transfers between airports and hotels",
    },
    {
      icon: <Building className="h-5 w-5" />,
      title: "Hotel-to-Hotel Service",
      description: "Seamless transportation between accommodations in Makkah and Madinah",
    },
    {
      icon: <Landmark className="h-5 w-5" />,
      title: "Sightseeing Tours",
      description: "Guided tours to historical and spiritual sites with knowledgeable drivers",
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      title: "Complete City Tours",
      description: "Comprehensive tours of Makkah and Madinah with all important landmarks",
    },
    {
      icon: <Clock className="h-5 w-5" />,
      title: "24/7 Availability",
      description: "Round-the-clock service to accommodate your schedule",
    },
    {
      icon: <Users className="h-5 w-5" />,
      title: "Group Transportation",
      description: "Vehicles for groups of all sizes, from individuals to large families",
    },
  ]

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
  }

  const routes = [
    {
      value: "jeddah-makkah",
      label: "Jeddah Airport → Makkah",
      distance: "85 km",
      time: "1.5 hours",
    },
    {
      value: "makkah-jeddah",
      label: "Makkah → Jeddah Airport",
      distance: "85 km",
      time: "1.5 hours",
    },
    {
      value: "makkah-madina",
      label: "Makkah → Madinah",
      distance: "450 km",
      time: "5 hours",
    },
    {
      value: "madina-makkah",
      label: "Madinah → Makkah",
      distance: "450 km",
      time: "5 hours",
    },
    {
      value: "jeddah-madina",
      label: "Jeddah Airport → Madinah",
      distance: "420 km",
      time: "4.5 hours",
    },
    {
      value: "madina-jeddah",
      label: "Madinah → Jeddah Airport",
      distance: "420 km",
      time: "4.5 hours",
    },
    {
      value: "makkah-ziyarat",
      label: "Hotel → Makkah Ziyarat",
      distance: "Varies",
      time: "Varies",
    },
  ]

  const vehicles = [
    {
      value: "sonata",
      label: "Hyundai Sonata",
      capacity: "4 passengers",
      features: ["Air Conditioning", "Comfortable Seating", "Luggage Space"],
    },
    {
      value: "camry",
      label: "Toyota Camry",
      capacity: "4 passengers",
      features: ["Air Conditioning", "Comfortable Seating", "Luggage Space"],
    },
    {
      value: "hiace",
      label: "Toyota Hiace",
      capacity: "11 passengers",
      features: ["Air Conditioning", "Spacious Interior", "Large Luggage Space"],
    },
    {
      value: "staria",
      label: "Hyundai Staria",
      capacity: "11 passengers",
      features: ["Air Conditioning", "Modern Interior", "Large Luggage Space"],
    },
    {
      value: "h1",
      label: "Hyundai H1",
      capacity: "7 passengers",
      features: ["Air Conditioning", "Comfortable Seating", "Medium Luggage Space"],
    },
    {
      value: "coaster",
      label: "Toyota Coaster",
      capacity: "23 passengers",
      features: ["Air Conditioning", "Spacious Interior", "Extra Large Luggage Space"],
    },
    {
      value: "yukon",
      label: "GMC Yukon XL",
      capacity: "6 passengers",
      features: ["Premium Interior", "Luxury Seating", "Medium Luggage Space"],
    },
  ]

  return (
    <div className="relative w-full min-h-screen">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image src="/madina2.jpg" alt="Madina Background" fill sizes="100vw" className="object-cover" priority />
        {/* Overlay with gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-black/80 z-1" />
        {/* Pattern Overlay */}
        <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-10 z-2" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto py-16 px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 text-white"
        >
          <div className="flex justify-center items-center gap-2 mb-4">
            <div className="h-[1px] w-12 bg-orange-500"></div>
            <Badge className="bg-orange-600 hover:bg-orange-700">Premium Service</Badge>
            <div className="h-[1px] w-12 bg-orange-500"></div>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Umrah Transportation Services</h1>
          <div className="w-24 h-1 bg-orange-500 mx-auto my-4"></div>
          <p className="max-w-2xl mx-auto text-gray-300">
            Reliable and comfortable transportation for your sacred journey throughout Saudi Arabia
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Form Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="order-2 lg:order-1"
          >
            <Card className="backdrop-blur-sm bg-white/95 border-0 shadow-xl overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-400 to-orange-600"></div>

              <Tabs defaultValue="quote" className="w-full" onValueChange={setActiveTab}>
                <div className="px-6 pt-6">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="quote">Request Quote</TabsTrigger>
                    <TabsTrigger value="routes">Routes & Vehicles</TabsTrigger>
                  </TabsList>
                </div>

                <TabsContent value="quote">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-2xl font-bold text-gray-800">Get a Personalized Quote</CardTitle>
                    <CardDescription className="text-gray-600">
                      Fill out the form below and we'll provide you with the best rates for your journey.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name</Label>
                        <Input
                          id="name"
                          placeholder="Enter your full name"
                          value={formData.name}
                          onChange={(e) => handleChange("name", e.target.value)}
                          className={errors.name ? "border-red-500" : ""}
                        />
                        {errors.name && (
                          <p className="text-red-500 text-sm flex items-center gap-1 mt-1">
                            <AlertCircle className="h-3 w-3" /> {errors.name}
                          </p>
                        )}
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="email">Email Address</Label>
                          <Input
                            id="email"
                            type="email"
                            placeholder="your@email.com"
                            value={formData.email}
                            onChange={(e) => handleChange("email", e.target.value)}
                            className={errors.email ? "border-red-500" : ""}
                          />
                          {errors.email && (
                            <p className="text-red-500 text-sm flex items-center gap-1 mt-1">
                              <AlertCircle className="h-3 w-3" /> {errors.email}
                            </p>
                          )}
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone Number</Label>
                          <Input
                            id="phone"
                            placeholder="+966 XX XXX XXXX"
                            value={formData.phone}
                            onChange={(e) => handleChange("phone", e.target.value)}
                            className={errors.phone ? "border-red-500" : ""}
                          />
                          {errors.phone && (
                            <p className="text-red-500 text-sm flex items-center gap-1 mt-1">
                              <AlertCircle className="h-3 w-3" /> {errors.phone}
                            </p>
                          )}
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="route">Select Route</Label>
                        <Select value={formData.location} onValueChange={(value) => handleChange("location", value)}>
                          <SelectTrigger id="route" className={errors.location ? "border-red-500" : ""}>
                            <SelectValue placeholder="Select your route" />
                          </SelectTrigger>
                          <SelectContent>
                            {routes.map((route) => (
                              <SelectItem key={route.value} value={route.value}>
                                <div className="flex flex-col">
                                  <span>{route.label}</span>
                                  <span className="text-xs text-gray-500">
                                    {route.distance} • Approx. {route.time}
                                  </span>
                                </div>
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        {errors.location && (
                          <p className="text-red-500 text-sm flex items-center gap-1 mt-1">
                            <AlertCircle className="h-3 w-3" /> {errors.location}
                          </p>
                        )}
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="date">Travel Date</Label>
                        <Popover>
                          <PopoverTrigger asChild>
                            <Button
                              id="date"
                              variant="outline"
                              className={`w-full justify-start text-left font-normal ${
                                errors.date ? "border-red-500" : ""
                              }`}
                            >
                              {date ? (
                                format(date, "MMMM d, yyyy")
                              ) : (
                                <span className="text-muted-foreground">Select your travel date</span>
                              )}
                              <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0" align="start">
                            <Calendar
                              mode="single"
                              selected={date}
                              onSelect={setDate}
                              initialFocus
                              disabled={(date) => date < new Date(new Date().setHours(0, 0, 0, 0))}
                              className="rounded-md border"
                            />
                          </PopoverContent>
                        </Popover>
                        {errors.date && (
                          <p className="text-red-500 text-sm flex items-center gap-1 mt-1">
                            <AlertCircle className="h-3 w-3" /> {errors.date}
                          </p>
                        )}
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="vehicle">Select Vehicle</Label>
                        <Select value={formData.vehicle} onValueChange={(value) => handleChange("vehicle", value)}>
                          <SelectTrigger id="vehicle" className={errors.vehicle ? "border-red-500" : ""}>
                            <SelectValue placeholder="Select a vehicle type" />
                          </SelectTrigger>
                          <SelectContent>
                            {vehicles.map((vehicle) => (
                              <SelectItem key={vehicle.value} value={vehicle.value}>
                                <div className="flex flex-col">
                                  <span>
                                    {vehicle.label} ({vehicle.capacity})
                                  </span>
                                  <span className="text-xs text-gray-500">{vehicle.features.join(" • ")}</span>
                                </div>
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        {errors.vehicle && (
                          <p className="text-red-500 text-sm flex items-center gap-1 mt-1">
                            <AlertCircle className="h-3 w-3" /> {errors.vehicle}
                          </p>
                        )}
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">Additional Information (Optional)</Label>
                        <Textarea
                          id="message"
                          placeholder="Any special requirements or questions?"
                          className="resize-none"
                          value={formData.message}
                          onChange={(e) => handleChange("message", e.target.value)}
                        />
                      </div>

                      <Button
                        type="submit"
                        className="w-full bg-orange-600 hover:bg-orange-700 text-white"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <>
                            <svg
                              className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                            >
                              <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                              ></circle>
                              <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                              ></path>
                            </svg>
                            Processing...
                          </>
                        ) : (
                          "Request a Quote"
                        )}
                      </Button>
                    </form>
                  </CardContent>
                </TabsContent>

                <TabsContent value="routes">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-2xl font-bold text-gray-800">Popular Routes & Vehicles</CardTitle>
                    <CardDescription className="text-gray-600">
                      Explore our most popular routes and available vehicles for your journey.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-lg font-medium mb-3 flex items-center">
                          <MapPin className="h-5 w-5 mr-2 text-orange-500" />
                          Popular Routes
                        </h3>
                        <div className="grid grid-cols-1 gap-2">
                          {routes.slice(0, 4).map((route) => (
                            <div
                              key={route.value}
                              className="flex justify-between items-center p-3 rounded-lg border border-gray-200 hover:bg-orange-50 transition-colors"
                            >
                              <div>
                                <p className="font-medium">{route.label}</p>
                                <p className="text-sm text-gray-500">Distance: {route.distance}</p>
                              </div>
                              <div className="text-right">
                                <p className="text-sm font-medium text-orange-600">Approx. {route.time}</p>
                                <p className="text-xs text-gray-500">Travel time</p>
                              </div>
                            </div>
                          ))}
                        </div>
                        <div className="mt-2 text-center">
                          <Button
                            variant="link"
                            className="text-orange-600 hover:text-orange-700"
                            onClick={() => setActiveTab("quote")}
                          >
                            View all routes and get a quote
                          </Button>
                        </div>
                      </div>

                      <div>
                        <h3 className="text-lg font-medium mb-3 flex items-center">
                          <Car className="h-5 w-5 mr-2 text-orange-500" />
                          Available Vehicles
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {vehicles.slice(0, 4).map((vehicle) => (
                            <div
                              key={vehicle.value}
                              className="p-3 rounded-lg border border-gray-200 hover:bg-orange-50 transition-colors"
                            >
                              <p className="font-medium">{vehicle.label}</p>
                              <p className="text-sm text-gray-500">{vehicle.capacity}</p>
                              <div className="mt-2 flex flex-wrap gap-1">
                                {vehicle.features.map((feature, idx) => (
                                  <span
                                    key={idx}
                                    className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-orange-100 text-orange-800"
                                  >
                                    {feature}
                                  </span>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                        <div className="mt-2 text-center">
                          <Button
                            variant="link"
                            className="text-orange-600 hover:text-orange-700"
                            onClick={() => setActiveTab("quote")}
                          >
                            View all vehicles and get a quote
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </TabsContent>
              </Tabs>

              <CardFooter className="bg-gray-50 border-t border-gray-100 flex justify-between items-center text-sm text-gray-500 px-6 py-4">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500" />
                  <span>Secure booking</span>
                </div>
                <span>24/7 Customer Support</span>
              </CardFooter>
            </Card>
          </motion.div>

          {/* Services Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="order-1 lg:order-2 text-white"
          >
            <div className="bg-black/30 backdrop-blur-sm p-8 rounded-xl border border-white/10">
              <div className="flex items-center gap-2 mb-4">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((_, index) => (
                    <svg key={index} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                    </svg>
                  ))}
                </div>
                <span className="text-sm text-gray-300">Rated 5/5 by 2,557+ Satisfied Pilgrims</span>
              </div>

              <h2 className="text-3xl font-bold mb-4 text-orange-100">
                Your Trusted Pilgrimage Transportation Partner
              </h2>

              <p className="mb-6 text-gray-300">
                We provide modern, reliable transportation services throughout Saudi Arabia, ensuring your pilgrimage
                journey is comfortable, safe, and stress-free. Our experienced drivers understand the significance of
                your spiritual journey.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {services.map((service, index) => (
                  <motion.div
                    key={index}
                    custom={index}
                    initial="hidden"
                    animate="visible"
                    variants={fadeIn}
                    className="flex items-start gap-3 p-3 rounded-lg hover:bg-white/10 transition-colors"
                  >
                    <div className="p-2 bg-orange-600/20 rounded-lg text-orange-400">{service.icon}</div>
                    <div>
                      <h3 className="font-medium text-white">{service.title}</h3>
                      <p className="text-sm text-gray-400">{service.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Why Choose Us Section */}
              <div className="mb-8">
                <h3 className="font-semibold text-xl mb-4">Why Choose Our Services</h3>
                <div className="grid grid-cols-1 gap-4">
                  {[
                    {
                      icon: <Shield className="h-5 w-5 text-orange-400" />,
                      title: "Safety First",
                      description: "All our vehicles undergo regular maintenance and safety checks",
                    },
                    {
                      icon: <Clock className="h-5 w-5 text-orange-400" />,
                      title: "Punctuality",
                      description: "We value your time and ensure on-time pickups and drop-offs",
                    },
                    {
                      icon: <Award className="h-5 w-5 text-orange-400" />,
                      title: "Experienced Drivers",
                      description: "Professional drivers with extensive knowledge of all routes and holy sites",
                    },
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 bg-white/5 rounded-lg">
                      <div className="p-2 bg-orange-600/20 rounded-lg">{item.icon}</div>
                      <div>
                        <h4 className="font-medium text-white">{item.title}</h4>
                        <p className="text-sm text-gray-400">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-semibold text-xl">Contact Us Directly</h3>
                <div className="flex flex-col space-y-3">
                  <a
                    href="tel:+966555123456"
                    className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors"
                  >
                    <div className="p-2 bg-orange-600/20 rounded-full">
                      <Phone className="h-5 w-5 text-orange-400" />
                    </div>
                    <span>+966 58 056 3933</span>
                  </a>
                  <a
                    href="mailto:info@dawoodtours.com"
                    className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors"
                  >
                    <div className="p-2 bg-orange-600/20 rounded-full">
                      <Mail className="h-5 w-5 text-orange-400" />
                    </div>
                    <span>DiamondDawood@gmail.com</span>
                  </a>
                  <a
                    href="https://wa.me/966555123456"
                    className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors"
                  >
                    <div className="p-2 bg-orange-600/20 rounded-full">
                      <svg className="h-5 w-5 text-orange-400" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                    </div>
                    <span>WhatsApp Booking</span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
       <motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
  className="mt-16 text-center"
>
  <div className="bg-gradient-to-r from-orange-600 to-orange-500 rounded-xl p-8 md:p-12 shadow-xl">
    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Ready to Book Your Transportation?</h2>
    <p className="text-white/90 max-w-2xl mx-auto mb-6">
      Our team is ready to assist you with all your transportation needs during your sacred journey.
    </p>
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <Button
        className="bg-white text-orange-600 hover:bg-gray-100 hover:text-orange-700"
        // onClick={() => {
        //   const formSection = document.querySelector("form")
        //   formSection?.scrollIntoView({ behavior: "smooth" })
        // }}
      >
        <a href="https://wa.me/966580563933?text=I%20want%20to%20get%20a%20quote%20for%20Hajj%2FUmrah%20transportation" target="blank">
          Request a Quote
        </a>
      </Button>
      <Button
        variant="outline"
        className="bg-transparent border-white text-white hover:bg-white/10"
      >
        <a 
          href="https://wa.me/966580563933?text=I'm%20interested%20in%20booking%20your%20Hajj%2FUmrah%20transportation%20services"
          className="flex items-center justify-center"
          target="blank"
        >
          <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          WhatsApp Us
        </a>
      </Button>
    </div>
  </div>
</motion.div>
      </div>
    </div>
  )
}

export default UmrahServices
