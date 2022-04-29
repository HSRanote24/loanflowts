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
    padding: 70px 100px;}
    @media (max-width: 500px) {
    grid-template-columns: 1fr;
    gap: 10px;
    padding: 35px 75px;}

@media (max-width: 400px) {
  width:20px;
  gap: 5px;
    padding: 20px 40px;
}
    div > h1 {
      text-align: center;
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
    
    column-gap: 70px;
  }
  @media (max-width: 500px) {
    grid-template-columns: 1fr;
    
   }
  h2 {
    margin-top: 20px;
  }
`;