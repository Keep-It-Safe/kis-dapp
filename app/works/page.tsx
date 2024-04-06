// pages/how-it-works.js
"use client";
import React from "react";
import { Image } from "@nextui-org/react";

const HowItWorksPage = () => {
  return (
    <div>
      <div className="h-[30vh] flex flex-col">
        <div className="text-6xl mt-[8%] flex-start ml-[3%]">
          {"How it Works??"}
        </div>
      </div>
        <Image
          className="ml-[45%]"
          width={1000}
          height={800}
          alt="NextUI hero Image with delay"
          src="workflow.png"
        />
    </div>
  );
};

export default HowItWorksPage;
