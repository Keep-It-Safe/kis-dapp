"use client";

import { HoverEffect } from "@/components/ui/card-hover-effect";
import { useState, useEffect } from "react";
import { useKeepItSafeContract } from "@/hooks/useKeepItSafe";
import { useWallets, usePrivy } from "@privy-io/react-auth";
import { Card, CardBody, Button, CardHeader} from "@nextui-org/react";

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
      {projects.map((project, index) => (
        <Card shadow="sm" key={index} isPressable onPress={() => console.log("item pressed")}>
          <CardHeader className="justify-between">
            <p>{project.title}</p>
            <p>{project.name}</p>
          </CardHeader>
          <CardBody className="flex">
            <Button>
                Approve
            </Button>
            <Button>
                Approve
            </Button>
          </CardBody>
        </Card>
      ))}
    </div>
  );
}

export const projects = [
  {
    title: "ID Card",
    name: "Vaibhav"
  },
  {
    title: "Gradesheet",
    name: "Abhishek"
  },
  {
    title: "Letter of Recommendation",
    name: "Dhrupad Sah"
  },
];
