"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { v4 as uuidv4 } from "uuid"

export default function CarsPage() {
  const [cars, setCars] = useState([])
  const [newCar, setNewCar] = useState({ model: "", number: "", status: "available" })

  const handleAddCar = () => {
    if (!newCar.model || !newCar.number) return
    const carWithId = { ...newCar, _id: uuidv4() }
    setCars([...cars, carWithId])
    setNewCar({ model: "", number: "", status: "available" })
  }

  const handleDeleteCar = (id) => {
    setCars(cars.filter((car) => car._id !== id))
  }

  const handleToggleStatus = (id) => {
    const updatedCars = cars.map((car) =>
      car._id === id
        ? { ...car, status: car.status === "available" ? "booked" : "available" }
        : car
    )
    setCars(updatedCars)
  }

  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle>Add New Car</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col sm:flex-row gap-2">
          <Input
            placeholder="Model"
            value={newCar.model}
            onChange={(e) => setNewCar({ ...newCar, model: e.target.value })}
          />
          <Input
            placeholder="Number"
            value={newCar.number}
            onChange={(e) => setNewCar({ ...newCar, number: e.target.value })}
          />
          <Button onClick={handleAddCar}>Add</Button>
        </CardContent>
      </Card>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {cars.map((car) => (
          <Card key={car._id}>
            <CardHeader>
              <CardTitle>{car.model}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <p><strong>Number:</strong> {car.number}</p>
              <p><strong>Status:</strong> {car.status}</p>
              <div className="flex gap-2">
                <Button variant="destructive" onClick={() => handleDeleteCar(car._id)}>
                  Delete
                </Button>
                <Button onClick={() => handleToggleStatus(car._id)}>
                  Toggle Status
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
// "use client"

// import { useState } from "react"
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
// import { v4 as uuidv4 } from "uuid"

// export default function CarsPage() {
//   const [cars, setCars] = useState([
//     { _id: uuidv4(), model: "Toyota Corolla", number: "ABC-123", status: "available" },
//     { _id: uuidv4(), model: "Honda Civic", number: "XYZ-789", status: "booked" }
//   ])

//   const [newCar, setNewCar] = useState({ model: "", number: "", status: "available" })
//   const [editingId, setEditingId] = useState(null)
//   const [editCar, setEditCar] = useState({ model: "", number: "" })

//   const handleAddCar = () => {
//     if (!newCar.model || !newCar.number) return
//     const carWithId = { ...newCar, _id: uuidv4() }
//     setCars([...cars, carWithId])
//     setNewCar({ model: "", number: "", status: "available" })
//   }

//   const handleDeleteCar = (id) => {
//     setCars(cars.filter((car) => car._id !== id))
//   }

//   const handleToggleStatus = (id) => {
//     const updatedCars = cars.map((car) =>
//       car._id === id
//         ? { ...car, status: car.status === "available" ? "booked" : "available" }
//         : car
//     )
//     setCars(updatedCars)
//   }

//   const startEditing = (car) => {
//     setEditingId(car._id)
//     setEditCar({ model: car.model, number: car.number })
//   }

//   const cancelEditing = () => {
//     setEditingId(null)
//     setEditCar({ model: "", number: "" })
//   }

//   const handleUpdateCar = () => {
//     const updatedCars = cars.map((car) =>
//       car._id === editingId ? { ...car, ...editCar } : car
//     )
//     setCars(updatedCars)
//     cancelEditing()
//   }

//   return (
//     <div className="space-y-6 p-4">
//       {/* Add New Car */}
//       <Card>
//         <CardHeader>
//           <CardTitle>Add New Car</CardTitle>
//         </CardHeader>
//         <CardContent className="flex flex-col sm:flex-row gap-2">
//           <Input
//             placeholder="Model"
//             value={newCar.model}
//             onChange={(e) => setNewCar({ ...newCar, model: e.target.value })}
//           />
//           <Input
//             placeholder="Number"
//             value={newCar.number}
//             onChange={(e) => setNewCar({ ...newCar, number: e.target.value })}
//           />
//           <Button onClick={handleAddCar}>Add</Button>
//         </CardContent>
//       </Card>

//       {/* Cars List */}
//       <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
//         {cars.map((car) => (
//           <Card key={car._id} className="relative">
//             <CardHeader>
//               <CardTitle>{editingId === car._id ? "Editing..." : car.model}</CardTitle>
//             </CardHeader>
//             <CardContent className="space-y-2">
//               {editingId === car._id ? (
//                 <>
//                   <Input
//                     value={editCar.model}
//                     onChange={(e) => setEditCar({ ...editCar, model: e.target.value })}
//                     placeholder="Model"
//                   />
//                   <Input
//                     value={editCar.number}
//                     onChange={(e) => setEditCar({ ...editCar, number: e.target.value })}
//                     placeholder="Number"
//                   />
//                   <div className="flex gap-2">
//                     <Button onClick={handleUpdateCar}>Save</Button>
//                     <Button variant="ghost" onClick={cancelEditing}>
//                       Cancel
//                     </Button>
//                   </div>
//                 </>
//               ) : (
//                 <>
//                   <p><strong>Number:</strong> {car.number}</p>
//                   <p><strong>Status:</strong> {car.status}</p>
//                   <div className="flex gap-2 flex-wrap">
//                     <Button variant="destructive" onClick={() => handleDeleteCar(car._id)}>
//                       Delete
//                     </Button>
//                     <Button onClick={() => handleToggleStatus(car._id)}>
//                       Toggle Status
//                     </Button>
//                     <Button variant="outline" onClick={() => startEditing(car)}>
//                       Edit
//                     </Button>
//                   </div>
//                 </>
//               )}
//             </CardContent>
//           </Card>
//         ))}
//       </div>
//     </div>
//   )
// }
// "use client"

// import { useState } from "react"
// import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
// import { Input } from "@/components/ui/input"
// import { Button } from "@/components/ui/button"
// import { Textarea } from "@/components/ui/textarea"
// import { Switch } from "@/components/ui/switch"
// import Image from "next/image"

// export default function SettingsPage() {
//   const [logo, setLogo] = useState(null)
//   const [preview, setPreview] = useState(null)
//   const [theme, setTheme] = useState("light")
//   const [terms, setTerms] = useState("")

//   const handleLogoChange = (e) => {
//     const file = e.target.files[0]
//     setLogo(file)
//     setPreview(URL.createObjectURL(file))
//   }

//   const handleThemeToggle = () => {
//     setTheme(theme === "light" ? "dark" : "light")
//   }

//   const handleSaveSettings = () => {
//     const settings = {
//       logo,
//       theme,
//       terms
//     }
//     console.log("Saved Settings:", settings)
//     alert("Settings saved (dummy only). Check console.")
//   }

//   return (
//     <div className="space-y-6 p-4 max-w-3xl mx-auto">
//       <h1 className="text-2xl font-bold">Settings</h1>

//       {/* Logo Upload */}
//       <Card>
//         <CardHeader>
//           <CardTitle>Upload Logo</CardTitle>
//         </CardHeader>
//         <CardContent className="space-y-4">
//           <Input type="file" accept="image/*" onChange={handleLogoChange} />
//           {preview && (
//             <div className="w-32 h-32 border rounded overflow-hidden">
//               <Image src={preview} alt="Logo Preview" width={128} height={128} />
//             </div>
//           )}
//         </CardContent>
//       </Card>

//       {/* Theme Toggle */}
//       <Card>
//         <CardHeader>
//           <CardTitle>Theme</CardTitle>
//         </CardHeader>
//         <CardContent className="flex items-center gap-4">
//           <span className="text-sm">Light</span>
//           <Switch checked={theme === "dark"} onCheckedChange={handleThemeToggle} />
//           <span className="text-sm">Dark</span>
//         </CardContent>
//       </Card>

//       {/* Terms & Conditions */}
//       <Card>
//         <CardHeader>
//           <CardTitle>Terms & Conditions</CardTitle>
//         </CardHeader>
//         <CardContent>
//           <Textarea
//             placeholder="Enter your terms & conditions here..."
//             rows={6}
//             value={terms}
//             onChange={(e) => setTerms(e.target.value)}
//           />
//         </CardContent>
//       </Card>

//       {/* Save Button */}
//       <div className="text-right">
//         <Button onClick={handleSaveSettings}>Save Settings</Button>
//       </div>
//     </div>
//   )
// }
// "use client"

// import { useState } from "react"
// import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
// import { Button } from "@/components/ui/button"
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// const dummyRides = [
//   {
//     id: 1,
//     carModel: "Toyota Corolla",
//     clientName: "Ahmed Khan",
//     from: "Lahore",
//     to: "Islamabad",
//     price: 5500,
//     status: "pending",
//   },
//   {
//     id: 2,
//     carModel: "Honda Civic",
//     clientName: "Sara Ali",
//     from: "Karachi",
//     to: "Hyderabad",
//     price: 3500,
//     status: "confirmed",
//   },
// ]

// export default function RidesPage() {
//   const [rides, setRides] = useState(dummyRides)

//   const handleStatusUpdate = (id, newStatus) => {
//     const updated = rides.map((ride) =>
//       ride.id === id ? { ...ride, status: newStatus } : ride
//     )
//     setRides(updated)
//   }

//   return (
//     <div className="space-y-6 p-4 max-w-5xl mx-auto">
//       <h1 className="text-2xl font-bold">Incoming Rides (via WhatsApp - Dummy)</h1>

//       <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
//         {rides.map((ride) => (
//           <Card key={ride.id} className="shadow-md">
//             <CardHeader>
//               <CardTitle>{ride.carModel}</CardTitle>
//             </CardHeader>
//             <CardContent className="space-y-2 text-sm">
//               <p><strong>Client:</strong> {ride.clientName}</p>
//               <p><strong>Route:</strong> {ride.from} → {ride.to}</p>
//               <p><strong>Price:</strong> PKR {ride.price}</p>
//               <div className="flex items-center justify-between">
//                 <span><strong>Status:</strong></span>
//                 <Select
//                   value={ride.status}
//                   onValueChange={(value) => handleStatusUpdate(ride.id, value)}
//                 >
//                   <SelectTrigger className="w-[120px]">
//                     <SelectValue />
//                   </SelectTrigger>
//                   <SelectContent>
//                     <SelectItem value="pending">Pending</SelectItem>
//                     <SelectItem value="confirmed">Confirmed</SelectItem>
//                     <SelectItem value="completed">Completed</SelectItem>
//                   </SelectContent>
//                 </Select>
//               </div>
//             </CardContent>
//           </Card>
//         ))}
//       </div>
//     </div>
//   )
// }
// "use client"

// import { useState } from "react"
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"

// export default function RoutesPage() {
//   const [routes, setRoutes] = useState([
//     { id: 1, from: "Lahore", to: "Islamabad", fare: 5500 },
//     { id: 2, from: "Karachi", to: "Hyderabad", fare: 3000 },
//   ])

//   const handleUpdate = (id, field, value) => {
//     setRoutes((prev) =>
//       prev.map((route) =>
//         route.id === id ? { ...route, [field]: value } : route
//       )
//     )
//   }

//   return (
//     <div className="space-y-6 max-w-3xl mx-auto mt-10">
//       <h1 className="text-2xl font-bold text-center">Manage Routes & Fares</h1>

//       {routes.map((route) => (
//         <Card key={route.id}>
//           <CardHeader>
//             <CardTitle>
//               {route.from} → {route.to}
//             </CardTitle>
//           </CardHeader>
//           <CardContent className="grid grid-cols-3 gap-4 items-center">
//             <Input
//               value={route.from}
//               onChange={(e) => handleUpdate(route.id, "from", e.target.value)}
//               placeholder="From"
//             />
//             <Input
//               value={route.to}
//               onChange={(e) => handleUpdate(route.id, "to", e.target.value)}
//               placeholder="To"
//             />
//             <Input
//               type="number"
//               value={route.fare}
//               onChange={(e) => handleUpdate(route.id, "fare", Number(e.target.value))}
//               placeholder="Fare (PKR)"
//             />
//           </CardContent>
//         </Card>
//       ))}

//       <div className="text-center">
//         <Button
//           onClick={() =>
//             setRoutes([
//               ...routes,
//               { id: Date.now(), from: "", to: "", fare: 0 },
//             ])
//           }
//         >
//           ➕ Add New Route
//         </Button>
//       </div>
//     </div>
//   )
// }
// "use client"

// import { useState } from "react"
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"

// const initialCars = [
//   {
//     id: 1,
//     model: "Corolla",
//     routes: [
//       { id: 101, from: "Lahore", to: "Islamabad", fare: 6000 },
//       { id: 102, from: "Lahore", to: "Multan", fare: 5000 },
//     ],
//   },
//   {
//     id: 2,
//     model: "Civic",
//     routes: [
//       { id: 201, from: "Karachi", to: "Hyderabad", fare: 3000 },
//       { id: 202, from: "Karachi", to: "Sukkur", fare: 7000 },
//     ],
//   },
// ]

// export default function CarFareManager() {
//   const [cars, setCars] = useState(initialCars)
//   const [selectedCarId, setSelectedCarId] = useState(null)

//   const toggleCarRoutes = (id) => {
//     setSelectedCarId(selectedCarId === id ? null : id)
//   }

//   const updateFare = (carId, routeId, newFare) => {
//     setCars((prevCars) =>
//       prevCars.map((car) =>
//         car.id === carId
//           ? {
//               ...car,
//               routes: car.routes.map((route) =>
//                 route.id === routeId ? { ...route, fare: newFare } : route
//               ),
//             }
//           : car
//       )
//     )
//   }

//   return (
//     <div className="space-y-6 max-w-4xl mx-auto mt-10">
//       <h1 className="text-2xl font-bold text-center">Fare Settings by Car</h1>

//       {cars.map((car) => (
//         <Card key={car.id}>
//           <CardHeader onClick={() => toggleCarRoutes(car.id)} className="cursor-pointer">
//             <CardTitle>{car.model}</CardTitle>
//           </CardHeader>

//           {selectedCarId === car.id && (
//             <CardContent className="space-y-4">
//               {car.routes.map((route) => (
//                 <div key={route.id} className="grid grid-cols-3 items-center gap-4">
//                   <p>{route.from} → {route.to}</p>
//                   <Input
//                     type="number"
//                     value={route.fare}
//                     onChange={(e) => updateFare(car.id, route.id, Number(e.target.value))}
//                     placeholder="Fare"
//                   />
//                   <span className="text-sm text-muted">PKR</span>
//                 </div>
//               ))}
//             </CardContent>
//           )}
//         </Card>
//       ))}
//     </div>
//   )
// }

// "use client"

// import { useState } from "react"
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Save, PlusCircle, Download } from "lucide-react"
// import * as XLSX from "xlsx"

// const initialCars = []

// export default function CarFareManager() {
//   const [cars, setCars] = useState(initialCars)
//   const [selectedCarId, setSelectedCarId] = useState(null)
//   const [newCarModel, setNewCarModel] = useState("")
//   const [newRoute, setNewRoute] = useState({ from: "", to: "", fare: "" })

//   const toggleCarRoutes = (id) => {
//     setSelectedCarId(selectedCarId === id ? null : id)
//   }

//   const addCar = () => {
//     if (!newCarModel.trim()) return
//     setCars((prev) => [...prev, { id: Date.now(), model: newCarModel, routes: [] }])
//     setNewCarModel("")
//   }

//   const updateFare = (carId, routeId, newFare) => {
//     setCars((prevCars) =>
//       prevCars.map((car) =>
//         car.id === carId
//           ? {
//               ...car,
//               routes: car.routes.map((route) =>
//                 route.id === routeId ? { ...route, fare: newFare } : route
//               ),
//             }
//           : car
//       )
//     )
//   }

//   const addRouteToCar = (carId) => {
//     if (!newRoute.from || !newRoute.to || !newRoute.fare) return
//     setCars((prevCars) =>
//       prevCars.map((car) =>
//         car.id === carId
//           ? {
//               ...car,
//               routes: [...car.routes, { id: Date.now(), ...newRoute }],
//             }
//           : car
//       )
//     )
//     setNewRoute({ from: "", to: "", fare: "" })
//   }

//   const exportToExcel = () => {
//     const data = []
//     cars.forEach((car) => {
//       car.routes.forEach((route) => {
//         data.push({
//           Car: car.model,
//           From: route.from,
//           To: route.to,
//           Fare: route.fare,
//         })
//       })
//     })
//     const worksheet = XLSX.utils.json_to_sheet(data)
//     const workbook = XLSX.utils.book_new()
//     XLSX.utils.book_append_sheet(workbook, worksheet, "Routes")
//     XLSX.writeFile(workbook, "car-routes.xlsx")
//   }

//   return (
//     <div className="space-y-6 max-w-4xl mx-auto mt-10">
//       <h1 className="text-2xl font-bold text-center">Fare Settings by Car</h1>

//       <div className="flex gap-2 mb-6">
//         <Input
//           placeholder="New Car Model"
//           value={newCarModel}
//           onChange={(e) => setNewCarModel(e.target.value)}
//         />
//         <Button onClick={addCar} className="gap-1">
//           <PlusCircle size={18} /> Add Car
//         </Button>
//         <Button onClick={exportToExcel} variant="outline" className="ml-auto gap-1">
//           <Download size={18} /> Export Excel
//         </Button>
//       </div>

//       {cars.map((car) => (
//         <Card key={car.id}>
//           <CardHeader onClick={() => toggleCarRoutes(car.id)} className="cursor-pointer">
//             <CardTitle>{car.model}</CardTitle>
//           </CardHeader>

//           {selectedCarId === car.id && (
//             <CardContent className="space-y-4">
//               {car.routes.map((route) => (
//                 <div key={route.id} className="grid grid-cols-3 items-center gap-4">
//                   <p>{route.from} → {route.to}</p>
//                   <Input
//                     type="number"
//                     value={route.fare}
//                     onChange={(e) => updateFare(car.id, route.id, Number(e.target.value))}
//                     placeholder="Fare"
//                   />
//                   <span className="text-sm text-muted">PKR</span>
//                 </div>
//               ))}
//               <div className="grid grid-cols-3 gap-4">
//                 <Input
//                   placeholder="From"
//                   value={newRoute.from}
//                   onChange={(e) => setNewRoute({ ...newRoute, from: e.target.value })}
//                 />
//                 <Input
//                   placeholder="To"
//                   value={newRoute.to}
//                   onChange={(e) => setNewRoute({ ...newRoute, to: e.target.value })}
//                 />
//                 <Input
//                   placeholder="Fare"
//                   type="number"
//                   value={newRoute.fare}
//                   onChange={(e) => setNewRoute({ ...newRoute, fare: e.target.value })}
//                 />
//               </div>
//               <Button onClick={() => addRouteToCar(car.id)} className="gap-1">
//                 <Save size={16} /> Add Route
//               </Button>
//             </CardContent>
//           )}
//         </Card>
//       ))}
//     </div>
//   )
// }
