import React from "react";
import { SiReact } from "react-icons/si";
import Link from "next/link";

function Page() {
  return (
    <div className="inter">
      <Navbar />
      <CTASection />
    </div>
  );
}

function CTASection() {
  return (
    <div className="flex flex-col mx-16 items-center mt-[120px] gap-6">
      <h2 className="font-bold text-2xl text-center">
        Manage and Create Your React Components
        <span className="text-gray-400"> Effortlessly!</span>
      </h2>
      {/* */}
      <p className="text-center text-[15px] w-[510px] max-sm:w-full" text-slate-500>
        Save time by reusing your favourite components. Store them in a centralized database and
        create new components with ease. Enhance your development workflow by having quick access
        to a library of reusable components and ensure consistency acorss your projects
      </p>

      <button className={"block bg-black rounded-md px-9 py-3 text-sm font-medium text-white hover:bg-customGray hover:text-black"}
      type="button"
      >
        {"Get Started"}
      </button>
    </div>
  );
}

function Navbar() {
  return (
    <nav className="flex m-5 max-sm:mt-9 mx-8 items-center justify-between max-sm:flex-col">
      <Logo />
      <Buttons />
    </nav>
  );
}

function Logo() {
  return (
    <div className="flex gap-2 items-center">
      <div className="bg-black flex items-center justify-center px-2 py-1 rounded-md">
        <div className="w-[26px] h-[26px] items-center justify-center flex">
          <SiReact className="text-white text-[22px]" />
        </div>
      </div>
      <div className="flex gap-1 text-[22px]">
        <span className="font-bold text-black">UI</span>
        <span className="text-slate-600">Deck</span>
      </div>
    </div>
  );
}

function Buttons() {
  return (
    <div className="flex gap-2 max-sm:flex-col max-sm:w-full max-sm:mt-8">
      <Link href="/sign-in">
        <button className="max-sm:w-full text-sm border border-black text-white bg-black p-[8px] px-6 rounded-md">
          Sign In
        </button>
      </Link>
      <Link href="/sign-up">
        <button className="max-sm:w-full text-sm bg-customGray text-black hover:bg-black hover:text-white p-[8px] px-6 rounded-md">
          Sign Up
        </button>
      </Link>
    </div>
  );
}

export default Page;
