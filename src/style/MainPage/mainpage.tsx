import styled from "styled-components";
import { Radio } from 'antd';
export const ContainerRadio = styled(Radio)({

});
export const LoanContainer = styled.div`
 display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 56px;
  padding: 45px 35px 60px 35px;
  margin: 0 auto;
  
  div > p {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 600;
    font-size: 40px;
    line-height: 54px;
    color: #363E98;
  }

  div > img {
   
    min-height: 40%;
    align-self:center;
    padding: 45px 35px 60px 35px;
  margin: 0 auto;
  
  @media (max-width: 682px) {
    width: 100%;
    min-height: 20%;
    padding: 25px 20px 30px 20px;
  }

  }
  div > button{
    padding: 16px 16px;
    cursor: pointer;
    vertical-align: middle;
    color: white;
    background-color: #363b97;
    border-radius: 10px;
    border-color: #363b97;
    border-width: 2px;
   margin-right:14px;
  }
  @media (max-width: 913px) {
    /* padding-top: 5px;  */
    flex-direction: column;
  }
  
`;
export const AssistanceContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
  background: #F2F3F8;
  padding: 50px;

  
  div > h1 {
    color: #363B97;
  }
  @media (max-width: 913px) {
    /* padding-top: 5px;  */
    flex-direction: column;
  }
  
`;
export const AssistanInner = styled.div`
img {
width: 100%;
min-height: 50%;
}
@media (max-width: 682px) {
width: 100%;
min-height: 20%;
}
`;
export const AssistanceForm = styled.form`
  display: grid;
  row-gap: 10px;
`;
export const Name = styled.div`
  input {
    border: none;
    min-height: 58px;
    width: 100%;
    max-width: 527px;
  }
`;
export const RequestButton = styled.div`
  display: flex;
  input {
    border: none;
    min-height: 58px;
    width: 100%;
    max-width: 428px;
  }
  button {
    color: #FFFFFF;
    width: 100px;
    background: #363B97;
    border: 1px solid #1238FF;
    border-radius: 0px 5px 5px 0px;
  }
`;
export const CalculatorWrapper = styled.div`
 
  background: linear-gradient(180deg, #363B97 0%, #454BB6 79.34%, #363B97 100%);
  border: 2px solid #FFFFFF;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  display: grid;
  justify-content: center;
  height: 100%;
  min-height:500px ;
  padding: 50px;
  @media (max-width: 600px) {
    padding: 20px;
  }
  h1 {
    color: #FFFFFF;
    width: 100%;
    text-align: center;
  }
`;
export const LoanAmount = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 50px;
  p {
    color: #FFFFFF;
    font-weight: 900;
    font-family: sans-serif;
  }
  button {
    width: 225px;
    height: 55px;
    border-radius: 10px;
    color: #FFFFFF;
    background-color: #4147AE;
    font-weight: 900;
    font-size: medium;
    border-color: #fff;
  }
  input {
    width: 400px;
    color: #FFFFFF;
  }
  @media (max-width: 550px) {
  
    flex-direction: column;
  }
`;
export const LoanTenure = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid #FFFFFF;
  background:  #FFFFFF;
  padding: 2px;
  border-radius: 10px;
 /*  column-gap: 56px; */
 /*  p {
    color: #FFFFFF;
    font-weight: 900;
    font-family: sans-serif;
  }
  div {
    display: flex;
    width: 401px;
    height: 53px;
    background: #FAFAFA;
    border-radius: 8px;
  }
  button {
    width: 225px;
    height: 55px;
    border-radius: 10px;
    color: #FFFFFF;
    background-color: #4147AE;
    font-weight: 900;
    font-size: medium;
    border-color: #fff;
  } */
`;
export const TenureButton = styled.button`
  background: #FFFFFF;
`;
export const InterestRate = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 50px;
  p {
    color: #FFFFFF;
    font-weight: 900;
    font-family: sans-serif;
  }
  button {
    width: 225px;
    height: 55px;
    border-radius: 10px;
    color: #FFFFFF;
    background-color: #4147AE;
    font-weight: 900;
    font-size: medium;
    border-color: #fff;
  }
  input {
    width: 400px;
  }
`;
export const BorderLine = styled.div`

  border: 1.3px solid #FFFFFF;
  background-color: #FFFFFF;
`;
export const ApplicationCntainer = styled.div`
 display: flex;
 
 justify-content: space-evenly;
  padding: 45px 35px 60px 35px;
  margin: 0 auto;
  @media (max-width: 913px) {
 
    flex-direction: column;
  }
  div > button {
    background: #363B97;
    border-radius: 8px;
    border: none;
    width: 120px;
    height: 40px;
    color: #FFFFFF;
    margin-top: 20px;
  }
  div > h1 {
    color: #363E98;
  }
  div > div {
    display: flex;
    align-items: center;
  }
  div > div > img {
    display: grid;
    justify-content: center;
    align-items: center;
    width: 20px;
    height: 20px;
  }
`;
export const MobileImage = styled.div`
  display: grid;
  justify-content: center;
  justify-items: center;
`;
export const LoantypeContainer = styled.div`
  background: #F3FAFB;
  display: grid;
  justify-content: center;
  text-align: center;
  color: #464040;
  padding: 50px;
  @media(max-width: 600px) {
    padding: 20px;
    
  }
`;
export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  column-gap: 80px;
  row-gap: 50px;
  margin-top: 60px;
  justify-items: center;
  @media (max-width: 913px) {
     column-gap: 40px;
  row-gap: 24px;
}
@media (max-width: 450px) {
    column-gap: 20px;
  row-gap: 12px;
  grid-template-columns: 1fr 1fr 1fr;
}

`;
export const ImageBox = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  width: 142px;
  height: 100px;
  background: #FFFFFF;
  border-radius: 25px;
  
@media (max-width: 690px) {
  width: 70px;
  height: 50px;
  border-radius: 12px;
}

`;
export const CommentContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 20px;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 527px;
  height:100%;
  background: #363B97;
  h1 {
    color: #FFFFFF;
  }
  div {
    display: grid;
    justify-content: center;
    align-items: center;
  }
  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr ;
    column-gap: 10px;
  }

`;
export const CommentSection = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  padding: 30px;
  border: 1px solid;
  background-color: #FFFFFF;
  border-radius: 8px;
  border: none;
  max-width: 1200px;
  @media (max-width: 400px) {
    padding: 15px;
    }
  h2 {
    color: #363E98;
  }
`;
export const PartnerContainer = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 100%;
  margin: 0 auto;
  padding: 70px 100px;
  @media (max-width: 768px) {
    padding: 70px 150px;
  }

  h1 {
    color: #363b97;
  }
`;

export const radioInnerContainer =
  { background: '#83D1D8', borderRadius: 10, flex: 1, paddingBottom: 4, marginRight: 6 };
export const radioOuterContainer =
  { background: '#FAFAFA', padding: 4, borderRadius: 10, alignItems: 'center', justifyContent: 'space-evenly', }


export const PartnerSection = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;
  grid-template-columns: repeat(3, 1fr);
  div > img {
    max-width: 230px;
    @media (max-width: 560px) {
      max-width: 130px;
    }
    @media (max-width: 400px) {
      max-width: 90px;
    }
  }
`;