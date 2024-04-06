"use client";

import { HoverEffect } from "@/components/ui/card-hover-effect";
import { Button } from "@nextui-org/react";
import { useState, useEffect } from "react";
import { useKeepItSafeContract } from "@/hooks/useKeepItSafe";
import { useWallets, usePrivy } from "@privy-io/react-auth";
import { CircularProgress } from "@nextui-org/react";

export default function GridBackgroundDemo() {
  const [selectedValue, setselectedValue] = useState<string | null>(null);
  const { keepItSafeContract } = useKeepItSafeContract();
  const { wallets } = useWallets();
  const wallet = wallets[0];
  const [studentDetails, setStudentDetails] = useState<any>(null);
  const { ready, authenticated, login, user, linkEmail } = usePrivy();

  const handleSelect = (title: string) => {
    if (selectedValue === title) {
      setselectedValue(null);
    } else {
      setselectedValue(title);
    }
  };

  useEffect(() => {
    const getStudentDetails = async () => {
      if (keepItSafeContract) {
        const studentDetails = await keepItSafeContract.getStudentDetails(
          wallet.address
        );
        setStudentDetails(studentDetails);
      }
    };
    getStudentDetails();
  }, []);

  const handleSubmit = async () => {
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
      const instituteAddress = await keepItSafeContract?.getInstituteAddress(
        _domain
      );
      console.log(instituteAddress);
      if (keepItSafeContract) {
        const tx = await keepItSafeContract.requestDocument(
          instituteAddress,
          selectedValue
        );
      }
    }
  };

  console.log(selectedValue);
  const projects = [
    {
      title: "ID Card",
      description:
        "Your college issued Identity Card with a pre-fixed expiry timer.",
      link: "",
      value: "idcard",
    },
    {
      title: "Degree",
      description:
        "This will be issued after succesful completion of your enrolled programme/degree.",
      link: "",
      value: "degree",
    },
    {
      title: "Gradesheet",
      description:
        "A consolidated marksheet with all your GPA for all the semesters.",
      link: "",
      value: "gradesheet",
    },
    {
      title: "Letter Of Recommendation",
      description:
        "You might need a fancy Letter of Recommendation to apply in your favorite company!",
      link: "",
      value: "lor",
    },
  ];
  console.log(studentDetails);

  return (
    <div className="h-[50rem] mt-16 w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex flex-col items-center justify-center">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <p className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-5">
        Hello, {studentDetails ? studentDetails[0] : <CircularProgress/>}
      </p>
      {/* <p className="text-2xl sm:text-4xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
      Raise a document request here
      </p> */}
      <div className="max-w-5xl mx-auto px-8 mt-1">
        <HoverEffect
          items={projects}
          handleSelect={handleSelect}
          selectedItem={selectedValue}
        />
      </div>
      <div className="flex flex-col-reverse">
        <Button color="secondary" onClick={handleSubmit}>
          Submit
        </Button>
      </div>
    </div>
  );
}
