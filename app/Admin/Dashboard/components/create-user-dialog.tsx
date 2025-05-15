"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { UserPlus } from "lucide-react"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog"

export function CreateUserDialog() {
  const [open, setOpen] = useState(false)
  const [formData, setFormData] = useState({
    firstName: "",
    surname: "",
    email: "",
    idType: "",
    phone: "",
    initialBalance: 0,
  })

  // Handle form input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here, you would typically submit the form data to an API or server
    console.log("Form Submitted:", formData)
    setOpen(false)
    // Reset form data after submission
    setFormData({
      firstName: "",
      surname: "",
      email: "",
      idType: "",
      phone: "",
      initialBalance: 0,
    })
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>
          <UserPlus className="mr-2 h-4 w-4" />
          Add User
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[525px]">
        <DialogHeader>
          <DialogTitle>Create New User</DialogTitle>
          <DialogDescription>
            Add a new user to the platform. They will receive an email to set up their account.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name</Label>
                <Input
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="Enter first name"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="surname">Surname</Label>
                <Input
                  id="surname"
                  name="surname"
                  value={formData.surname}
                  onChange={handleChange}
                  placeholder="Enter surname"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="user@example.com"
                required
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="idType">ID Type</Label>
              <Select
  // @ts-ignore Temporarily ignore typing issues (not recommended for production code)
  id="idType"
  name="idType"
  value={formData.idType}
  onValueChange={(value: string) => setFormData({ ...formData, idType: value })}
  required
>
  <SelectTrigger>
    <SelectValue placeholder="Select ID type" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="ID">ID</SelectItem>
    <SelectItem value="Passport">Passport</SelectItem>
    <SelectItem value="Asylum Seeker">Asylum Seeker</SelectItem>
  </SelectContent>
</Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+27"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="initialBalance">Initial Balance (ZAR)</Label>
              <Input
                id="initialBalance"
                name="initialBalance"
                type="number"
                value={formData.initialBalance}
                onChange={handleChange}
                placeholder="0.00"
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="button" variant="outline" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button type="submit">Create User</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
