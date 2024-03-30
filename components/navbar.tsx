"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import Link from "next/link";
import { cn } from "@/utils/cn";
import { usePrivy } from "@privy-io/react-auth";

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
        <button
          onClick={shouldLogin ? login : logout}
          className={shouldLogin ? "text-green-300" : "text-red-300"}
        >
          {shouldLogin ? "Login" : "Logout"}
        </button>
      </Menu>
    </div>
  );
}
