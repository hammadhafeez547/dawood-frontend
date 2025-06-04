"use client";
import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { format } from "date-fns";
import {
  CalendarIcon,
  ChevronRight,
  ChevronLeft,
  Users,
  Check,
  AlertCircle,
  Info,
  MapPin,
  Clock,
  Plane,
  Hotel,
  Car,
  Coffee,
  Shield,
  User,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";

type TravelPackage = {
  id: string;
  name: string;
  duration: string;
  accommodation: string;
  transportation: string;
  meals: string;
  price: number;
  image: string;
  description: string;
};

export default function BookNowPage() {
  const [step, setStep] = useState(1);
  const [bookingType, setBookingType] = useState<string>("");
  const [selectedPackage, setSelectedPackage] = useState<any>(null);
  const [date, setDate] = useState<Date>();
  const [returnDate, setReturnDate] = useState<Date>();
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    country: "",
    passportNumber: "",
    passportExpiry: "",
    specialRequirements: "",
  });
  const [additionalServices, setAdditionalServices] = useState<string[]>([]);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isBooked, setIsBooked] = useState(false);
  const [bookingReference, setBookingReference] = useState("");
  interface BasePackage {
  id: string;
  name: string;
  duration: string;
  price: number;
  image: string;
  description: string;
}

// Hajj and Umrah packages have extra fields
interface HajjUmrahPackage extends BasePackage {
  accommodation: string;
  transportation: string;
  meals: string;
}

// Transportation packages have different fields
interface TransportationPackage extends BasePackage {
  vehicle: string;
  capacity: string;
}

// Ziyarat packages have a guide field
interface ZiyaratPackage extends BasePackage {
  transportation: string;
  guide: string;
}

// Full packages type
interface Packages {
  hajj: HajjUmrahPackage[];
  umrah: HajjUmrahPackage[];
  transportation: TransportationPackage[];
  ziyarat: ZiyaratPackage[];
}


  // Sample packages data
 const packages: Packages = {
  hajj: [
    {
      id: "hajj-standard",
      name: "Standard Hajj Package",
      duration: "14 days",
      accommodation: "3-star hotels",
      transportation: "Shared bus transportation",
      meals: "Breakfast included",
      price: 3500,
      image: "/placeholder.svg?height=300&width=500",
      description:
        "Our Standard Hajj Package provides all the essentials for a fulfilling pilgrimage experience with comfortable accommodations and reliable transportation.",
    },
    {
      id: "hajj-premium",
      name: "Premium Hajj Package",
      duration: "16 days",
      accommodation: "4-star hotels",
      transportation: "Premium bus transportation",
      meals: "Full board (3 meals daily)",
      price: 5000,
      image: "/placeholder.svg?height=300&width=500",
      description:
        "The Premium Hajj Package offers an enhanced pilgrimage experience with superior accommodations, full-board meals, and premium transportation services.",
    },
    {
      id: "hajj-luxury",
      name: "Luxury Hajj Package",
      duration: "18 days",
      accommodation: "5-star hotels near Haram",
      transportation: "VIP transportation",
      meals: "Full board with premium dining options",
      price: 7500,
      image: "/placeholder.svg?height=300&width=500",
      description:
        "Experience the ultimate in comfort and convenience with our Luxury Hajj Package, featuring 5-star accommodations near the holy sites and personalized service throughout your journey.",
    },
  ],
  umrah: [
    {
      id: "umrah-basic",
      name: "Basic Umrah Package",
      duration: "7 days",
      accommodation: "3-star hotels",
      transportation: "Shared transportation",
      meals: "Breakfast only",
      price: 1200,
      image: "/placeholder.svg?height=300&width=500",
      description:
        "Our Basic Umrah Package provides all the essentials for a meaningful Umrah experience at an affordable price.",
    },
    {
      id: "umrah-standard",
      name: "Standard Umrah Package",
      duration: "10 days",
      accommodation: "4-star hotels",
      transportation: "Private transportation",
      meals: "Half board (breakfast and dinner)",
      price: 1800,
      image: "/placeholder.svg?height=300&width=500",
      description:
        "The Standard Umrah Package offers a comfortable pilgrimage experience with quality accommodations and convenient transportation options.",
    },
    {
      id: "umrah-premium",
      name: "Premium Umrah Package",
      duration: "14 days",
      accommodation: "5-star hotels near Haram",
      transportation: "VIP transportation",
      meals: "Full board (3 meals daily)",
      price: 2500,
      image: "/placeholder.svg?height=300&width=500",
      description:
        "Our Premium Umrah Package provides a luxurious pilgrimage experience with premium accommodations, dining, and transportation services.",
    },
    {
      id: "umrah-ramadan",
      name: "Ramadan Umrah Special",
      duration: "10 days",
      accommodation: "4-star hotels near Haram",
      transportation: "Private transportation",
      meals: "Suhoor and Iftar included",
      price: 2200,
      image: "/placeholder.svg?height=300&width=500",
      description:
        "Experience the spiritual atmosphere of Ramadan in the holy cities with our special Ramadan Umrah Package, featuring accommodations near the holy sites and special Ramadan meals.",
    },
  ],
  transportation: [
    {
      id: "transport-airport",
      name: "Airport Transfer Service",
      duration: "One-way or round trip",
      vehicle: "Sedan or SUV",
      capacity: "Up to 4 passengers",
      price: 50,
      image: "/placeholder.svg?height=300&width=500",
      description:
        "Convenient airport transfer service between Jeddah Airport and your hotel in Makkah or Madinah.",
    },
    {
      id: "transport-makkah-madinah",
      name: "Makkah to Madinah Transfer",
      duration: "One-way or round trip",
      vehicle: "Luxury van",
      capacity: "Up to 7 passengers",
      price: 120,
      image: "/placeholder.svg?height=300&width=500",
      description:
        "Comfortable transportation service between Makkah and Madinah with experienced drivers familiar with the route.",
    },
    {
      id: "transport-city-tour",
      name: "City Tour Service",
      duration: "Full day or half day",
      vehicle: "Luxury van or bus",
      capacity: "Various options available",
      price: 200,
      image: "/placeholder.svg?height=300&width=500",
      description:
        "Explore the historical and cultural sites of Makkah and Madinah with our guided city tour service.",
    },
  ],
  ziyarat: [
    {
      id: "ziyarat-makkah",
      name: "Makkah Ziyarat Tour",
      duration: "Half day",
      transportation: "Air-conditioned bus",
      guide: "English-speaking religious guide",
      price: 75,
      image: "/placeholder.svg?height=300&width=500",
      description:
        "Visit the historical and religious sites of Makkah with our guided Ziyarat tour, including Jabal al-Noor, Jabal Thawr, and other significant locations.",
    },
    {
      id: "ziyarat-madinah",
      name: "Madinah Ziyarat Tour",
      duration: "Full day",
      transportation: "Air-conditioned bus",
      guide: "English-speaking religious guide",
      price: 90,
      image: "/placeholder.svg?height=300&width=500",
      description:
        "Explore the historical sites of Madinah with our comprehensive Ziyarat tour, including Masjid Quba, Masjid Qiblatain, and Mount Uhud.",
    },
    {
      id: "ziyarat-comprehensive",
      name: "Comprehensive Ziyarat Package",
      duration: "2 days",
      transportation: "Luxury van",
      guide: "Knowledgeable religious scholar",
      price: 150,
      image: "/placeholder.svg?height=300&width=500",
      description:
        "Our most comprehensive Ziyarat package covering all major historical and religious sites in both Makkah and Madinah with in-depth explanations.",
    },
  ],
};
  // Additional services
  const additionalServiceOptions = [
    {
      id: "visa-processing",
      label: "Visa Processing Assistance",
      description: "We'll handle all your visa paperwork and processing",
      price: 150,
    },
    {
      id: "airport-transfer",
      label: "Airport Transfers",
      description:
        "Comfortable transportation between the airport and your hotel",
      price: 50,
    },
    {
      id: "guided-tours",
      label: "Guided Religious Tours",
      description: "Knowledgeable guides to enhance your spiritual experience",
      price: 100,
    },
    {
      id: "special-meals",
      label: "Special Dietary Meals",
      description: "Customized meal options for specific dietary requirements",
      price: 120,
    },
    {
      id: "wheelchair",
      label: "Wheelchair Assistance",
      description:
        "Wheelchair service for elderly or those with mobility issues",
      price: 80,
    },
    {
      id: "sim-card",
      label: "Local SIM Card",
      description: "Saudi Arabia SIM card with data and local calling minutes",
      price: 30,
    },
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    // Clear error when user types
    if (errors[field]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[field];
        return newErrors;
      });
    }
  };

  const handleAdditionalServiceToggle = (serviceId: string) => {
    setAdditionalServices((prev) =>
      prev.includes(serviceId)
        ? prev.filter((id) => id !== serviceId)
        : [...prev, serviceId]
    );
  };

  const validateStep = (currentStep: number) => {
    const newErrors: Record<string, string> = {};

    if (currentStep === 1) {
      if (!bookingType) newErrors.bookingType = "Please select a booking type";
    } else if (currentStep === 2) {
      if (!selectedPackage) newErrors.package = "Please select a package";
    } else if (currentStep === 3) {
      if (!date) newErrors.date = "Please select a departure date";
      if (bookingType !== "transportation" && !returnDate)
        newErrors.returnDate = "Please select a return date";
    } else if (currentStep === 4) {
      if (!formData.firstName.trim())
        newErrors.firstName = "First name is required";
      if (!formData.lastName.trim())
        newErrors.lastName = "Last name is required";
      if (!formData.email.trim()) {
        newErrors.email = "Email is required";
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        newErrors.email = "Email is invalid";
      }
      if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
      if (!formData.passportNumber.trim())
        newErrors.passportNumber = "Passport number is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => {
    if (validateStep(step)) {
      setStep(step + 1);
      window.scrollTo(0, 0);
    }
  };

  const prevStep = () => {
    setStep(step - 1);
    window.scrollTo(0, 0);
  };

  const handleSubmit = () => {
    if (validateStep(step)) {
      setIsSubmitting(true);

      // Simulate API call
      setTimeout(() => {
        setIsSubmitting(false);
        setIsBooked(true);
        setBookingReference(`BK${Math.floor(100000 + Math.random() * 900000)}`);
      }, 2000);
    }
  };

  const calculateTotal = () => {
    if (!selectedPackage) return 0;

    let total =
      selectedPackage.price * adults + selectedPackage.price * 0.7 * children;

    // Add additional services
    additionalServices.forEach((serviceId) => {
      const service = additionalServiceOptions.find((s) => s.id === serviceId);
      if (service) {
        total += service.price * (adults + children);
      }
    });

    return total;
  };

  const renderStepIndicator = () => {
    return (
      <div className="flex items-center justify-center mb-8">
        <div className="flex items-center w-full max-w-3xl">
          {[1, 2, 3, 4, 5].map((stepNumber) => (
            <div key={stepNumber} className="flex-1 relative">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  stepNumber === step
                    ? "bg-orange-600 text-white"
                    : stepNumber < step
                    ? "bg-green-500 text-white"
                    : "bg-gray-200 text-gray-500"
                } mx-auto`}
              >
                {stepNumber < step ? <Check className="h-5 w-5" /> : stepNumber}
              </div>
              <div className="text-xs text-center mt-2 font-medium">
                {stepNumber === 1
                  ? "Type"
                  : stepNumber === 2
                  ? "Package"
                  : stepNumber === 3
                  ? "Dates"
                  : stepNumber === 4
                  ? "Details"
                  : "Confirm"}
              </div>
              {stepNumber < 5 && (
                <div
                  className={`absolute top-4 left-1/2 w-full h-0.5 ${
                    stepNumber < step ? "bg-green-500" : "bg-gray-200"
                  }`}
                ></div>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  };

  const renderBookingTypeStep = () => {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto"
      >
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Select Booking Type
        </h2>
        <p className="text-gray-600 mb-8">
          Choose the type of service you'd like to book. We offer comprehensive
          packages for Hajj and Umrah, as well as transportation and Ziyarat
          tour services.
        </p>

        {errors.bookingType && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-md flex items-center gap-2 text-red-600">
            <AlertCircle className="h-5 w-5" />
            <p>{errors.bookingType}</p>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              id: "hajj",
              title: "Hajj Packages",
              description:
                "Complete Hajj packages with accommodation, transportation, and guidance",
              icon: <MapPin className="h-10 w-10 text-orange-500" />,
            },
            {
              id: "umrah",
              title: "Umrah Packages",
              description:
                "Comprehensive Umrah packages for a fulfilling pilgrimage experience",
              icon: <Plane className="h-10 w-10 text-orange-500" />,
            },
            {
              id: "transportation",
              title: "Transportation Services",
              description:
                "Reliable transportation between airports, hotels, and holy sites",
              icon: <Car className="h-10 w-10 text-orange-500" />,
            },
            {
              id: "ziyarat",
              title: "Ziyarat Tours",
              description:
                "Guided tours to historical and religious sites in Makkah and Madinah",
              icon: <MapPin className="h-10 w-10 text-orange-500" />,
            },
          ].map((type) => (
            <div
              key={type.id}
              className={`border rounded-lg p-6 cursor-pointer transition-all hover:shadow-md ${
                bookingType === type.id
                  ? "border-orange-500 bg-orange-50 shadow-md"
                  : "border-gray-200 hover:border-orange-300"
              }`}
              onClick={() => setBookingType(type.id)}
            >
              <div className="flex flex-col items-center text-center">
                <div className="p-3 bg-orange-100 rounded-full mb-4">
                  {type.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {type.title}
                </h3>
                <p className="text-gray-600 text-sm">{type.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 flex justify-end">
          <Button
            className="bg-orange-600 hover:bg-orange-700"
            onClick={nextStep}
          >
            Continue <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </motion.div>
    );
  };

 type BookingType = keyof Packages;

type AnyPackage =
  | HajjUmrahPackage
  | TransportationPackage
  | ZiyaratPackage;

const renderPackageSelectionStep = () => {
  const availablePackages =
    packages[bookingType as BookingType] as AnyPackage[];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto"
    >
      <h2 className="text-2xl font-bold text-gray-800 mb-2">Select a Package</h2>
      <p className="text-gray-600 mb-8">
        Choose from our carefully designed packages that cater to different preferences and budgets.
      </p>

      {errors.package && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-md flex items-center gap-2 text-red-600">
          <AlertCircle className="h-5 w-5" />
          <p>{errors.package}</p>
        </div>
      )}

      <div className="space-y-6">
        {availablePackages.map((pkg) => (
          <div
            key={pkg.id}
            className={`border rounded-lg overflow-hidden transition-all hover:shadow-md ${
              selectedPackage?.id === pkg.id
                ? "border-orange-500 bg-orange-50 shadow-md"
                : "border-gray-200 hover:border-orange-300"
            }`}
            onClick={() => setSelectedPackage(pkg)}
          >
            <div className="grid grid-cols-1 md:grid-cols-3">
              <div className="relative h-48 md:h-auto">
                <Image
                  src={pkg.image || "/placeholder.svg"}
                  alt={pkg.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 md:col-span-2">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-gray-800">{pkg.name}</h3>
                  <div className="text-2xl font-bold text-orange-600">
                    ${pkg.price}
                    <span className="text-sm font-normal text-gray-500">/person</span>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">{pkg.description}</p>

                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-orange-500" />
                    <span className="text-sm text-gray-600">Duration: {pkg.duration}</span>
                  </div>

                  {"accommodation" in pkg && (
                    <div className="flex items-center gap-2">
                      <Hotel className="h-4 w-4 text-orange-500" />
                      <span className="text-sm text-gray-600">
                        Accommodation: {pkg.accommodation}
                      </span>
                    </div>
                  )}
                  {"transportation" in pkg && (
                    <div className="flex items-center gap-2">
                      <Car className="h-4 w-4 text-orange-500" />
                      <span className="text-sm text-gray-600">
                        Transportation: {pkg.transportation}
                      </span>
                    </div>
                  )}
                  {"meals" in pkg && (
                    <div className="flex items-center gap-2">
                      <Coffee className="h-4 w-4 text-orange-500" />
                      <span className="text-sm text-gray-600">Meals: {pkg.meals}</span>
                    </div>
                  )}
                  {"vehicle" in pkg && (
                    <div className="flex items-center gap-2">
                      <Car className="h-4 w-4 text-orange-500" />
                      <span className="text-sm text-gray-600">Vehicle: {pkg.vehicle}</span>
                    </div>
                  )}
                  {"guide" in pkg && (
                    <div className="flex items-center gap-2">
                      <User className="h-4 w-4 text-orange-500" />
                      <span className="text-sm text-gray-600">Guide: {pkg.guide}</span>
                    </div>
                  )}
                </div>

                <Button
                  variant={
                    selectedPackage?.id === pkg.id ? "default" : "outline"
                  }
                  className={
                    selectedPackage?.id === pkg.id
                      ? "bg-orange-600 hover:bg-orange-700"
                      : "text-orange-600 border-orange-200 hover:bg-orange-50"
                  }
                  onClick={() => setSelectedPackage(pkg)}
                >
                  {selectedPackage?.id === pkg.id ? "Selected" : "Select Package"}
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 flex justify-between">
        <Button variant="outline" onClick={prevStep}>
          <ChevronLeft className="mr-2 h-4 w-4" /> Back
        </Button>
        <Button
          className="bg-orange-600 hover:bg-orange-700"
          onClick={nextStep}
        >
          Continue <ChevronRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </motion.div>
  );
};

  const renderDateSelectionStep = () => {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto"
      >
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Select Dates</h2>
        <p className="text-gray-600 mb-8">
          Choose your preferred dates for your{" "}
          {bookingType === "hajj"
            ? "Hajj"
            : bookingType === "umrah"
            ? "Umrah"
            : ""}{" "}
          journey.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div>
              <Label htmlFor="departure-date">Departure Date</Label>
              <div className="mt-1">
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={`w-full justify-start text-left font-normal ${
                        errors.date ? "border-red-500" : "border-input"
                      }`}
                    >
                      {date ? (
                        format(date, "PPP")
                      ) : (
                        <span className="text-muted-foreground">
                          Select date
                        </span>
                      )}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      initialFocus
                      disabled={(date) => date < new Date()}
                    />
                  </PopoverContent>
                </Popover>
                {errors.date && (
                  <p className="text-red-500 text-sm flex items-center gap-1 mt-1">
                    <AlertCircle className="h-3 w-3" /> {errors.date}
                  </p>
                )}
              </div>
            </div>

            {bookingType !== "transportation" && (
              <div>
                <Label htmlFor="return-date">Return Date</Label>
                <div className="mt-1">
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className={`w-full justify-start text-left font-normal ${
                          errors.returnDate ? "border-red-500" : "border-input"
                        }`}
                      >
                        {returnDate ? (
                          format(returnDate, "PPP")
                        ) : (
                          <span className="text-muted-foreground">
                            Select date
                          </span>
                        )}
                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={returnDate}
                        onSelect={setReturnDate}
                        initialFocus
                        disabled={(currentDate) =>
                          currentDate < (date || new Date())
                        }
                      />
                    </PopoverContent>
                  </Popover>
                  {errors.returnDate && (
                    <p className="text-red-500 text-sm flex items-center gap-1 mt-1">
                      <AlertCircle className="h-3 w-3" /> {errors.returnDate}
                    </p>
                  )}
                </div>
              </div>
            )}

            <div>
              <Label htmlFor="adults">Number of Adults</Label>
              <div className="flex items-center mt-1">
                <Button
                  type="button"
                  variant="outline"
                  size="icon"
                  className="h-10 w-10"
                  onClick={() => setAdults(Math.max(1, adults - 1))}
                >
                  -
                </Button>
                <div className="w-12 text-center font-medium">{adults}</div>
                <Button
                  type="button"
                  variant="outline"
                  size="icon"
                  className="h-10 w-10"
                  onClick={() => setAdults(adults + 1)}
                >
                  +
                </Button>
              </div>
            </div>

            <div>
              <Label htmlFor="children">Number of Children (under 12)</Label>
              <div className="flex items-center mt-1">
                <Button
                  type="button"
                  variant="outline"
                  size="icon"
                  className="h-10 w-10"
                  onClick={() => setChildren(Math.max(0, children - 1))}
                >
                  -
                </Button>
                <div className="w-12 text-center font-medium">{children}</div>
                <Button
                  type="button"
                  variant="outline"
                  size="icon"
                  className="h-10 w-10"
                  onClick={() => setChildren(children + 1)}
                >
                  +
                </Button>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
            <h3 className="text-lg font-bold text-gray-800 mb-4">
              Booking Summary
            </h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600">Package:</span>
                <span className="font-medium">{selectedPackage?.name}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Duration:</span>
                <span>{selectedPackage?.duration}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Departure:</span>
                <span>
                  {date ? format(date, "MMM d, yyyy") : "Not selected"}
                </span>
              </div>
              {bookingType !== "transportation" && (
                <div className="flex justify-between">
                  <span className="text-gray-600">Return:</span>
                  <span>
                    {returnDate
                      ? format(returnDate, "MMM d, yyyy")
                      : "Not selected"}
                  </span>
                </div>
              )}
              <div className="flex justify-between">
                <span className="text-gray-600">Travelers:</span>
                <span>
                  {adults} Adult{adults !== 1 ? "s" : ""}
                  {children > 0 &&
                    `, ${children} Child${children !== 1 ? "ren" : ""}`}
                </span>
              </div>
              <Separator />
              <div className="flex justify-between font-bold">
                <span>Estimated Total:</span>
                <span className="text-orange-600">
                  $
                  {(
                    selectedPackage?.price * adults +
                    selectedPackage?.price * 0.7 * children
                  ).toFixed(2)}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 flex justify-between">
          <Button variant="outline" onClick={prevStep}>
            <ChevronLeft className="mr-2 h-4 w-4" /> Back
          </Button>
          <Button
            className="bg-orange-600 hover:bg-orange-700"
            onClick={nextStep}
          >
            Continue <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </motion.div>
    );
  };

  const renderPersonalDetailsStep = () => {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto"
      >
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          Personal Details
        </h2>
        <p className="text-gray-600 mb-8">
          Please provide your personal information to complete your booking. All
          fields marked with * are required.
        </p>

        <div className="bg-blue-50 border border-blue-200 rounded-md p-4 mb-6 flex items-start gap-3">
          <Info className="h-5 w-5 text-blue-500 mt-0.5" />
          <div>
            <p className="text-blue-800 font-medium">Important Information</p>
            <p className="text-blue-700 text-sm">
              Please ensure that all information matches your passport exactly.
              Any discrepancies may result in travel issues.
            </p>
          </div>
        </div>

        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="firstName">
                First Name <span className="text-red-500">*</span>
              </Label>
              <Input
                id="firstName"
                placeholder="Enter your first name"
                value={formData.firstName}
                onChange={(e) => handleInputChange("firstName", e.target.value)}
                className={errors.firstName ? "border-red-500" : ""}
              />
              {errors.firstName && (
                <p className="text-red-500 text-sm flex items-center gap-1 mt-1">
                  <AlertCircle className="h-3 w-3" /> {errors.firstName}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="lastName">
                Last Name <span className="text-red-500">*</span>
              </Label>
              <Input
                id="lastName"
                placeholder="Enter your last name"
                value={formData.lastName}
                onChange={(e) => handleInputChange("lastName", e.target.value)}
                className={errors.lastName ? "border-red-500" : ""}
              />
              {errors.lastName && (
                <p className="text-red-500 text-sm flex items-center gap-1 mt-1">
                  <AlertCircle className="h-3 w-3" /> {errors.lastName}
                </p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="email">
                Email Address <span className="text-red-500">*</span>
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="your@email.com"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                className={errors.email ? "border-red-500" : ""}
              />
              {errors.email && (
                <p className="text-red-500 text-sm flex items-center gap-1 mt-1">
                  <AlertCircle className="h-3 w-3" /> {errors.email}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">
                Phone Number <span className="text-red-500">*</span>
              </Label>
              <Input
                id="phone"
                placeholder="+1 (123) 456-7890"
                value={formData.phone}
                onChange={(e) => handleInputChange("phone", e.target.value)}
                className={errors.phone ? "border-red-500" : ""}
              />
              {errors.phone && (
                <p className="text-red-500 text-sm flex items-center gap-1 mt-1">
                  <AlertCircle className="h-3 w-3" /> {errors.phone}
                </p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="address">Address</Label>
              <Input
                id="address"
                placeholder="Enter your address"
                value={formData.address}
                onChange={(e) => handleInputChange("address", e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="city">City</Label>
              <Input
                id="city"
                placeholder="Enter your city"
                value={formData.city}
                onChange={(e) => handleInputChange("city", e.target.value)}
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="country">Country</Label>
            <Select
              value={formData.country}
              onValueChange={(value) => handleInputChange("country", value)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select your country" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="us">United States</SelectItem>
                <SelectItem value="uk">United Kingdom</SelectItem>
                <SelectItem value="ca">Canada</SelectItem>
                <SelectItem value="au">Australia</SelectItem>
                <SelectItem value="in">India</SelectItem>
                <SelectItem value="pk">Pakistan</SelectItem>
                <SelectItem value="sa">Saudi Arabia</SelectItem>
                <SelectItem value="ae">United Arab Emirates</SelectItem>
                <SelectItem value="my">Malaysia</SelectItem>
                <SelectItem value="sg">Singapore</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="passportNumber">
                Passport Number <span className="text-red-500">*</span>
              </Label>
              <Input
                id="passportNumber"
                placeholder="Enter your passport number"
                value={formData.passportNumber}
                onChange={(e) =>
                  handleInputChange("passportNumber", e.target.value)
                }
                className={errors.passportNumber ? "border-red-500" : ""}
              />
              {errors.passportNumber && (
                <p className="text-red-500 text-sm flex items-center gap-1 mt-1">
                  <AlertCircle className="h-3 w-3" /> {errors.passportNumber}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="passportExpiry">Passport Expiry Date</Label>
              <Input
                id="passportExpiry"
                type="date"
                value={formData.passportExpiry}
                onChange={(e) =>
                  handleInputChange("passportExpiry", e.target.value)
                }
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="specialRequirements">
              Special Requirements or Requests
            </Label>
            <Input
              id="specialRequirements"
              placeholder="Any special requirements or requests"
              value={formData.specialRequirements}
              onChange={(e) =>
                handleInputChange("specialRequirements", e.target.value)
              }
            />
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-medium text-gray-800">
              Additional Services
            </h3>
            <p className="text-gray-600 text-sm">
              Enhance your journey with these optional services. Additional
              charges apply.
            </p>

            <div className="space-y-3">
              {additionalServiceOptions.map((service) => (
                <div key={service.id} className="flex items-start space-x-2">
                  <Checkbox
                    id={service.id}
                    checked={additionalServices.includes(service.id)}
                    onCheckedChange={() =>
                      handleAdditionalServiceToggle(service.id)
                    }
                  />
                  <div className="grid gap-1.5 leading-none">
                    <label
                      htmlFor={service.id}
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex items-center"
                    >
                      {service.label}{" "}
                      <span className="ml-2 text-orange-600 font-medium">
                        ${service.price}/person
                      </span>
                    </label>
                    <p className="text-sm text-muted-foreground">
                      {service.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 flex justify-between">
          <Button variant="outline" onClick={prevStep}>
            <ChevronLeft className="mr-2 h-4 w-4" /> Back
          </Button>
          <Button
            className="bg-orange-600 hover:bg-orange-700"
            onClick={nextStep}
          >
            Continue <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </motion.div>
    );
  };

  const renderConfirmationStep = () => {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto"
      >
        {isBooked ? (
          <div className="text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Check className="h-10 w-10 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              Booking Confirmed!
            </h2>
            <p className="text-gray-600 mb-6">
              Your booking has been successfully confirmed. We've sent a
              confirmation email to {formData.email}.
            </p>
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mb-8">
              <h3 className="text-lg font-bold text-gray-800 mb-4">
                Booking Reference
              </h3>
              <p className="text-3xl font-bold text-orange-600 mb-2">
                {bookingReference}
              </p>
              <p className="text-gray-600 text-sm">
                Please save this reference number for future communications
                regarding your booking.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-orange-600 hover:bg-orange-700">
                Download Confirmation
              </Button>
              <Button variant="outline">Return to Home</Button>
            </div>
          </div>
        ) : (
          <>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              Review and Confirm
            </h2>
            <p className="text-gray-600 mb-8">
              Please review your booking details before confirming. You can go
              back to make changes if needed.
            </p>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Package Details</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Package Type:</span>
                      <span className="font-medium">
                        {bookingType.charAt(0).toUpperCase() +
                          bookingType.slice(1)}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Selected Package:</span>
                      <span className="font-medium">
                        {selectedPackage?.name}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Duration:</span>
                      <span>{selectedPackage?.duration}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Departure Date:</span>
                      <span>
                        {date ? format(date, "MMMM d, yyyy") : "Not selected"}
                      </span>
                    </div>
                    {bookingType !== "transportation" && (
                      <div className="flex justify-between">
                        <span className="text-gray-600">Return Date:</span>
                        <span>
                          {returnDate
                            ? format(returnDate, "MMMM d, yyyy")
                            : "Not selected"}
                        </span>
                      </div>
                    )}
                    <div className="flex justify-between">
                      <span className="text-gray-600">Travelers:</span>
                      <span>
                        {adults} Adult{adults !== 1 ? "s" : ""}
                        {children > 0 &&
                          `, ${children} Child${children !== 1 ? "ren" : ""}`}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Personal Information</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="text-sm font-medium text-gray-500 mb-1">
                        Full Name
                      </h4>
                      <p>
                        {formData.firstName} {formData.lastName}
                      </p>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-gray-500 mb-1">
                        Email
                      </h4>
                      <p>{formData.email}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-gray-500 mb-1">
                        Phone
                      </h4>
                      <p>{formData.phone}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-gray-500 mb-1">
                        Passport Number
                      </h4>
                      <p>{formData.passportNumber}</p>
                    </div>
                    {formData.address && (
                      <div className="md:col-span-2">
                        <h4 className="text-sm font-medium text-gray-500 mb-1">
                          Address
                        </h4>
                        <p>
                          {formData.address}
                          {formData.city && `, ${formData.city}`}
                          {formData.country && `, ${formData.country}`}
                        </p>
                      </div>
                    )}
                    {formData.specialRequirements && (
                      <div className="md:col-span-2">
                        <h4 className="text-sm font-medium text-gray-500 mb-1">
                          Special Requirements
                        </h4>
                        <p>{formData.specialRequirements}</p>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>

              {additionalServices.length > 0 && (
                <Card>
                  <CardHeader>
                    <CardTitle>Additional Services</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {additionalServices.map((serviceId) => {
                        const service = additionalServiceOptions.find(
                          (s) => s.id === serviceId
                        );
                        return (
                          <li key={serviceId} className="flex justify-between">
                            <span>{service?.label}</span>
                            <span className="font-medium">
                              ${service?.price}/person
                            </span>
                          </li>
                        );
                      })}
                    </ul>
                  </CardContent>
                </Card>
              )}

              <Card>
                <CardHeader>
                  <CardTitle>Payment Summary</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">
                        {selectedPackage?.name} x {adults} Adult
                        {adults !== 1 ? "s" : ""}
                      </span>
                      <span>${selectedPackage?.price * adults}</span>
                    </div>
                    {children > 0 && (
                      <div className="flex justify-between">
                        <span className="text-gray-600">
                          {selectedPackage?.name} x {children} Child
                          {children !== 1 ? "ren" : ""} (30% discount)
                        </span>
                        <span>
                          $
                          {(selectedPackage?.price * 0.7 * children).toFixed(2)}
                        </span>
                      </div>
                    )}
                    {additionalServices.map((serviceId) => {
                      const service = additionalServiceOptions.find(
                        (s) => s.id === serviceId
                      );
                      return (
                        <div key={serviceId} className="flex justify-between">
                          <span className="text-gray-600">
                            {service?.label} x {adults + children} person
                            {adults + children !== 1 ? "s" : ""}
                          </span>
                          <span>
                            ${(service?.price || 0) * (adults + children)}
                          </span>
                        </div>
                      );
                    })}
                    <Separator />
                    <div className="flex justify-between font-bold">
                      <span>Total Amount</span>
                      <span className="text-orange-600">
                        ${calculateTotal().toFixed(2)}
                      </span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex flex-col space-y-4">
                  <div className="bg-orange-50 p-4 rounded-md border border-orange-200 w-full">
                    <div className="flex items-start gap-3">
                      <Shield className="h-5 w-5 text-orange-600 mt-0.5" />
                      <div>
                        <p className="text-orange-800 font-medium">
                          Secure Payment
                        </p>
                        <p className="text-orange-700 text-sm">
                          Your payment information is encrypted and secure. We
                          never store your full credit card details.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-2 w-full">
                    <Checkbox id="terms" />
                    <div className="grid gap-1.5 leading-none">
                      <label
                        htmlFor="terms"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        I agree to the Terms and Conditions
                      </label>
                      <p className="text-sm text-muted-foreground">
                        By checking this box, you agree to our{" "}
                        <a href="#" className="text-orange-600 hover:underline">
                          Terms of Service
                        </a>{" "}
                        and{" "}
                        <a href="#" className="text-orange-600 hover:underline">
                          Privacy Policy
                        </a>
                        .
                      </p>
                    </div>
                  </div>
                </CardFooter>
              </Card>
            </div>

            <div className="mt-8 flex justify-between">
              <Button variant="outline" onClick={prevStep}>
                <ChevronLeft className="mr-2 h-4 w-4" /> Back
              </Button>
              <Button
                className="bg-orange-600 hover:bg-orange-700"
                onClick={handleSubmit}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Processing...
                  </>
                ) : (
                  "Confirm Booking"
                )}
              </Button>
            </div>
          </>
        )}
      </motion.div>
    );
  };

  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-gray-900 to-gray-800 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/madina2.jpg"
            alt="Background"
            fill
            sizes="100vw"
            className="object-cover opacity-30"
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
              Book Your Journey
            </h1>
            <div className="w-24 h-1 bg-orange-500 mx-auto my-6"></div>
            <p className="text-lg text-gray-300 mb-8">
              Begin your spiritual journey with Dawood Tours. Our easy booking
              process will help you secure your pilgrimage package in just a few
              steps.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Booking Form Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {renderStepIndicator()}

          <div className="bg-white rounded-xl shadow-md p-6 md:p-8">
            {step === 1 && renderBookingTypeStep()}
            {step === 2 && renderPackageSelectionStep()}
            {step === 3 && renderDateSelectionStep()}
            {step === 4 && renderPersonalDetailsStep()}
            {step === 5 && renderConfirmationStep()}
          </div>
        </div>
      </section>

      {/* Why Book With Us */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-800">
              Why Book With Us
            </h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto my-4"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Dawood Tours has been providing exceptional pilgrimage services
              since 1995. Here's why thousands of pilgrims choose us for their
              sacred journey.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Shield className="h-10 w-10 text-orange-500" />,
                title: "Secure Booking",
                description:
                  "Our booking system uses industry-standard encryption to ensure your personal and payment information is always secure.",
              },
              {
                icon: <Check className="h-10 w-10 text-orange-500" />,
                title: "Flexible Options",
                description:
                  "Choose from a variety of packages and customize your journey with additional services to suit your needs.",
              },
              {
                icon: <Users className="h-10 w-10 text-orange-500" />,
                title: "Experienced Team",
                description:
                  "Our team of experienced guides and support staff ensure a smooth and spiritually fulfilling pilgrimage experience.",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="mb-4 p-3 bg-orange-100 rounded-lg inline-block">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-800">
              Frequently Asked Questions
            </h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto my-4"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Find answers to common questions about our booking process and
              services.
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <Tabs defaultValue="booking" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="booking">Booking Process</TabsTrigger>
                <TabsTrigger value="payment">
                  Payment & Cancellation
                </TabsTrigger>
                <TabsTrigger value="travel">Travel Information</TabsTrigger>
              </TabsList>
              <TabsContent value="booking" className="mt-6">
                <div className="space-y-4">
                  {[
                    {
                      question:
                        "How far in advance should I book my Hajj or Umrah package?",
                      answer:
                        "We recommend booking your Hajj package at least 6-8 months in advance to ensure availability. For Umrah, booking 2-3 months in advance is generally sufficient, though during peak seasons like Ramadan, earlier booking is advised.",
                    },
                    {
                      question: "Can I customize my package?",
                      answer:
                        "Yes, we offer customizable packages to meet your specific needs. You can select additional services during the booking process or contact our customer service team for more extensive customizations.",
                    },
                    {
                      question:
                        "What documents do I need to complete my booking?",
                      answer:
                        "To complete your booking, you'll need a valid passport with at least 6 months validity, passport-sized photographs, and completed application forms. Additional requirements may apply based on your country of residence.",
                    },
                    {
                      question: "Can I book for a group?",
                      answer:
                        "Yes, you can book for groups of any size. For large groups (10+ people), please contact our customer service team directly for special group rates and arrangements.",
                    },
                  ].map((faq, index) => (
                    <div
                      key={index}
                      className="bg-white p-6 rounded-lg shadow-sm border border-gray-100"
                    >
                      <h3 className="text-lg font-medium text-gray-800 mb-2">
                        {faq.question}
                      </h3>
                      <p className="text-gray-600">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="payment" className="mt-6">
                <div className="space-y-4">
                  {[
                    {
                      question: "What payment methods do you accept?",
                      answer:
                        "We accept all major credit cards (Visa, MasterCard, American Express), bank transfers, and PayPal. For certain packages, we also offer installment payment plans.",
                    },
                    {
                      question: "Is my payment secure?",
                      answer:
                        "Yes, all payments are processed through secure, encrypted systems. We use industry-standard security protocols to protect your personal and financial information.",
                    },
                    {
                      question: "What is your cancellation policy?",
                      answer:
                        "Our cancellation policy varies depending on the package and time of cancellation. Generally, cancellations made 60 days or more before departure may receive a full refund minus administrative fees. Cancellations made 30-59 days before departure may receive a partial refund. Cancellations made less than 30 days before departure are typically non-refundable.",
                    },
                    {
                      question: "Do you offer travel insurance?",
                      answer:
                        "Yes, we offer comprehensive travel insurance options that cover trip cancellation, medical emergencies, and lost luggage. We strongly recommend purchasing travel insurance for your pilgrimage journey.",
                    },
                  ].map((faq, index) => (
                    <div
                      key={index}
                      className="bg-white p-6 rounded-lg shadow-sm border border-gray-100"
                    >
                      <h3 className="text-lg font-medium text-gray-800 mb-2">
                        {faq.question}
                      </h3>
                      <p className="text-gray-600">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="travel" className="mt-6">
                <div className="space-y-4">
                  {[
                    {
                      question:
                        "What visa requirements are needed for Hajj and Umrah?",
                      answer:
                        "Visa requirements vary by country of residence. Generally, you'll need a special Hajj or Umrah visa, which we can assist with as part of our package. These visas have specific validity periods and cannot be used for other types of travel to Saudi Arabia.",
                    },
                    {
                      question:
                        "What vaccinations are required for travel to Saudi Arabia?",
                      answer:
                        "Saudi Arabia requires pilgrims to have valid vaccination certificates for meningitis (ACWY vaccine). Depending on your country of origin, additional vaccinations may be required. We recommend consulting with your healthcare provider before travel.",
                    },
                    {
                      question: "What is the baggage allowance for flights?",
                      answer:
                        "Baggage allowance varies by airline and ticket class. Typically, economy class passengers are allowed one checked bag (23kg) and one carry-on bag. We'll provide specific baggage information for your flights in your travel documents.",
                    },
                    {
                      question:
                        "Do you provide assistance for elderly or disabled pilgrims?",
                      answer:
                        "Yes, we offer special assistance services for elderly and disabled pilgrims, including wheelchair services, accessible transportation, and accommodations. Please specify any special requirements during the booking process.",
                    },
                  ].map((faq, index) => (
                    <div
                      key={index}
                      className="bg-white p-6 rounded-lg shadow-sm border border-gray-100"
                    >
                      <h3 className="text-lg font-medium text-gray-800 mb-2">
                        {faq.question}
                      </h3>
                      <p className="text-gray-600">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-orange-600 to-orange-500 rounded-xl overflow-hidden shadow-xl">
            <div className="p-8 md:p-12 text-center text-white">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Need Assistance with Your Booking?
              </h2>
              <p className="text-white/90 mb-8 max-w-2xl mx-auto">
                Our customer service team is available 24/7 to help you with any
                questions or special requirements for your pilgrimage journey.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-white text-orange-600 hover:bg-gray-100">
                  Contact Support
                </Button>
                <Button
                  variant="outline"
                  className="text-white border-white/30 hover:bg-white/10"
                >
                  View FAQs
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
