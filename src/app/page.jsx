import Sidebar from "@/components/Sidebar/Sidebar";
import { ThemeToggler } from "@/components/ThemeToggler/ThemeToggler";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <main className="mt-16 md:ml-[300px] md:mt-3">
        <Sidebar />
        Page
      </main>
    </>
  );
}
