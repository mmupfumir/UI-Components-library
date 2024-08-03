import React from "react";
import { SiReact } from "react-icons/si";
import Link from "next/link";

export default function page() {
    return (
    <div className="inter">
      <Navbar />
    </div>
    );
}

function Navbar() {
  return (
    <nav className="flex m-5 max-sm:mt-9 mx_8 items-center justify-between max-sm:flex-col">
      <Logo />
      <Buttons />
    </nav>
  );
}

function Logo() {
  return (
    <div className="flex gap-2 items-center">
      {/* Icon Container */}
      <div className="bg-black flex items-center justify-center px-2 py-1 rounded-md">
        {/* Icon */}
        <div className="w-[26px] h-[26px] items-center justify-center flex">
          <SiReact className="text-white text-[22px]" />
        </div>
      </div>

      {/* App Name */}
      <div className="flex gap-1 text-[22px]">
        <span className="font-bold text-black">UI</span>
        <span className="text-slate-600">Deck</span>
      </div>
    </div>
  );
}

function Buttons() {
  return(
    <div className="flex gap-2 max-sm:flex-col max-sm:w-full max-sm:mt-8">
      <Link href="/sign-up">
        <button className={"max-sm:w-full text-sm border border-black text-white bg-black p-[8px] px-6 rounded-md"}
        >
          Sign In
        </button>
      </Link>

      <Link href="/sign-up">
        <button className={"max-sm:w-full text-sm border border-black text-black hover:bg-black hover:text-white p-[8px] px-6 rounded-md"}
        >
          Sign Up
        </button>
      </Link>
    </div>
  );
}
