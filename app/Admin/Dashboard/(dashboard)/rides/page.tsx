"use client"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Select, SelectTrigger, SelectItem, SelectContent, SelectValue } from "@/components/ui/select"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

export default function AdminBookings() {
  const [bookings, setBookings] = useState([])

  useEffect(() => {
    fetchBookings()
  }, [])

  const fetchBookings = async () => {
    const res = await fetch("http://localhost:4000/ride/")
    const data = await res.json()
    setBookings(data)
  }

  const handleStatusUpdate = async (id, newStatus) => {
    await fetch(`http://localhost:4000/ride/${id}/status`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status: newStatus }),
    })
    fetchBookings()
  }

  return (
    <div className="space-y-6 p-4 max-w-5xl mx-auto">
      <h1 className="text-2xl font-bold">All Bookings</h1>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {bookings.map((ride) => (
          <Card className="shadow-md">
            <CardHeader>
              <CardTitle>{ride.car?.name}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm">
              <p><strong>Client:</strong> {ride.name}</p>
              <p><strong>Route:</strong> {ride.pickup} → {ride.drop}</p>
              <p><strong>Price:</strong> PKR {ride.price}</p>
              <div className="flex items-center justify-between">
                <span><strong>Status:</strong></span>
                <Select
                  value={ride.status}
                  onValueChange={(value) => handleStatusUpdate(ride._id, value)}
                >
                  <SelectTrigger className="w-[120px]">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="pending">Pending</SelectItem>
                    <SelectItem value="confirmed">Confirmed</SelectItem>
                    <SelectItem value="completed">Completed</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
