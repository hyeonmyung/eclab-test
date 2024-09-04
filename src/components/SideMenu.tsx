"use client";
import { useIsMobile } from "@/app/hooks/useIsMobile";
import Image from "next/image";
import Link from "next/link";
import { FunctionComponent, ReactNode, useState } from "react";
import styled from "styled-components";

export interface PageProps {
  page: string;
  children?: ReactNode;
}
const SideMenu: FunctionComponent<PageProps> = ({ page }) => {
  const isMobile = useIsMobile();
  const [menuActive, setMenuActive] = useState<boolean>(false);
  return (
    <>
      {isMobile ? (
        <MobileMenu>
          <button
            type="button"
            onClick={() =>
              !menuActive ? setMenuActive(true) : setMenuActive(false)
            }
          >
            {!menuActive ? (
              <Image
                src={"/images/icon-menu.png"}
                width={24}
                height={24}
                alt="모바일 메뉴 열기"
              />
            ) : (
              <Image
                src={"/images/icon-close.png"}
                width={24}
                height={24}
                alt="모바일 메뉴 닫기"
              />
            )}
          </button>
        </MobileMenu>
      ) : null}
      {!isMobile ? (
        <SideLayout className={isMobile ? `isMobile` : ``}>
          <MenuList>
            <MenuItem className={page === "STU" ? "is-active" : ""}>
              <Link href="/stu">EC Report_STU</Link>
            </MenuItem>
            <MenuItem className={page === "CON" ? "is-active" : ""}>
              <Link href="/con">EC Report_CON</Link>
            </MenuItem>
          </MenuList>
        </SideLayout>
      ) : (
        menuActive && (
          <SideLayout className={isMobile ? `isMobile` : ``}>
            <MenuList>
              <MenuItem className={page === "STU" ? "is-active" : ""}>
                <Link href="/stu">EC Report_STU</Link>
              </MenuItem>
              <MenuItem className={page === "CON" ? "is-active" : ""}>
                <Link href="/con">EC Report_CON</Link>
              </MenuItem>
            </MenuList>
          </SideLayout>
        )
      )}
    </>
  );
};
const MobileMenu = styled.div`
  position: absolute;
  right: 16px;
  top: 16px;
  button {
    background: transparent;
    border: none;
    outline: 0;
    margin: 0;
    padding: 0;
  }
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
    width: 100%;
  }
`;
const SideLayout = styled.div`
  width: 300px;
  padding: 18px 40px;
  flex-shrink: 0;
  height: 100%;
  &.isMobile {
    width: 100%;
    height: calc(100% - 55px);
    position: absolute;
    left: 0;
    top: 55px;
    z-index: 10;
    background: rgba(59, 58, 72, 0.6);
    backdrop-filter: blur(5px);
    padding: 0;
    ${MenuList} {
      background-color: #3b3a48;
      border-radius: 0 0 10px 10px;
    }
    ${MenuItem} {
      border-radius: 0;
      background-image: none;
      padding: 0 20px;
      height: 55px;
    }
  }
  @media only screen and (max-width: 1440px) {
    width: 260px;
    padding: 18px 24px;
  }
`;
export default SideMenu;
