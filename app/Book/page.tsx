import React from 'react';
import BookingDetails from './components/BookingDetails';

// ✅ Move metadata export OUTSIDE the component
export const metadata = {
  title: "Book Hajj & Umrah Transport | Dawood Certified Taxi Service",
  description: "Secure online booking for Hajj/Umrah transportation between Makkah, Madinah & Jeddah. Instant confirmation, English/Arabic support, government-approved vehicles.",
  keywords: [
    "Hajj taxi booking online",
    "Umrah transport reservation",
    "Makkah to Madinah taxi booking",
    "Jeddah airport pickup service",
    "حجز تكسي الحجاج"
  ],
  alternates: {
    canonical: 'https://dawoodhajjtransport.com/booking',
    languages: {
      'ar': 'https://dawoodhajjtransport.com/ar/booking',
    },
  },
  openGraph: {
    title: "Online Booking | Dawood Hajj & Umrah Transportation",
    description: "Book certified pilgrimage transport with fixed prices. Available 24/7 for Makkah-Madinah transfers, airport pickups, and ziyarat tours.",
    url: "https://dawoodhajjtransport.com/booking",
    images: [{
      url: "/booking-banner.jpg",
      width: 1200,
      height: 630,
      alt: "Dawood Transport Online Booking",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Book Hajj/Umrah Transport Online | Dawood Transportation",
    description: "Instant confirmation for Makkah-Madinah taxis and airport transfers.",
    images: ["/booking-banner.jpg"],
  },
};

function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ReservationService",
            "name": "Dawood Hajj & Umrah Transportation Booking",
            "description": "Online reservation system for pilgrimage transport services",
            "serviceType": "TaxiReservation",
            "provider": {
              "@type": "TaxiService",
              "name": "Dawood Hajj and Umrah Transportation",
              "telephone": "+966501234567",
              "areaServed": ["Makkah", "Madinah", "Jeddah"]
            },
            "availableChannel": {
              "@type": "ServiceChannel",
              "serviceUrl": "https://dawoodhajjtransport.com/booking",
              "servicePhone": "+966501234567",
              "availableLanguage": ["en", "ar"]
            },
            "potentialAction": {
              "@type": "ReserveAction",
              "target": {
                "@type": "EntryPoint",
                "urlTemplate": "https://dawoodhajjtransport.com/booking",
                "actionPlatform": [
                  "http://schema.org/DesktopWebPlatform",
                  "http://schema.org/MobileWebPlatform"
                ]
              }
            }
          })
        }}
      />
      <BookingDetails />
    </>
  );
}

export default Page;