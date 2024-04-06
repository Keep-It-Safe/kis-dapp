// RaiseRequest.js
import { HoverEffect } from "./ui/card-hover-effect";
import { Button, select } from "@nextui-org/react";
import { useState } from "react";

export default function RaiseRequest() {
    const [selectedItem, setSelectedItem] = useState<string | null>(null);

    const handleSelect = (title: string) => {
      if (selectedItem === title) {
        // If the clicked card is already selected, deselect it
        setSelectedItem(null);
      } else {
        // If a new card is clicked, deselect the previously selected card (if any) and select the new one
        setSelectedItem(title);
      }
    };

    console.log(selectedItem)

  const projects = [
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
    },
  ];

  return (
    <div className="h-[100vh] flex justify-center items-center flex-col">
      <div className="mb-[1%]">
        <h1 className="text-6xl">Hello, Dhrupad</h1>
        <h1 className="mt-10 text-3xl">Raise a document request here</h1>
        <div className="max-w-5xl mx-auto px-8 mt-5">
          <HoverEffect items={projects} handleSelect={handleSelect} selectedItem={selectedItem} />
        </div>
        <div className="flex flex-col-reverse">
          <Button color="secondary">Submit</Button>
        </div>
      </div>
    </div>
  );
}
