"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { useWallets } from "@privy-io/react-auth";
import axios from "axios";
export default function AuroraBackgroundDemo() {
    const router = useRouter();
    const { wallets } = useWallets();
    const wallet = wallets[0];
    const [isUniversity, setIsUniversity] = useState<Boolean>(false);
    const [isLoading, setIsLoading] = useState<Boolean>(false);
    useEffect(() => {
      setIsLoading(true);
      axios.get(`/api/findUser?address=${wallet?.address}`).then(
        (response) => {
          setIsUniversity(response.data.isUniversity);
          if(!response.data.isProfileComplete) {
              router.push('/profile/complete');
          }
          console.log(response.data);
          setIsLoading(false);
        },
        (error) => {
          console.log(error);
        }
      );
    }, []);
  
    return isLoading?<h1>Loading...</h1>:(isUniversity? <h1>University</h1>:<h1>Student</h1>)
}
