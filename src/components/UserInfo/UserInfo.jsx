"use client";

import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import {
  DotsHorizontalIcon,
  ExitIcon,
  PersonIcon,
} from "@radix-ui/react-icons";
import { Button } from "../ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function UserInfo() {
  const router = useRouter();

  const { data: session } = useSession();

  const handleLogout = async () => {
    await signOut();
    router.push("/login"); // Redirect to login page after logout
  };

  const trimUsername = (username) => {
    if (username?.length > 20) {
      return username.slice(0, 20) + "...";
    }
    return username;
  };

  return (
    <>
      <div>
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="ghost" className="w-full justify-start">
              <div className="flex justify-between items-center w-full">
                <div className="flex gap-2">
                  <span>{trimUsername(session?.user?.name)}</span>
                </div>
                <DotsHorizontalIcon />
              </div>
            </Button>
          </PopoverTrigger>
          <PopoverContent className="mb-3 w-56 p-3 rounded-[1rem]">
            <div className="space-y-1">
              <Link href="/notes">
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
                onClick={handleLogout}
              >
                <ExitIcon />
                Log Out
              </Button>
            </div>
          </PopoverContent>
        </Popover>
      </div>
    </>
  );
}
