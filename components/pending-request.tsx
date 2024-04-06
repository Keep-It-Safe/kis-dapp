"use client";

import { HoverEffect } from "@/components/ui/card-hover-effect";
import { Button } from "@nextui-org/react";
import { useState, useEffect } from "react";
import { useKeepItSafeContract } from "@/hooks/useKeepItSafe";
import { useWallets, usePrivy } from "@privy-io/react-auth";

export default function PendingRequest() {
  const { keepItSafeContract } = useKeepItSafeContract();
  const { wallets } = useWallets();
  const wallet = wallets[0];

  useEffect(()=>{
    const getStudentsRequests = async() => {
      if(keepItSafeContract){
        const requestsData = await keepItSafeContract.getAllRequestsForInstitutes();
        const updatedRequests = await Promise.all(requestsData.map(async (request: any) => {
          const studentDetails = await getStudentDetails(request[0]);
          return {
            studentDetails,
            docType: request[1],
            exists: request[2]
          };
        }));
        console.log(updatedRequests);
        
        // setRequests(updatedRequests);
      }
    }
    getStudentsRequests();
  },[])

  async function getStudentDetails(studentAddress: any) {
    // Call your contract function to get student details here
    // Assuming you have a function `getStudentDetails` to fetch student details
    const studentDetails = await keepItSafeContract.getStudentDetails(studentAddress);
    return studentDetails;
  }

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
