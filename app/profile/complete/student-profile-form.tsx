"use client";

import { useState, useEffect } from "react";
import { Input, Button } from "@nextui-org/react";
import { useKeepItSafeContract } from "@/hooks/useKeepItSafe";
import { usePrivy, useWallets } from "@privy-io/react-auth";
import axios from "axios";

export default function StudentProfileForm() {
  const [studentName, setStudentName] = useState<String>();
  const { keepItSafeContract } = useKeepItSafeContract();
  const { ready, authenticated, login, user, linkEmail } = usePrivy();
  const { wallets } = useWallets();
  const wallet = wallets[0];
  
  const submitDetails = async () => {
    if (user?.email) {
      const email = user.email.address.toString();
      const indexAt = email.indexOf("@");
      let indexDot = email.length;
      for (let i = indexAt; i < email.length; i++) {
        if (email[i] === ".") {
          indexDot = i;
          break;
        }
      }
      const _domain = email.slice(indexAt + 1, indexDot);
      console.log(_domain);
      await axios
      .patch(`/api/updateProfile?address=${wallet.address}`)
      .then(
        (response) => {
          console.log(response);
        },
        (error) => {
          console.log(error);
        }
      );
      const instituteAddress = await keepItSafeContract?.getInstituteAddress(_domain);
      console.log(instituteAddress);
      // const studentDet = await keepItSafeContract?.getStudentDetails(wallet.address);
      // console.log(studentDet);
      
      const tx = keepItSafeContract?.addStudent(studentName, instituteAddress, _domain);
      console.log("Student Registered Success!!!");
    } else {
      console.log("User email is undefined");
    }
  };
  
  return (
    <div className="relative flex flex-col  h-[100vh] items-center mt-56 mx-10">
      <Input
        autoFocus
        label="Full name"
        placeholder="Enter your name"
        variant="bordered"
        onChange={(e) => setStudentName(e.target.value)}
      />
      <Button onClick={submitDetails}>Submit</Button>
    </div>
  );
}