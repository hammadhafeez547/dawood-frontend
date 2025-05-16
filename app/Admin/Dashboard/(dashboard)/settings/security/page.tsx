"use client"

import { useState, ChangeEvent, FormEvent } from "react"
import axios from "axios"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import useAuth from "@/app/hooks/useAuth"

type PasswordForm = {
  currentPassword: string
  newPassword: string
  confirmPassword: string
}

export default function SecuritySettingsPage() {
  const [formData, setFormData] = useState<PasswordForm>({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  })

  // FIX: Just get user directly (string | null)
  const user = useAuth();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target
    setFormData((prev) => ({ ...prev, [id]: value }))
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    if (!user) {
      alert("User not found. Please log in again.")
      return
    }

    if (formData.newPassword !== formData.confirmPassword) {
      alert("New password and confirm password do not match.")
      return
    }

    try {
      const token = localStorage.getItem("token")

      const res = await axios.put(
        "https://dawood-backend.vercel.app/auth/change-password",
        { ...formData, user },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )

      alert(res.data.message || "Password changed successfully. Please log in again.")
      localStorage.removeItem("token")
      window.location.href = "/Admin/Login"
    } catch (err: any) {
      alert(err.response?.data?.message || "Something went wrong")
    }
  }

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Security Settings</h1>
      <Card>
        <CardHeader>
          <CardTitle>Change Password</CardTitle>
          <CardDescription>
            Ensure your account is using a long, random password to stay secure.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            {[ 
              { id: "currentPassword", label: "Current Password" },
              { id: "newPassword", label: "New Password" },
              { id: "confirmPassword", label: "Confirm New Password" },
            ].map(({ id, label }) => (
              <div className="space-y-2" key={id}>
                <Label htmlFor={id}>{label}</Label>
                <Input
                  id={id}
                  type="password"
                  value={formData[id as keyof PasswordForm]}
                  onChange={handleChange}
                  required
                />
              </div>
            ))}

            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded"
            >
              Update Password
            </button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
