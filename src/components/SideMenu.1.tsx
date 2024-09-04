"use client";
import { useIsMobile } from "@/app/hooks/useIsMobile";
import Link from "next/link";
import { FunctionComponent } from "react";
import {
  MenuItem,
  MenuList,
  MobileMenu,
  PageProps,
  SideLayout,
} from "./SideMenu";

export const SideMenu: FunctionComponent<PageProps> = ({ page }) => {
  const isMobile = useIsMobile();
  return (
    <>
      {isMobile ? (
        <MobileMenu>
          <button type="button">
            <Image
              src={"/images/icon-menu.png"}
              width={24}
              height={24}
              alt="모바일 메뉴 열기"
            />
          </button>
        </MobileMenu>
      ) : null}
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
    </>
  );
};
