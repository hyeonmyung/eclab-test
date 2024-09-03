import { StudentData } from "@/app/types/studentDataTypes";
import dayjs from "dayjs";
import { FunctionComponent } from "react";
import styled from "styled-components";
import InformationItem from "./InformationItem";
import ReportLists from "./ReportLists";
import TextBlock from "./TextBlock";

const ReportDetailCard: FunctionComponent<StudentData> = ({
  studentDataLists,
}) => {
  var localizedFormat = require("dayjs/plugin/localizedFormat");
  dayjs.extend(localizedFormat);
  return (
    studentDataLists && (
      <>
        <CardHeader>
          <InformationItem>
            <TextBlock weight="700" size="18px">
              Title
            </TextBlock>
            <TextBlock size="18px">{studentDataLists.title}</TextBlock>
            <TextBlock weight="700" size="18px">
              Counselor
            </TextBlock>
            <TextBlock size="18px">
              {studentDataLists.counselor?.name}
            </TextBlock>
          </InformationItem>
          <InformationItem>
            <TextBlock weight="700" size="18px">
              Received Date
            </TextBlock>
            <TextBlock size="18px">
              {dayjs(studentDataLists.send_dt).format("ll")}
            </TextBlock>
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
                <TotalNum>-</TotalNum>
                <TotalSubject>
                  <span>🏆</span>Competition
                </TotalSubject>
                <TotalNum>-</TotalNum>
              </TotalItem>
              <TotalItem>
                <TotalSubject>
                  <span>🏫</span>Pre-College
                </TotalSubject>
                <TotalNum>-</TotalNum>
                <TotalSubject>
                  <span>💼</span>Internship
                </TotalSubject>
                <TotalNum>-</TotalNum>
              </TotalItem>
              <TotalItem>
                <TotalSubject>
                  <span>⛑️</span>Volunteering
                </TotalSubject>
                <TotalNum>-</TotalNum>
                <TotalSubject>
                  <span>🔎</span>Research
                </TotalSubject>
                <TotalNum>-</TotalNum>
              </TotalItem>
            </TotalList>
          </TotalWrap>
          <ReportWrap>
            <ReportLists reportLists={studentDataLists.ec_report_items} />
          </ReportWrap>
        </CardBody>
      </>
    )
  );
};
const CardHeader = styled.div`
  background: #fff;
  border-radius: 20px;
  padding: 40px;
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
`;
const TotalList = styled.ul`
  display: flex;
  justify-content: space-between;
`;
const TotalItem = styled.li`
  display: grid;
  grid-template-columns: 60% 1fr;
  gap: 16px 0;
  align-items: center;
  width: 33.33%;
  & + li {
    border-left: 1px solid #b3b3b3;
    padding: 0 46px;
  }
`;
const TotalSubject = styled.div`
  font-weight: 700;
  span {
    display: inline-block;
    margin-right: 12px;
  }
`;
const TotalNum = styled.div`
  text-align: center;
`;
const ReportWrap = styled.div`
  margin-top: 20px;
`;
export default ReportDetailCard;
