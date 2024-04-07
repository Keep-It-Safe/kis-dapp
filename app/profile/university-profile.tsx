"use client";

import { useKeepItSafeContract } from "@/hooks/useKeepItSafe";
import { useWallets, usePrivy } from "@privy-io/react-auth";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableCell,
  TableColumn,
  getKeyValue,
} from "@nextui-org/react";
import {useState, useEffect} from "react";
import {toast, ToastContainer} from "react-toastify"; 

export default function UniversityProfule() {
  const [allStudents, setAllStudents] = useState<any>();
  const {keepItSafeContract} = useKeepItSafeContract();
  const { ready, authenticated, login, user, linkEmail } = usePrivy();
  useEffect(() => {
    const getAllStudent = async() => {
      if(keepItSafeContract){
        console.log(keepItSafeContract);
        console.log(user)
        // const students = await keepItSafeContract.getAllStudentsOfInstitute()
      }
    }
    getAllStudent();
  }, [])
  const rows = [
    {
      key: "1",
      name: "Vaibhav",
      address: "0xVaibhav",
      id_card: "Yes",
      degree: "Yes",
      gradesheet: "No",
      lor: "No",
    },
    {
      key: "2",
      name: "Dhrupad",
      address: "0xDhrupad",
      id_card: "No",
      degree: "Yes",
      gradesheet: "No",
      lor: "Yes",
    },
    {
      key: "3",
      name: "Abhishek",
      address: "0xAbhishek",
      id_card: "Yes",
      degree: "Yes",
      gradesheet: "No",
      lor: "No",
    },
  ];
  const columns = [
    {
      key: "name",
      label: "NAME",
    },
    {
      key: "address",
      label: "ADDRESS",
    },
    {
      key: "id_card",
      label: "ID Card",
    },
    {
      key: "degree",
      label: "Degree",
    },
    {
        key: "gradesheet",
        label: "Gradesheet",
      },
    {
      key: "lor",
      label: "LOR",
    },
  ];
  return (
    <div className="h-[100vh] flex flex-col">
      <div className="text-6xl mt-[12%] flex-start ml-[10%]">IIIT Profile</div>
      <Table
        aria-label="Example table with dynamic content"
        className="mt-5 px-20"
      >
        <TableHeader columns={columns}>
          {(column) => (
            <TableColumn key={column.key}>{column.label}</TableColumn>
          )}
        </TableHeader>
        <TableBody items={rows}>
          {(item) => (
            <TableRow key={item.key}>
              {(columnKey) => (
                <TableCell>{getKeyValue(item, columnKey)}</TableCell>
              )}
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}
