"use client";

import { useState } from "react";
import { Input, Button } from "@nextui-org/react";
export default function UniversityProfileForm() {
  const [universityName, setUniversityName] = useState<String>();
  const [universityLocation, setUniversityLocation] = useState<String>();
  console.log(universityName);
  const submitDetails = () => {
    //profile complete api call to add
  }
  return (
    <div className="relative flex flex-col  h-[100vh] items-center mt-56 mx-10">
      <Input
        autoFocus
        label="University name"
        placeholder="Enter university name"
        variant="bordered"
        onChange={(e) => setUniversityName(e.target.value)}
      />
      <Input
        autoFocus
        label="University location"
        placeholder="Enter university location"
        variant="bordered"
        onChange={(e) => setUniversityLocation(e.target.value)}
      />
      <Button onClick={submitDetails}>
        Submit
      </Button>
    </div>
  );
}