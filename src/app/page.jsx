import { ThemeToggler } from "@/components/ThemeToggler/ThemeToggler";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="flex flex-col gap-3 justify-center items-center h-screen">
        <h1>Hello World!</h1>
        <div className="flex gap-3 justify-center items-center">
          <Button className="text-white">Button</Button>
          <ThemeToggler />
        </div>
      </div>
    </>
  );
}
