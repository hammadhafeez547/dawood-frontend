"use client";

import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Save, PlusCircle, Download } from "lucide-react";
import * as XLSX from "xlsx";
import Image from "next/image";

// 1️⃣ Type for car data
interface Car {
  _id: string;
  name: string;
  imageUrl: string;
}

// 2️⃣ Type for fare data (Route)
interface Route {
  _id: string;
  from: string;
  to: string;
  fare: number;
}

// 3️⃣ Component state types
interface NewRoute {
  from: string;
  to: string;
  fare: string;
}

export default function CarFareManager() {
  const [carsList, setCarsList] = useState<Car[]>([]); // Array of cars
  const [selectedCarId, setSelectedCarId] = useState<string | null>(null); // Selected car ID
  const [carFares, setCarFares] = useState<{ [key: string]: Route[] }>({}); // Fare data mapped by car ID
  const [newRoute, setNewRoute] = useState<NewRoute>({ from: "", to: "", fare: "" }); // New route data
  const [loading, setLoading] = useState<boolean>(false); // Loading state

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const res = await fetch("https://dawood-backend-five.vercel.app/ all-cars");
        const data: Car[] = await res.json();
        setCarsList(data);
      } catch (error) {
        console.error("Error fetching cars:", error);
      }
    };

    fetchCars();
  }, []);

  const fetchFares = async (carId: string) => {
    setLoading(true);
    try {
      const res = await fetch(`https://dawood-backend-five.vercel.app/ fare/${carId}`);
      const data: Route[] = await res.json();
      setCarFares((prev) => ({ ...prev, [carId]: data }));
    } catch (error) {
      console.error("Error fetching fares:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleToggle = (carId: string) => {
    const isSameCar = selectedCarId === carId;
    setSelectedCarId(isSameCar ? null : carId);
    if (!isSameCar) fetchFares(carId);
  };

  const handleFareUpdate = async (fareId: string, newFare: number) => {
    try {
      await fetch(`https://dawood-backend-five.vercel.app/ fare/${fareId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ fare: newFare }),
      });
      fetchFares(selectedCarId as string);
    } catch (error) {
      console.error("Error updating fare:", error);
    }
  };

  const handleAddFare = async () => {
    const { from, to, fare } = newRoute;
    if (!from || !to || !fare) return;

    try {
      await fetch("https://dawood-backend-five.vercel.app/ /fare/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          car: selectedCarId,
          from,
          to,
          fare: Number(fare),
        }),
      });
      setNewRoute({ from: "", to: "", fare: "" });
      fetchFares(selectedCarId as string);
    } catch (error) {
      console.error("Error adding fare:", error);
    }
  };

  const exportToExcel = () => {
    const data: any[] = [];
    Object.keys(carFares).forEach((carId) => {
      const car = carsList.find((c) => c._id === carId);
      const routes = carFares[carId];
      routes.forEach((route) => {
        data.push({
          Car: car?.name || "Unknown",
          From: route.from,
          To: route.to,
          Fare: route.fare,
        });
      });
    });
    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Routes");
    XLSX.writeFile(workbook, "car-routes.xlsx");
  };

  return (
    <div className="space-y-6 max-w-4xl mx-auto mt-10">
      <h1 className="text-2xl font-bold text-center">Fare Settings by Car</h1>

      <div className="flex gap-2 mb-6">
        <Button onClick={exportToExcel} variant="outline" className="ml-auto gap-1">
          <Download size={18} /> Export Excel
        </Button>
      </div>

      {carsList.map((car) => (
        <Card key={car._id}>
          <CardHeader onClick={() => handleToggle(car._id)} className="cursor-pointer">
            <CardTitle className="flex items-center gap-2">
              <img
                src={`https://dawood-backend-five.vercel.app/ ${car.imageUrl}`}
                alt="Car"
                className="w-20 h-12 object-cover rounded"
              />
              {car.name}
            </CardTitle>
          </CardHeader>

          {selectedCarId === car._id && (
            <CardContent className="space-y-4">
              {loading ? (
                <p className="text-sm text-muted">Loading fares...</p>
              ) : (
                <>
                  {(carFares[car._id] || []).map((route) => (
                    <div key={route._id} className="grid grid-cols-3 items-center gap-4">
                      <p>{route.from} → {route.to}</p>
                      <Input
                        type="number"
                        value={route.fare}
                        onChange={(e) => handleFareUpdate(route._id, Number(e.target.value))}
                        placeholder="Fare"
                      />
                      <span className="text-sm text-muted">PKR</span>
                    </div>
                  ))}

                  <div className="grid grid-cols-3 gap-4">
                    <Input
                      placeholder="From"
                      value={newRoute.from}
                      onChange={(e) => setNewRoute({ ...newRoute, from: e.target.value })}
                    />
                    <Input
                      placeholder="To"
                      value={newRoute.to}
                      onChange={(e) => setNewRoute({ ...newRoute, to: e.target.value })}
                    />
                    <Input
                      placeholder="Fare"
                      type="number"
                      value={newRoute.fare}
                      onChange={(e) => setNewRoute({ ...newRoute, fare: e.target.value })}
                    />
                  </div>

                  <Button onClick={handleAddFare} className="gap-1">
                    <PlusCircle size={16} /> Add Route
                  </Button>
                </>
              )}
            </CardContent>
          )}
        </Card>
      ))}
    </div>
  );
}
