import { FunctionComponent, ReactNode } from "react";
import styled from "styled-components";

interface ButtonStyleProps {
  color: "primary" | "primaryOutline" | "secondary" | "secondaryOutline";
  size: "sm" | "rg" | "lg";
  link?: string;
  children: ReactNode;
  full?: boolean;
  onClick?: () => void;
  disabled?: boolean;
}
const Button: FunctionComponent<ButtonStyleProps> = ({
  color,
  size,
  onClick,
  disabled,
  full,
  children,
  ...props
}) => {
  return (
    <StyledButton
      color={color}
      size={size}
      onClick={onClick}
      disabled={disabled}
      full={full}
    >
      {children}
    </StyledButton>
  );
};
const StyledButton = styled.button<{
  color: string;
  size: string;
  disabled?: boolean;
  full?: boolean;
}>`
  border-radius: 10px;
  font-weight: 700;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  ${({ color }) => {
    if (color === `primary`) {
      return `
        border: 1px #7A40F2;
        background: #7A40F2;
        color: #fff;
    `;
    }
    if (color === `primaryOutline`) {
      return `
        border: 1px solid #7A40F2;
        background: #fff;
        color: #7A40F2;
      `;
    }
    if (color === `secondary`) {
      return `
          border: 1px solid #3B3A48;
          background: #3B3A48;
          color: #fff;
          &[disabled] {
            opacity: 0.3;
            cursor: inherit;
          }
      `;
    }
    if (color === `secondaryOutline`) {
      return `
          border: 1px solid #3B3A48;
          background: #fff;
          color: #3B3A48;
      `;
    }
    return ``;
  }}
  ${({ size }) => {
    if (size === `rg`) {
      return `
        padding: 0 20px;
        min-width: 144px;
        height: 45px;
        font-size: 16px;
        @media only screen and (max-width: 1024px) {
          padding: 0;
          height: 54px;
        }
    `;
    }
    if (size === `lg`) {
      return `
        padding: 0 52px;
        min-width: 137px;
        height: 70px;
        font-size: 18px;
    `;
    }
    return ``;
  }}
  ${({ full }) => {
    if (full) {
      return `
        width: 100%;
    `;
    }
    return ``;
  }}
`;
export default Button;
