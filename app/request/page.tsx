"use client";

import { useWallets, usePrivy } from "@privy-io/react-auth";
import { useEffect, useState } from "react";
import { useRouter } from 'next/navigation';
import axios from "axios";
import PendingRequest from "../../components/pending-request";
import RaiseRequest from "../../components/raise-request";

export default function RequestPage() {
  const router = useRouter();
  const { wallets } = useWallets();
  const wallet = wallets[0];
  const [isUniversity, setIsUniversity] = useState<Boolean>(false);
  const [isLoading, setIsLoading] = useState<Boolean>(false);
  const [isProfileComplete, setIsProfileComplete] = useState<Boolean>(false);
  useEffect(() => {
    setIsLoading(true);
    axios.get(`/api/findUser?address=${wallet?.address}`).then(
      (response) => {
        setIsUniversity(response.data.isUniversity);
        setIsProfileComplete(response.data.isProfileComplete);
        if(!isProfileComplete) {
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
