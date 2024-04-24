"use client";
import React from "react";
import MainLayout from "@/layouts/MainLayout";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const Write = () => {
  const { data: session } = useSession();
  const [title, setTitle] = useState("");
  const [Description, setDescription] = useState("");
  const router = useRouter();

  if (!session) {
    router.push("/login"); // Redirect to login if not authenticated
    return null; // Prevent rendering content before redirect
  }

  return (
    <div className="write px-[1rem] md:px-[0rem]" id="write">
      <h1 className="text-3xl font-bold md:mt-10 mt-[5rem] ">Create Note</h1>

      <div className="lg:w-[80%] md:w-[90%] mt-[1rem]  w-[100%] grid gap-4">
        <div className="grid gap-2">
          <Input
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            placeholder="Title"
            className="focus-visible:ring-0 p-3 px-5 text-md h-max rounded-[.5rem]"
          />
          <Textarea
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Description..."
            className="rounded-[.5rem] h-[55vh] focus-visible:ring-0"
          />
        </div>
        <Link href={"/"}>
          <Button className="w-[7rem] flex justify-center items-center text-md h-[2.5rem] rounded-full">
            Create
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default function App() {
  return (
    <MainLayout>
      <Write />
    </MainLayout>
  );
}
