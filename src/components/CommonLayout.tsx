"use client";
import { useIsMobile } from "@/app/hooks/useIsMobile";
import { FunctionComponent } from "react";
import styled from "styled-components";
import Header from "./Header";
import SideMenu, { PageProps } from "./SideMenu";

const CommonLayout: FunctionComponent<PageProps> = ({ page, children }) => {
  const isMobile = useIsMobile();
  return (
    <>
      <Header />
      <ContentFlex>
        <SideMenu page={page} />
        <ContentLayout>
          <ContentInner>{children}</ContentInner>
        </ContentLayout>
      </ContentFlex>
    </>
  );
};
const ContentFlex = styled.div`
  display: flex;
  align-items: flex-start;
  padding-top: 80px;
  min-height: 100%;
  background-color: #3b3a48;
  @media only screen and (max-width: 1024px) {
    padding-top: 55px;
  }
`;
const ContentLayout = styled.div`
  width: 100%;
  min-height: calc(100vh - 80px);
  padding: 60px 148px;
  background-color: #f1f4f6;
  @media only screen and (max-width: 1800px) {
    padding: 60px;
  }
  @media only screen and (max-width: 1440px) {
    padding: 40px;
  }
  @media only screen and (max-width: 1024px) {
    padding: 40px 16px;
    min-height: calc(100vh - 55px);
  }
`;
const ContentInner = styled.div`
  width: 1024px;
  @media only screen and (max-width: 1800px) {
    width: 100%;
  }
`;
export default CommonLayout;
