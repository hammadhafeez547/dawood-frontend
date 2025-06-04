import React from 'react';
import VehiclesDetails from './components/VehiclesDetails';

export const metadata = {
  title: "Hajj & Umrah Vehicles | Certified Fleet for Pilgrimage Transport",
  description: "Explore our government-approved vehicles: sedans, vans, and buses for Hajj/Umrah. Features AC, GPS tracking, and English-speaking drivers.",
  keywords: [
    "Hajj vehicles Saudi Arabia",
    "Umrah taxi fleet",
    "Makkah transport options",
    "Family size Hajj vehicles",
    "أسطول سيارات نقل العمرة"
  ],
  alternates: {
    canonical: 'https://dawoodhajjtransport.com/vehicles',
    languages: {
      'ar': 'https://dawoodhajjtransport.com/ar/vehicles',
    },
  },
  openGraph: {
    title: "Vehicle Fleet | Dawood Hajj & Umrah Transport",
    description: "Certified sedans, vans, and buses for safe pilgrimage transportation.",
    url: "https://dawoodhajjtransport.com/vehicles",
    images: [{
      url: "/vehicles-banner.jpg",
      width: 1200,
      height: 630,
      alt: "Dawood Transport Vehicle Fleet",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hajj & Umrah Vehicles | Dawood Transportation",
    description: "Government-approved sedans, vans, and buses for pilgrimage transport.",
    images: ["/vehicles-banner.jpg"],
  },
};

function Page() {
  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "item": {
                  "@type": "Car",
                  "name": "Standard Sedan",
                  "description": "1-3 passengers with AC and luggage space",
                  "vehicleEngine": { "@type": "EngineSpecification", "fuelType": "Gasoline" },
                  "brand": { "@type": "Brand", "name": "Toyota" },
                  "offers": {
                    "@type": "Offer",
                    "price": "450",
                    "priceCurrency": "SAR",
                    "priceValidUntil": "2025-12-31"
                  }
                }
              },
              {
                "@type": "ListItem",
                "position": 2,
                "item": {
                  "@type": "Car",
                  "name": "Premium Van",
                  "description": "4-7 passengers with extra legroom and free water",
                  "vehicleSeatingCapacity": "7",
                  "brand": { "@type": "Brand", "name": "Hyundai" },
                  "offers": {
                    "@type": "Offer",
                    "price": "650",
                    "priceCurrency": "SAR",
                    "priceValidUntil": "2025-12-31"
                  }
                }
              },
              {
                "@type": "ListItem",
                "position": 3,
                "item": {
                  "@type": "BusOrCoach",
                  "name": "Luxury Bus",
                  "description": "8-14 passengers with experienced Hajj driver",
                  "vehicleSeatingCapacity": "14",
                  "offers": {
                    "@type": "Offer",
                    "price": "1200",
                    "priceCurrency": "SAR",
                    "priceValidUntil": "2025-12-31"
                  }
                }
              }
            ]
          })
        }}
      />
<VehiclesDetails />
    </>
  );
}

export default Page;