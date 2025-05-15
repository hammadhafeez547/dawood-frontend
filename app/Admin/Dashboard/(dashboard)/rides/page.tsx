"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectTrigger,
  SelectItem,
  SelectContent,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";

// 1️⃣ Interface for car data
interface Car {
  name: string;
}

// 2️⃣ Interface for booking/ride data
interface Booking {
  _id: string;
  name: string;
  pickup: string;
  drop: string;
  price: number;
  status: "pending" | "confirmed" | "completed";
  car?: Car; // optional, in case car is undefined
}

export default function AdminBookings() {
  const [bookings, setBookings] = useState<Booking[]>([]);

  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    const res = await fetch("https://dawood-backend.vercel.app//ride/");
    const data: Booking[] = await res.json();
    setBookings(data);
  };

  const handleStatusUpdate = async (id: string, newStatus: Booking["status"]) => {
    await fetch(`https://dawood-backend.vercel.app//ride/${id}/status`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status: newStatus }),
    });
    fetchBookings();
  };

  return (
    <div className="space-y-6 p-4 max-w-5xl mx-auto">
      <h1 className="text-2xl font-bold">All Bookings</h1>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {bookings.map((ride) => (
          <Card key={ride._id} className="shadow-md">
            <CardHeader>
              <CardTitle>{ride.car?.name ?? "No Car Info"}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm">
              <p>
                <strong>Client:</strong> {ride.name}
              </p>
              <p>
                <strong>Route:</strong> {ride.pickup} → {ride.drop}
              </p>
              <p>
                <strong>Price:</strong> PKR {ride.price}
              </p>
              <div className="flex items-center justify-between">
                <span>
                  <strong>Status:</strong>
                </span>
                <Select
                  value={ride.status}
                  onValueChange={(value: Booking["status"]) =>
                    handleStatusUpdate(ride._id, value)
                  }
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
  );
}
