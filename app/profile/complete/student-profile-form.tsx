"use client";

import { useState } from "react";
import { Input, Button } from "@nextui-org/react";
export default function StudentProfileForm() {
  const [studentName, setStudentName] = useState<String>();
  console.log(studentName);
  const submitDetails = () => {
    //profile complete api call to add
  }
  return (
    <div className="relative flex flex-col  h-[100vh] items-center mt-56 mx-10">
      <Input
        autoFocus
        label="Full name"
        placeholder="Enter your name"
        variant="bordered"
        onChange={(e) => setStudentName(e.target.value)}
      />
      <Button onClick={submitDetails}>
        Submit
      </Button>
    </div>
  );
}
