"use client"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import {
  CarIcon,
  UserIcon,
  DollarSignIcon,
  XCircleIcon,
  GaugeIcon,
  WrenchIcon,
  CaravanIcon,
  BusIcon,
  SparklesIcon,
  ClockIcon,
  MapPinIcon,
} from "lucide-react"
import { DashboardChart } from "../../components/dashboard-chart"
import { useEffect, useState } from "react";
import axios from "axios";

export default function CarDashboardPage() {
    const [cars, setCars] = useState(0);
  
  useEffect(() => {
    fetchCars();
  }, []);

  const fetchCars = async () => {
    try {
      const res = await axios.get("http://localhost:4000/cars/all-cars");
      setCars(res.data.length);
    } catch (error) {
      console.error(error);
      alert("Failed to fetch cars");
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <div>
        <h1 className="text-2xl md:text-3xl font-bold tracking-tight">Dawood Hajj Transport Dashboard</h1>
        <p className="text-muted-foreground">Comprehensive fleet management and booking analytics</p>
      </div>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="fleet">Fleet Management</TabsTrigger>
          <TabsTrigger value="revenue">Revenue</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Total Fleet</CardTitle>
                <CaravanIcon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{cars}</div>
                <p className="text-xs text-muted-foreground">
                  <span className="text-green-500">+3</span> this month
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Active Bookings</CardTitle>
                <UserIcon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">28</div>
                <p className="text-xs text-muted-foreground">
                  <span className="text-green-500">92%</span> utilization
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Today's Revenue</CardTitle>
                <DollarSignIcon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">SAR 24,850</div>
                <p className="text-xs text-muted-foreground">
                  <span className="text-green-500">+15%</span> from yesterday
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">On Maintenance</CardTitle>
                <WrenchIcon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">4</div>
                <p className="text-xs text-muted-foreground">
                  <span className="text-red-500">2</span> overdue
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-4 grid-cols-1 lg:grid-cols-7">
            <Card className="lg:col-span-4">
              <CardHeader>
                <CardTitle>Daily Operations</CardTitle>
                <CardDescription>Completed rides and revenue trend</CardDescription>
              </CardHeader>
              <CardContent className="pl-2">
                <DashboardChart />
              </CardContent>
            </Card>

            <Card className="lg:col-span-3">
              <CardHeader>
                <CardTitle>Vehicle Distribution</CardTitle>
                <CardDescription>Current fleet composition</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <CarIcon className="h-4 w-4 text-blue-500" />
                      <span className="text-sm">Sedans</span>
                    </div>
                    <span className="text-sm font-medium">12 (29%)</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <GaugeIcon className="h-4 w-4 text-orange-500" />
                      <span className="text-sm">SUVs</span>
                    </div>
                    <span className="text-sm font-medium">18 (43%)</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <BusIcon className="h-4 w-4 text-green-500" />
                      <span className="text-sm">Minibuses</span>
                    </div>
                    <span className="text-sm font-medium">8 (19%)</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <SparklesIcon className="h-4 w-4 text-purple-500" />
                      <span className="text-sm">VIP Vehicles</span>
                    </div>
                    <span className="text-sm font-medium">4 (9%)</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="fleet" className="space-y-4">
          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Available Now</CardTitle>
                <CarIcon className="h-4 w-4 text-green-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">24</div>
                <p className="text-xs text-muted-foreground">
                  <span className="text-green-500">8 SUVs</span>, <span className="text-blue-500">12 Sedans</span>, <span className="text-purple-500">4 VIP</span>
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Average Trip Duration</CardTitle>
                <ClockIcon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">4.2h</div>
                <p className="text-xs text-muted-foreground">
                  <span className="text-green-500">+0.3h</span> from last week
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Most Active Route</CardTitle>
                <MapPinIcon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-xl font-bold">Makkah → Madinah</div>
                <p className="text-xs text-muted-foreground">
                  42 trips this week
                </p>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Maintenance Schedule</CardTitle>
              <CardDescription>Upcoming vehicle services</CardDescription>
            </CardHeader>
            <CardContent>
              {/* <MaintenanceTable /> */}
              <div className="text-center text-sm text-muted-foreground py-8">
                Maintenance records will appear here
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="revenue" className="space-y-4">
          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Monthly Revenue</CardTitle>
                <DollarSignIcon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">SAR 482,500</div>
                <p className="text-xs text-muted-foreground">
                  <span className="text-green-500">+12%</span> from last month
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Revenue per Vehicle</CardTitle>
                <CarIcon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">SAR 11,488</div>
                <p className="text-xs text-muted-foreground">
                  <span className="text-green-500">+8%</span> efficiency gain
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Cancellation Loss</CardTitle>
                <XCircleIcon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">SAR 3,200</div>
                <p className="text-xs text-muted-foreground">
                  <span className="text-red-500">2.8%</span> of total revenue
                </p>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Revenue by Vehicle Type</CardTitle>
              <CardDescription>Breakdown of earnings</CardDescription>
            </CardHeader>
            <CardContent>
              {/* <RevenueChart /> */}
              <div className="text-center text-sm text-muted-foreground py-8">
                Revenue distribution chart will appear here
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}