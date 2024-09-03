"use client";
import Link from "next/link";
import { FunctionComponent, ReactNode } from "react";
import styled from "styled-components";

export interface PageProps {
  page: string;
  children?: ReactNode;
}
const SideMenu: FunctionComponent<PageProps> = ({ page }) => {
  return (
    <SideLayout>
      <MenuList>
        <MenuItem className={page === "STU" ? "is-active" : ""}>
          <Link href="/stu">EC Report_STU</Link>
        </MenuItem>
        <MenuItem className={page === "CON" ? "is-active" : ""}>
          <Link href="/con">EC Report_CON</Link>
        </MenuItem>
      </MenuList>
    </SideLayout>
  );
};
const SideLayout = styled.div`
  width: 300px;
  padding: 18px 40px;
  flex-shrink: 0;
  height: 100%;
`;
const MenuList = styled.ul``;
const MenuItem = styled.li`
  background: transparent url("/images/icon-clipboard.png") no-repeat 20px
    center;
  background-size: 24px;
  height: 60px;
  display: flex;
  align-items: center;
  color: #9ca3af;
  padding-left: 58px;
  &.is-active {
    border-radius: 10px;
    background: #7a40f2 url("/images/icon-clipboard-active.png") no-repeat 20px
      center;
    background-size: 24px;
    box-shadow: 0px 5px 10px 0px rgba(151, 71, 255, 0.2);
    color: #fff;
  }
  a {
    display: block;
  }
`;
export default SideMenu;
