"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Clock, Users, MapPin, Calendar, Star, ArrowRight, Phone } from "lucide-react"
import { Metadata } from "next"
export const metadata: Metadata = {
  title: "Hotel Pick and Drop Services | Dawood Tours",
  description:
    "Reliable and comfortable hotel pick and drop services in Makkah and Madinah. Enjoy hassle-free transportation to and from your hotel with Dawood Tours.",
}

export default function HotelPickupServices() {
  const [isLoading, setIsLoading] = useState(false)

  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-orange-800 to-orange-600 text-white py-16 md:py-24">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-black opacity-40"></div>
          <Image
            src="/placeholder.svg?height=1080&width=1920"
            alt="Hotel Pickup Service"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">Hotel Pick and Drop Services</h1>
            <p className="text-lg md:text-xl mb-8 text-orange-50">
              Reliable, comfortable, and punctual transportation to and from your hotel in Makkah and Madinah.
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
        <Tabs defaultValue="airport" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="grid w-full max-w-2xl grid-cols-3">
              <TabsTrigger value="airport">Airport Transfers</TabsTrigger>
              <TabsTrigger value="hotel">Hotel to Hotel</TabsTrigger>
              <TabsTrigger value="custom">Custom Pickup</TabsTrigger>
            </TabsList>
          </div>

          {/* Airport Transfers */}
          <TabsContent value="airport" className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">Airport to Hotel Transfers</h2>
                <p className="text-gray-600 mb-6">
                  After a long flight, the last thing you want is to worry about transportation. Our airport transfer
                  service ensures a smooth journey from the airport directly to your hotel, with no hassle or waiting.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-orange-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="font-medium text-gray-800">Meet & Greet Service</h3>
                      <p className="text-gray-600 text-sm">
                        Our driver will meet you at the arrival gate with a name sign.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-orange-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="font-medium text-gray-800">Luggage Assistance</h3>
                      <p className="text-gray-600 text-sm">
                        We'll help with your luggage from the airport to the vehicle.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-orange-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="font-medium text-gray-800">Flight Monitoring</h3>
                      <p className="text-gray-600 text-sm">
                        We track your flight to adjust for any delays or early arrivals.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative h-64 md:h-80 rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/placeholder.svg?height=800&width=1200"
                  alt="Airport Transfer Service"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Service Features */}
            <div className="bg-orange-50 rounded-xl p-6 md:p-8">
              <h3 className="text-xl font-bold mb-6 text-gray-800">Why Choose Our Airport Transfer Service</h3>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
                <div className="bg-white p-5 rounded-lg shadow-sm">
                  <Clock className="h-8 w-8 text-orange-500 mb-3" />
                  <h4 className="font-medium mb-2">Punctual Service</h4>
                  <p className="text-sm text-gray-600">
                    We monitor flight times to ensure we're always there when you arrive.
                  </p>
                </div>
                <div className="bg-white p-5 rounded-lg shadow-sm">
                  <Users className="h-8 w-8 text-orange-500 mb-3" />
                  <h4 className="font-medium mb-2">Professional Drivers</h4>
                  <p className="text-sm text-gray-600">Experienced, courteous drivers who know the best routes.</p>
                </div>
                <div className="bg-white p-5 rounded-lg shadow-sm">
                  <MapPin className="h-8 w-8 text-orange-500 mb-3" />
                  <h4 className="font-medium mb-2">Direct to Your Hotel</h4>
                  <p className="text-sm text-gray-600">No stops or detours - straight to your accommodation.</p>
                </div>
              </div>
            </div>

            {/* Pricing */}
            <div>
              <h3 className="text-2xl font-bold mb-6 text-center text-gray-800">Airport Transfer Pricing</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="border border-gray-200 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-md hover:border-orange-200">
                  <div className="bg-gradient-to-r from-orange-600 to-orange-500 text-white p-6">
                    <h4 className="text-xl font-bold">Economy</h4>
                    <div className="mt-4 text-3xl font-bold">SAR 150</div>
                    <p className="text-orange-100 mt-1">Per vehicle</p>
                  </div>
                  <div className="p-6">
                    <ul className="space-y-3">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-orange-500" />
                        <span className="text-gray-600">Sedan car (up to 4 passengers)</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-orange-500" />
                        <span className="text-gray-600">Standard luggage space</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-orange-500" />
                        <span className="text-gray-600">Air-conditioned vehicle</span>
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
                    <h4 className="text-xl font-bold">Premium</h4>
                    <div className="mt-4 text-3xl font-bold">SAR 250</div>
                    <p className="text-orange-100 mt-1">Per vehicle</p>
                  </div>
                  <div className="p-6">
                    <ul className="space-y-3">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-orange-500" />
                        <span className="text-gray-600">SUV (up to 6 passengers)</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-orange-500" />
                        <span className="text-gray-600">Extra luggage space</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-orange-500" />
                        <span className="text-gray-600">Complimentary water</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-orange-500" />
                        <span className="text-gray-600">Priority service</span>
                      </li>
                    </ul>
                    <Button className="w-full mt-6 bg-orange-600 hover:bg-orange-700">Select</Button>
                  </div>
                </div>

                <div className="border border-gray-200 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-md hover:border-orange-200">
                  <div className="bg-gradient-to-r from-orange-800 to-orange-700 text-white p-6">
                    <h4 className="text-xl font-bold">VIP</h4>
                    <div className="mt-4 text-3xl font-bold">SAR 400</div>
                    <p className="text-orange-100 mt-1">Per vehicle</p>
                  </div>
                  <div className="p-6">
                    <ul className="space-y-3">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-orange-500" />
                        <span className="text-gray-600">Luxury vehicle</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-orange-500" />
                        <span className="text-gray-600">Professional chauffeur</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-orange-500" />
                        <span className="text-gray-600">Refreshment package</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-orange-500" />
                        <span className="text-gray-600">Express service</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-orange-500" />
                        <span className="text-gray-600">VIP meet & greet</span>
                      </li>
                    </ul>
                    <Button className="w-full mt-6 bg-orange-800 hover:bg-orange-900">Select</Button>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Hotel to Hotel */}
          <TabsContent value="hotel" className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">Hotel to Hotel Transfers</h2>
                <p className="text-gray-600 mb-6">
                  Moving between hotels in Makkah and Madinah? Our hotel transfer service provides a seamless experience
                  with door-to-door pickup and drop-off, ensuring you and your luggage arrive safely and on time.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-orange-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="font-medium text-gray-800">Door-to-Door Service</h3>
                      <p className="text-gray-600 text-sm">
                        Direct pickup from your hotel lobby to your next accommodation.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-orange-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="font-medium text-gray-800">Flexible Scheduling</h3>
                      <p className="text-gray-600 text-sm">
                        Choose your preferred pickup time to match your checkout/check-in.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-orange-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="font-medium text-gray-800">Luggage Handling</h3>
                      <p className="text-gray-600 text-sm">We'll help with your luggage between hotels.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative h-64 md:h-80 rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/placeholder.svg?height=800&width=1200"
                  alt="Hotel to Hotel Transfer"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Pricing for Hotel to Hotel */}
            <div>
              <h3 className="text-2xl font-bold mb-6 text-center text-gray-800">Hotel Transfer Pricing</h3>
              <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                <div className="border border-gray-200 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-md hover:border-orange-200">
                  <div className="bg-gradient-to-r from-orange-600 to-orange-500 text-white p-6">
                    <h4 className="text-xl font-bold">Within City</h4>
                    <div className="mt-4 text-3xl font-bold">SAR 100</div>
                    <p className="text-orange-100 mt-1">Per vehicle</p>
                  </div>
                  <div className="p-6">
                    <ul className="space-y-3">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-orange-500" />
                        <span className="text-gray-600">Hotel to hotel within same city</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-orange-500" />
                        <span className="text-gray-600">Up to 4 passengers</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-orange-500" />
                        <span className="text-gray-600">Standard luggage allowance</span>
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
                    <h4 className="text-xl font-bold">Makkah to Madinah</h4>
                    <div className="mt-4 text-3xl font-bold">SAR 600</div>
                    <p className="text-orange-100 mt-1">Per vehicle</p>
                  </div>
                  <div className="p-6">
                    <ul className="space-y-3">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-orange-500" />
                        <span className="text-gray-600">Hotel to hotel between cities</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-orange-500" />
                        <span className="text-gray-600">Up to 4 passengers</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-orange-500" />
                        <span className="text-gray-600">Complimentary refreshments</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-orange-500" />
                        <span className="text-gray-600">Rest stop included</span>
                      </li>
                    </ul>
                    <Button className="w-full mt-6 bg-orange-600 hover:bg-orange-700">Select</Button>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Custom Pickup */}
          <TabsContent value="custom" className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">Custom Pickup & Drop Services</h2>
                <p className="text-gray-600 mb-6">
                  Need transportation for special occasions, shopping trips, or visits to specific locations? Our custom
                  pickup service provides personalized transportation solutions tailored to your exact needs.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-orange-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="font-medium text-gray-800">Fully Customizable</h3>
                      <p className="text-gray-600 text-sm">Choose your pickup location, destination, and schedule.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-orange-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="font-medium text-gray-800">Wait & Return Option</h3>
                      <p className="text-gray-600 text-sm">Driver can wait and return you to your starting point.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-orange-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="font-medium text-gray-800">Multiple Stops</h3>
                      <p className="text-gray-600 text-sm">Add multiple destinations to your journey.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative h-64 md:h-80 rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/placeholder.svg?height=800&width=1200"
                  alt="Custom Pickup Service"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Custom Service Features */}
            <div className="bg-orange-50 rounded-xl p-6 md:p-8">
              <h3 className="text-xl font-bold mb-6 text-gray-800">Popular Custom Services</h3>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
                <div className="bg-white p-5 rounded-lg shadow-sm">
                  <MapPin className="h-8 w-8 text-orange-500 mb-3" />
                  <h4 className="font-medium mb-2">Shopping Trips</h4>
                  <p className="text-sm text-gray-600">
                    Transportation to and from shopping malls with luggage storage.
                  </p>
                </div>
                <div className="bg-white p-5 rounded-lg shadow-sm">
                  <Calendar className="h-8 w-8 text-orange-500 mb-3" />
                  <h4 className="font-medium mb-2">Special Occasions</h4>
                  <p className="text-sm text-gray-600">Transportation for weddings, conferences, and special events.</p>
                </div>
                <div className="bg-white p-5 rounded-lg shadow-sm">
                  <Clock className="h-8 w-8 text-orange-500 mb-3" />
                  <h4 className="font-medium mb-2">Hourly Hire</h4>
                  <p className="text-sm text-gray-600">
                    Book a vehicle with driver by the hour for maximum flexibility.
                  </p>
                </div>
              </div>
            </div>

            {/* Custom Pricing */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 md:p-8 max-w-3xl mx-auto">
              <h3 className="text-xl font-bold mb-4 text-center text-gray-800">Custom Service Pricing</h3>
              <p className="text-center text-gray-600 mb-6">
                Our custom services are priced based on your specific requirements. Contact us for a personalized quote.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex flex-col items-center p-4 border border-gray-200 rounded-lg">
                  <h4 className="font-medium mb-2">Hourly Rate</h4>
                  <p className="text-3xl font-bold text-orange-600 mb-1">SAR 80</p>
                  <p className="text-sm text-gray-500">Per hour, minimum 3 hours</p>
                </div>
                <div className="flex flex-col items-center p-4 border border-gray-200 rounded-lg">
                  <h4 className="font-medium mb-2">Full Day Rate</h4>
                  <p className="text-3xl font-bold text-orange-600 mb-1">SAR 500</p>
                  <p className="text-sm text-gray-500">Up to 8 hours</p>
                </div>
              </div>
              <div className="mt-8 text-center">
                <Link href="/contact">
                  <Button size="lg" className="bg-orange-600 hover:bg-orange-700">
                    Request Custom Quote
                  </Button>
                </Link>
              </div>
            </div>
          </TabsContent>
        </Tabs>

        {/* How to Book */}
        <div className="mt-16 md:mt-24">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-gray-800">How to Book Your Transfer</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl border border-gray-200 text-center">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-orange-600">1</span>
              </div>
              <h3 className="font-medium mb-2">Choose Your Service</h3>
              <p className="text-sm text-gray-600">Select the type of transfer you need from our service options.</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-200 text-center">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-orange-600">2</span>
              </div>
              <h3 className="font-medium mb-2">Provide Details</h3>
              <p className="text-sm text-gray-600">
                Enter your pickup location, destination, date, time, and passenger count.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-200 text-center">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-orange-600">3</span>
              </div>
              <h3 className="font-medium mb-2">Confirm & Pay</h3>
              <p className="text-sm text-gray-600">Review your booking details and complete the secure payment.</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-200 text-center">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-orange-600">4</span>
              </div>
              <h3 className="font-medium mb-2">Enjoy Your Ride</h3>
              <p className="text-sm text-gray-600">
                Receive confirmation with driver details and enjoy your comfortable transfer.
              </p>
            </div>
          </div>
        </div>

        {/* FAQs */}
        <div className="mt-16 md:mt-24">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-gray-800">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>How far in advance should I book my transfer?</AccordionTrigger>
                <AccordionContent>
                  We recommend booking at least 24 hours in advance to ensure availability, especially during peak
                  seasons. However, we do accommodate last-minute bookings subject to vehicle availability.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>What happens if my flight is delayed?</AccordionTrigger>
                <AccordionContent>
                  Don't worry! We monitor all flight arrivals. If your flight is delayed, your driver will wait for you
                  at no extra charge. We provide 60 minutes of free waiting time after the scheduled arrival time.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Is there a luggage limit for transfers?</AccordionTrigger>
                <AccordionContent>
                  Our standard vehicles can accommodate up to 4 passengers with 2 large suitcases and 2 small carry-ons.
                  If you have more luggage, please let us know when booking so we can arrange a suitable vehicle.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>Can I change or cancel my booking?</AccordionTrigger>
                <AccordionContent>
                  Yes, you can change or cancel your booking up to 24 hours before the scheduled pickup time for a full
                  refund. Changes made within 24 hours are subject to availability and may incur additional charges.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger>Do you provide child seats?</AccordionTrigger>
                <AccordionContent>
                  Yes, we offer child seats upon request. Please specify the age and weight of the child when booking,
                  and we'll ensure a suitable child seat is provided at no extra cost.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>

        {/* Testimonials */}
        <div className="mt-16 md:mt-24 bg-orange-50 py-12 px-4 rounded-xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-gray-800">What Our Customers Say</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div className="flex text-orange-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                "The airport pickup service was excellent. Driver was waiting for us despite our flight delay, and the
                vehicle was clean and comfortable. Will definitely use again!"
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gray-200 rounded-full mr-3"></div>
                <div>
                  <p className="font-medium">Ahmed S.</p>
                  <p className="text-sm text-gray-500">Jeddah to Makkah</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div className="flex text-orange-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                "We used the hotel-to-hotel transfer service between Makkah and Madinah. The driver was professional,
                the vehicle was spacious, and the journey was very comfortable."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gray-200 rounded-full mr-3"></div>
                <div>
                  <p className="font-medium">Fatima R.</p>
                  <p className="text-sm text-gray-500">Makkah to Madinah</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div className="flex text-orange-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                "The custom pickup service was perfect for our family. We booked for a full day of shopping, and the
                driver was patient and helpful throughout. Highly recommended!"
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gray-200 rounded-full mr-3"></div>
                <div>
                  <p className="font-medium">Mohammed A.</p>
                  <p className="text-sm text-gray-500">Custom Service</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 md:mt-24 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">Ready to Book Your Transfer?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Experience hassle-free transportation with our professional hotel pick and drop services. Book now or
            contact us for more information.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/book-now">
              <Button size="lg" className="bg-orange-600 hover:bg-orange-700">
                Book Now <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" size="lg" className="border-orange-600 text-orange-600 hover:bg-orange-50">
                <Phone className="mr-2 h-5 w-5" /> Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
