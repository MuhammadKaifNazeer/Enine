"use client";

import React, { useState } from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { Separator } from "../ui/separator";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import {
  BookmarkIcon,
  CopyIcon,
  DashboardIcon,
  DotsHorizontalIcon,
  ExitIcon,
  GearIcon,
  HamburgerMenuIcon,
  HomeIcon,
  Pencil1Icon,
  Pencil2Icon,
  PersonIcon,
} from "@radix-ui/react-icons";
import { ThemeToggler } from "../ThemeToggler/ThemeToggler";
import { useRouter } from "next/navigation";

const Sidebar = () => {
  const router = useRouter();
  const isLoginPage = router.pathname === "/login";
  const isSignupPage = router.pathname === "/signup";

  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  if (!isLoginPage && !isSignupPage) {
    return (
      <>
        <header className="fixed md:hidden w-full top-0 flex border-b items-center justify-between gap-4 bg-background px-4 py-2 md:px-6">
          <Link href={"/"}>
            <h3 className="text-2xl font-bold">Capture</h3>
          </Link>
          <div className="flex items-center justify-end gap-3">
            <ThemeToggler />
            <Button
              variant="outline"
              size="icon"
              className="shrink-0"
              onClick={toggleSidebar}
            >
              <HamburgerMenuIcon className="h-5 w-5" />
              <span className="sr-only">Toggle sidebar</span>
            </Button>
          </div>
        </header>
        <aside
          className={`w-[270px] bg-background max-w-[80%] h-screen duration-500 md:fixed md:left-0 absolute left-${
            isOpen ? "0" : "[-300px]"
          } top-0 z-40 border-r`}
        >
          <div className="h-full px-3 py-4">
            <div className="flex items-center justify-between mb-3">
              <Link href={"/"}>
                <h3 className="mx-3 text-2xl font-bold">Capture</h3>
              </Link>
              <div className="sm:block hidden">
                <ThemeToggler />
              </div>
            </div>
            <div className="mt-5">
              <div className="flex flex-col gap-2 w-full">
                <Link href={"/"}>
                  <Button
                    variant={"ghost"}
                    className="w-full flex gap-2 justify-start items-center"
                  >
                    <CopyIcon />
                    Notes
                  </Button>
                </Link>
                <Link href={"/"}>
                  <Button
                    variant={"ghost"}
                    className="w-full flex gap-2 justify-start items-center"
                  >
                    <PersonIcon />
                    Account
                  </Button>
                </Link>
                <Link href={"/"}>
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
                {/* <h3 className="mx-3 mt-5 mb-2">Categories</h3> */}
                {/* <div className="overflow-y-scroll h-[16rem]">
                <Link href={"/"}>
                  <Button
                    variant={"ghost"}
                    className="w-full flex gap-2 justify-start items-center"
                  >
                    <BookmarkIcon />
                    Office tasks
                  </Button>
                </Link>
                <Link href={"/"}>
                  <Button
                    variant={"ghost"}
                    className="w-full flex gap-2 justify-start items-center"
                  >
                    <BookmarkIcon />
                    Office tasks
                  </Button>
                </Link>
                <Link href={"/"}>
                  <Button
                    variant={"ghost"}
                    className="w-full flex gap-2 justify-start items-center"
                  >
                    <BookmarkIcon />
                    Office tasks
                  </Button>
                </Link>
                <Link href={"/"}>
                  <Button
                    variant={"ghost"}
                    className="w-full flex gap-2 justify-start items-center"
                  >
                    <BookmarkIcon />
                    Office tasks
                  </Button>
                </Link>
                <Link href={"/"}>
                  <Button
                    variant={"ghost"}
                    className="w-full flex gap-2 justify-start items-center"
                  >
                    <BookmarkIcon />
                    Office tasks
                  </Button>
                </Link>
                <Link href={"/"}>
                  <Button
                    variant={"ghost"}
                    className="w-full flex gap-2 justify-start items-center"
                  >
                    <BookmarkIcon />
                    Office tasks
                  </Button>
                </Link>
                <Link href={"/"}>
                  <Button
                    variant={"ghost"}
                    className="w-full flex gap-2 justify-start items-center"
                  >
                    <BookmarkIcon />
                    Office tasks
                  </Button>
                </Link>
                <Link href={"/"}>
                  <Button
                    variant={"ghost"}
                    className="w-full flex gap-2 justify-start items-center"
                  >
                    <BookmarkIcon />
                    Office tasks
                  </Button>
                </Link>
              </div> */}
              </div>
              <div className="absolute left-0 bottom-3 w-full px-3">
                <Separator className="absolute -top-3 left-0 w-full" />
                {/* <Button className="w-full flex gap-2 justify-center items-center text-white h-[2.5rem] text-lg">
                Signin
              </Button> */}
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="ghost" className="w-full justify-start">
                      <div className="flex justify-between items-center w-full">
                        <div className="flex gap-2">
                          <span>Username</span>
                        </div>
                        <DotsHorizontalIcon />
                      </div>
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="mb-3 w-56 p-3 rounded">
                    <div className="space-y-1">
                      <Link href="/">
                        <Button
                          variant={"ghost"}
                          size="sm"
                          className="w-full flex items-center gap-2 justify-start"
                        >
                          <PersonIcon />
                          Account Settings
                        </Button>
                      </Link>
                      <Button
                        variant={"ghost"}
                        size="sm"
                        className="w-full flex items-center gap-2 justify-start"
                      >
                        <ExitIcon />
                        Log Out
                      </Button>
                    </div>
                  </PopoverContent>
                </Popover>
              </div>
            </div>
          </div>
        </aside>
      </>
    );
  }
  return null;
};

export default Sidebar;
