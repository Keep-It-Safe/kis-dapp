"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import Link from "next/link";
import { cn } from "@/utils/cn";
import { usePrivy } from "@privy-io/react-auth";
import { toast } from "react-hot-toast";

export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="" />
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const { ready, authenticated, login, logout, user } = usePrivy();

  const shouldLogin = !ready || (ready && !authenticated);
  const [active, setActive] = useState<string | null>(null);

  const logoutFunction = () => {
    logout();
    toast.success("Logout successful");
  };

  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-4xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <button>
          <Link href="/" className="text-lg">Home</Link>
        </button>
        <button>
          <Link
            href="/request"
            className={`text-lg ${shouldLogin || !user?.email ? "pointer-events-none" : ""}`}
          >
            Request
          </Link>
        </button>
        <button>
          <Link
            href="/profile"
            className={`text-lg ${shouldLogin || !user?.email ? "pointer-events-none" : ""}`}
          >
            Profile
          </Link>
        </button>
        <button
          onClick={shouldLogin ? login : logoutFunction}
          className={`px-8 py-2 rounded-full bg-gradient-to-b ${
            shouldLogin
              ? "from-blue-500 to-blue-600"
              : " from-red-500 to-red-600"
          } text-white focus:ring-2 focus:ring-blue-400 hover:shadow-xl transition duration-200`}
        >
          {shouldLogin ? "Login" : "Logout"}
        </button>
      </Menu>
    </div>
  );
}
