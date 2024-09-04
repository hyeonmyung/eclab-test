"use client";
import { useIsMobile } from "@/app/hooks/useIsMobile";
import Image from "next/image";
import Link from "next/link";
import { FunctionComponent } from "react";
import styled from "styled-components";
const Header: FunctionComponent = () => {
  const isMobile = useIsMobile();
  return (
    <HeaderLayout>
      <InnerLayout>
        <h1>
          <Link href="/">
            <Image
              src={"/images/logo.png"}
              width={!isMobile ? 105 : 80}
              height={!isMobile ? 20 : 15}
              alt="EC LAB"
            />{" "}
          </Link>
        </h1>
        {!isMobile ? <EduCenter>EDU.CENTER</EduCenter> : null}
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
  padding: 0 40px;
  display: flex;
  align-items: center;
  color: #fff;
  @media only screen and (max-width: 1024px) {
    padding: 0 16px;
    height: 55px;
  }
`;
const InnerLayout = styled.div`
  display: flex;
  align-items: center;
  gap: 0 20px;
  a {
    display: flex;
    align-items: center;
  }
`;
const EduCenter = styled.span`
  font-size: 16px;
`;
export default Header;
