"use client";

import { HoverEffect } from "@/components/ui/card-hover-effect";
import { Card, CardBody, Button, CardHeader} from "@nextui-org/react";

export default function PendingRequest() {
  return (
    <div className="h-[100vh] flex justify-center items-center flex-col mx-10">
      {projects.map((project, index) => (
        <Card key={project.title + project.name} className="w-full mt-4 p-3" shadow="sm" key={index} isPressable onPress={() => console.log("item pressed")}>
          <CardHeader className="justify-between">
            <div>{project.title}</div>
            <div>{project.name}</div>
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
