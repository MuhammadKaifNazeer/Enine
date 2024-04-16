"use client";

import React from "react";
import { useRouter } from "next/navigation";

const Home = () => {
  const router = useRouter();
  router.push("/notes");
  return <></>;
};

export default Home;
