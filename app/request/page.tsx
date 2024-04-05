"use client";

import { useWallets, usePrivy } from "@privy-io/react-auth";
import { useEffect, useState } from "react";
import axios from "axios";
import PendingRequest from "../../components/pending-request";
import RaiseRequest from "../../components/raise-request";

export default function RequestPage() {
  const { wallets } = useWallets();
  const wallet = wallets[0];
  const [isUniversity, setIsUniversity] = useState<Boolean>(false);
  const [isLoading, setIsLoading] = useState<Boolean>(false);
  useEffect(() => {
    setIsLoading(true);
    axios.get(`/api/findUser?address=${wallet?.address}`).then(
      (response) => {
        setIsUniversity(response.data.isUniversity);
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
