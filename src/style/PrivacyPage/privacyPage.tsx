import styled from "styled-components";

export const PolicyContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 0 auto;

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
  span {
    font-weight: 500;
  }
`;
export const PrivacyPolicyWrapper = styled.div`
  background-color: #f3fafb;
`;
export const PolicyWrapper = styled.div`
  padding: 50px;
  h1 {
    color: #363e98;
  }
  p {
    font-weight: 300;
    font-size: 15px;
  }
`;