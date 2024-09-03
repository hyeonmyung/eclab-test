"use client";
import { FunctionComponent } from "react";
import styled from "styled-components";
import Header from "./Header";
import SideMenu, { PageProps } from "./SideMenu";

const CommonLayout: FunctionComponent<PageProps> = ({ page, children }) => {
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
`;
const ContentLayout = styled.div`
  width: 100%;
  min-height: calc(100vh - 80px);
  padding: 60px 148px;
  background-color: #f1f4f6;
`;
const ContentInner = styled.div`
  width: 1024px;
`;
export default CommonLayout;
