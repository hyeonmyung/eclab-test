"use client";
import CommonLayout from "@/components/CommonLayout";
import ReportDetailCard from "@/components/ReportDetailCard";
import Title from "@/components/Title";
import axios from "axios";
import { FunctionComponent, useCallback, useEffect, useState } from "react";
import { StudentDataTypes } from "../types/studentDataTypes";

const StuPage: FunctionComponent = () => {
  const [studentDataLists, setStudentDataLists] = useState<
    StudentDataTypes | undefined
  >(undefined);

  const getStudentData = useCallback(async () => {
    await axios.get(`https://edu.eclab.me/api/test`).then((res) => {
      if (res.status === 200) {
        setStudentDataLists(res.data.data);
      }
    });
  }, []);

  useEffect(() => {
    getStudentData();
  }, [getStudentData]);

  return (
    <CommonLayout page="STU">
      <Title>EC Report Details</Title>
      <ReportDetailCard studentDataLists={studentDataLists} />
    </CommonLayout>
  );
};
export default StuPage;
