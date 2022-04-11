import styled from "styled-components";
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
export const AssistanceContainer = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 1fr 1fr;
  background: #F2F3F8;
  padding: 50px;
  image {
    width: 555px;
  }
  div > h1 {
    color: #363B97;
  }
`;
export const AssistanceForm = styled.form`
  display: grid;
  row-gap: 10px;
`;
export const Name = styled.div`
  input {
    border: none;
    height: 58px;
    width: 527px;
  }
`;
export const RequestButton = styled.div`
  display: flex;
  input {
    border: none;
    height: 58px;
    width: 428px;
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
  width: 100%;
  background: linear-gradient(180deg, #363B97 0%, #454BB6 79.34%, #363B97 100%);
  border: 2px solid #FFFFFF;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  display: grid;
  justify-content: center;
  height: 947px;
  padding: 50px;
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
  }
`;
export const LoanTenure = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 56px;
  p {
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
  }
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
  width: 967.5px;
  height: 0px;
  border: 1.3px solid #FFFFFF;
  background-color: #FFFFFF;
`;
export const ApplicationCntainer = styled.div`
  padding: 50px;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
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
`;
export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  column-gap: 80px;
  row-gap: 50px;
  margin-top: 60px;
  justify-items: center;
`;
export const ImageBox = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  width: 142px;
  height: 100px;
  background: #FFFFFF;
  border-radius: 25px;
`;
export const CommentContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 20px;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 527px;
  background: #363B97;
  h1 {
    color: #FFFFFF;
  }
  div {
    display: grid;
    justify-content: center;
    align-items: center;
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
  h2 {
    color: #363E98;
  }
`;
export const PartnerContainer = styled.div`
  text-align: center;
  padding: 50px;
  h1 {
    color: #363B97;
  }
`;
export const PartnerSection = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 1fr 1fr;
`;