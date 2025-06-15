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
import { useRouter } from "next/navigation";
import { PlusCircle } from "lucide-react";
import { toast } from "sonner";



interface Booking {
  _id: string;
  name: string;
  pickup: string;
  drop: string;
  price?: number; // Make price optional
  status: "pending" | "confirmed" | "completed";
  car: string | null; 
}

export default function AdminBookings() {
  const router = useRouter();
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    try {
      setIsLoading(true);
      const res = await fetch("https://dawood-backend-five.vercel.app/ride/");
      if (!res.ok) throw new Error("Failed to fetch bookings");
      const data: Booking[] = await res.json();
      setBookings(data);
    } catch (error) {
      toast.error("Error loading bookings");
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleStatusUpdate = async (id: string, newStatus: Booking["status"]) => {
    try {
      const response = await fetch(`https://dawood-backend-five.vercel.app/ride/${id}/status`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: newStatus }),
      });

      if (!response.ok) throw new Error("Status update failed");
      
      toast.success("Booking status updated");
      fetchBookings();
    } catch (error) {
      toast.error("Failed to update status");
      console.error(error);
    }
  };

  const navigateToAddRide = () => {
    router.push("/Add-ride");
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6 p-4 max-w-7xl mx-auto">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Booking Management</h1>
        <Button onClick={navigateToAddRide}>
          <PlusCircle className="mr-2 h-4 w-4" />
          Add New Ride
        </Button>
      </div>

      {bookings.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-muted-foreground">No bookings found</p>
        </div>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {bookings.map((ride) => (
            <Card key={ride._id} className="shadow-md hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex justify-between items-center">
                  <span>{ride.car ?? "No Car Assigned"}</span>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    ride.status === "pending" ? "bg-yellow-100 text-yellow-800" :
                    ride.status === "confirmed" ? "bg-blue-100 text-blue-800" :
                    "bg-green-100 text-green-800"
                  }`}>
                    {ride.status.toUpperCase()}
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="space-y-1">
                  <p className="font-medium">Client Information</p>
                  <p className="text-sm text-muted-foreground">{ride.name || "Not specified"}</p>
                </div>
                
                <div className="space-y-1">
                  <p className="font-medium">Route Details</p>
                  <p className="text-sm text-muted-foreground">
                    {ride.pickup || "Not specified"} → {ride.drop || "Not specified"}
                  </p>
                </div>
                
                <div className="space-y-1">
                  <p className="font-medium">Price</p>
                  <p className="text-sm text-muted-foreground">
                    {ride.price ? `SNR ${ride.price.toLocaleString()}` : "Price not set"}
                  </p>
                </div>
                
                <div className="pt-2">
                  <Select
                    value={ride.status}
                    onValueChange={(value: Booking["status"]) =>
                      handleStatusUpdate(ride._id, value)
                    }
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select status" />
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
      )}
    </div>
  );
}