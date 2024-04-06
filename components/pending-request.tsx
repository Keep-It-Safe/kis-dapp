"use client";

import { Card, CardBody, Button, CardHeader, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Input, useDisclosure } from "@nextui-org/react";

export default function PendingRequest() {
  const {isOpen, onOpen, onOpenChange, onClose} = useDisclosure();
  const submitRequest = () => {
    onClose();
  }
  return (
    <div className="h-[100vh] flex justify-center items-center flex-col mx-10">
      {projects.map((project, index) => (
        <Card className="w-full mt-4 p-3" shadow="sm" key={index}>
          <CardHeader className="justify-between">
              <span>{project.title}</span>
              <span>{project.name}</span>
          </CardHeader>
          <CardBody className="flex flex-row-reverse gap-2">
            <Button color="success" variant="flat" onPress={onOpen}>
              Approve
            </Button>
            <Button color="danger" variant="flat">
              Reject
            </Button>
          </CardBody>
        </Card>
      ))}
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="top-center">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Upload document</ModalHeader>
              <ModalBody>
                <Input
                  type="file"
                  autoFocus
                  label="Image"
                  placeholder="Upload document"
                  variant="bordered"
                />
              </ModalBody>
              <ModalFooter>
                <Button color="primary" onPress={submitRequest}>
                  Submit and Approve
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}

export const projects = [
  {
    title: "ID Card",
    name: "Vaibhav",
  },
  {
    title: "Gradesheet",
    name: "Abhishek",
  },
  {
    title: "Letter of Recommendation",
    name: "Dhrupad Sah",
  },
];
