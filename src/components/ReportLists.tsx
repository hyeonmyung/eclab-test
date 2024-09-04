import { arrayCommaHelpers } from "@/app/helpers/arrayCommaHelpers";
import { useIsMobile } from "@/app/hooks/useIsMobile";
import { StudentDataTypes } from "@/app/types/studentDataTypes";
import Image from "next/image";
import Link from "next/link";
import { FunctionComponent } from "react";
import styled from "styled-components";
import Button from "./Button";
import TextBlock from "./TextBlock";

interface ReportListProps {
  reportLists: StudentDataTypes["ec_report_items"];
  viewType: string;
}
const ReportLists: FunctionComponent<ReportListProps> = ({
  reportLists,
  viewType,
}) => {
  const isMobile = useIsMobile();
  return (
    <ReportList>
      {reportLists.map((item, index) => {
        return (
          <ReportItem key={item.id}>
            <ItemHeader>
              <ItemHeaderContent>
                <ItemNum>{index + 1}</ItemNum>
                <ItemOrg>
                  <ItemTitle>{item.ec_db.name}</ItemTitle>
                  <OrganizationText>{item.ec_db.organization}</OrganizationText>
                  {viewType === "CON" && (
                    <>
                      <YearBadge>{item.ec_db.year}</YearBadge>
                    </>
                  )}
                </ItemOrg>
                {!isMobile
                  ? item.ec_db.url !== "" && (
                      <ItemLink>
                        <Link href={item.ec_db.url} target="_blank">
                          <Image
                            src="/images/icon-link.png"
                            width={24}
                            height={24}
                            alt="링크 바로가기"
                          />
                        </Link>
                      </ItemLink>
                    )
                  : null}
              </ItemHeaderContent>
            </ItemHeader>
            <ItemBody>
              <ItemType>
                <TypeDetailLists>
                  <TypeDetailItem>
                    <strong>Type: </strong>
                    {item.ec_db.ec_type}
                  </TypeDetailItem>
                  <TypeDetailItem>
                    <strong>Participation: </strong>
                    {item.ec_db.participate_way}
                  </TypeDetailItem>
                  <TypeDetailItem>
                    <strong>Recognition: </strong>
                    {item.ec_db.recognition_level}
                  </TypeDetailItem>
                </TypeDetailLists>
              </ItemType>
              <ItemNatl>
                <TypeDetailLists>
                  <TypeDetailItem>
                    <strong>Nationality: </strong>
                    {item.ec_db.nationality}
                  </TypeDetailItem>
                  <TypeDetailItem>
                    <strong>Grade: </strong>
                    {arrayCommaHelpers(item.ec_db.grade_limit)}
                  </TypeDetailItem>
                  <TypeDetailItem>
                    <strong>Age: </strong>
                    {arrayCommaHelpers(item.ec_db.age_limit)}
                  </TypeDetailItem>
                </TypeDetailLists>
              </ItemNatl>
            </ItemBody>
            <ItemFooter className={isMobile ? `isMobile` : ``}>
              <ButtonContainer>
                {viewType === "STU" ? (
                  !item.is_added ? (
                    <Button color="primary" size="rg">
                      add to EC List
                    </Button>
                  ) : (
                    <Button color="primaryOutline" size="rg" disabled>
                      already added!
                    </Button>
                  )
                ) : null}
                {isMobile ? (
                  <Button color="secondary" size="rg">
                    <Image
                      src={"/images/icon-link-white.png"}
                      width={20}
                      height={20}
                      alt=""
                    />
                    Visit Website
                  </Button>
                ) : null}
              </ButtonContainer>
            </ItemFooter>
          </ReportItem>
        );
      })}
    </ReportList>
  );
};
const ReportList = styled.ul``;
const ReportItem = styled.li`
  border-radius: 10px;
  border: 1px #e6e9ec;
  background: #fff;
  padding: 26px 46px;
  position: relative;
  @media only screen and (max-width: 1024px) {
    padding: 20px;
  }
  & + li {
    margin-top: 20px;
  }
`;
const ItemHeader = styled.div`
  padding-bottom: 40px;
  border-bottom: 1px dashed #e6e9ec;
  @media only screen and (max-width: 1024px) {
    padding-bottom: 20px;
  }
`;
const ItemHeaderContent = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0 10px;
`;
const ItemTitle = styled.h3`
  display: flex;
  align-items: top;
  gap: 0 10px;
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 10px;
  @media only screen and (max-width: 1024px) {
    font-size: 16px;
  }
`;
const ItemOrg = styled.p``;
const ItemNum = styled.span`
  border-radius: 3px;
  background: #7a40f2;
  width: 24px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  color: #fff;
  font-weight: 700;
  font-size: 20px;
`;
const ItemLink = styled.span`
  display: inline-block;
`;
const ItemBody = styled.div`
  margin-top: 20px;
`;
const TypeDetailLists = styled.ul``;
const TypeDetailItem = styled.li`
  display: inline-block;
  position: relative;
  strong {
    font-weight: 700;
  }
  @media only screen and (max-width: 1024px) {
    display: block;
  }
  & + li {
    padding-left: 16px;
    @media only screen and (max-width: 1024px) {
      padding-left: 0;
      margin-top: 20px;
    }
    &::before {
      content: "";
      display: block;
      width: 3px;
      height: 3px;
      background: #000;
      border-radius: 100%;
      position: absolute;
      left: 5px;
      top: 50%;
      margin-top: -2px;
    }
  }
`;
const ItemType = styled.div`
  padding-left: 36px;
  background: url("/images/icon-filter.png") no-repeat left center;
  background-size: 20px;
  @media only screen and (max-width: 1024px) {
    background: none;
    padding-left: 0;
    ${TypeDetailItem} {
      background: url("/images/icon-filter.png") no-repeat left center;
      background-size: 20px;
      padding-left: 24px;
      &::before {
        display: none;
      }
    }
  }
`;
const ItemNatl = styled.div`
  padding-left: 36px;
  background: url("/images/icon-lib.png") no-repeat left center;
  background-size: 20px;
  margin-top: 18px;
  @media only screen and (max-width: 1024px) {
    background: none;
    padding-left: 0;
    margin-top: 20px;
    ${TypeDetailItem} {
      background: url("/images/icon-lib.png") no-repeat left center;
      background-size: 20px;
      padding-left: 24px;
      &::before {
        display: none;
      }
    }
  }
`;
const OrganizationText = styled(TextBlock)`
  display: block;
`;
const YearBadge = styled.div`
  display: inline-flex;
  align-items: center;
  height: 23px;
  padding: 0 10px;
  border-radius: 12px;
  background: #6b7280;
  font-size: 14px;
  font-weight: 700;
  justify-content: center;
  color: #fff;
  margin-top: 10px;
`;
const ItemFooter = styled.div`
  position: absolute;
  right: 30px;
  top: 30px;
  &.isMobile {
    position: static;
  }
  @media only screen and (max-width: 1280px) {
    position: static;
    button {
      width: 100%;
    }
  }
`;
const ButtonContainer = styled.div`
  display: flex;
  gap: 0 10px;
  @media only screen and (max-width: 1280px) {
    justify-content: flex-end;
    margin-top: 32px;
  }
  @media only screen and (max-width: 1024px) {
    justify-content: center;
  }
`;
export default ReportLists;
