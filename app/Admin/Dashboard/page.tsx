"use client"

import { getToken, parseJwt } from "@/app/utills/auth";
import useUserStore from "@/app/Zustand/UserStore";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const setUser = useUserStore((state) => state.setUser);
  const router = useRouter();

  useEffect(() => {
    const token = getToken();
    if (token) {
      const decoded = parseJwt(token);
      setUser(decoded?.userId || null);
      router.push("/Admin/Dashboard/dashboard"); // redirect here
    } else {
      router.push("/login"); // 🔐 If no token, go to login
    }
  }, []);

  return null; 
