import { typeTotalCheckHelpers } from "@/app/helpers/typeTotalCheckHelpers";
import { StudentData } from "@/app/types/studentDataTypes";
import dayjs from "dayjs";
import { FunctionComponent } from "react";
import styled from "styled-components";
import InformationItem from "./InformationItem";
import OnlyAdminSubmit from "./OnlyAdminSubmit";
import ReportLists from "./ReportLists";
import TextBlock from "./TextBlock";

interface PageTypes extends StudentData {
  viewType: string;
}
const ReportDetailCard: FunctionComponent<PageTypes> = ({
  studentDataLists,
  viewType,
}) => {
  var localizedFormat = require("dayjs/plugin/localizedFormat");
  dayjs.extend(localizedFormat);

  const studentEcDb = studentDataLists?.ec_report_items.map((item) => {
    return item.ec_db;
  });

  return (
    studentDataLists && (
      <>
        <CardHeader>
          <InformationItem>
            <TextBlock weight="700" size="18px">
              Title
            </TextBlock>
            <TextBlock size="18px">{studentDataLists.title}</TextBlock>
            {viewType === "STU" ? (
              <>
                <TextBlock weight="700" size="18px">
                  Counselor
                </TextBlock>
                <TextBlock size="18px">
                  {studentDataLists.counselor?.name}
                </TextBlock>
              </>
            ) : (
              <>
                <TextBlock weight="700" size="18px">
                  Student
                </TextBlock>
                <TextBlock size="18px">
                  {studentDataLists.student.name}
                </TextBlock>
              </>
            )}
          </InformationItem>
          {viewType === "CON" && (
            <>
              <InformationItem>
                <TextBlock weight="700" size="18px">
                  School
                </TextBlock>
                <TextBlock size="18px">
                  {studentDataLists.student?.profile.school.name}
                </TextBlock>
                <TextBlock weight="700" size="18px">
                  Grade
                </TextBlock>
                <TextBlock size="18px">
                  {studentDataLists.student?.profile.grade}
                </TextBlock>
              </InformationItem>
              <InformationItem>
                <TextBlock weight="700" size="18px">
                  Counselor
                </TextBlock>
                <TextBlock size="18px">
                  {studentDataLists.counselor?.name}
                </TextBlock>
                <TextBlock weight="700" size="18px">
                  Status
                </TextBlock>
                <TextBlock size="18px">
                  {studentDataLists.student.profile.status_type}
                </TextBlock>
              </InformationItem>
            </>
          )}
          <InformationItem>
            <TextBlock weight="700" size="18px">
              Received Date
            </TextBlock>
            <TextBlock size="18px">
              {dayjs(studentDataLists.send_dt).format("ll")}
            </TextBlock>
            {viewType === "CON" && (
              <>
                <TextBlock weight="700" size="18px">
                  Delivered Date
                </TextBlock>
                <TextBlock size="18px">
                  {dayjs(studentDataLists.delivered_dt).format("ll")}
                </TextBlock>
              </>
            )}
          </InformationItem>
        </CardHeader>
        <CardBody>
          <TextBlock weight="700">
            total: {studentDataLists.ec_report_items?.length}
          </TextBlock>
          <TotalWrap>
            <TotalList>
              <TotalItem>
                <TotalSubject>
                  <span>✍️</span>Writing Competition
                </TotalSubject>
                <TotalNum>
                  {typeTotalCheckHelpers(studentEcDb, "Writing Competitions")}
                </TotalNum>
                <TotalSubject>
                  <span>🏆</span>Competition
                </TotalSubject>
                <TotalNum>
                  {typeTotalCheckHelpers(studentEcDb, "Competitions")}
                </TotalNum>
              </TotalItem>
              <TotalItem>
                <TotalSubject>
                  <span>🏫</span>Pre-College
                </TotalSubject>
                <TotalNum>
                  {typeTotalCheckHelpers(
                    studentEcDb,
                    "Pre-college/Summer Programs"
                  )}
                </TotalNum>
                <TotalSubject>
                  <span>💼</span>Internship
                </TotalSubject>
                <TotalNum>
                  {typeTotalCheckHelpers(studentEcDb, "Internship")}
                </TotalNum>
              </TotalItem>
              <TotalItem>
                <TotalSubject>
                  <span>⛑️</span>Volunteering
                </TotalSubject>
                <TotalNum>
                  {typeTotalCheckHelpers(studentEcDb, "Volunteering")}
                </TotalNum>
                <TotalSubject>
                  <span>🔎</span>Research
                </TotalSubject>
                <TotalNum>
                  {typeTotalCheckHelpers(studentEcDb, "Research")}
                </TotalNum>
              </TotalItem>
            </TotalList>
          </TotalWrap>
          <ReportWrap>
            <ReportLists
              reportLists={studentDataLists.ec_report_items}
              viewType={viewType}
            />
          </ReportWrap>
        </CardBody>
        {viewType === "CON" ? (
          <CardFooter>
            <OnlyAdminSubmit />
          </CardFooter>
        ) : null}
      </>
    )
  );
};
const CardHeader = styled.div`
  background: #fff;
  border-radius: 20px;
  padding: 40px;
  @media only screen and (max-width: 1024px) {
    padding: 20px;
    border: 1px solid #e6e9ec;
  }
`;
const CardBody = styled.div`
  margin-top: 40px;
`;
const TotalWrap = styled.div`
  border-radius: 10px;
  border: 1px solid #e6e9ec;
  background: rgba(151, 71, 255, 0.2);
  padding: 20px 55px;
  margin: 16px 0 0 0;
  @media only screen and (max-width: 1440px) {
    padding: 20px;
  }
  @media only screen and (max-width: 1024px) {
    background: transparent;
    padding: 0;
    margin: 10px 0 0 0;
  }
`;
const TotalList = styled.ul`
  display: flex;
  justify-content: space-between;
  @media only screen and (max-width: 1024px) {
    display: block;
  }
`;
const TotalItem = styled.li`
  display: grid;
  grid-template-columns: 60% 1fr;
  gap: 16px 0;
  align-items: center;
  width: 33.33%;
  @media only screen and (max-width: 1440px) {
    grid-template-columns: 70% 1fr;
  }
  @media only screen and (max-width: 1024px) {
    width: 100%;
    gap: 10px 0;
  }
  & + li {
    border-left: 1px solid #b3b3b3;
    padding: 0 46px;
    @media only screen and (max-width: 1440px) {
      padding: 0 24px;
    }
    @media only screen and (max-width: 1024px) {
      border: none;
      padding: 0;
      margin-top: 10px;
    }
  }
`;
const TotalSubject = styled.div`
  font-weight: 700;
  span {
    display: inline-block;
    margin-right: 12px;
  }
  @media only screen and (max-width: 1024px) {
    background: rgba(151, 71, 255, 0.2);
    border-radius: 10px 0 0 10px;
    padding: 20px 16px;
    height: 60px;
  }
`;
const TotalNum = styled.div`
  text-align: center;
  @media only screen and (max-width: 1024px) {
    background: rgba(151, 71, 255, 0.2);
    border-radius: 0 10px 10px 0;
    padding: 20px 16px;
    height: 60px;
  }
`;
const ReportWrap = styled.div`
  margin-top: 20px;
`;
const CardFooter = styled.div`
  margin-top: 40px;
  text-align: center;
`;
export default ReportDetailCard;
