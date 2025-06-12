import type { Metadata } from "next";
import { GeistSans, GeistMono } from "geist/font";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Dawood Umrah and Hajj Transportation",
    template: "%s | Dawood Transport"
  },
  description: "Premium Hajj and Umrah transportation services across Makkah, Madinah & Jeddah. Book your comfortable journey today.",
keywords: [
  // Core Services
  "Hajj transport Saudi Arabia",
  "Umrah taxi service",
  "Makkah to Madinah transport",
  "Jeddah airport Hajj transfer",
  "Dawood Transport official",
  
  // Vehicle Types
  "Hajj buses for families",
  "Luxury Umrah vehicles",
  "AC taxis for pilgrims",
  "24/7 Hajj transport",
  "Wheelchair accessible Umrah cars",
  
  // Pricing & Deals
  "Affordable Hajj transport",
  "Umrah taxi rates 2024",
  "Hajj group transport discounts",
  "Cheap Makkah to Madinah taxi",
  "Dawood Transport prices",
  
  // Key Routes
  "Jeddah to Makkah taxi",
  "Madinah airport transfers",
  "Haram to hotel transport",
  "Intercity Hajj travel",
  "Aziziyah to Mina transport",
  
  // Special Services
  "Women-only Umrah taxis",
  "English speaking Hajj drivers",
  "Elderly pilgrim transport",
  "Quran equipped vehicles",
  "Hajj luggage transport",
  
  // Booking Related
  "Book Hajj transport online",
  "Urgent Umrah taxi",
  "Last minute Hajj vehicles",
  "Dawood Transport booking",
  "Hajj transport packages",
  
  // Reputation
  "Best Hajj transport company",
  "Reliable Umrah taxi Makkah",
  "Top rated pilgrim transport",
  "Certified Hajj vehicles",
  "Safe Umrah transport",
  
  // Seasonal
  "Ramadan Umrah taxis",
  "Hajj 2024 transportation",
  "Peak season transport",
  "Zil-Hajj taxi services",
  "Year-round Umrah transport",
  
  // Amenities
  "WiFi Hajj buses",
  "Chilled water in Umrah cars",
  "Family privacy vehicles",
  "GPS tracked transport",
  "Multi-language drivers",
  
  // Branded
  "Dawood Hajj services",
  "Dawood Umrah packages",
  "Dawood Transport reviews",
  "Dawood official vehicles",
  "Contact Dawood Transport"
] , metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://www.dawoodhajjandumrahtransportation.com.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Dawood Umrah and Hajj Transportation",
    description: "Reliable pilgrim transportation services in Saudi Arabia",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Dawood Transport Vehicles",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html 
      lang="en" 
      className={`${GeistSans.variable} ${GeistMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <meta name="theme-color" content="#0d9488" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className="font-sans antialiased bg-gray-50 text-gray-900 min-h-screen">
        {children}
      </body>
    </html>
  );
}