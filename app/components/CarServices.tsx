"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ChevronDown, MapPin, Car, HeadphonesIcon, ShieldCheck } from "lucide-react"

export default function CarService() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  // Define refs with proper TypeScript typing
  const sectionRef = useRef<HTMLElement>(null)
  const carRef = useRef<HTMLDivElement>(null)
  const headingRef = useRef<HTMLHeadingElement>(null)
  const subheadingRef = useRef<HTMLHeadingElement>(null)
  const featuresRef = useRef<HTMLDivElement[]>([])
  const faqSectionRef = useRef<HTMLElement>(null)
  const faqHeadingRef = useRef<HTMLHeadingElement>(null)
  const faqTextRef = useRef<HTMLHeadingElement>(null)
  const faqCarRef = useRef<HTMLDivElement>(null)
  const faqItemsRef = useRef<HTMLDivElement[]>([])

  // Clear refs on each render to prevent duplicates
  featuresRef.current = []
  faqItemsRef.current = []

  // Add to features ref array
  const addToFeaturesRef = (el: HTMLDivElement | null) => {
    if (el && !featuresRef.current.includes(el)) {
      featuresRef.current.push(el)
    }
  }

  // Add to FAQ items ref array
  const addToFaqItemsRef = (el: HTMLDivElement | null) => {
    if (el && !faqItemsRef.current.includes(el)) {
      faqItemsRef.current.push(el)
    }
  }

  useEffect(() => {
    // Register ScrollTrigger only on client side
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger)

      // Top section animations
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      })

      if (headingRef.current) {
        tl.from(headingRef.current, {
          opacity: 0,
          y: -30,
          duration: 0.8,
          ease: "power3.out",
        })
      }

      if (subheadingRef.current) {
        tl.from(
          subheadingRef.current,
          {
            opacity: 0,
            y: -20,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.6",
        )
      }

      if (carRef.current) {
        tl.from(
          carRef.current,
          {
            opacity: 0,
            scale: 0.8,
            duration: 1,
            ease: "elastic.out(1, 0.5)",
          },
          "-=0.4",
        )
      }

      // Animate features with stagger
      featuresRef.current.forEach((feature, index) => {
        tl.from(
          feature,
          {
            opacity: 0,
            x: index % 2 === 0 ? -30 : 30,
            duration: 0.6,
            ease: "power2.out",
          },
          "-=0.4",
        )
      })

      // FAQ section animations
      const tlFaq = gsap.timeline({
        scrollTrigger: {
          trigger: faqSectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      })

      if (faqHeadingRef.current) {
        tlFaq.from(faqHeadingRef.current, {
          opacity: 0,
          y: -20,
          duration: 0.6,
        })
      }

      if (faqTextRef.current) {
        tlFaq.from(
          faqTextRef.current,
          {
            opacity: 0,
            y: -15,
            duration: 0.6,
          },
          "-=0.4",
        )
      }

      if (faqCarRef.current) {
        tlFaq.from(
          faqCarRef.current,
          {
            opacity: 0,
            x: -50,
            duration: 0.8,
            ease: "power2.out",
          },
          "-=0.4",
        )
      }

      // Animate FAQ items with stagger
      faqItemsRef.current.forEach((item, index) => {
        tlFaq.from(
          item,
          {
            opacity: 0,
            y: 20,
            duration: 0.5,
            delay: index * 0.1,
          },
          "-=0.3",
        )
      })

      // Floating animation for the car
      if (carRef.current) {
        gsap.to(carRef.current, {
          y: 10,
          duration: 2,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        })
      }

      // Cleanup
      return () => {
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill())

        const elements = [
          headingRef.current,
          subheadingRef.current,
          carRef.current,
          ...featuresRef.current,
          faqHeadingRef.current,
          faqTextRef.current,
          faqCarRef.current,
          ...faqItemsRef.current,
        ].filter(Boolean) // Filter out null elements

        gsap.killTweensOf(elements)
      }
    }
  }, [])

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const features = [
    {
      icon: <Car className="w-6 h-6 text-orange-500" />,
      title: "Extensive Fleet Options",
      description: "Quisque sollicitudin feugiat risus, Eu posuere Ex euismod Eu, Phasellus hendrerit, Massa",
    },
    {
      icon: <MapPin className="w-6 h-6 text-orange-500" />,
      title: "Convenient Locations",
      description: "Quisque sollicitudin feugiat risus, Eu posuere Ex euismod Eu, Phasellus hendrerit, Massa",
    },
    {
      icon: <HeadphonesIcon className="w-6 h-6 text-orange-500" />,
      title: "Exceptional Customer Service",
      description: "Quisque sollicitudin feugiat risus, Eu posuere Ex euismod Eu, Phasellus hendrerit, Massa",
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-orange-500" />,
      title: "Reliability And Safety",
      description: "Quisque sollicitudin feugiat risus, Eu posuere Ex euismod Eu, Phasellus hendrerit, Massa",
    },
  ]

  const faqs = [
    {
      question: "How Old Do I Need To Be To Rent A Car?",
      answer:
        "Most rental companies require you to be at least 21 years old to rent a car. However, if you're under 25, you may have to pay a young driver surcharge. Some specialty vehicles may require drivers to be 25 or older.",
    },
    {
      question: "Can I Rent A Car With A Debit Card?",
      answer:
        "Yes, many rental companies accept debit cards, but they may place a hold on your account for the estimated rental amount plus a security deposit. Corangeit cards are generally preferorange and may offer more flexibility.",
    },
    {
      question: "What Documents Do I Need To Rent A Car?",
      answer:
        "You'll typically need a valid driver's license, a corangeit or debit card in your name, and proof of insurance. International renters may need a passport and an International Driving Permit depending on the country.",
    },
  ]

  return (
    <>
      {/* Why Choose Us Section */}
      <section ref={sectionRef} className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-6">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 mb-2"
            >
              <span className="h-1 w-5 bg-orange-500"></span>
              <span className="text-sm font-medium text-orange-500">Why Choose Us</span>
              <span className="h-1 w-5 bg-orange-500"></span>
            </motion.div>

            <h2 ref={headingRef} className="text-3xl md:text-4xl font-bold mb-1">
              Unmatched quality and service
            </h2>
            <h3 ref={subheadingRef} className="text-3xl md:text-4xl font-bold">
              for your needs
            </h3>
          </div>

          <div className="relative mt-16 mb-24">
            {/* Center car image */}
            <div className="flex justify-center">
              <div ref={carRef} className="relative w-64 h-64 md:w-80 md:h-80">
                <Image
                  src="/why-choose-car-img.png"
                  alt="orange Audi Car"
                  width={400}
                  height={400}
                  className="object-contain"
                />
              </div>
            </div>

            {/* Features around the car */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {features.map((feature, index) => (
                <div
                  key={feature.title}
                  ref={(el) => addToFeaturesRef(el as HTMLDivElement)}
                  className="flex items-start gap-4"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2">{feature.title}</h4>
                    <p className="text-gray-600 text-sm">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section ref={faqSectionRef} className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Left side - Car image */}
            <div ref={faqCarRef} className="relative">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="relative z-10">
                  <Image
                    src="/our-faqs-car-img.png"
                    alt="Luxury Sedan"
                    width={600}
                    height={400}
                    className="object-contain"
                  />
                </div>
              </motion.div>
            </div>

            {/* Right side - FAQ */}
            <div>
              <div className="mb-8">
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="inline-flex items-center gap-2 mb-2"
                >
                  <span className="h-1 w-5 bg-orange-500"></span>
                  <span className="text-sm font-medium text-orange-500">Frequently Asked Questions</span>
                </motion.div>

                <h2 ref={faqHeadingRef} className="text-3xl font-bold mb-2">
                  Everything you need to
                </h2>
                <h3 ref={faqTextRef} className="text-3xl font-bold mb-6">
                  know about our services
                </h3>

                <div className="mb-6">
                  <h4 className="font-bold mb-2">What Do I Need To Rent A Car?</h4>
                  <p className="text-gray-600 text-sm">
                    Expect our diverse selection of high-end vehicles, choose your preferorange model, and enjoy a seamless
                    rental process that puts you behind the wheel in no time.
                  </p>
                </div>
              </div>

              {/* FAQ Accordion */}
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    ref={(el) => addToFaqItemsRef(el as HTMLDivElement)}
                    className="border border-gray-200 rounded-lg overflow-hidden"
                  >
                    <motion.button
                      className="w-full flex justify-between items-center p-4 text-left font-medium"
                      onClick={() => toggleFaq(index)}
                      whileHover={{ backgroundColor: "rgba(0,0,0,0.02)" }}
                    >
                      {faq.question}
                      <motion.div animate={{ rotate: openFaq === index ? 180 : 0 }} transition={{ duration: 0.3 }}>
                        <ChevronDown className="w-5 h-5 text-gray-500" />
                      </motion.div>
                    </motion.button>

                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{
                        height: openFaq === index ? "auto" : 0,
                        opacity: openFaq === index ? 1 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="p-4 pt-0 text-sm text-gray-600">{faq.answer}</div>
                    </motion.div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
