import { FunctionComponent, ReactNode } from "react";
import styled from "styled-components";

interface TitleProps {
  children?: ReactNode;
}
const Title: FunctionComponent<TitleProps> = ({ children }) => {
  return <TitleText>{children}</TitleText>;
};

const TitleText = styled.h2`
  font-size: 30px;
  font-weight: 700;
  margin-bottom: 48px;
  @media only screen and (max-width: 1440px) {
    font-size: 24px;
    margin-bottom: 30px;
  }
`;
export default Title;
