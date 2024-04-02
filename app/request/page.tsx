"use client";

import { useWallets } from "@privy-io/react-auth";
import { useEffect, useState } from "react";
import axios from "axios";
import PendingRequest from "../../components/pending-request";
import RaiseRequest from "../../components/raise-request";

export default function RequestPage() {
  const { wallets } = useWallets();
  const wallet = wallets[0];
  const [isUniversity, setIsUniversity] = useState<Boolean>(false);
  useEffect(() => {
    axios.get(`/api/findUser?address=${wallet.address}`).then(
      (response) => {
        setIsUniversity(response.data.isUniversity === "true");
      },
      (error) => {
        console.log(error);
      }
    );
  }, []);

  return isUniversity? <PendingRequest/>:<RaiseRequest/>
}
