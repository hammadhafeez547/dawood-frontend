import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { SidebarProvider } from "./components/sidebar-provider"
import PrivateRoute from "@/app/HOC/PrivateRoute"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Admin Dashboard",
  description: "Admin dashboard for Dawood Tour and Travels",
    generator: 'Muhammad Shoaib'
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    // <html lang="en">
    //   <body className={inter.className}>
    <div>
      <PrivateRoute>
        <SidebarProvider>{children}</SidebarProvider>
        </PrivateRoute>
        </div>
    //   </body>
    // </html>
  )
}
