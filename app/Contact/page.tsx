

import React from "react";

import Image from "next/image";
import ComponentDetails from "./components/ComponentDetails";

export const metadata = {
  title: "About Us | Dawood Hajj & Umrah Taxi Service",
  description:
    "Learn about Dawood Hajj & Umrah Transportation – trusted, government-certified taxi service for pilgrims traveling between Jeddah, Makkah, and Madinah.",
  keywords: [
    "About Dawood Transport",
    "Hajj Umrah taxi company Saudi Arabia",
    "Best Makkah Madinah taxi",
    "Jeddah to Haram transport",
    "Saudi religious travel service",
  ],
  alternates: {
    canonical: "https://dawoodhajjtransport.com/about",
    languages: {
      ar: "https://dawoodhajjtransport.com/ar/about",
    },
  },
  openGraph: {
    title: "About Dawood Hajj & Umrah Transport | Certified Service",
    description:
      "Meet our team and learn how Dawood Hajj Transport helps pilgrims travel comfortably across Saudi Arabia.",
    url: "https://dawoodhajjtransport.com/about",
    siteName: "Dawood Hajj and Umrah Transportation",
    images: [
      {
        url: "/about-banner.jpg",
        width: 1200,
        height: 630,
        alt: "About Dawood Transport",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Dawood Hajj Transport | Saudi Arabia",
    description:
      "Get to know the mission, vision, and team behind Dawood Hajj & Umrah Transport.",
    site: "@dawoodtransport",
    creator: "@dawoodtransport",
    images: ["/about-banner.jpg"],
  },
};

function page() {
  return (
    <>
      {/* Structured Data for Organization */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Dawood Hajj and Umrah Transportation",
            url: "https://dawoodhajjtransport.com",
            logo: "/logo.png",
            sameAs: [
              "https://www.facebook.com/dawoodtransport",
              "https://www.instagram.com/dawoodtransport",
            ],
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+966500000000",
              contactType: "Customer Service",
              availableLanguage: ["en", "ar"],
            },
            description:
              "We provide government-approved Hajj and Umrah taxi transportation between Jeddah, Makkah, and Madinah.",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Makkah Road",
              addressLocality: "Jeddah",
              postalCode: "21577",
              addressCountry: "SA",
            },
          }),
        }}
      />

  <ComponentDetails />
    </>
  );
}

export default page;
