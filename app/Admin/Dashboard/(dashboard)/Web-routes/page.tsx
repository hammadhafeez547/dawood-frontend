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
import { MapPin, Clock, ArrowRight, ChevronDown } from "lucide-react";

interface Route {
  _id: string;
  name: string;
  distance: string;
  duration: string;
  stops: string[];
  description: string;
  imageUrl: string;
  price: string;
  popular: boolean;
  features: string[];
  category: "hajj" | "umrah" | "airport";
  isActive: boolean;
}

interface NewRoute {
  name: string;
  imageUrl: File | string;
  distance: string;
  duration: string;
  stops: string[];
  description: string;
  price: string;
  popular: boolean;
  features: string[];
  category: "hajj" | "umrah" | "airport";
}

export default function Page() {
  const [routes, setRoutes] = useState<Route[]>([]);
  const [newRoute, setNewRoute] = useState<NewRoute>({
    name: "",
    imageUrl: "",
    distance: "",
    duration: "",
    stops: [],
    description: "",
    price: "",
    popular: false,
    features: [],
    category: "hajj",
  });
  const [preview, setPreview] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [editRouteId, setEditRouteId] = useState<string | null>(null);
  const [dialogOpen, setDialogOpen] = useState<boolean>(false);
  const [newStop, setNewStop] = useState<string>("");
  const [newFeature, setNewFeature] = useState<string>("");

  useEffect(() => {
    fetchRoutes();
  }, []);

  const fetchRoutes = async () => {
    try {
      const res = await axios.get("http://localhost:4000/routes/all-routes");
      setRoutes(res.data);
    } catch (error) {
      console.error(error);
      alert("Failed to fetch routes");
    }
  };

  const handleAddOrUpdateRoute = async () => {
    if (!newRoute.name || !newRoute.distance || !newRoute.duration || !newRoute.price) {
      return alert("Please fill all required fields!");
    }

    try {
      setLoading(true);

      const formData = new FormData();
      formData.append("name", newRoute.name);
      formData.append("distance", newRoute.distance);
      formData.append("duration", newRoute.duration);
      formData.append("price", newRoute.price);
      formData.append("description", newRoute.description);
      formData.append("popular", newRoute.popular.toString());
      formData.append("category", newRoute.category);
      
      // Add stops and features as JSON strings
      formData.append("stops", JSON.stringify(newRoute.stops));
      formData.append("features", JSON.stringify(newRoute.features));

      if (newRoute.imageUrl && typeof newRoute.imageUrl !== "string") {
        formData.append("image", newRoute.imageUrl);
      }

      if (editRouteId) {
        await axios.put(`http://localhost:4000/routes/${editRouteId}`, formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
      } else {
        await axios.post("http://localhost:4000/routes/route-add", formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
      }

      resetForm();
      setDialogOpen(false);
      fetchRoutes();
    } catch (error) {
      console.error(error);
      alert("Failed to save route");
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteRoute = async (id: string) => {
    if (!confirm("Are you sure you want to delete this route?")) return;

    try {
      await axios.delete(`http://localhost:4000/routes/${id}`);
      fetchRoutes();
    } catch (error) {
      console.error(error);
      alert("Failed to delete route");
    }
  };

  const handleEditRoute = (route: Route) => {
    setNewRoute({
      name: route.name,
      distance: route.distance,
      duration: route.duration,
      stops: route.stops,
      description: route.description,
      price: route.price,
      popular: route.popular,
      features: route.features,
      category: route.category,
      imageUrl: route.imageUrl,
    });
    setPreview(route.imageUrl ? `https://dawood-backend.vercel.app/${route.imageUrl}` : null);
    setEditRouteId(route._id);
    setDialogOpen(true);
  };

  const resetForm = () => {
    setNewRoute({
      name: "",
      imageUrl: "",
      distance: "",
      duration: "",
      stops: [],
      description: "",
      price: "",
      popular: false,
      features: [],
      category: "hajj",
    });
    setPreview(null);
    setEditRouteId(null);
    setNewStop("");
    setNewFeature("");
  };

  const handleToggleStatus = async (id: string) => {
    try {
      setLoading(true);
      const selectedRoute = routes.find((route) => route._id === id);
      if (!selectedRoute) return;

      const newStatus = !selectedRoute.isActive;

      await axios.put(`https://dawood-backend.vercel.app/routes/${id}`, {
        isActive: newStatus,
      });

      fetchRoutes();
    } catch (error) {
      console.error("Failed to toggle route status", error);
      alert("Failed to toggle route status");
    } finally {
      setLoading(false);
    }
  };

  const addStop = () => {
    if (newStop.trim() && !newRoute.stops.includes(newStop.trim())) {
      setNewRoute({
        ...newRoute,
        stops: [...newRoute.stops, newStop.trim()],
      });
      setNewStop("");
    }
  };

  const removeStop = (stop: string) => {
    setNewRoute({
      ...newRoute,
      stops: newRoute.stops.filter((s) => s !== stop),
    });
  };

  const addFeature = () => {
    if (newFeature.trim() && !newRoute.features.includes(newFeature.trim())) {
      setNewRoute({
        ...newRoute,
        features: [...newRoute.features, newFeature.trim()],
      });
      setNewFeature("");
    }
  };

  const removeFeature = (feature: string) => {
    setNewRoute({
      ...newRoute,
      features: newRoute.features.filter((f) => f !== feature),
    });
  };

  return (
    <div className="space-y-6 p-4">
      <div className="flex justify-end">
        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
          <DialogTrigger asChild>
            <Button
              onClick={() => {
                resetForm();
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
                "Add New Route"
              )}
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[600px] max-h-[80vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>
                {editRouteId ? "Update Route" : "Add New Route"}
              </DialogTitle>
            </DialogHeader>
            <div className="flex flex-col gap-4">
              <Input
                placeholder="Route Name (e.g., Makkah to Madinah)"
                value={newRoute.name}
                onChange={(e) => setNewRoute({ ...newRoute, name: e.target.value })}
              />
              
              <div className="grid grid-cols-2 gap-4">
                <Input
                  placeholder="Distance (e.g., 450 km)"
                  value={newRoute.distance}
                  onChange={(e) => setNewRoute({ ...newRoute, distance: e.target.value })}
                />
                <Input
                  placeholder="Duration (e.g., 4-5 hours)"
                  value={newRoute.duration}
                  onChange={(e) => setNewRoute({ ...newRoute, duration: e.target.value })}
                />
              </div>
              
              <Input
                placeholder="Price Range (e.g., $120-$250)"
                value={newRoute.price}
                onChange={(e) => setNewRoute({ ...newRoute, price: e.target.value })}
              />
              
              <div className="space-y-2">
                <div className="flex gap-2">
                  <Input
                    placeholder="Add Stop (e.g., Jeddah)"
                    value={newStop}
                    onChange={(e) => setNewStop(e.target.value)}
                  />
                  <Button onClick={addStop} size="sm">
                    Add
                  </Button>
                </div>
                {newRoute.stops.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {newRoute.stops.map((stop) => (
                      <div key={stop} className="flex items-center gap-1 bg-gray-100 px-2 py-1 rounded">
                        <span>{stop}</span>
                        <button 
                          type="button"
                          onClick={() => removeStop(stop)}
                          className="text-red-500"
                        >
                          ×
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              
              <div className="space-y-2">
                <div className="flex gap-2">
                  <Input
                    placeholder="Add Feature (e.g., Air Conditioning)"
                    value={newFeature}
                    onChange={(e) => setNewFeature(e.target.value)}
                  />
                  <Button onClick={addFeature} size="sm">
                    Add
                  </Button>
                </div>
                {newRoute.features.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {newRoute.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-1 bg-gray-100 px-2 py-1 rounded">
                        <span>{feature}</span>
                        <button 
                          type="button"
                          onClick={() => removeFeature(feature)}
                          className="text-red-500"
                        >
                          ×
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              
              <Select
                value={newRoute.category}
                onValueChange={(val) => setNewRoute({ ...newRoute, category: val as "hajj" | "umrah" | "airport" })}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="hajj">Hajj Route</SelectItem>
                  <SelectItem value="umrah">Umrah Route</SelectItem>
                  <SelectItem value="airport">Airport Transfer</SelectItem>
                </SelectContent>
              </Select>
              
              <Input
                placeholder="Description"
                value={newRoute.description}
                onChange={(e) => setNewRoute({ ...newRoute, description: e.target.value })}
            
        
              />
              
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={newRoute.popular}
                  onChange={(e) => setNewRoute({ ...newRoute, popular: e.target.checked })}
                />
                Popular Route
              </label>
              
              <Input
                type="file"
                accept="image/*"
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (file) {
                    setNewRoute({ ...newRoute, imageUrl: file });
                    const reader = new FileReader();
                    reader.onloadend = () => {
                      setPreview(reader.result as string);
                    };
                    reader.readAsDataURL(file);
                  }
                }}
              />
              
              {preview && (
                <img
                  src={preview}
                  alt="Route Preview"
                  className="w-full h-40 object-cover rounded-md"
                />
              )}
              
              <Button
                onClick={handleAddOrUpdateRoute}
                disabled={loading}
                className="relative"
              >
                {loading ? (
                  <>
                    <span className="absolute left-0 top-1/2 transform -translate-y-1/2">
                      <div className="w-4 h-4 border-2 border-t-transparent border-blue-500 border-solid rounded-full animate-spin"></div>
                    </span>
                    {editRouteId ? "Updating..." : "Adding..."}
                  </>
                ) : editRouteId ? (
                  "Update Route"
                ) : (
                  "Add Route"
                )}
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Manage Routes</CardTitle>
        </CardHeader>
        <CardContent className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Image</TableHead>
                <TableHead>Route</TableHead>
                <TableHead>Distance</TableHead>
                <TableHead>Duration</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {routes.map((route) => (
                <TableRow key={route._id}>
                  <TableCell>
                    {route.imageUrl && (
                      <img
                        src={`https://dawood-backend.vercel.app/${route.imageUrl}`}
                        alt={route.name}
                        className="w-20 h-12 object-cover rounded"
                      />
                    )}
                  </TableCell>
                  <TableCell>
                    <div className="font-medium">{route.name}</div>
                    {route.stops.length > 0 && (
                      <div className="text-xs text-gray-500 flex items-center">
                        <ChevronDown className="w-3 h-3 mr-1" />
                        {route.stops.join(", ")}
                      </div>
                    )}
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4 text-orange-500" />
                      {route.distance}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4 text-orange-500" />
                      {route.duration}
                    </div>
                  </TableCell>
                  <TableCell>{route.price}</TableCell>
                  <TableCell>
                    <span className={`px-2 py-1 rounded text-xs ${
                      route.category === "hajj" ? "bg-purple-100 text-purple-800" :
                      route.category === "umrah" ? "bg-blue-100 text-blue-800" :
                      "bg-green-100 text-green-800"
                    }`}>
                      {route.category}
                    </span>
                  </TableCell>
                  <TableCell>
                    <span
                      className={`px-2 py-1 rounded text-white text-xs ${
                        route.isActive ? "bg-green-500" : "bg-red-500"
                      }`}
                    >
                      {route.isActive ? "Active" : "Inactive"}
                    </span>
                  </TableCell>
                  <TableCell className="space-x-2">
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => handleToggleStatus(route._id)}
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
                      onClick={() => handleEditRoute(route)}
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
                      onClick={() => handleDeleteRoute(route._id)}
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