"use client";

import { HoverEffect } from "@/components/ui/card-hover-effect";
import { Button } from "@nextui-org/react";

export default function RaiseRequest() {
  return (
    <div className="h-[100vh] flex justify-center items-center flex-col">
      <div className="mb-[1%]">
        <h1 className="text-6xl">Pending Requests</h1>
        <div className="max-w-5xl mx-auto px-8 mt-5">
          <HoverEffect items={projects} />
        </div>
        <div className="flex flex-col-reverse">
          <Button color="secondary">Submit</Button>
        </div>
      </div>
    </div>
  );
}

export const projects = [
  {
    title: "ID Card",
    description:
      "A technology company that builds economic infrastructure for the internet.",
    link: "",
  },
  {
    title: "Degree",
    description:
      "A streaming service that offers a wide variety of award-winning TV shows, movies, anime",
    link: "",
  },
  {
    title: "Marksheet",
    description:
      "A multinational technology company that specializes in Internet-related services and products.",
    link: "",
  },
  {
    title: "Marksheet",
    description:
      "A multinational technology company that specializes in Internet-related services and products.",
    link: "",
  }
];
