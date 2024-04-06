"use client";

import { Button, Card, CardBody, Image, CardFooter, CircularProgress } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { useKeepItSafeContract } from "@/hooks/useKeepItSafe";
import { useWallets, usePrivy } from "@privy-io/react-auth";

export default function StudentProfile() {
  const router = useRouter();
  const { keepItSafeContract } = useKeepItSafeContract();
  const { ready, authenticated, login, user, linkEmail } = usePrivy();
  const { wallets } = useWallets();
  const [gotDocs, setGotDocs] = useState<any>();
  const [idCardPresent, setIdCardPresent] = useState(false);
  const [studentDetails, setStudentDetails] = useState();
  let idCardHash = "";

  // const GetIpfsUrlFromPinata = (pinataUrl: any) => {
  //   if (pinataUrl === null) return;
  //   var IPFSUrl = pinataUrl.split("/");
  //   const lastIndex = IPFSUrl.length;
  //   IPFSUrl = "https://ipfs.io/ipfs/" + IPFSUrl[lastIndex - 1];
  //   return IPFSUrl;
  // };

  useEffect(() => {
    const getDocsForStudent = async () => {
      if (keepItSafeContract) {
        const studentDocs = await keepItSafeContract.getStudentDocs();
        setGotDocs(studentDocs);
        studentDocs.map((doc: any, id: any) => {
          projects.map((proj: any, idx: any) => {
            if (proj.value === doc[0]) {
              proj.exists = true;
              proj.img = `${process.env.NEXT_PUBLIC_GATEWAY_URL}/ipfs/${doc.ipfsHash}?${process.env.NEXT_PUBLIC_TOKEN}`;
              console.log(proj.img);
            }
            if (doc[0] === "idcard") {
              console.log(doc)
              idCardHash = doc.ipfsHash;
              setIdCardPresent(true);
            }
          })
        }
        )
      }
    }
    const getStudentDetails = async () => {
      if (keepItSafeContract) {
        const studentDetails = await keepItSafeContract.getStudentDetails(wallets[0].address);
        setStudentDetails(studentDetails);
      }
    }
    getDocsForStudent();
    getStudentDetails();
  }, []);
  
  return (
    // <div className="h-[100vh] flex justify-center items-center flex-col">
    //   <div className="mb-[1%]">
    //     <h1 className="text-6xl">Profile</h1>
    //     <div className="h-20 flex justify-around">
    //         <div>Expiring docs</div>
    //         <Divider orientation="vertical" className="bg-slate-400"/>
    //         <div>Permanent docs</div>
    //     </div>
    //   </div>
    // </div>
    <div className="h-[100vh] flex flex-col">
      <div className="text-6xl mt-[15%] flex-start ml-[20%]">
        {`${studentDetails ? studentDetails[0] : <CircularProgress />}'s documents`}
      </div>
      <div className=" text-4xl mt-[5%] flex-start ml-[20%]">
        <div>Expires in</div>
        <div>
          <Card
            shadow="sm"
            isPressable
            className="mt-5"
          >
            <CardBody className="overflow-visible p-0">
              <Image
                shadow="sm"
                radius="lg"
                alt={"ID Card"}
                className="w-full object-cover h-[140px]"
                src={idCardPresent ? `${process.env.NEXT_PUBLIC_GATEWAY_URL}/ipfs/${idCardHash}?${process.env.NEXT_PUBLIC_TOKEN}` : defaultURL}
              />
            </CardBody>
            <CardFooter className="text-small justify-between">
              <b>{"ID Card"}</b>
              <Button color={idCardPresent ? 'success' : 'danger'} isIconOnly onPress={() => {
                if (!idCardPresent) {
                  router.push("/request")
                }
              }}>{idCardPresent ? <FaCheck color="white" /> : <FaPlus />}</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
      <div className=" text-4xl mt-[3%] flex-start ml-[20%]">
        <div>Permanent documents</div>
        <div className="flex flex-row gap-5 mt-5">
          {projects.map((item, index) => (
            <Card
              shadow="sm"
              key={index}
              isPressable
            >
              <CardBody className="overflow-visible p-0">
                <Image
                  shadow="sm"
                  radius="lg"
                  alt={item.title}
                  className="w-full object-cover h-[140px]"
                  src={item.img}
                />
              </CardBody>
              <CardFooter className="text-small justify-between">
                <b>{item.title}</b>
                <Button color={item.exists ? 'success' : 'danger'} isIconOnly onPress={() => {
                  if (!item.exists) {
                    router.push("/request")
                  }
                }}>{item.exists ? <FaCheck color="white" /> : <FaPlus />}</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

let defaultURL = "https://cdn.britannica.com/86/170586-050-AB7FEFAE/Taj-Mahal-Agra-India.jpg"

export const projects = [
  {
    title: "LOR",
    description:
      "A technology company that builds economic infrastructure for the internet.",
    img: defaultURL,
    value: 'lor',
    exists: false
  },
  {
    title: "Degree",
    description:
      "A streaming service that offers a wide variety of award-winning TV shows, movies, anime",
    img: defaultURL,
    value: 'degree',
    exists: false
  },
  {
    title: "Gradesheet",
    description:
      "A multinational technology company that specializes in Internet-related services and products.",
    img: defaultURL,
    value: 'gradesheet',
    exists: false
  },
];