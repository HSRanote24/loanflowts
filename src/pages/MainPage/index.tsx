import { useState, useCallback } from "react";
//import { Radio } from 'antd';
import {
  LoanContainer,
  AssistanceContainer,
  AssistanceForm,
  RequestButton,
  Name,
  CalculatorWrapper,
  LoanAmount,
  LoanTenure,
  TenureButton,
  ApplicationCntainer,
  BorderLine,
  MobileImage,
  LoantypeContainer,
  GridContainer,
  ImageBox,
  CommentContainer,
  CommentSection,
  PartnerContainer,
  PartnerSection,
  AssistanInner
} from "../../style/MainPage/mainpage";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Worker from "../../assets/images/worker.jpg";
import Assistance from "../../assets/images/assistance.png";
import Mobile from "../../assets/images/mobile.png";
import Mobiledots from "../../assets/images/mobiledots.png";
import Rupee from "../../assets/images/rupee.png";
import Home from "../../assets/images/home.png";
import Medical from "../../assets/images/medical.png";
import Tarvel from "../../assets/images/travel.png";
import Wedding from "../../assets/images/wedding.png";
import Creditcard from "../../assets/images/creditcard.png";
import Education from "../../assets/images/education.png";
import Electronics from "../../assets/images/electronics.png";
import Emergency from "../../assets/images/emergency.png";
import Ratingstars from "../../assets/images/ratingstars.png";
import Nira from "../../assets/images/nira.png";
import Shubhlife from "../../assets/images/shubhlife.png";
import Fullerton from "../../assets/images/fullerton.png";
import Slider from "../../components/Slider/index";


const MainPage = (props: any) => {

  return (
    <>
      <Header />
      <LoanContainer>
        <div>
          <p>
            Loan upto 1,00,000 at<br />
            your fingertips
          </p>
          <button>Borrow now</button>
        </div>
        <div>
          <img src={Worker} alt="worker" />
        </div>
      </LoanContainer>
      <AssistanceContainer>
        <AssistanInner>
          <img src={Assistance} alt="assistance" />
        </AssistanInner>
        <div>
          <h1>Need assistance?</h1>
          <p>Request a call back</p>
          <AssistanceForm>
            <Name>
              <input type="text" placeholder="Enter your name" />
            </Name>
            <RequestButton>
              <input type="number" placeholder="Your Phone Number" />
              <button>Request</button>
            </RequestButton>
          </AssistanceForm>
        </div>
      </AssistanceContainer>
      <CalculatorWrapper>
        <div>
          <h1>Loan EMI calculator</h1>
        </div>
        <LoanAmount>
          <p>Loan amount</p>
          <Slider />
        </LoanAmount>
      {/*   <LoanTenure>
          <p>Loan Tenure</p>
          <Radio.Group defaultValue="a" buttonStyle="solid" optionType="button" > */}
            {/*  <Radio.Button  value="a">3 months</Radio.Button>
      <Radio.Button value="b">6 months</Radio.Button>
      <Radio.Button value="c">9 months</Radio.Button>
      <Radio.Button value="d">12 months</Radio.Button> */}
        {/*   </Radio.Group>
          <button>6 MONTHS</button>
        </LoanTenure> */}
        <LoanAmount>
          <p>Rate of interest</p>
          <Slider />

        </LoanAmount>

      </CalculatorWrapper>
      <ApplicationCntainer>
        <MobileImage>
          <img src={Mobile} alt="mobile" />
          <br />
          <img src={Mobiledots} alt="Mobiledots" />
        </MobileImage>
        <div>
          <h1>
            GET <br />
            FASTEST LOAN ONLINE <br /> IN 4 STEPS
          </h1>
          <div>
            <img src={Rupee} alt="rupee" />
            <p>Paperless Application</p>
          </div>
          <div>
            <img src={Rupee} alt="rupee" />
            <p>upload documents to complete the process</p>
          </div>
          <div>
            <img src={Rupee} alt="rupee" />
            <p>Check Loan eligibiity</p>
          </div>
          <div>
            <img src={Rupee} alt="rupee" />
            <p>voila! your loan is approved!</p>
          </div>
          <button>Apply Now</button>
        </div>
      </ApplicationCntainer>
      <LoantypeContainer>
        <h1>Few Personal loan Needs</h1>
        <GridContainer>
          <div>
            <ImageBox>
              <img src={Tarvel} alt="Travel" />
            </ImageBox>
            <p>Travel</p>
          </div>
          <div>
            <ImageBox>
              <img src={Education} alt="Travel" />
            </ImageBox>
            <p>Education</p>
          </div>
          <div>
            <ImageBox>
              <img src={Wedding} alt="Travel" />
            </ImageBox>
            <p>wedding</p>
          </div>
          <div>
            <ImageBox>
              <img src={Electronics} alt="Travel" />
            </ImageBox>
            <p>Electronics</p>
          </div>
          <div>
            <ImageBox>
              <img src={Creditcard} alt="Travel" />
            </ImageBox>
            <p>Credit card</p>
          </div>
          <div>
            <ImageBox>
              <img src={Emergency} alt="Travel" />
            </ImageBox>
            <p>Emergency</p>
          </div>
          <div>
            <ImageBox>
              <img src={Medical} alt="Travel" />
            </ImageBox>
            <p>Medical emergency</p>
          </div>
          <div>
            <ImageBox>
              <img src={Home} alt="Travel" />
            </ImageBox>
            <p>Home renovation</p>
          </div>
        </GridContainer>
      </LoantypeContainer>
      <CommentContainer>
        <div>
          <h1>
            What our
            <br /> customer says
            <br /> about us?
          </h1>
        </div>
        <CommentSection>
          <h2>Lateef Mushtaq</h2>
          <h3>Title here</h3>
          <p>
            Nisi vivamus neque elementum, at pharetra. Cras gravida congue in
            tincidunt neque, ipsum eiiAgestas. Duis risus ipsum dis commodo.
            Enim euismod velit amet volutpat egestas urna in eget pellentesque.
          </p>
          <img src={Ratingstars} alt="Ratingstars" />
        </CommentSection>
        <CommentSection>
          <h2>Lateef Mushtaq</h2>
          <h3>Title here</h3>
          <p>
            Nisi vivamus neque elementum, at pharetra. Cras gravida congue in
            tincidunt neque, ipsum eiiAgestas. Duis risus ipsum dis commodo.
            Enim euismod velit amet volutpat egestas urna in eget pellentesque.
          </p>
          <img src={Ratingstars} alt="Ratingstars" />
        </CommentSection>
      </CommentContainer>
      <PartnerContainer>
        <h1>Our Partners</h1>
        <PartnerSection>
          <div>
            <img src={Nira} alt="Nira" />
          </div>
          <div>
            <img src={Shubhlife} alt="Shubhlife" />
          </div>
          <div>
            <img src={Fullerton} alt="Fullerton" />
          </div>
        </PartnerSection>
      </PartnerContainer>
      <Footer />
    </>
  );
};
export default MainPage;