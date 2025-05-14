"use client"
import { useState } from "react";
import axios from "axios";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "recharts";
import useAuth from "@/app/hooks/useAuth";

export default function SecuritySettingsPage() {
  const [formData, setFormData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");

        
      
       

      const res = await axios.put("http://localhost:4000/auth/change-password", {...formData , user:user}, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      alert(res.data.message);
      alert("Password changed successfully. Please login again.");
localStorage.removeItem("token");
window.location.href = "/Admin/Login";
    } catch (err) {
      alert(err.response?.data?.message || "Something went wrong");
    }
  };

  return (
  
     <div className="space-y-6">
     <h1 className="text-3xl font-bold">Security Settings</h1>
     <Card>
       <CardHeader>
         <CardTitle>Change Password</CardTitle>
         <CardDescription>Ensure your account is using a long, random password to stay secure.</CardDescription>
       </CardHeader>
       <CardContent>
         <div className="space-y-4">
         {[
  { id: "currentPassword", label: "Current Password" },
  { id: "newPassword", label: "New Password" },
  { id: "confirmPassword", label: "Confirm New Password" }
].map(({ id, label }) => (
  <div className="space-y-2" key={id}>
    <Label>{label}</Label>
    <Input
      id={id}
      type="password"
      value={formData[id]}
      onChange={handleChange}
    />
  </div>
))}

        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded" onClick={handleSubmit}>Update Password</button>
         </div>
       </CardContent>
     </Card>
   </div>
  );
}
