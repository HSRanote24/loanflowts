import styled from "styled-components";

export const CookieContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  background-color: #f3fafb;
  div {
    display: grid;
    justify-content: center;
    padding: 50px;
  }
  h1 {
    color: #363e98;
  }
  p {
    font-weight: 300;
    font-size: 15px;
  }
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;
export const CookieWrapper = styled.div`
  padding: 50px;
  h1 {
    color: #363e98;
  }
  p {
    font-weight: 300;
    font-size: 15px;
  }
`;