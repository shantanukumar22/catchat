import Navbar from "@/components/shared/navbar";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-white ">
      <div className="min-h-screen flex flex-col items-center justify-center max-w-7xl mx-auto">
        <Navbar />
        <main className="flex flex-1 flex-col md:flex-row items-center justify-center px-8 mt-4">
          <div className="flex-1 md:text-left text-center h-full">
            <h1 className="text-4xl md:text-6xl font-bold">CrawChat!</h1>
            <p className="mt-4 text-xl font-semibold">
              The Basic Snapshots Sharing image which gonna let you share the
              pictures Emojis and have some chitchat
            </p>
            <div className="mt-4">
              <p className="mt-2 text-lg font-semibold">
                Let&apos;s get started 🩷
              </p>
            </div>
            {true ? (
              <Button
                asChild
                className="mt-4 bg-black text-white flex items-center rounded-lg gap-2 mx-auto md:mx-0"
              >
                <Link href={"/login"} className="max-w-max">
                  <Image
                    src="/logo1.svg"
                    width={20}
                    height={20}
                    alt="Snapchat logo"
                  />
                  Log in to chat
                </Link>
              </Button>
            ) : (
              <Button
                asChild
                className="mt-4 bg-black text-white flex items-center rounded-lg gap-2 mx-auto md:mx-0"
              >
                <Link href={"/chat"} className="max-w-max">
                  <Image
                    src="/logo.svg"
                    width={20}
                    height={20}
                    alt="Snapchat logo"
                  />
                  Start chatting
                </Link>
              </Button>
            )}
          </div>
          <div className="flex-1 md:w-full md:flex">
            <Image alt="Avatar" width={700} height={700} src="/hero1.jpg" />
          </div>
        </main>
      </div>
    </div>
  );
}
