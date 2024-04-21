"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Loader from "@/components/Loader/Loader";

const Home = () => {
  const router = useRouter();
  router.push("/notes");
  return (
    <>
      <Loader />
    </>
  );
};

export default Home;
