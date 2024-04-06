"use client";

import { Divider } from "@nextui-org/react";

export default function StudentProfile() {
  return (
    // <div className="h-[100vh] flex justify-center items-center flex-col">
    //   <div className="mb-[1%]">
    //     <h1 className="text-6xl">Profile</h1>
    //     <div className="h-20 flex justify-around">
    //         <div>Expiring docs</div>
    //         <Divider orientation="vertical" className="bg-slate-400"/>
    //         <div>Permanent docs</div>
    //     </div>
    //   </div>
    // </div>
    <div className="h-[100vh] flex flex-col">
        <div className="text-6xl mt-[15%] flex-start ml-[20%]">
            Profile
        </div>
    </div> 
  );

};

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
    },
];
