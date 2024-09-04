import styled from "styled-components";

const InformationItem = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: repeat(2, 20% 1fr);
  font-size: 18px;
  @media only screen and (max-width: 1024px) {
    grid-template-columns: 1fr 1fr;
    gap: 20px 0;
    font-size: 16px;
  }
  & + div {
    margin: 40px 0 0 0;
    @media only screen and (max-width: 1024px) {
      margin: 20px 0 0 0;
    }
  }
`;
export default InformationItem;
