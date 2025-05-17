import { Loader2 } from "lucide-react"

export default function Loading() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <Loader2 className="h-16 w-16 text-orange-500 animate-spin mb-4" />
      <h2 className="text-2xl font-medium text-gray-700">Loading Group Transportation Services...</h2>
      <p className="text-gray-500 mt-2">Please wait while we prepare your information.</p>
    </div>
  )
}
