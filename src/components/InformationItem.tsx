import styled from "styled-components";

const InformationItem = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: repeat(2, 20% 1fr);
  & + div {
    margin: 40px 0 0 0;
  }
`;
export default InformationItem;
