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
        <ContentInner>{children}</ContentInner>
      </ContentFlex>
    </>
  );
};
const ContentFlex = styled.div`
  display: flex;
  align-items: flex-start;
  padding-top: 80px;
  height: 100%;
`;
const ContentInner = styled.div`
  width: 100%;
  height: 100%;
  background-color: #f1f4f6;
`;
export default CommonLayout;
