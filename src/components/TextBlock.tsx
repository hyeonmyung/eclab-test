import styled from "styled-components";

interface TextBoxProps {
  size?: string;
  weight?: string;
  margin?: string;
  padding?: string;
}

const TextBlock = styled.p<TextBoxProps>`
  display: inline-block;
  font-size: ${({ size }) => size};
  font-weight: ${({ weight }) => weight};
  margin: ${({ margin }) => margin};
  padding: ${({ padding }) => padding};
`;

export default TextBlock;
