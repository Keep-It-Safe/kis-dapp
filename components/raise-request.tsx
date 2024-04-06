// RaiseRequest.js
import { HoverEffect } from "./ui/card-hover-effect";
import { Button } from "@nextui-org/react";
import { useState, useEffect } from "react";
import { useKeepItSafeContract } from "@/hooks/useKeepItSafe";
import { useWallets, usePrivy } from "@privy-io/react-auth";

export default function RaiseRequest() {
  const [selectedValue, setselectedValue] = useState<string | null>(null);
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const { keepItSafeContract } = useKeepItSafeContract();
  const { wallets } = useWallets();
  const wallet = wallets[0];
  const [studentDetails, setStudentDetails] = useState(null);
  const { ready, authenticated, login, user, linkEmail } = usePrivy();

  const handleSelect = (title: string) => {
    if (selectedValue === title) {
      // If the clicked card is already selected, deselect it
      setselectedValue(null);
    } else {
      // If a new card is clicked, deselect the previously selected card (if any) and select the new one
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

  console.log(selectedValue);

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
      console.log("Selected Project:", selectedValue);
    }
  };

  console.log(selectedValue);
  const projects = [
    {
      title: "ID Card",
      description:
        "A technology company that builds economic infrastructure for the internet.",
      link: "",
      value: "idcard",
    },
    {
      title: "Degree",
      description:
        "A streaming service that offers a wide variety of award-winning TV shows, movies, anime",
      link: "",
      value: "degree",
    },
    {
      title: "Marksheet",
      description:
        "A multinational technology company that specializes in Internet-related services and products.",
      link: "",
      value: "gradesheet",
    },
    {
      title: "Letter Of Recommendation",
      description:
        "Another multinational technology company that specializes in Internet-related services and products.",
      link: "",
      value: "lor",
    },
  ];
  console.log(studentDetails)
  return (
    <div className="h-[100vh] flex justify-center items-center flex-col">
      <div className="mb-[1%]">
        <h1 className="text-6xl">Hello, Dhrupad</h1>
        <h1 className="mt-10 text-3xl">Raise a document request here</h1>
        <div className="max-w-5xl mx-auto px-8 mt-5">
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
    </div>
  );
}
