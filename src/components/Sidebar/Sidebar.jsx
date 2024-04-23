"use client";

import React, { useState } from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { Separator } from "../ui/separator";
import {
  CopyIcon,
  GearIcon,
  HamburgerMenuIcon,
  Pencil2Icon,
  PersonIcon,
} from "@radix-ui/react-icons";
import { ThemeToggler } from "../ThemeToggler/ThemeToggler";
import UserInfo from "../UserInfo/UserInfo";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header className="fixed md:hidden w-full top-0 flex border-b items-center justify-between gap-4 bg-background px-4 py-2 md:px-6">
        <Link href={"/"}>
          <h3 className="text-2xl font-bold">Capture</h3>
        </Link>
        <div className="flex items-center justify-end gap-3">
          {!isOpen && <ThemeToggler />}
          <Button
            variant="outline"
            size="icon"
            className="shrink-0 rounded"
            onClick={toggleSidebar}
          >
            <HamburgerMenuIcon className="h-5 w-5" />
            <span className="sr-only">Toggle sidebar</span>
          </Button>
        </div>
      </header>
      <aside
        className={`w-[270px] bg-background max-w-[80%] h-screen duration-500 md:fixed md:left-0 absolute ${
          isOpen ? "left-0" : "left-[-300px]"
        } top-0 z-40 border-r`}
      >
        <div className="h-full px-3 py-4">
          <div className="flex items-center justify-between mb-3">
            <Link href={"/"}>
              <h3 className="mx-3 text-2xl font-bold">Capture</h3>
            </Link>
            <div className="md:block hidden">
              <ThemeToggler />
            </div>
          </div>
          <div className="mt-5">
            <div className="flex flex-col gap-2 w-full">
              <Link href={"/notes"}>
                <Button
                  variant={"ghost"}
                  className="w-full flex gap-2 justify-start items-center"
                >
                  <CopyIcon />
                  Notes
                </Button>
              </Link>
              <Link href={"/account"}>
                <Button
                  variant={"ghost"}
                  className="w-full flex gap-2 justify-start items-center"
                >
                  <PersonIcon />
                  Account
                </Button>
              </Link>
              <Link href={"/settings"}>
                <Button
                  variant={"ghost"}
                  className="w-full flex gap-2 justify-start items-center"
                >
                  <GearIcon />
                  Settings
                </Button>
              </Link>
              <Link href={"/write"}>
                <Button className="w-full flex gap-2 justify-center items-center text-md h-[2.5rem] rounded-full">
                  <Pencil2Icon style={{ width: "20px", height: "20px" }} />
                  Write
                </Button>
              </Link>
            </div>
            <div className="absolute left-0 bottom-3 w-full px-3">
              <Separator className="absolute -top-3 left-0 w-full" />
              <UserInfo />
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
