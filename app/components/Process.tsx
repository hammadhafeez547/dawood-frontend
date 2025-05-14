"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Asterisk } from "lucide-react"
import Image from "next/image"
import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

export default function Process() {
  // Refs for elements we want to animate
  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const asteriskRef = useRef(null)
  const aboutTextRef = useRef(null)
  const descriptionRef = useRef(null)
  const accordionRef = useRef(null)
  const footerTextRef = useRef(null)
  const imageContainerRef = useRef(null)
  const starIconRef = useRef(null)
  const orangeAsteriskRef = useRef(null)
  const statsBoxRef = useRef(null)
  const accordionItemsRef = useRef([])

  useEffect(() => {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger)

    // Create a timeline for our animations
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%", // Start animation when the top of the section is 80% from the top of the viewport
        toggleActions: "play none none none",
      },
    })

    // Clear any existing animations
    gsap.set(
      [
        titleRef.current,
        asteriskRef.current,
        aboutTextRef.current,
        descriptionRef.current,
        accordionRef.current,
        footerTextRef.current,
        imageContainerRef.current,
        starIconRef.current,
        orangeAsteriskRef.current,
        statsBoxRef.current,
        ...accordionItemsRef.current,
      ],
      { clearProps: "all" },
    )

    // Initial states
    gsap.set(titleRef.current, { opacity: 0, y: 30 })
    gsap.set(asteriskRef.current, { opacity: 0, rotation: -180 })
    gsap.set(aboutTextRef.current, { opacity: 0, x: -20 })
    gsap.set(descriptionRef.current, { opacity: 0, y: 20 })
    gsap.set(accordionRef.current, { opacity: 0, y: 30 })
    gsap.set(footerTextRef.current, { opacity: 0, y: 20 })
    gsap.set(imageContainerRef.current, { opacity: 0, scale: 0.8 })
    gsap.set(starIconRef.current, { opacity: 0, scale: 0 })
    gsap.set(orangeAsteriskRef.current, { opacity: 0, scale: 0, rotation: -180 })
    gsap.set(statsBoxRef.current, { opacity: 0, y: 50 })
    accordionItemsRef.current.forEach((item, index) => {
      gsap.set(item, { opacity: 0, y: 20 })
    })

    // Animation sequence
    tl.to(asteriskRef.current, {
      opacity: 1,
      rotation: 0,
      duration: 0.8,
      ease: "back.out(1.7)",
    })
      .to(
        aboutTextRef.current,
        {
          opacity: 1,
          x: 0,
          duration: 0.5,
        },
        "-=0.4",
      )
      .to(
        titleRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
        },
        "-=0.2",
      )
      .to(
        descriptionRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
        },
        "-=0.3",
      )
      .to(
        imageContainerRef.current,
        {
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: "elastic.out(1, 0.5)",
        },
        "-=0.5",
      )
      .to(
        orangeAsteriskRef.current,
        {
          opacity: 1,
          scale: 1,
          rotation: 0,
          duration: 0.8,
          ease: "back.out(1.7)",
        },
        "-=0.6",
      )
      .to(
        starIconRef.current,
        {
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: "back.out(1.7)",
        },
        "-=0.6",
      )

    // Animate accordion items with stagger
    tl.to(accordionRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.5,
    })

    accordionItemsRef.current.forEach((item, index) => {
      tl.to(
        item,
        {
          opacity: 1,
          y: 0,
          duration: 0.4,
          delay: index * 0.1,
        },
        "-=0.3",
      )
    })

    tl.to(
      footerTextRef.current,
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
      },
      "-=0.2",
    ).to(
      statsBoxRef.current,
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: "back.out(1.7)",
      },
      "-=0.3",
    )

    // Hover effect for stats box
    const statsBox = statsBoxRef.current
    if (statsBox) {
      statsBox.addEventListener("mouseenter", () => {
        gsap.to(statsBox, {
          scale: 1.05,
          boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)",
          duration: 0.3,
        })
      })

      statsBox.addEventListener("mouseleave", () => {
        gsap.to(statsBox, {
          scale: 1,
          boxShadow: "none",
          duration: 0.3,
        })
      })
    }

    // Hover effect for image
    const imageContainer = imageContainerRef.current
    if (imageContainer) {
      imageContainer.addEventListener("mouseenter", () => {
        gsap.to(imageContainer, { scale: 1.03, duration: 0.3 })
      })

      imageContainer.addEventListener("mouseleave", () => {
        gsap.to(imageContainer, { scale: 1, duration: 0.3 })
      })
    }

    // Cleanup function
    return () => {
      if (statsBox) {
        statsBox.removeEventListener("mouseenter", () => {})
        statsBox.removeEventListener("mouseleave", () => {})
      }
      if (imageContainer) {
        imageContainer.removeEventListener("mouseenter", () => {})
        imageContainer.removeEventListener("mouseleave", () => {})
      }

      // Kill all animations and ScrollTriggers when component unmounts
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
      gsap.killTweensOf([
        titleRef.current,
        asteriskRef.current,
        aboutTextRef.current,
        descriptionRef.current,
        accordionRef.current,
        footerTextRef.current,
        imageContainerRef.current,
        starIconRef.current,
        orangeAsteriskRef.current,
        statsBoxRef.current,
        ...accordionItemsRef.current,
      ])
    }
  }, [])

  // Function to add accordion items to the ref array
  const addToAccordionRefs = (el) => {
    if (el && !accordionItemsRef.current.includes(el)) {
      accordionItemsRef.current.push(el)
    }
  }

  return (
    <section ref={sectionRef} className="py-16 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between max-w-5xl mx-auto">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <span className="flex items-center">
              <span ref={asteriskRef}>
                <Asterisk className="w-8 h-8 text-orange-500" />
              </span>
              <span ref={aboutTextRef} className="font-bold text-orange-500 ml-2">
                About Us
              </span>
            </span>

            <h2 ref={titleRef} className="text-3xl font-bold mb-6">
              Streamlined processes for
              <br />a hassle-free experience
            </h2>

            <p ref={descriptionRef} className="text-gray-500 text-[14px]">
              Our streamlined process ensures a seamless car rental experience from start to finish. With easy online
              booking, flexible pick-up and drop-off options.
            </p>

            <div ref={accordionRef}>
              <Accordion type="single" collapsible className="w-full">
                {[
                  {
                    value: "item-1",
                    trigger: "Simple and Secure",
                    content: "Our booking process is simple, secure, and designed with your convenience in mind.",
                  },
                  {
                    value: "item-2",
                    trigger: "Best Price Guarantee",
                    content: "We offer competitive prices and guarantee the best rates for our premium services.",
                  },
                  {
                    value: "item-3",
                    trigger: "24/7 Customer Support",
                    content:
                      "Our customer support team is available 24/7 to assist you with any questions or concerns.",
                  },
                ].map((item) => (
                  <div key={item.value} ref={addToAccordionRefs}>
                    <AccordionItem value={item.value} className="border-b">
                      <AccordionTrigger className="text-sm font-medium py-4">{item.trigger}</AccordionTrigger>
                      <AccordionContent className="text-xs text-gray-500 pb-4">{item.content}</AccordionContent>
                    </AccordionItem>
                  </div>
                ))}
              </Accordion>
            </div>

            <p ref={footerTextRef} className="text-xs text-gray-500 mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </p>
          </div>

          <div className="relative">
            {/* Oval image container with border */}
            <div
              ref={imageContainerRef}
              className="relative w-[320px] h-[380px] border-2 border-white rounded-[40%] overflow-hidden shadow-xl"
              style={{ borderRadius: "40% / 30%" }}
            >
              <Image src="/OIP.jpeg" alt="Person in car" fill className="object-cover" />

              {/* Star at bottom */}
              <div ref={starIconRef} className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 text-indigo-900">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M12 0L13.46 8.59L22 8.66L15.27 14.15L17.82 22.44L12 16.9L6.18 22.44L8.73 14.15L2 8.66L10.54 8.59L12 0Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
            </div>

            {/* Orange asterisk */}
            <div ref={orangeAsteriskRef} className="absolute top-10 right-[-30px] text-orange-600">
            <Asterisk className="w-12 h-12 text-orange-500" />

            </div>

            {/* Stats box */}
            <div
              ref={statsBoxRef}
              className="absolute -bottom-4 right-0 bg-orange-500 text-white p-4 rounded-lg cursor-pointer"
            >
              <div className="text-xs font-medium mb-1">GET 15% OFF</div>
              <div className="text-sm font-bold">BOOK NOW</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
