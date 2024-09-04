import { FunctionComponent, ReactNode } from "react";
import styled from "styled-components";

interface ButtonStyleProps {
  color: "primary" | "primaryOutline" | "secondary" | "secondaryOutline";
  size: "sm" | "rg" | "lg";
  link?: string;
  children: ReactNode;
  type?: "button" | "link" | "submit";
  onClick?: () => void;
  disabled?: boolean;
}
const Button: FunctionComponent<ButtonStyleProps> = ({
  color,
  size,
  onClick,
  disabled,
  children,
  ...props
}) => {
  return (
    <StyledButton
      color={color}
      size={size}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </StyledButton>
  );
};
const StyledButton = styled.button<{
  color: string;
  size: string;
  disabled?: boolean;
}>`
  border-radius: 10px;
  font-weight: bold;
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
    `;
    }
    return ``;
  }}
`;
export default Button;
