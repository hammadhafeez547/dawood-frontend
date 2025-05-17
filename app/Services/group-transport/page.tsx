"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  CheckCircle,
  Users,
  MapPin,
  Shield,
  Calendar,
  Building,
  Briefcase,
  Phone,
  Star,
  ChevronRight,
} from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function GroupTransportServices() {
  const [isLoading, setIsLoading] = useState(false)

  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-orange-800 to-orange-600 text-white py-16 md:py-24">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-black opacity-40"></div>
          <Image
            src="/placeholder.svg?height=1080&width=1920"
            alt="Group Transportation"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">Group Transportation Services</h1>
            <p className="text-lg md:text-xl mb-8 text-orange-50">
              Safe, comfortable, and reliable transportation solutions for groups of all sizes in Saudi Arabia.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/book-now">
                <Button size="lg" className="bg-white text-orange-600 hover:bg-orange-50">
                  Book Now
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  variant="outline"
                  size="lg"
                  className="bg-transparent border-white text-white hover:bg-white/10"
                >
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12 md:py-16">
        {/* Service Selection */}
        <Tabs defaultValue="hajj" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="grid w-full max-w-2xl grid-cols-3">
              <TabsTrigger value="hajj">Hajj Groups</TabsTrigger>
              <TabsTrigger value="umrah">Umrah Groups</TabsTrigger>
              <TabsTrigger value="corporate">Corporate Groups</TabsTrigger>
            </TabsList>
          </div>

          {/* Hajj Groups */}
          <TabsContent value="hajj" className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">Hajj Group Transportation</h2>
                <p className="text-gray-600 mb-6">
                  Our specialized Hajj group transportation service ensures your pilgrims travel safely and comfortably
                  between all Hajj sites. We understand the unique requirements of Hajj movements and provide reliable
                  transportation solutions during this sacred journey.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-orange-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="font-medium text-gray-800">Experienced Hajj Drivers</h3>
                      <p className="text-gray-600 text-sm">
                        Our drivers are familiar with Hajj routes, restrictions, and schedules.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-orange-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="font-medium text-gray-800">Hajj Permit Compliance</h3>
                      <p className="text-gray-600 text-sm">
                        All our vehicles have the necessary permits for Hajj movements.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-orange-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="font-medium text-gray-800">24/7 Support</h3>
                      <p className="text-gray-600 text-sm">Round-the-clock assistance throughout the Hajj period.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative h-64 md:h-80 rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/placeholder.svg?height=800&width=1200"
                  alt="Hajj Group Transportation"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Service Features */}
            <div className="bg-orange-50 rounded-xl p-6 md:p-8">
              <h3 className="text-xl font-bold mb-6 text-gray-800">Our Hajj Transportation Services Include</h3>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
                <div className="bg-white p-5 rounded-lg shadow-sm">
                  <MapPin className="h-8 w-8 text-orange-500 mb-3" />
                  <h4 className="font-medium mb-2">Mina-Arafat-Muzdalifah</h4>
                  <p className="text-sm text-gray-600">Transportation between all Hajj sites during the sacred days.</p>
                </div>
                <div className="bg-white p-5 rounded-lg shadow-sm">
                  <Users className="h-8 w-8 text-orange-500 mb-3" />
                  <h4 className="font-medium mb-2">Group Coordination</h4>
                  <p className="text-sm text-gray-600">Keeping your group together with coordinated movements.</p>
                </div>
                <div className="bg-white p-5 rounded-lg shadow-sm">
                  <Shield className="h-8 w-8 text-orange-500 mb-3" />
                  <h4 className="font-medium mb-2">Safety Protocols</h4>
                  <p className="text-sm text-gray-600">
                    Enhanced safety measures for the challenging Hajj environment.
                  </p>
                </div>
              </div>
            </div>

            {/* Pricing */}
            <div>
              <h3 className="text-2xl font-bold mb-6 text-center text-gray-800">Hajj Group Transportation Packages</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="border border-gray-200 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-md hover:border-orange-200">
                  <div className="bg-gradient-to-r from-orange-600 to-orange-500 text-white p-6">
                    <h4 className="text-xl font-bold">Standard Package</h4>
                    <div className="mt-4 text-3xl font-bold">SAR 15,000</div>
                    <p className="text-orange-100 mt-1">Per bus (50 passengers)</p>
                  </div>
                  <div className="p-6">
                    <ul className="space-y-3">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-orange-500" />
                        <span className="text-gray-600">Air-conditioned bus</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-orange-500" />
                        <span className="text-gray-600">Transportation to all Hajj sites</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-orange-500" />
                        <span className="text-gray-600">Basic coordination service</span>
                      </li>
                    </ul>
                    <Button className="w-full mt-6 bg-orange-500 hover:bg-orange-600">Select</Button>
                  </div>
                </div>

                <div className="border-2 border-orange-500 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-md relative">
                  <div className="absolute top-0 right-0">
                    <Badge className="m-2 bg-orange-600">Most Popular</Badge>
                  </div>
                  <div className="bg-gradient-to-r from-orange-700 to-orange-600 text-white p-6">
                    <h4 className="text-xl font-bold">Premium Package</h4>
                    <div className="mt-4 text-3xl font-bold">SAR 25,000</div>
                    <p className="text-orange-100 mt-1">Per bus (50 passengers)</p>
                  </div>
                  <div className="p-6">
                    <ul className="space-y-3">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-orange-500" />
                        <span className="text-gray-600">Luxury air-conditioned bus</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-orange-500" />
                        <span className="text-gray-600">Transportation to all Hajj sites</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-orange-500" />
                        <span className="text-gray-600">Dedicated coordinator</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-orange-500" />
                        <span className="text-gray-600">Refreshments on board</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-orange-500" />
                        <span className="text-gray-600">Priority routes when available</span>
                      </li>
                    </ul>
                    <Button className="w-full mt-6 bg-orange-600 hover:bg-orange-700">Select</Button>
                  </div>
                </div>

                <div className="border border-gray-200 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-md hover:border-orange-200">
                  <div className="bg-gradient-to-r from-orange-800 to-orange-700 text-white p-6">
                    <h4 className="text-xl font-bold">VIP Package</h4>
                    <div className="mt-4 text-3xl font-bold">SAR 40,000</div>
                    <p className="text-orange-100 mt-1">Per bus (30 passengers)</p>
                  </div>
                  <div className="p-6">
                    <ul className="space-y-3">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-orange-500" />
                        <span className="text-gray-600">Executive luxury bus</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-orange-500" />
                        <span className="text-gray-600">Transportation to all Hajj sites</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-orange-500" />
                        <span className="text-gray-600">Multiple dedicated coordinators</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-orange-500" />
                        <span className="text-gray-600">Premium refreshments</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-orange-500" />
                        <span className="text-gray-600">VIP routes when available</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-orange-500" />
                        <span className="text-gray-600">Medical support on board</span>
                      </li>
                    </ul>
                    <Button className="w-full mt-6 bg-orange-800 hover:bg-orange-900">Select</Button>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Umrah Groups */}
          <TabsContent value="umrah" className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">Umrah Group Transportation</h2>
                <p className="text-gray-600 mb-6">
                  Our Umrah group transportation service provides seamless travel for your pilgrims between airports,
                  hotels, and holy sites. We ensure your group stays together and travels comfortably throughout their
                  blessed journey.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-orange-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="font-medium text-gray-800">Complete Umrah Transportation</h3>
                      <p className="text-gray-600 text-sm">
                        From airport pickup to hotel transfers and visits to holy sites.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-orange-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="font-medium text-gray-800">Group Management</h3>
                      <p className="text-gray-600 text-sm">
                        Keeping your group together with organized transportation.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-orange-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="font-medium text-gray-800">Flexible Scheduling</h3>
                      <p className="text-gray-600 text-sm">
                        Accommodating your group's specific itinerary and prayer times.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative h-64 md:h-80 rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/placeholder.svg?height=800&width=1200"
                  alt="Umrah Group Transportation"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Pricing for Umrah Groups */}
            <div>
              <h3 className="text-2xl font-bold mb-6 text-center text-gray-800">Umrah Group Transportation Packages</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="border border-gray-200 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-md hover:border-orange-200">
                  <div className="bg-gradient-to-r from-orange-600 to-orange-500 text-white p-6">
                    <h4 className="text-xl font-bold">Small Group</h4>
                    <div className="mt-4 text-3xl font-bold">SAR 3,500</div>
                    <p className="text-orange-100 mt-1">Per day (up to 15 passengers)</p>
                  </div>
                  <div className="p-6">
                    <ul className="space-y-3">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-orange-500" />
                        <span className="text-gray-600">15-seater van</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-orange-500" />
                        <span className="text-gray-600">Airport transfers</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-orange-500" />
                        <span className="text-gray-600">Hotel to Haram transfers</span>
                      </li>
                    </ul>
                    <Button className="w-full mt-6 bg-orange-500 hover:bg-orange-600">Select</Button>
                  </div>
                </div>

                <div className="border-2 border-orange-500 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-md relative">
                  <div className="absolute top-0 right-0">
                    <Badge className="m-2 bg-orange-600">Most Popular</Badge>
                  </div>
                  <div className="bg-gradient-to-r from-orange-700 to-orange-600 text-white p-6">
                    <h4 className="text-xl font-bold">Medium Group</h4>
                    <div className="mt-4 text-3xl font-bold">SAR 6,000</div>
                    <p className="text-orange-100 mt-1">Per day (up to 30 passengers)</p>
                  </div>
                  <div className="p-6">
                    <ul className="space-y-3">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-orange-500" />
                        <span className="text-gray-600">30-seater bus</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-orange-500" />
                        <span className="text-gray-600">Airport transfers</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-orange-500" />
                        <span className="text-gray-600">Hotel to Haram transfers</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-orange-500" />
                        <span className="text-gray-600">Ziyarat tours included</span>
                      </li>
                    </ul>
                    <Button className="w-full mt-6 bg-orange-600 hover:bg-orange-700">Select</Button>
                  </div>
                </div>

                <div className="border border-gray-200 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-md hover:border-orange-200">
                  <div className="bg-gradient-to-r from-orange-800 to-orange-700 text-white p-6">
                    <h4 className="text-xl font-bold">Large Group</h4>
                    <div className="mt-4 text-3xl font-bold">SAR 10,000</div>
                    <p className="text-orange-100 mt-1">Per day (up to 50 passengers)</p>
                  </div>
                  <div className="p-6">
                    <ul className="space-y-3">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-orange-500" />
                        <span className="text-gray-600">50-seater luxury bus</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-orange-500" />
                        <span className="text-gray-600">Airport transfers</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-orange-500" />
                        <span className="text-gray-600">Hotel to Haram transfers</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-orange-500" />
                        <span className="text-gray-600">Ziyarat tours included</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-orange-500" />
                        <span className="text-gray-600">Group coordinator</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-orange-500" />
                        <span className="text-gray-600">Refreshments on board</span>
                      </li>
                    </ul>
                    <Button className="w-full mt-6 bg-orange-800 hover:bg-orange-900">Select</Button>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Corporate Groups */}
          <TabsContent value="corporate" className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">Corporate Group Transportation</h2>
                <p className="text-gray-600 mb-6">
                  Our corporate transportation solutions cater to businesses of all sizes. Whether you need
                  transportation for conferences, team-building events, or airport transfers for executives, we provide
                  professional and reliable service.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-orange-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="font-medium text-gray-800">Professional Service</h3>
                      <p className="text-gray-600 text-sm">
                        Punctual, reliable transportation that reflects your company's standards.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-orange-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="font-medium text-gray-800">Corporate Accounts</h3>
                      <p className="text-gray-600 text-sm">
                        Simplified billing and dedicated account management for businesses.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-orange-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="font-medium text-gray-800">Customized Solutions</h3>
                      <p className="text-gray-600 text-sm">
                        Tailored transportation plans to meet your specific business needs.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative h-64 md:h-80 rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/placeholder.svg?height=800&width=1200"
                  alt="Corporate Group Transportation"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Corporate Service Options */}
            <div className="bg-orange-50 rounded-xl p-6 md:p-8">
              <h3 className="text-xl font-bold mb-6 text-gray-800">Corporate Transportation Services</h3>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
                <div className="bg-white p-5 rounded-lg shadow-sm">
                  <Building className="h-8 w-8 text-orange-500 mb-3" />
                  <h4 className="font-medium mb-2">Conference Transport</h4>
                  <p className="text-sm text-gray-600">Shuttle services for conferences and corporate events.</p>
                </div>
                <div className="bg-white p-5 rounded-lg shadow-sm">
                  <Briefcase className="h-8 w-8 text-orange-500 mb-3" />
                  <h4 className="font-medium mb-2">Executive Services</h4>
                  <p className="text-sm text-gray-600">Premium transportation for executives and VIP clients.</p>
                </div>
                <div className="bg-white p-5 rounded-lg shadow-sm">
                  <Calendar className="h-8 w-8 text-orange-500 mb-3" />
                  <h4 className="font-medium mb-2">Team Building Events</h4>
                  <p className="text-sm text-gray-600">Transportation for corporate retreats and team activities.</p>
                </div>
              </div>
            </div>

            {/* Corporate Pricing */}
            <div>
              <h3 className="text-2xl font-bold mb-6 text-center text-gray-800">Corporate Transportation Packages</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="border border-gray-200 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-md hover:border-orange-200">
                  <div className="bg-gradient-to-r from-orange-600 to-orange-500 text-white p-6">
                    <h4 className="text-xl font-bold">Standard Corporate</h4>
                    <div className="mt-4 text-3xl font-bold">SAR 2,500</div>
                    <p className="text-orange-100 mt-1">Per day (up to 15 passengers)</p>
                  </div>
                  <div className="p-6">
                    <ul className="space-y-3">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-orange-500" />
                        <span className="text-gray-600">Business-class van</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-orange-500" />
                        <span className="text-gray-600">Professional driver</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-orange-500" />
                        <span className="text-gray-600">Airport & hotel transfers</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-orange-500" />
                        <span className="text-gray-600">8-hour service</span>
                      </li>
                    </ul>
                    <Button className="w-full mt-6 bg-orange-500 hover:bg-orange-600">Select</Button>
                  </div>
                </div>

                <div className="border-2 border-orange-500 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-md relative">
                  <div className="absolute top-0 right-0">
                    <Badge className="m-2 bg-orange-600">Most Popular</Badge>
                  </div>
                  <div className="bg-gradient-to-r from-orange-700 to-orange-600 text-white p-6">
                    <h4 className="text-xl font-bold">Premium Corporate</h4>
                    <div className="mt-4 text-3xl font-bold">SAR 5,000</div>
                    <p className="text-orange-100 mt-1">Per day (up to 30 passengers)</p>
                  </div>
                  <div className="p-6">
                    <ul className="space-y-3">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-orange-500" />
                        <span className="text-gray-600">Luxury minibus</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-orange-500" />
                        <span className="text-gray-600">Professional uniformed driver</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-orange-500" />
                        <span className="text-gray-600">Airport & hotel transfers</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-orange-500" />
                        <span className="text-gray-600">12-hour service</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-orange-500" />
                        <span className="text-gray-600">Refreshments on board</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-orange-500" />
                        <span className="text-gray-600">Wi-Fi connectivity</span>
                      </li>
                    </ul>
                    <Button className="w-full mt-6 bg-orange-600 hover:bg-orange-700">Select</Button>
                  </div>
                </div>

                <div className="border border-gray-200 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-md hover:border-orange-200">
                  <div className="bg-gradient-to-r from-orange-800 to-orange-700 text-white p-6">
                    <h4 className="text-xl font-bold">Executive Corporate</h4>
                    <div className="mt-4 text-3xl font-bold">SAR 8,000</div>
                    <p className="text-orange-100 mt-1">Per day (up to 50 passengers)</p>
                  </div>
                  <div className="p-6">
                    <ul className="space-y-3">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-orange-500" />
                        <span className="text-gray-600">Executive coach</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-orange-500" />
                        <span className="text-gray-600">Professional uniformed driver</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-orange-500" />
                        <span className="text-gray-600">Dedicated coordinator</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-orange-500" />
                        <span className="text-gray-600">24-hour service</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-orange-500" />
                        <span className="text-gray-600">Premium refreshments</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-orange-500" />
                        <span className="text-gray-600">High-speed Wi-Fi</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-orange-500" />
                        <span className="text-gray-600">Multimedia equipment</span>
                      </li>
                    </ul>
                    <Button className="w-full mt-6 bg-orange-800 hover:bg-orange-900">Select</Button>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>

        {/* How It Works */}
        <div className="mt-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-gray-800">How It Works</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                icon: <Phone className="h-10 w-10 text-orange-500" />,
                title: "Contact Us",
                description: "Reach out to our team with your group transportation requirements.",
              },
              {
                icon: <Users className="h-10 w-10 text-orange-500" />,
                title: "Get a Quote",
                description: "Receive a customized quote based on your group size and needs.",
              },
              {
                icon: <Calendar className="h-10 w-10 text-orange-500" />,
                title: "Confirm Booking",
                description: "Secure your transportation with a simple booking process.",
              },
            
              {
                icon: <Calendar className="h-10 w-10 text-orange-500" />,
                title: "Confirm Booking",
                description: "Secure your transportation with a simple booking process.",
              },
              {
                icon: <CheckCircle className="h-10 w-10 text-orange-500" />,
                title: "Enjoy Your Journey",
                description: "Relax as we take care of all your transportation needs.",
              },
            ].map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 text-center h-full">
                  <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
                {index < 3 && (
                  <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 z-10">
                    <ChevronRight className="h-8 w-8 text-orange-300" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-gray-800">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="border border-gray-200 rounded-lg overflow-hidden">
                <AccordionTrigger className="px-6 py-4 hover:bg-gray-50">
                  How far in advance should I book group transportation?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  <p className="text-gray-600">
                    For Hajj group transportation, we recommend booking at least 6-8 months in advance due to high
                    demand and permit requirements. For Umrah groups, 2-3 months advance booking is advisable, while
                    corporate transportation can often be arranged with 2-4 weeks notice, depending on group size and
                    season.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className="border border-gray-200 rounded-lg overflow-hidden">
                <AccordionTrigger className="px-6 py-4 hover:bg-gray-50">
                  What is the minimum group size for your services?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  <p className="text-gray-600">
                    We accommodate groups of all sizes, starting from as few as 10 people. Our fleet includes vehicles
                    ranging from 15-seater vans to 50-seater luxury coaches, allowing us to match the right vehicle to
                    your group size for maximum comfort and cost-efficiency.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3" className="border border-gray-200 rounded-lg overflow-hidden">
                <AccordionTrigger className="px-6 py-4 hover:bg-gray-50">
                  Do you provide multilingual drivers or guides?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  <p className="text-gray-600">
                    Yes, we offer multilingual drivers and guides who speak English, Arabic, Urdu, Turkish, Malay, and
                    several other languages. Please specify your language requirements when booking so we can assign
                    appropriate staff to your group.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4" className="border border-gray-200 rounded-lg overflow-hidden">
                <AccordionTrigger className="px-6 py-4 hover:bg-gray-50">
                  What happens if our flight is delayed?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  <p className="text-gray-600">
                    We monitor all flight arrivals and adjust our pickup schedule accordingly at no extra charge. Our
                    operations team works 24/7 and stays in communication with your group leader to ensure smooth
                    coordination even when travel plans change.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5" className="border border-gray-200 rounded-lg overflow-hidden">
                <AccordionTrigger className="px-6 py-4 hover:bg-gray-50">
                  Do your vehicles have special permits for restricted areas?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  <p className="text-gray-600">
                    Yes, our vehicles have all necessary permits for accessing restricted areas during Hajj and Umrah
                    seasons, including Mina, Arafat, and Muzdalifah. We also maintain permits for other restricted zones
                    in Makkah and Madinah throughout the year.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>

        {/* Testimonials */}
        <div className="mt-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-gray-800">What Our Clients Say</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "Ahmed Khalid",
                role: "Hajj Group Leader",
                testimonial:
                  "Dawood Tours provided exceptional transportation services for our Hajj group of 100 pilgrims. Their coordination during the critical days of Hajj was flawless, and their drivers were knowledgeable and respectful.",
                rating: 5,
              },
              {
                name: "Sarah Johnson",
                role: "Corporate Event Manager",
                testimonial:
                  "We used Dawood Tours for our company's conference in Riyadh, and they exceeded our expectations. The vehicles were immaculate, drivers were professional, and their coordination team was responsive to our changing schedule.",
                rating: 5,
              },
              {
                name: "Muhammad Farooq",
                role: "Umrah Group Organizer",
                testimonial:
                  "For three years running, we've trusted Dawood Tours with our Umrah groups. Their attention to detail, punctuality, and understanding of the specific needs of pilgrims makes them our first choice every time.",
                rating: 4,
              },
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                <div className="flex items-center mb-4">
                  {Array(testimonial.rating)
                    .fill(0)
                    .map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-500 fill-current" />
                    ))}
                </div>
                <p className="text-gray-600 italic mb-4">"{testimonial.testimonial}"</p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-orange-600 font-bold">{testimonial.name.charAt(0)}</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16">
          <div className="bg-gradient-to-r from-orange-600 to-orange-500 rounded-xl p-8 md:p-12 text-center text-white">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Book Group Transportation?</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Contact our team today to discuss your group transportation needs and receive a customized quote.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/book-now">
                <Button size="lg" className="bg-white text-orange-600 hover:bg-orange-50">
                  Book Now
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
