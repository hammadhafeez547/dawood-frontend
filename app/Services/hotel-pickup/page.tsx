import type { Metadata } from "next"
import HotelPickupServices from "./components/hotel-pickup-services"

export const metadata: Metadata = {
  title: "Hotel Pick and Drop Services | Dawood Tours",
  description:
    "Reliable and comfortable hotel pick and drop services in Makkah and Madinah. Enjoy hassle-free transportation to and from your hotel with Dawood Tours.",
}

export default function HotelPickupPage() {
  return (
    <main className="min-h-screen">
      <HotelPickupServices />
    </main>
  )
}
