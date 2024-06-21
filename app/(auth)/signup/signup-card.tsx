// import Link from "next/link";
// import { Button } from "@/components/ui/button";
// import Image from "next/image";

// export default function SignupCard() {
//   return (
//     <>
//       <form className="space-y-4">
//         <SignUpButton />
//       </form>
//       <div className="mt-4 text-center text-[13px]">
//         <span>Already have an account? </span>
//         <Link
//           className="text-blue-500 hover:underline text-[13px] mr-1"
//           href="/login"
//         >
//           Log in
//         </Link>
//       </div>
//     </>
//   );
// }

// function SignUpButton() {
//   return (
//     <Button className="w-full flex gap-2">
//       <Image src={"/github.svg"} width={20} height={20} alt="Github logo" />{" "}
//       Sign up with Github
//     </Button>
//   );
// }

import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { PiGoogleLogo } from "react-icons/pi";
import { FaGithub, FaGoogle } from "react-icons/fa6";
import { BsGithub } from "react-icons/bs";

export default function LoginCard() {
  return (
    <>
      <form className="space-y-4">
        <SignUpButton />
      </form>
      <div className="mt-4 text-center text-[13px]">
        <span> been here ? </span>
        <Link
          className="text-blue-500 hover:underline text-[13px] mr-1"
          href="/login"
        >
          Login
        </Link>
      </div>
    </>
  );
}

function SignUpButton() {
  return (
    <div className="flex flex-col gap-4 md:flex-row">
      <Button className="w-full flex gap-2">
        <FaGithub size={17} className="" />
        {/* <Image src={"/github.svg"} width={20} height={20} alt="Github logo" />{" "} */}
        Start with Github
      </Button>
      <span className="  font-bold text-xl mt-2">Or</span>
      <Button className="w-full flex gap-2">
        <FaGoogle className="" size={17} />
        {/* <Image
          src={"/github.svg"}
          width={20}
          height={20}
          alt="Github logo"
        />{" "} */}
        Choose Google
      </Button>
    </div>
  );
}
