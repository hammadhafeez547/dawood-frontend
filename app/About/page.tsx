


import React from 'react'
import AboutPage from './components/AboutPage';
 export const metadata = {
  title: "About | Dawood Hajj Transport | Certified Saudi Arabia Taxi Service",
  description: "Discover our 15+ years of trusted Hajj & Umrah transportation services in Makkah, Madinah & Jeddah. Meet our certified drivers and premium fleet.",
  keywords: [
    "Hajj transport company",
    "Umrah taxi service about us",
    "Dawood Transport history",
    "Certified Makkah taxi service",
    "Saudi Arabia pilgrimage transport",
    "شركة نقل حجاج مكة", // Arabic keywords
    "سائقين معتمدين للعمرة" // Arabic keywords
  ],
  alternates: {
    canonical: 'https://dawoodhajjtransport.com/about',
    languages: {
      'ar': 'https://dawoodhajjtransport.com/ar/about',
    },
  },
  openGraph: {
    title: "About Our Hajj/Umrah Transport Service | Since 2009",
    description: "Government-approved transportation service with 50+ vehicles serving pilgrims across Saudi Arabia",
    images: [
      {
        url: "/about-banner.jpg",
        width: 1200,
        height: 630,
        alt: "Dawood Transport Team with Hajj Vehicles",
      },
    ],
  },
};


function page() {
 
  return (
    <div><AboutPage /></div>
  )
}

export default page



