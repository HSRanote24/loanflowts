import styled from 'styled-components';

export const LoanContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 50px;
  min-height: auto;
  div > p {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 600;
    font-size: 40px;
    line-height: 54px;
    color: #363E98;
  }
  div > button {
    background: #363B97;
    border-radius: 8px;
    height: 48px;
    width: 145px;
    color: #FFFFFF;
  }
  div > img {
    width: 100%;
  }
`;