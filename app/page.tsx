"use client";

import { motion } from "framer-motion";
import React from "react";
import { AuroraBackground } from "../components/ui/aurora-background";
import { usePrivy, useWallets } from "@privy-io/react-auth";
import { TextGenerateEffect } from "@/components/ui/text-generate";

export default function Home() {
  const { ready, authenticated, login, user, linkEmail } = usePrivy();
  const { wallets } = useWallets();
  const wallet = wallets[0];
  const shouldLogin = !ready || (ready && !authenticated);
  const words = `Let's Keep It Safe`;
  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4"
      >
        <div className="text-3xl md:text-7xl font-bold dark:text-white text-center">
            <TextGenerateEffect words={words}/>
        </div>
        <div className="font-extralight text-base md:text-4xl dark:text-neutral-200 py-4">
          All your documents in one place
        </div>
        <button
          className="relative inline-flex h-12 overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
          disabled={user?.email && !shouldLogin}
          onClick={shouldLogin?login:user?.email?() => {}:linkEmail}
        >
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
          <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-6 py-1 text-lg font-medium text-white backdrop-blur-3xl">
            {shouldLogin
              ? "Get started"
              : user?.email?wallet?.address.substring(0, 8) +
              "..." +
              wallet?.address.substring(36, wallet?.address.length):"Complete Profile"}
          </span>
        </button>
      </motion.div>
    </AuroraBackground>
  );
}
