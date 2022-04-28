import styled from "styled-components";

export const FooterContainer = styled.div`
  column-gap: 15px;
  color: #464040;
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 70px 100px;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  align-items: center;
  justify-content: center;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 20px;
    padding: 70px 150px;
    div > h1 {
      text-align: center;
    }
  }
  div > h1 {
    color: #363e98;
    /* text-align: center; */
  }
`;
export const FooterElements = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 140px;
  @media (max-width: 768px) {
    /* grid-template-columns: 1fr; */
    gap: 10px;
    column-gap: 100px;
  }
  h2 {
    margin-top: 20px;
  }
`;