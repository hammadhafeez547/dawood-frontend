"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import axios from "axios";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
interface Car {
  _id: string;
  name: string;
  startingPrice: string;
  brand: string;
  passengers: string;
  modifyDate: string;
  rating: string;
  reviews: string;
  category: string;
  popular: boolean;
  luggage: string;
  description: string;
  imageUrl: string;
  isAvailable: "Available" | "Booked";
}

interface NewCar {
  name: string;
  imageUrl: File | string;
  brand: string;
  startingPrice: string;
  passengers: string;
  modifyDate: string;
  rating: string;
  reviews: string;
  category: string;
  popular: boolean;
  luggage: string;
  description: string;
}


export default function CarsPage() {
  const [cars, setCars] = useState<Car[]>([]);
const [newCar, setNewCar] = useState<NewCar>({
  name: "",
  imageUrl: "",
  brand: "",
  startingPrice: "",
  passengers: "",
  modifyDate: "",
  rating: "",
  reviews: "",
  category: "",
  popular: false,
  luggage: "",
  description: "",
});
const [preview, setPreview] = useState<string | null>(null);
const [loading, setLoading] = useState<boolean>(false);
const [editCarId, setEditCarId] = useState<string | null>(null);
const [dialogOpen, setDialogOpen] = useState<boolean>(false);


  useEffect(() => {
    fetchCars();
  }, []);

  const fetchCars = async () => {
    try {
      const res = await axios.get("https://dawood-backend.vercel.app/cars/all-cars");
      setCars(res.data);
    } catch (error) {
      console.error(error);
      alert("Failed to fetch cars");
    }
  };

  const handleAddOrUpdateCar = async () => {
    console.log(newCar);
    
    if (!newCar.name || !newCar.brand || !newCar.luggage || !newCar.rating || !newCar.passengers) {
      return alert("Please fill all fields!");
    }

    try {
      setLoading(true);

      const formData = new FormData();
      formData.append("name", newCar.name);
      formData.append("startingPrice", newCar.startingPrice);
      formData.append("modifyDate", newCar.modifyDate);
      formData.append("rating", newCar.rating);
      formData.append("category", newCar.category);

      formData.append("reviews", newCar.reviews);
      formData.append("brand", newCar.brand);
formData.append("popular", newCar.popular.toString());
      formData.append("luggage", newCar.luggage);
      formData.append("passengers", newCar.passengers);
      formData.append("description", newCar.description);

      if (newCar.imageUrl && typeof newCar.imageUrl !== "string") {
        formData.append("image", newCar.imageUrl);
      }

      if (editCarId) {
        console.log(formData);

        await axios.put(`http://localhost:4000/cars/${editCarId}`, formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
      } else {
        console.log(formData);
        await axios.post("http://localhost:4000/cars/car-add", formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
      }

      setNewCar({
        name: "",
        imageUrl: "",
        brand: "",
        startingPrice: "",
        passengers: "",
        modifyDate: "",
        rating: "",
        reviews: "",
        category: "",
        popular: false,
        luggage: "",
        description: "",
      });
      setPreview(null);
      setEditCarId(null);
      setDialogOpen(false);
      fetchCars();
      console.log(newCar);
    } catch (error) {
      console.error(error);
      alert("Failed to save car");
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteCar = async (id : string) => {
    if (!confirm("Are you sure you want to delete this car?")) return;

    try {
      await axios.delete(`http://localhost:4000/cars/${id}`);
      fetchCars();
    } catch (error) {
      console.error(error);
      alert("Failed to delete car");
    }
  };

  const handleEditCar = (car : Car) => {
    setNewCar({
      name: car.name || "",
      startingPrice: car.startingPrice || "",
      brand: car.brand || "",
      passengers: car.passengers || "",
      modifyDate: car.modifyDate, // for date input compatibility
      rating: car.rating || "",
      reviews: car.reviews || "",
      category: car.category || "",
      popular: car.popular || false,
      luggage: car.luggage || "",
      description: car.description || "",
      imageUrl: car.imageUrl || "",
    });

    setPreview(car.imageUrl);
    setEditCarId(car._id);
    setDialogOpen(true);
  };

  const handleDialogClose = () => {
    setNewCar({
      name: "",

      brand: "",
      luggage: "",
      startingPrice: "",
      passengers: "",
      modifyDate: "",
      rating: "",
      reviews: "",
      category: "",
      popular: false,
      description: "",
      imageUrl: "",
    });
    setPreview(null);
    setEditCarId(null);
    setDialogOpen(false);
  };
  const handleToggleStatus = async (id : string) => {
    try {
      setLoading(true);
      const selectedCar = cars.find((car) => car._id === id);
      if (!selectedCar) return;

      const newStatus =
        selectedCar.isAvailable === "Available" ? "Booked" : "Available";

      await axios.put(`https://dawood-backend.vercel.app//cars/${id}`, {
        isAvailable: newStatus,
      });

      fetchCars();
    } catch (error) {
      console.error("Failed to toggle car status", error);
      alert("Failed to toggle car status");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6 p-4">
      <div className="flex justify-end">
        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
          <DialogTrigger asChild>
            <Button
              onClick={() => {
                setEditCarId(null);
                setDialogOpen(true);
              }}
              className="relative"
            >
              {loading ? (
                <>
                  <span className="absolute left-0 top-1/2 transform -translate-y-1/2">
                    <div className="w-4 h-4 border-2 border-t-transparent border-blue-500 border-solid rounded-full animate-spin"></div>
                  </span>
                  Adding...
                </>
              ) : (
                "Add New Car"
              )}
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[500px]">
            <DialogHeader>
              <DialogTitle>
                {editCarId ? "Update Car" : "Add New Car"}
              </DialogTitle>
            </DialogHeader>
            <div className="flex flex-col gap-4">
              <Input
                placeholder="Car Name"
                value={newCar.name}
                onChange={(e) => setNewCar({ ...newCar, name: e.target.value })}
              />
              <Input
                placeholder="Starting Price"
                type="string"
                value={newCar.startingPrice}
                onChange={(e) =>
                  setNewCar({ ...newCar, startingPrice: e.target.value })
                }
              />
              <Input
                placeholder="Brand"
                type="string"
                value={newCar.brand}
                onChange={(e) =>
                  setNewCar({ ...newCar, brand: e.target.value })
                }
              />

              <Input
                placeholder="Passengers"
                type="number"
                value={newCar.passengers}
                onChange={(e) =>
                  setNewCar({ ...newCar, passengers: e.target.value })
                }
              />
              <Input
                placeholder="Modify Date"
                type="string"
                value={newCar.modifyDate}
                onChange={(e) =>
                  setNewCar({ ...newCar, modifyDate: e.target.value })
                }
              />
              <Input
                placeholder="Rating (max 5)"
                type="number"
                max={5}
                value={newCar.rating}
                onChange={(e) =>
                  setNewCar({ ...newCar, rating: e.target.value })
                }
              />
              <Input
                placeholder="Reviews (number)"
                type="number"
                value={newCar.reviews}
                onChange={(e) =>
                  setNewCar({ ...newCar, reviews: e.target.value })
                }
              />
              <Input
                placeholder="Luggage"
                value={newCar.luggage}
                onChange={(e) =>
                  setNewCar({ ...newCar, luggage: e.target.value })
                }
              />
              <Input
                placeholder="Description"
                value={newCar.description}
                onChange={(e) =>
                  setNewCar({ ...newCar, description: e.target.value })
                }
              />

              {/* Popular toggle */}
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={newCar.popular}
                  onChange={(e) =>
                    setNewCar({ ...newCar, popular: e.target.checked })
                  }
                />
                Popular
              </label>

              {/* Category select (using shadcn Select) */}
              <Select
                value={newCar.category}
                onValueChange={(val) => setNewCar({ ...newCar, category: val })}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="sedan">Sedan</SelectItem>
                  <SelectItem value="bus">Buses</SelectItem>
                  <SelectItem value="suv">SUVs</SelectItem>
                  <SelectItem value="luxury">Luxury</SelectItem>
                  <SelectItem value="van">Vans</SelectItem>
                </SelectContent>
              </Select>

          <Input
  type="file"
  accept="image/*"
  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setNewCar({ ...newCar, imageUrl: file });
      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result;
        if (typeof result === "string") {
          setPreview(result);
        }
      };
      reader.readAsDataURL(file);
    }
  }}
/>
              {preview && (
                <img
                  src={preview}
                  alt="Preview"
                  className="w-32 h-20 object-cover rounded-md mx-auto"
                />
              )}
              <Button
                onClick={handleAddOrUpdateCar}
                disabled={loading}
                className="relative"
              >
                {loading ? (
                  <>
                    <span className="absolute left-0 top-1/2 transform -translate-y-1/2">
                      <div className="w-4 h-4 border-2 border-t-transparent border-blue-500 border-solid rounded-full animate-spin"></div>
                    </span>
                    {editCarId ? "Updating..." : "Adding..."}
                  </>
                ) : editCarId ? (
                  "Update"
                ) : (
                  "Submit"
                )}
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>All Cars</CardTitle>
        </CardHeader>
        <CardContent className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Image</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>price</TableHead>
                <TableHead>Brand</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Seating</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {cars.map((car) => (
                <TableRow key={car._id}>
                  <TableCell>
                    {car.imageUrl && (
                      <img
                        src={`https://dawood-backend.vercel.app/${car.imageUrl}`}
                        alt="Car"
                        className="w-20 h-12 object-cover rounded"
                      />
                    )}
                  </TableCell>
                  <TableCell>{car.name}</TableCell>
                  <TableCell>{car.startingPrice}</TableCell>
                  <TableCell>{car.brand}</TableCell>
                  <TableCell>{car.category}</TableCell>
                  <TableCell>{car.passengers}</TableCell>
                  <TableCell>
                    <span
                      className={`px-2 py-1 rounded text-white text-xs ${
                        car.isAvailable === "Available"
                          ? "bg-green-500"
                          : "bg-red-500"
                      }`}
                    >
                      {car.isAvailable}
                    </span>
                  </TableCell>
                  <TableCell className="space-x-2">
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => handleToggleStatus(car._id)}
                      className="relative"
                    >
                      {loading ? (
                        <div className="w-4 h-4 border-2 border-t-transparent border-blue-500 border-solid rounded-full animate-spin"></div>
                      ) : (
                        "Toggle"
                      )}
                    </Button>
                    <Button
                      size="sm"
                      variant="default"
                      onClick={() => handleEditCar(car)}
                      className="relative"
                    >
                      {loading ? (
                        <div className="w-4 h-4 border-2 border-t-transparent border-blue-500 border-solid rounded-full animate-spin"></div>
                      ) : (
                        "Edit"
                      )}
                    </Button>
                    <Button
                      size="sm"
                      variant="destructive"
                      onClick={() => handleDeleteCar(car._id)}
                      className="relative"
                    >
                      {loading ? (
                        <div className="w-4 h-4 border-2 border-t-transparent border-blue-500 border-solid rounded-full animate-spin"></div>
                      ) : (
                        "Delete"
                      )}
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
