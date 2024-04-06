"use client";

import { Button, Card, CardBody, Image, CardFooter } from "@nextui-org/react";
import { FaPlus } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import { useRouter } from "next/navigation"; 

export default function StudentProfile() {
    const router = useRouter();
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
        {"Vaibhav's documents"}
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
                src={"https://cdn.britannica.com/86/170586-050-AB7FEFAE/Taj-Mahal-Agra-India.jpg"}
              />
            </CardBody>
            <CardFooter className="text-small justify-between">
              <b>{"ID Card"}</b>
              <Button isIconOnly onPress={() => {router.push("/request")}}><FaPlus/></Button>
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
                <Button isIconOnly onPress={() => {router.push("/request")}}><FaPlus/></Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

export const projects = [
  {
    title: "LOR",
    description:
      "A technology company that builds economic infrastructure for the internet.",
    img: "https://cdn.britannica.com/86/170586-050-AB7FEFAE/Taj-Mahal-Agra-India.jpg",
  },
  {
    title: "Degree",
    description:
      "A streaming service that offers a wide variety of award-winning TV shows, movies, anime",
    img: "https://cdn.britannica.com/86/170586-050-AB7FEFAE/Taj-Mahal-Agra-India.jpg",
  },
  {
    title: "Marksheet",
    description:
      "A multinational technology company that specializes in Internet-related services and products.",
    img: "https://cdn.britannica.com/86/170586-050-AB7FEFAE/Taj-Mahal-Agra-India.jpg",
  },
];

export const expiration = [
  {
    title: "ID Card",
    description:
      "A technology company that builds economic infrastructure for the internet.",
    img: "https://cdn.britannica.com/86/170586-050-AB7FEFAE/Taj-Mahal-Agra-India.jpg",
  },
];
