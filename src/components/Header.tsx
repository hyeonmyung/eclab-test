"use client";
import Image from "next/image";
import { FunctionComponent } from "react";
import styled from "styled-components";
const Header: FunctionComponent = () => {
  return (
    <HeaderLayout>
      <InnerLayout>
        <h1>
          <Image
            src={"/images/logo.png"}
            width={105}
            height={20}
            alt="EC LAB"
          />{" "}
        </h1>
        <EduCenter>EDU.CENTER</EduCenter>
      </InnerLayout>
    </HeaderLayout>
  );
};
const HeaderLayout = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  background-color: #3b3a48;
  width: 100%;
  height: 80px;
  padding: 30px 40px;
  color: #fff;
`;
const InnerLayout = styled.div`
  display: flex;
  align-items: center;
  gap: 0 20px;
`;
const EduCenter = styled.span`
  font-size: 16px;
`;
export default Header;
