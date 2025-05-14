// "use client"

// import { MapPin } from "lucide-react"

// function TaxiRoutes() {
//   const routes = [
//     { value: "jeddah-makkah", label: "Jeddah Airport → Makkah", popular: true },
//     { value: "makkah-jeddah", label: "Makkah → Jeddah Airport", popular: true },
//     { value: "makkah-madina", label: "Makkah → Madina", popular: true },
//     { value: "madina-makkah", label: "Madina → Makkah", popular: true },
//     { value: "jeddah-madina", label: "Jeddah Airport → Madina", popular: false },
//     { value: "madina-jeddah", label: "Madina → Jeddah Airport", popular: false },
//     { value: "hotel-makkah", label: "Hotel → Makkah Ziyarat", popular: false },
//     { value: "hotel-madina", label: "Hotel → Madina Ziyarat", popular: false },
//     { value: "hotel-madina", label: "Hotel → Madina Ziyarat", popular: false },


//   ]

//   return (
//     <section className="py-16 bg-gradient-to-b from-white to-gray-50">
//       <div className="container mx-auto px-4">
//         <div className="max-w-5xl mx-auto">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl md:text-4xl font-bold mb-3 text-gray-900">Our Private Taxi Routes</h2>
//             <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
//               Choose Your Route, Your Private Ride with Us!
//             </p>
//             <div className="w-20 h-1 bg-orange-500 mx-auto mt-6"></div>
//           </div>

//           <div className="flex flex-col items-center gap-8">
//             {/* First row - 4 items */}
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
//               {routes.slice(0, 4).map((route, index) => (
//                 <div
//                   key={index}
//                   className="flex items-center justify-center gap-2 bg-orange-500 text-white px-4 py-3 rounded-full shadow-md hover:bg-orange-600 transition-all duration-300 cursor-pointer group"
//                 >
//                   <MapPin className="w-5 h-5 flex-shrink-0 text-white group-hover:scale-110 transition-transform duration-300" />
//                   <span className="text-sm font-medium whitespace-nowrap overflow-hidden text-ellipsis">
//                     {route.label}
//                   </span>
//                 </div>
//               ))}
//             </div>

//             {/* Second row - 3 items */}
//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-[75%]">
//               {routes.slice(4, 7).map((route, index) => (
//                 <div
//                   key={index}
//                   className="flex items-center justify-center gap-2 bg-white hover:bg-gray-50 px-4 py-3 rounded-full shadow-md transition-all duration-300 cursor-pointer border border-gray-100 group"
//                 >
//                   <MapPin className="w-5 h-5 flex-shrink-0 text-orange-500 group-hover:scale-110 transition-transform duration-300" />
//                   <span className="text-sm font-medium text-gray-800 whitespace-nowrap overflow-hidden text-ellipsis">
//                     {route.label}
//                   </span>
//                 </div>
//               ))}
//             </div>

//             {/* Third row - 1 item (last one) */}
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-[50%] max-w-lg mx-auto">
//               {routes.slice(7).map((route, index) => (
//                 <div
//                   key={index}
//                   className="flex items-center justify-center gap-2 bg-white hover:bg-gray-50 px-4 py-3 rounded-full shadow-md transition-all duration-300 cursor-pointer border border-gray-100 group"
//                 >
//                   <MapPin className="w-5 h-5 flex-shrink-0 text-orange-500 group-hover:scale-110 transition-transform duration-300" />
//                   <span className="text-sm font-medium text-gray-800 whitespace-nowrap overflow-hidden text-ellipsis">
//                     {route.label}
//                   </span>
//                 </div>
//               ))}
//             </div>
//           </div>

//           <div className="mt-12 text-center">
//             <button className="bg-gray-900 hover:bg-gray-800 text-white font-medium px-8 py-3 rounded-full shadow-md transition-all duration-300 flex items-center gap-2 mx-auto">
//               <span>View All Routes</span>
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="16"
//                 height="16"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="2"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//               >
//                 <path d="M5 12h14"></path>
//                 <path d="m12 5 7 7-7 7"></path>
//               </svg>
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

// export default TaxiRoutes
"use client"

import { useState } from "react"
import { MapPin, Clock, ArrowRight, Star, TrendingUp, Car, DollarSign, Plane, Landmark } from 'lucide-react'
import { motion } from "framer-motion"

function TaxiRoutes() {
  const [activeTab, setActiveTab] = useState("popular")

  const routes = [
    { 
      value: "jeddah-makkah", 
      label: "Jeddah Airport → Makkah", 
      popular: true,
      category: "airport",
      distance: "80 km",
      time: "1h 15m",
      price: "SAR 150",
      vehicle: "Sedan"
    },
    { 
      value: "makkah-jeddah", 
      label: "Makkah → Jeddah Airport", 
      popular: true,
      category: "airport",
      distance: "80 km",
      time: "1h 15m",
      price: "SAR 150",
      vehicle: "Sedan"
    },
    { 
      value: "makkah-madina", 
      label: "Makkah → Madina", 
      popular: true,
      category: "intercity",
      distance: "450 km",
      time: "4h 30m",
      price: "SAR 600",
      vehicle: "SUV"
    },
    { 
      value: "madina-makkah", 
      label: "Madina → Makkah", 
      popular: true,
      category: "intercity",
      distance: "450 km",
      time: "4h 30m",
      price: "SAR 600",
      vehicle: "SUV"
    },
    { 
      value: "jeddah-madina", 
      label: "Jeddah Airport → Madina", 
      popular: false,
      category: "airport",
      distance: "420 km",
      time: "4h",
      price: "SAR 550",
      vehicle: "SUV"
    },
    { 
      value: "madina-jeddah", 
      label: "Madina → Jeddah Airport", 
      popular: false,
      category: "airport",
      distance: "420 km",
      time: "4h",
      price: "SAR 550",
      vehicle: "SUV"
    },
    { 
      value: "hotel-makkah", 
      label: "Hotel → Makkah Ziyarat", 
      popular: false,
      category: "ziyarat",
      distance: "Varies",
      time: "3-5h",
      price: "SAR 300",
      vehicle: "Van"
    },
    { 
      value: "hotel-madina", 
      label: "Hotel → Madina Ziyarat", 
      popular: false,
      category: "ziyarat",
      distance: "Varies",
      time: "3-5h",
      price: "SAR 300",
      vehicle: "Van"
    },
  ]

  const filteredRoutes = routes.filter(route => {
    if (activeTab === "popular") return route.popular;
    return route.category === activeTab;
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/placeholder.svg?height=800&width=800')] bg-no-repeat bg-cover"></div>
      </div>
      
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-orange-100 rounded-full opacity-30"></div>
      <div className="absolute -bottom-32 -left-20 w-80 h-80 bg-orange-100 rounded-full opacity-30"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-1 bg-orange-100 text-orange-600 rounded-full text-sm font-medium mb-4">
              Transportation Services
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-3 text-gray-900">Our Private Taxi Routes</h2>
            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
              Choose Your Route, Your Private Ride with Us!
            </p>
            <div className="w-20 h-1 bg-orange-500 mx-auto mt-6"></div>
          </motion.div>

          {/* Tabs */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-2 mb-10"
          >
            <button 
              onClick={() => setActiveTab("popular")}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                activeTab === "popular" 
                  ? "bg-orange-500 text-white shadow-md" 
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              <Star className="w-4 h-4 inline-block mr-1" />
              Popular Routes
            </button>
            <button 
              onClick={() => setActiveTab("airport")}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                activeTab === "airport" 
                  ? "bg-orange-500 text-white shadow-md" 
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              <Plane className="w-4 h-4 inline-block mr-1" />
              Airport Transfers
            </button>
            <button 
              onClick={() => setActiveTab("intercity")}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                activeTab === "intercity" 
                  ? "bg-orange-500 text-white shadow-md" 
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              <MapPin className="w-4 h-4 inline-block mr-1" />
              Intercity
            </button>
            <button 
              onClick={() => setActiveTab("ziyarat")}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                activeTab === "ziyarat" 
                  ? "bg-orange-500 text-white shadow-md" 
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              <Landmark className="w-4 h-4 inline-block mr-1" />
              Ziyarat Tours
            </button>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredRoutes.map((route, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                {route.popular && (
                  <div className="absolute top-0 right-0">
                    <div className="bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg shadow-sm flex items-center gap-1">
                      <TrendingUp className="w-3 h-3" />
                      Popular
                    </div>
                  </div>
                )}
                
                <div className="p-5">
                  <div className="flex items-start gap-3 mb-4">
                    <div className="bg-orange-100 p-2 rounded-lg">
                      <MapPin className="w-5 h-5 text-orange-500" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1 group-hover:text-orange-500 transition-colors">
                        {route.label}
                      </h3>
                      <div className="flex items-center gap-3 text-sm text-gray-500">
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" /> {route.time}
                        </span>
                        <span className="flex items-center gap-1">
                          <ArrowRight className="w-3 h-3" /> {route.distance}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                    <div className="flex items-center gap-2">
                      <Car className="w-4 h-4 text-gray-500" />
                      <span className="text-sm text-gray-600">{route.vehicle}</span>
                    </div>
                    <div className="flex items-center gap-1 font-medium text-gray-900">
                      <DollarSign className="w-4 h-4 text-orange-500" />
                      <span>{route.price}</span>
                    </div>
                  </div>
                </div>
                
                <div className="absolute inset-x-0 bottom-0 h-1 bg-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
                
                <div className="absolute inset-0 bg-gradient-to-t from-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 text-center"
          >
            <button className="bg-gray-900 hover:bg-gray-800 text-white font-medium px-8 py-3 rounded-full shadow-md transition-all duration-300 flex items-center gap-2 mx-auto hover:translate-y-[-2px]">
              <span>View All Routes</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <p className="text-gray-500 text-sm mt-4">
              Custom routes and special arrangements available upon request
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default TaxiRoutes

