import React from 'react'
import {HeadContainer,FirstDiv,SecondDiv,ThirdDiv,FourthDiv}  from "../../style/Header/header";
import iffinidi from "../../assets/images/iffinidi.png";
import vector from "../../assets/images/vector.png";
const Header = () => {
  return (
    <>
    <HeadContainer>
    <FirstDiv >Good loans</FirstDiv>
    <SecondDiv>Continue your application</SecondDiv>
    <ThirdDiv> <img src={iffinidi} alt="assistance" /><p>affinidi wallet</p></ThirdDiv>
    <FourthDiv><img src={vector} alt="vector" /><p>English</p></FourthDiv>        
</HeadContainer>
</>
  )   
}

export default Header