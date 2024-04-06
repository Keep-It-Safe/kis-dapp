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
  const [studentRequests, setStudentRequests] = useState<any>(null);

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
        console.log(updatedRequests[1].studentDetails[0]);
        setStudentRequests(updatedRequests);
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
    <div className="h-[100vh] flex justify-center items-center flex-col mx-10">
      {studentRequests?.map((project: any, index: any) => (
        <Card className="w-full mt-4 p-3" shadow="sm" key={index} isPressable onPress={() => console.log("item pressed")}>
          <CardHeader className="justify-between">
            <div>{project.docType}</div>
            <div>{project?.studentDetails[0]}</div>
          </CardHeader>
          <CardBody className="flex flex-row-reverse gap-2">
            <Button color="success" variant="flat">
                Approve
            </Button>
            <Button color="danger" variant="flat">
                Reject
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
