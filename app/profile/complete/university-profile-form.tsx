"use client";

import { useState, useEffect } from "react";
import { Input, Button } from "@nextui-org/react";
import { useKeepItSafeContract } from "@/hooks/useKeepItSafe";
import { usePrivy, useWallets } from "@privy-io/react-auth";
import axios from "axios";

export default function UniversityProfileForm() {
  const [universityName, setUniversityName] = useState<String>();
  const { keepItSafeContract } = useKeepItSafeContract();
  const [universityLocation, setUniversityLocation] = useState<String>();
  const { ready, authenticated, login, user, linkEmail } = usePrivy();
  const { wallets } = useWallets();
  const wallet = wallets[0];


  const submitDetails = async() => {
    console.log(user);
    if (user?.email) {
      const email = user.email.address.toString();
      console.log(email)
      const indexAt = email.indexOf("@");
      let indexDot = email.length;
      for (let i = indexAt; i < email.length; i++) {
        if (email[i] === ".") {
          indexDot = i;
          break;
        }
      }
      console.log(email);
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
      console.log(keepItSafeContract);
      const instituteAddress = await keepItSafeContract?.getInstituteAddress(_domain);
      instituteAddress.wait();
      console.log(instituteAddress);
      
    } else {
      console.log("User email is undefined");
    }
  };
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