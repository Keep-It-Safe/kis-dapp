"use client";

import { HoverEffect } from "@/components/ui/card-hover-effect";
import { Card, CardBody, Button, CardHeader} from "@nextui-org/react";

export default function PendingRequest() {
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
