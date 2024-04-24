"use client";

import React from "react";
import MainLayout from "@/layouts/MainLayout";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

// temp use client

const Account = () => {
  const { data: session } = useSession();
  const router = useRouter();

  if (!session) {
    router.push("/login"); // Redirect to login if not authenticated
    return null; // Prevent rendering content before redirect
  }
  return <div>Account</div>;
};

export default function App() {
  return (
    <MainLayout>
      <Account />
    </MainLayout>
  );
}
