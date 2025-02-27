import Image from "next/image";
import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";

const Navbar = async () => {
  return (
    <header className="w-full py-4 px-8 flex justify-between items-center">
      <Image
        src="/logo1.svg"
        width={40}
        height={40}
        alt="Snapchat logo"
        className="cursor-pointer"
      />
      <div className="flex space-x-1">
        <Button className="bg-transparent hover:bg-primary/5 text-black">
          Stories
        </Button>
        <Button className="bg-transparent hover:bg-primary/5 text-black">
          Spotlight
        </Button>
        <Button
          asChild
          className="bg-transparent hover:bg-primary/5 text-black"
        >
          <Link href={"/chat"}> Chat</Link>
        </Button>
      </div>
      <div className="flex  gap-4 space-x-2">
        <Button>Login</Button>

        <Button className="">Sign-Up</Button>
        <form>
          <Button className="bg-black text-white rounded-full p-3 text-xs md:text-sm">
            <LogOut className="cursor-pointer" />
          </Button>
        </form>
      </div>
    </header>
  );
};
export default Navbar;
