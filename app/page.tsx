import React from "react";
import SeoHead from "./components/SeoHead";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import UmrahServies from "./components/UmrahServies";
import About from "./components/AboutUs";
import Services from "./components/Services";
import TaxiRoutes from "./components/TaxiRoutes";
import Process from "./components/Process";
import TaxiOptions from "./components/TaxiOptions";
import CarServices from "./components/CarServices";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Dawood Hajj & Umrah Transportation | Makkah-Madinah Taxi Service 2024",
  description: "✅ Certified Hajj & Umrah taxi service in Saudi Arabia. Book reliable Makkah to Madinah transfers, Jeddah airport pickups, and ziyarat transport. 24/7 English/Arabic support.",
  keywords: [
    "Hajj taxi service 2024",
    "Umrah transport Makkah",
    "Makkah to Madinah taxi price",
    "Jeddah airport to Haram taxi",
    "Certified Hajj transportation",
    "Women-friendly Umrah taxi",
    "Hajj group transport Saudi Arabia",
    "Dawood Hajj Transport reviews",
    "شركة نقل حجاج مكة",
    "تكسي العمرة من جدة"
  ],
  alternates: {
    canonical: 'https://dawoodhajjtransport.com',
    languages: {
      'ar': 'https://dawoodhajjtransport.com/ar',
    },
  },
  openGraph: {
    title: "Dawood Hajj & Umrah Transportation | Certified Service 2024",
    description: "Government-approved Hajj/Umrah taxis in Saudi Arabia. Fixed prices, English-speaking drivers, 24/7 availability.",
    url: "https://www.dawoodhajjtransport.com",
    siteName: "Dawood Hajj and Umrah Transportation",
    images: [
      {
        url: "/banner.jpg",
        width: 1200,
        height: 630,
        alt: "Premium Hajj Taxi Service in Saudi Arabia",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dawood Hajj & Umrah Transport | Saudi Arabia",
    description: "Reliable Hajj/Umrah taxi services between Makkah, Madinah & Jeddah",
    site: "@dawoodtransport",
    creator: "@dawoodtransport",
    images: ["/banner.jpg"],
  },
};

function Page() {
  return (
    <>
      {/* Structured Data for Search Engines */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TaxiService",
            "name": "Dawood Hajj and Umrah Transportation",
            "description": "Government-approved transportation for Hajj and Umrah pilgrims",
            "serviceType": ["Hajj Transportation", "Umrah Taxi"],
            "provider": {
              "@type": "Organization",
              "priceRange": "$$",
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Hajj Packages 2024",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "name": "Makkah to Madinah Premium Van (6-7 passengers)",
                    "price": "650 SAR",
                    "priceCurrency": "SAR"
                  }
                ]
              }
            },
            "areaServed": {
              "@type": "AdministrativeArea",
              "name": ["Makkah", "Madinah", "Jeddah"],
              "addressCountry": "SA"
            },
            "availableLanguage": ["en", "ar"],
            "telephone": "+966500000000",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Makkah Road",
              "addressLocality": "Jeddah",
              "postalCode": "21577",
              "addressCountry": "SA"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "87",
              "bestRating": "5"
            },
            "sameAs": [
              "https://www.facebook.com/dawoodtransport",
              "https://www.instagram.com/dawoodtransport"
            ]
          })
        }}
      />

      {/* Page Content */}
      <Navbar />
      <main>
        <Home />
        <UmrahServies />
        <About />
        <Services />
        <TaxiRoutes />
        <Process />
        <TaxiOptions />
        <CarServices />
        <Testimonials />
      </main>
      <Footer />

      {/* WhatsApp Floating Button */}
      {/* <Link
        href="https://wa.me/923183806489"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 right-4 z-10 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-all"
        aria-label="Contact us on WhatsApp"
      >
        <Image
          src="/whatsapp.svg"
          alt="WhatsApp Dawood Transport"
          width={40}
          height={40}
          className="object-contain"
          priority
        />
      </Link> */}
    </>
  );
}

export default Page;