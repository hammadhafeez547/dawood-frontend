"use client"
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import useAuth from "../hooks/useAuth";
import { getToken } from "../utills/auth";

type PrivateRouteProps = {
  children: React.ReactNode;
};

function PrivateRoute({ children }: PrivateRouteProps) {
  const user = useAuth();
  const router = useRouter();

  // 🔐 Redirect if no user
  useEffect(() => {
    if (!user) {
      router.push("/Admin/Login");
    }
  }, [user, router]);

  // 🧠 Listen to logout/login from other tabs
  useEffect(() => {
    const syncLogin = () => {
      const token = getToken();
      if (!token) {
        router.push("/Admin/Login");
      }
    };

    window.addEventListener("storage", syncLogin);

    return () => {
      window.removeEventListener("storage", syncLogin);
    };
  }, [router]);

  if (!user) {
    return <p>Unauthorized - Please log in to access this page</p>;
  }

  return <>{children}</>;
}

export default PrivateRoute;
