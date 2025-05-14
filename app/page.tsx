import React from "react";
import SeoHead from "./components/SeoHead"; // make sure path is correct
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
import Image from "next/image"


export const metadata = {
  title: "Home | Dawood Hajj and Umrah Transportation",
  description:
    "Reliable, affordable, and professional taxi and transport services for Hajj and Umrah pilgrims in Saudi Arabia.",
  keywords: [
    "Hajj taxi service",
    "Umrah transport",
    "Saudi Arabia taxi",
    "Makkah airport transfer",
    "Medina luxury taxi",
    "Jeddah to Makkah taxi",
    "Hajj Umrah car rental",
    "Dawood Hajj and Umrah Transportation"
  ],
  openGraph: {
    title: "Dawood Hajj and Umrah Transportation",
    description:
      "Trusted Hajj and Umrah taxi service across Saudi Arabia. Airport transfers, hotel pickups, and more.",
    url: "https://www.dawoodhajjtransport.com",
    siteName: "Dawood Hajj and Umrah Transportation",
    images: [
      {
        url: "/banner.jpg", // ✅ یہاں banner image لگائیں (ideal size: 1200x630)
        width: 1200,
        height: 630,
        alt: "Hajj Umrah Taxi Service",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dawood Hajj and Umrah Transportation",
    description:
      "Fast, affordable, and reliable taxi service for Hajj and Umrah pilgrims across Saudi Arabia.",
    site: "@dawoodtransport",
    images: ["/banner.jpg"],
  },
};


function page() {
 
  return (
    <>
    <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: "Dawood Hajj and Umrah Transportation",
      url: "https://www.dawoodhajjtransport.com",
      image: "https://www.dawoodhajjtransport.com/logo.png", // ✅ Logo image URL
      telephone: "+966500000000",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Makkah Road",
        addressLocality: "Jeddah",
        postalCode: "21577",
        addressCountry: "SA",
      },
      sameAs: [
        "https://www.facebook.com/dawoodtransport",
        "https://www.instagram.com/dawoodtransport"
      ],
    }),
  }}
/>
    
      <Navbar />
      <Home />
      <UmrahServies />
      <About />
      <Services />
      <TaxiRoutes />
      <Process />
      <TaxiOptions />
      <CarServices />
      <Testimonials />
      <Footer />
      <Link
        href="https://wa.me/923183806489"
        target="_blank"
        className="fixed bottom-4 right-4 z-1 text-white p-4 rounded-full shadow-lg flex items-center justify-center"
      >
          <Image
                          src="/whatsapp.svg"
                          alt="orange Audi Car"
                          width={40}
                          height={40}
                          className="object-contain"
                        />
      </Link>
    </>
  );
}

export default page;
