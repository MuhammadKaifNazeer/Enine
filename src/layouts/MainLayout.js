"use client";

import React from "react";
import Sidebar from "@/components/Sidebar/Sidebar";

const MainLayout = ({ children }) => {
  return (
    <div className="main-container">
      <Sidebar />
      <main className="mt-16 md:ml-[285px] md:mt-3">{children}</main>
    </div>
  );
};

export default MainLayout;
