"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import Link from "next/link";
import { cn } from "@/utils/cn";
import { usePrivy } from "@privy-io/react-auth";
import { toast } from 'react-hot-toast';
// import HowItWorks from "@/app/works/howItWorks";

export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="" />
    </div>
  );
}


function Navbar({ className }: { className?: string }) {
 

  const { ready, authenticated, login, logout, user} = usePrivy();

  const shouldLogin = !ready || (ready && !authenticated);
  const [active, setActive] = useState<string | null>(null);

  const logoutFunction = () => {
    logout();
    toast.success("Logout successful")
  }

  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-4xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <Link href="/">Home</Link>
        <Link
          href="/request"
          className={shouldLogin || !user?.email ? "pointer-events-none" : ""}
        >
          Request
        </Link>
        <Link
          href="/profile"
          className={shouldLogin || !user?.email ? "pointer-events-none" : ""}
        >
          Profile
        </Link>
        <Link href="/works">Works</Link>
        <button
          onClick={shouldLogin ? login : logoutFunction}
          className={shouldLogin ? "text-green-300" : "text-red-300"}
        >
          {shouldLogin ? "Login" : "Logout"}
        </button>
      </Menu>
    </div>
  );
}
