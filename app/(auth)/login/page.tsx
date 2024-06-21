import Image from "next/image";
import Link from "next/link";
import LoginCard from "./login-card";

export default async function Login() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="p-8 bg-white rounded-lg shadow-md min-w-80">
        <Link href={"/"} className="flex justify-center mb-4">
          <Image src={"/logo1.svg"} width={40} height={40} alt="logo" />
        </Link>
        <h1 className="text-2xl font-bold text-center mb-4">
          Log in to CatChat
        </h1>
        <LoginCard />
      </div>
    </div>
  );
}
