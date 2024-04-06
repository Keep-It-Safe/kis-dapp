// pages/how-it-works.js
"use client";
import React from "react";
import { Image } from "@nextui-org/react";

const HowItWorksPage = () => {
  return (
    <div>
      <div className="h-[80vh] flex flex-col">
        <div className="text-6xl mt-[8%] flex-start ml-[3%]">
          {"How it Works??"}
        </div>
        <ul className="text-3xl mt-[3%] flex-start ml-[3%]">
          <li> - Keep It Safe is a document-vault platform for students and institutes</li><br />
          <li> - Documents are issued by institutes in two forms: Permanent (Soul-bound tokens) and Temporary (Rental NFT’s).</li><br />
          <li> - The institute can issue documents like Degree and Grade sheet that are in the form of Soul Bound Tokens (non-transferrable).</li><br />
          <li> - Soul-bound tokens stay with the user for their life.</li><br />
          <li> - Time-based tokens(Rental NFT’s) implemented using IERC 4907 are only owned by the student for a specific period of time as given by the institute during the time of issuing.</li><br />
          <li> - These time based tokens burn out for the students once the timer ends and the ownership of document NFT returns back to the institute.</li><br />
        </ul>
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
