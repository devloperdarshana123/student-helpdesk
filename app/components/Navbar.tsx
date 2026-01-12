"use client";

import { useState } from "react";
import Link from "next/link";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header
      className="
        sticky top-0 z-50
        bg-white/90 backdrop-blur-md
        border-b border-gray-200
      "
    >
      <div className="w-full px-6 py-4 flex items-center justify-between">

        {/* LOGO */}
        <Link
          href="/"
          className="text-lg font-bold text-emerald-700 whitespace-nowrap"
        >
          Student Helpdesk
        </Link>

        {/* MOBILE TOGGLE */}
        <div className="lg:hidden">
          <button
            aria-label="Toggle navigation"
            onClick={() => setOpen((s) => !s)}
            className="p-2 rounded-md text-gray-700 hover:bg-gray-100"
          >
            {open ? "✕" : "☰"}
          </button>
        </div>

        {/* NAV LINKS */}
        <nav
          className={`${open ? "block" : "hidden"} lg:block absolute lg:static right-6 lg:right-auto top-full lg:top-auto mt-2 lg:mt-0
             bg-white lg:bg-transparent rounded-lg lg:rounded-none
             shadow-md lg:shadow-none p-4 lg:p-0
             w-[calc(100%-48px)] lg:w-auto`}
        >
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4 lg:gap-6 text-sm font-medium text-gray-600">

            {/* COMMON LINKS */}
            <Link href="/" className="hover:text-emerald-600 transition">
              Home
            </Link>

            <Link href="/#features" className="hover:text-emerald-600 transition">
              Features
            </Link>

            <Link href="/#how-it-works" className="hover:text-emerald-600 transition">
              How It Works
            </Link>

            <Link href="/#support" className="hover:text-emerald-600 transition">
              Support
            </Link>

            <Link href="/#contact" className="hover:text-emerald-600 transition">
              Contact
            </Link>

            {/* SIGNED OUT */}
            <SignedOut>
              <Link href="/sign-in" className="hover:text-emerald-600 transition">
                Login
              </Link>

              <Link
                href="/sign-up"
                className="
                  px-5 py-2 rounded-full
                  bg-gradient-to-r from-emerald-400 to-green-500
                  text-white text-sm shadow-md font-semibold
                  hover:scale-105 transition-all whitespace-nowrap
                "
              >
                Get Started
              </Link>
            </SignedOut>

            {/* SIGNED IN */}
        <SignedIn>
 

  <UserButton afterSignOutUrl="/" />
</SignedIn>


          </div>
        </nav>
      </div>
    </header>
  );
}
