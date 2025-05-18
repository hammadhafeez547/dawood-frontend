import React from 'react'
import ServicesPage from './components/ServiceDetails';
export const metadata = {
  title: "Hajj & Umrah Transportation Services | Makkah-Madinah-Jeddah 2024",
  description: "✅ Certified Hajj & Umrah taxi services in Saudi Arabia. Premium vehicles, English-speaking drivers, fixed prices for Makkah, Madinah & Jeddah routes.",
  keywords: [
    "Hajj transportation services",
    "Umrah taxi packages",
    "Makkah to Madinah price 2024",
    "Jeddah airport to Haram transfer",
    "Hajj group transportation",
    "شركة نقل حجاج مكة", // Arabic keywords
    "أسعار سيارات العمرة" // Arabic keywords
  ],
  alternates: {
    canonical: 'https://dawoodhajjtransport.com/services',
    languages: {
      'ar': 'https://dawoodhajjtransport.com/ar/services',
    },
  },
  openGraph: {
    title: "Dawood Hajj Transport Services | Saudi Arabia 2024",
    description: "Government-approved transportation solutions for Hajj & Umrah pilgrims",
    images: [
      {
        url: "/services-banner.jpg",
        width: 1200,
        height: 630,
        alt: "Our Hajj Transportation Fleet in Makkah",
      },
    ],
  },
};

function page() {
 

  return (
    <div><ServicesPage /></div>
  )
}

export default page











 