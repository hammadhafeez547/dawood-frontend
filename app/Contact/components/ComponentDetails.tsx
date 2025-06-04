"use client"
import { useState } from "react"
import type React from "react"

import Image from "next/image"
import { motion } from "framer-motion"
import { Phone, Mail, MapPin, Clock, Facebook, Twitter, Instagram, Youtube, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Navbar from "@/app/components/Navbar"
import Footer from "@/app/components/Footer"


export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    inquiryType: "general",
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

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
    if (!formData.subject.trim()) newErrors.subject = "Subject is required"
    if (!formData.message.trim()) newErrors.message = "Message is required"

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    // Submit form
    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
        inquiryType: "general",
      })
    }, 1500)
  }

  const officeLocations = [
    {
      city: "Makkah Office",
      address: "123 Al Hajj Street, Al Aziziyah District",
      phone: "+966 12 345 6789",
      email: "makkah@dawoodtours.com",
      hours: "Sat-Thu: 9:00 AM - 9:00 PM, Friday: 2:00 PM - 9:00 PM",
      mapUrl: "/placeholder.svg?height=300&width=600",
    },
    {
      city: "Madinah Office",
      address: "456 Prophet's Road, Central Area",
      phone: "+966 14 765 4321",
      email: "madinah@dawoodtours.com",
      hours: "Sat-Thu: 9:00 AM - 9:00 PM, Friday: 2:00 PM - 9:00 PM",
      mapUrl: "/placeholder.svg?height=300&width=600",
    },
    {
      city: "Jeddah Office",
      address: "789 King Abdullah Road, Al Rawdah District",
      phone: "+966 12 987 6543",
      email: "jeddah@dawoodtours.com",
      hours: "Sat-Thu: 9:00 AM - 9:00 PM, Friday: 2:00 PM - 9:00 PM",
      mapUrl: "/placeholder.svg?height=300&width=600",
    },
  ]

  const faqs = [
    {
      question: "How can I book a Hajj or Umrah package?",
      answer:
        "You can book a Hajj or Umrah package by filling out our contact form, calling our office directly, or visiting one of our office locations. Our team will guide you through the available packages and help you select the one that best suits your needs.",
    },
    {
      question: "What documents do I need for Hajj and Umrah?",
      answer:
        "For Hajj and Umrah, you will need a valid passport with at least 6 months validity, passport-sized photographs, completed application forms, and proof of vaccination. Additional requirements may apply based on your country of residence. Our team can provide detailed guidance specific to your situation.",
    },
    {
      question: "How far in advance should I book my Hajj package?",
      answer:
        "We recommend booking your Hajj package at least 6-8 months in advance to ensure availability, as spots are limited and fill up quickly. For Umrah, booking 2-3 months in advance is generally sufficient, though during peak seasons like Ramadan, earlier booking is advised.",
    },
    {
      question: "Do you offer transportation services between Makkah and Madinah?",
      answer:
        "Yes, we offer comprehensive transportation services between Makkah and Madinah, as well as airport transfers and city tours. We have a fleet of modern, comfortable vehicles ranging from sedans to buses to accommodate individuals and groups of all sizes.",
    },
    {
      question: "Can I customize my Umrah package?",
      answer:
        "We offer customizable Umrah packages to meet your specific needs and preferences. You can choose your preferred accommodation, transportation options, duration of stay, and additional services. Contact our team to discuss your requirements.",
    },
    {
      question: "What is your cancellation policy?",
      answer:
        "Our cancellation policy varies depending on the package and time of cancellation. Generally, cancellations made 60 days or more before departure may receive a full refund minus administrative fees. Cancellations made 30-59 days before departure may receive a partial refund. Cancellations made less than 30 days before departure are typically non-refundable. Please contact us for specific details related to your booking.",
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

  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-gray-900 to-gray-800 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/madina2.jpg" alt="Background" fill sizes="100vw" className="object-cover opacity-30" />
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
            <div className="w-24 h-1 bg-orange-500 mx-auto my-6"></div>
            <p className="text-lg text-gray-300 mb-8">
              We're here to assist you with any questions or inquiries about our Hajj and Umrah services. Reach out to
              us through any of the channels below.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <motion.div
                custom={0}
                initial="hidden"
                animate="visible"
                variants={fadeIn}
                className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20 flex flex-col items-center"
              >
                <div className="p-3 bg-orange-600/20 rounded-full mb-4">
                  <Phone className="h-6 w-6 text-orange-400" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Call Us</h3>
                <p className="text-gray-300 text-center">Our customer service team is available to assist you 24/7</p>
                <a href="tel:+966123456789" className="text-orange-400 font-medium mt-2 hover:text-orange-300">
                  +966 12 345 6789
                </a>
              </motion.div>

              <motion.div
                custom={1}
                initial="hidden"
                animate="visible"
                variants={fadeIn}
                className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20 flex flex-col items-center"
              >
                <div className="p-3 bg-orange-600/20 rounded-full mb-4">
                  <Mail className="h-6 w-6 text-orange-400" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Email Us</h3>
                <p className="text-gray-300 text-center">Send us an email and we'll get back to you within 24 hours</p>
                <a
                  href="mailto:info@dawoodtours.com"
                  className="text-orange-400 font-medium mt-2 hover:text-orange-300"
                >
                  info@dawoodtours.com
                </a>
              </motion.div>

              <motion.div
                custom={2}
                initial="hidden"
                animate="visible"
                variants={fadeIn}
                className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20 flex flex-col items-center"
              >
                <div className="p-3 bg-orange-600/20 rounded-full mb-4">
                  <MapPin className="h-6 w-6 text-orange-400" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Visit Us</h3>
                <p className="text-gray-300 text-center">Visit one of our offices in Makkah, Madinah, or Jeddah</p>
                <a href="#locations" className="text-orange-400 font-medium mt-2 hover:text-orange-300">
                  View Locations
                </a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
              <h2 className="text-3xl font-bold text-gray-800 mb-2">Get in Touch</h2>
              <div className="w-20 h-1 bg-orange-500 mb-6"></div>
              <p className="text-gray-600 mb-8">
                Have questions about our services or need assistance planning your pilgrimage? Fill out the form below
                and our team will get back to you as soon as possible.
              </p>

              {isSubmitted ? (
                <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg
                      className="w-8 h-8 text-green-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Message Sent Successfully!</h3>
                  <p className="text-gray-600 mb-4">
                    Thank you for contacting us. Our team will get back to you within 24 hours.
                  </p>
                  <Button className="bg-orange-600 hover:bg-orange-700" onClick={() => setIsSubmitted(false)}>
                    Send Another Message
                  </Button>
                </div>
              ) : (
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
                    <Label htmlFor="inquiryType">Inquiry Type</Label>
                    <RadioGroup
                      value={formData.inquiryType}
                      onValueChange={(value) => handleChange("inquiryType", value)}
                      className="flex flex-wrap gap-4"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="general" id="general" />
                        <Label htmlFor="general">General Inquiry</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="hajj" id="hajj" />
                        <Label htmlFor="hajj">Hajj Packages</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="umrah" id="umrah" />
                        <Label htmlFor="umrah">Umrah Packages</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="transportation" id="transportation" />
                        <Label htmlFor="transportation">Transportation</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="support" id="support" />
                        <Label htmlFor="support">Customer Support</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      placeholder="Enter subject"
                      value={formData.subject}
                      onChange={(e) => handleChange("subject", e.target.value)}
                      className={errors.subject ? "border-red-500" : ""}
                    />
                    {errors.subject && (
                      <p className="text-red-500 text-sm flex items-center gap-1 mt-1">
                        <AlertCircle className="h-3 w-3" /> {errors.subject}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="How can we help you?"
                      rows={5}
                      value={formData.message}
                      onChange={(e) => handleChange("message", e.target.value)}
                      className={errors.message ? "border-red-500" : ""}
                    />
                    {errors.message && (
                      <p className="text-red-500 text-sm flex items-center gap-1 mt-1">
                        <AlertCircle className="h-3 w-3" /> {errors.message}
                      </p>
                    )}
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
                        Sending...
                      </>
                    ) : (
                      "Send Message"
                    )}
                  </Button>
                </form>
              )}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative h-full min-h-[400px] lg:min-h-[600px] rounded-xl overflow-hidden"
            >
              <Image
                src="/placeholder.svg?height=800&width=600"
                alt="Contact Us"
                fill
                className="object-cover rounded-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex flex-col justify-end p-8">
                <h3 className="text-2xl font-bold text-white mb-4">Emergency Contact</h3>
                <p className="text-white/90 mb-4">
                  For urgent assistance during your pilgrimage, please contact our 24/7 emergency support line.
                </p>
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-orange-600/20 rounded-full">
                    <Phone className="h-5 w-5 text-orange-400" />
                  </div>
                  <span className="text-white font-medium">+966 800 123 4567</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-orange-600/20 rounded-full">
                    <Mail className="h-5 w-5 text-orange-400" />
                  </div>
                  <span className="text-white font-medium">emergency@dawoodtours.com</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section id="locations" className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-800">Our Office Locations</h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto my-4"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Visit one of our offices in Saudi Arabia to speak with our team in person. We're here to assist you with
              all your pilgrimage needs.
            </p>
          </motion.div>

          <Tabs defaultValue="makkah" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="bg-white/80 backdrop-blur-sm">
                <TabsTrigger value="makkah">Makkah Office</TabsTrigger>
                <TabsTrigger value="madinah">Madinah Office</TabsTrigger>
                <TabsTrigger value="jeddah">Jeddah Office</TabsTrigger>
              </TabsList>
            </div>

            {officeLocations.map((office, index) => (
              <TabsContent key={index} value={office.city.split(" ")[0].toLowerCase()} className="mt-0">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="relative h-64 lg:h-auto rounded-lg overflow-hidden">
                    <Image
                      src={office.mapUrl || "/placeholder.svg"}
                      alt={`${office.city} Map`}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="bg-white p-8 rounded-lg shadow-md">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">{office.city}</h3>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <MapPin className="h-5 w-5 text-orange-500 mt-1" />
                        <div>
                          <p className="font-medium text-gray-700">Address:</p>
                          <p className="text-gray-600">{office.address}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Phone className="h-5 w-5 text-orange-500 mt-1" />
                        <div>
                          <p className="font-medium text-gray-700">Phone:</p>
                          <p className="text-gray-600">{office.phone}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Mail className="h-5 w-5 text-orange-500 mt-1" />
                        <div>
                          <p className="font-medium text-gray-700">Email:</p>
                          <p className="text-gray-600">{office.email}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Clock className="h-5 w-5 text-orange-500 mt-1" />
                        <div>
                          <p className="font-medium text-gray-700">Business Hours:</p>
                          <p className="text-gray-600">{office.hours}</p>
                        </div>
                      </div>
                    </div>
                    <div className="mt-6">
                      <Button className="bg-orange-600 hover:bg-orange-700">Get Directions</Button>
                    </div>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-800">Frequently Asked Questions</h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto my-4"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Find answers to common questions about our services. If you can't find what you're looking for, please
              don't hesitate to contact us.
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left font-medium text-gray-800">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-gray-600">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">
              Can't find the answer you're looking for? Contact our customer support team.
            </p>
            <Button className="bg-orange-600 hover:bg-orange-700">Contact Support</Button>
          </div>
        </div>
      </section>

      {/* Connect With Us */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-800">Connect With Us</h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto my-4"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Follow us on social media for updates, travel tips, and inspiring stories from pilgrims.
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-6">
            {[
              { icon: <Facebook className="h-6 w-6" />, name: "Facebook", url: "https://facebook.com" },
              { icon: <Twitter className="h-6 w-6" />, name: "Twitter", url: "https://twitter.com" },
              { icon: <Instagram className="h-6 w-6" />, name: "Instagram", url: "https://instagram.com" },
              { icon: <Youtube className="h-6 w-6" />, name: "YouTube", url: "https://youtube.com" },
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                custom={index}
                initial="hidden"
                animate="visible"
                variants={fadeIn}
                className="flex flex-col items-center gap-3 p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="p-4 bg-gray-100 rounded-full text-orange-600 hover:bg-orange-100 transition-colors">
                  {social.icon}
                </div>
                <span className="font-medium text-gray-800">{social.name}</span>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-orange-600 to-orange-500 rounded-xl overflow-hidden shadow-xl">
            <div className="p-8 md:p-12 text-center text-white">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Need More Information?</h2>
              <p className="text-white/90 mb-8 max-w-2xl mx-auto">
                Contact us today to learn more about our services or to start planning your pilgrimage journey.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-white text-orange-600 hover:bg-gray-100">Book a Consultation</Button>
                <Button variant="outline" className="text-white border-white/30 hover:bg-white/10">
                  View Our Packages
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
