"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

export default function AddRidePage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    pickup: "",
    drop: "",
    price: "",
    phone: "",
    car: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch("https://dawood-backend-five.vercel.app/ride/booking-add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          price: Number(formData.price),
        }),
      });

      if (!response.ok) throw new Error("Failed to add ride");
      
      toast.success("Ride added successfully");
      router.push("/Admin/Dashboard/rides");
    } catch (error) {
      toast.error("Failed to add ride");
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Add New Ride</h1>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Client Name</label>
          <Input
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-1">Pickup Location</label>
          <Input
            name="pickup"
            value={formData.pickup}
            onChange={handleChange}
            required
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-1">Drop Location</label>
          <Input
            name="drop"
            value={formData.drop}
            onChange={handleChange}
            required
          />
        </div>
         <div>
          <label className="block text-sm font-medium mb-1">Phone</label>
          <Input
            name="phone"
            type="number"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
           
        <div>
          <label className="block text-sm font-medium mb-1">Car</label>
          <Input
            name="car"
            type="string"
            value={formData.car}
            onChange={handleChange}
            required
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-1">Price (PKR)</label>
          <Input
            name="price"
            type="number"
            value={formData.price}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="flex justify-end space-x-2 pt-4">
          <Button
            type="button"
            variant="outline"
            onClick={() => router.push("/Add-ride")}
          >
            Cancel
          </Button>
          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Adding..." : "Add Ride"}
          </Button>
        </div>
      </form>
    </div>
  );
}