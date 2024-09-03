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
`;
export default Title;
