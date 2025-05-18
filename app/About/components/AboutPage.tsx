"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle, Award, Users, Heart, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";

export default function AboutPage() {
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "AboutPage",
        name: "About Dawood Hajj Transport",
        description:
          "History of our Hajj/Umrah transportation service in Saudi Arabia",
        publisher: {
          "@type": "Organization",
          name: "Dawood Hajj and Umrah Transportation",
          logo: {
            "@type": "ImageObject",
            url: "https://dawoodhajjtransport.com/logo.png",
          },
          foundingDate: "2009",
          numberOfEmployees: "50+",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Makkah Road",
            addressLocality: "Jeddah",
            addressCountry: "SA",
          },
        },
      }),
    }}
  />;

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

  const stats = [
    { value: "5+", label: "Years Serving Pilgrims" },
    { value: "1000+", label: "Pilgrims Transported Safely" },
    { value: "24/7", label: "Support Throughout Your Journey" },
    { value: "100%", label: "Licensed by Saudi Ministry" },
  ];
  const values = [
    {
      icon: <Heart className="h-6 w-6 text-orange-500" />,
      title: "Compassion",
      description:
        "We treat each pilgrim with care and understanding, recognizing the spiritual significance of their journey.",
    },
    {
      icon: <Shield className="h-6 w-6 text-orange-500" />,
      title: "Integrity",
      description:
        "We operate with honesty and transparency in all our dealings, earning the trust of our clients.",
    },
    {
      icon: <CheckCircle className="h-6 w-6 text-orange-500" />,
      title: "Excellence",
      description:
        "We strive for excellence in every service we provide, ensuring the highest standards of quality.",
    },
    {
      icon: <Users className="h-6 w-6 text-orange-500" />,
      title: "Community",
      description:
        "We foster a sense of brotherhood and community among pilgrims, creating meaningful connections.",
    },
  ];

  const team = [
    {
      name: "Abdul Sattar",
      role: "Founder & CEO",
      bio: "With over 20 years of experience in Hajj and Umrah services, Ahmed founded Dawood Tours with a vision to provide exceptional pilgrimage experiences.",
      image: "/sattar.jpg?height=400&width=400",
    },
    {
      name: "Hammad Hafeez",
      role: "Operations Director",
      bio: "Fatima ensures that all logistics run smoothly, from transportation to accommodation, creating seamless journeys for our pilgrims.",
      image: "/hafeez.jpg?height=400&width=400",
    },
    // {
    //   name: "Muhammad Qasim",
    //   role: "Religious Guide",
    //   bio: "A scholar with extensive knowledge of Islamic history and rituals, Muhammad provides spiritual guidance throughout the pilgrimage.",
    //   image: "/placeholder.svg?height=400&width=400",
    // },
    // {
    //   name: "Aisha Malik",
    //   role: "Customer Relations",
    //   bio: "Aisha's dedication to exceptional service ensures that every pilgrim's needs are met with care and attention to detail.",
    //   image: "/placeholder.svg?height=400&width=400",
    // },
  ];
  const certifications = [
  {
    title: "Ministry of Hajj License",
    description: "Officially licensed by the Saudi Ministry of Hajj & Umrah.",
    year: "Certified 2020",
  },
  {
    title: "Saudi Tourism Accreditation",
    description: "Recognized by the Saudi Tourism Authority for excellence in service.",
    year: "Certified 2021",
  },
  {
    title: "ISO 9001: Quality Management",
    description: "Certified for maintaining international quality standards.",
    year: "Certified 2022",
  },
  {
    title: "Passenger Safety Compliance",
    description: "Compliant with national standards for passenger safety and transport.",
    year: "Certified 2023",
  },
]

  const timeline = [
    {
      year: "2020",
      title: "Pandemic Resilience",
      description:
        "Adapted operations for safe pilgrimage during COVID-19 with health compliance and reduced capacity.",
    },
    {
      year: "2021",
      title: "Digital Innovation",
      description:
        "Launched an online booking portal and introduced live customer support for ease and transparency.",
    },
    {
      year: "2022",
      title: "Luxury Fleet Launch",
      description:
        "Rolled out premium vehicles for VIP pilgrims offering comfort, Wi-Fi, and custom scheduling.",
    },
    {
      year: "2023",
      title: "Customized Packages",
      description:
        "Introduced family and group Umrah plans with multilingual guides and flexible itineraries.",
    },
    {
      year: "2024",
      title: "AI-Based Assistance",
      description:
        "Integrated AI-driven customer service, smart itineraries, and faster response support.",
    },
    {
      year: "2025",
      title: "Eco-Friendly Pilgrimage",
      description:
        "Launched hybrid vehicles and introduced sustainability-focused services for a greener pilgrimage.",
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/madina2.jpg"
            alt="Kaaba Background"
            fill
            sizes="100vw"
            className="object-cover"
            priority
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
              About Dawood Transportation
            </h1>
            <div className="w-24 h-1 bg-orange-500 mx-auto my-6"></div>
            <p className="text-lg text-gray-200 mb-8">
              Your trusted partner for Hajj and Umrah services since 1995. We
              are dedicated to providing exceptional spiritual journeys with
              comfort, guidance, and care.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  custom={index}
                  initial="hidden"
                  animate="visible"
                  variants={fadeIn}
                  className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20"
                >
                  <p className="text-3xl font-bold text-orange-400">
                    {stat.value}
                  </p>
                  <p className="text-sm text-gray-300">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-2">
                Our Story
              </h2>
              <div className="w-20 h-1 bg-orange-500 mb-6"></div>
              <p className="text-gray-600 mb-6">
                Dawood Tours was founded in 1995 with a simple mission: to
                provide pilgrims with a spiritually fulfilling and comfortable
                journey to the holy cities of Makkah and Madinah. What began as
                a small family business has grown into a trusted name in Hajj
                and Umrah services worldwide.
              </p>
              <p className="text-gray-600 mb-6">
                Our founder, Ahmed Al-Farsi, recognized the need for a service
                that understood both the logistical challenges and the profound
                spiritual significance of the pilgrimage. Drawing from his own
                experiences, he established Dawood Tours to bridge this gap.
              </p>
              <p className="text-gray-600">
                Today, we continue to uphold our founding principles while
                embracing modern innovations to enhance the pilgrim experience.
                Our team of experienced professionals is dedicated to providing
                exceptional service, ensuring that your spiritual journey is as
                meaningful and comfortable as possible.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-orange-100 rounded-lg z-0"></div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-orange-100 rounded-lg z-0"></div>
              <div className="relative z-10 rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/about-car.jpg"
                  alt="Dawood Tours Team"
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Mission & Vision */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-2">
              Our Mission & Vision
            </h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto my-6"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-orange-500"
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Our Mission
              </h3>
              <p className="text-gray-600 mb-6">
                To facilitate transformative spiritual journeys by providing
                exceptional Hajj and Umrah services that combine religious
                guidance, comfort, and cultural understanding, enabling pilgrims
                to focus entirely on their worship and spiritual growth.
              </p>
              <ul className="space-y-3">
                {[
                  "Provide seamless logistics for a stress-free pilgrimage",
                  "Offer knowledgeable religious guidance throughout the journey",
                  "Ensure comfortable accommodations and transportation",
                  "Create an environment of community and brotherhood",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-orange-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-orange-500"
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Our Vision
              </h3>
              <p className="text-gray-600 mb-6">
                To be the global leader in Hajj and Umrah services, recognized
                for our excellence, integrity, and innovation in facilitating
                meaningful spiritual journeys that leave lasting impressions on
                the hearts of pilgrims from around the world.
              </p>
              <ul className="space-y-3">
                {[
                  "Set the industry standard for pilgrim care and service",
                  "Continuously innovate to enhance the pilgrimage experience",
                  "Build lasting relationships with pilgrims worldwide",
                  "Contribute positively to the communities we serve",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-orange-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-2">
              Our Core Values
            </h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto my-6"></div>
            <p className="text-gray-600">
              These principles guide every aspect of our service and define our
              approach to facilitating your spiritual journey.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                custom={index}
                initial="hidden"
                whileInView="visible"
                variants={fadeIn}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-100"
              >
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Journey Timeline */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-2">
              Our Journey
            </h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto my-6"></div>
            <p className="text-gray-600">
              From our humble beginnings to becoming a trusted name in Hajj and
              Umrah services, our journey has been guided by a commitment to
              excellence and service.
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-orange-200 z-0"></div>

            <div className="relative z-10">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`flex items-center justify-between mb-12 ${
                    index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                  }`}
                >
                  <div
                    className={`w-5/12 ${
                      index % 2 === 0 ? "text-right pr-8" : "text-left pl-8"
                    }`}
                  >
                    <h3 className="text-xl font-bold text-gray-800 mb-1">
                      {item.title}
                    </h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>

                  <div className="w-2/12 flex justify-center">
                    <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold">
                      {item.year}
                    </div>
                  </div>

                  <div className="w-5/12"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-2">
              Meet Our Team
            </h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto my-6"></div>
            <p className="text-gray-600">
              Our dedicated team of professionals is committed to providing
              exceptional service and guidance throughout your pilgrimage
              journey.
            </p>
          </motion.div>

          <div className="flex flex-wrap gap-6 items-center justify-center">
            {team.map((member, index) => (
              <motion.div
                key={index}
                custom={index}
                initial="hidden"
                whileInView="visible"
                variants={fadeIn}
                viewport={{ once: true }}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow w-full sm:w-[48%] lg:w-[30%]"
              >
                <div className="relative h-64 overflow-hidden ">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    width={400}
                    height={400}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-orange-600 font-medium mb-3">
                    {member.role}
                  </p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}


      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-orange-500 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-6">
              Ready to Begin Your Spiritual Journey?
            </h2>
            <p className="text-lg mb-8 text-white/90">
              Contact us today to learn more about our packages and start
              planning your pilgrimage.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/Packages">
                {" "}
                <Button className="bg-white text-orange-600 hover:bg-gray-100">
                  View Our Packages
                </Button>
              </Link>
              <Link href="/Contact">
                <Button className="bg-orange-700 text-white border border-white/20 hover:bg-orange-800">
                  Contact Us Today
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
