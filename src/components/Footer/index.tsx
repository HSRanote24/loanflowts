import React, { useState } from "react";

import {
  Container,
  Wrapper,
  WebView,
  MobileView,
  InfoSection,
  ReadMoreAccordion,
} from "../../style/Footer/footer";

const Footer = () => {
  const [readMore, setReadMore] = useState(false);

  return (
    <Container id="footer">
      <Wrapper>
        <InfoSection>
          <div>
            <h1>GOOD LOANS</h1>
          </div>
         {/*  <div>
            <a className="link" href="/terms-and-conditions">
              232323 &amp; 32323232323
            </a>
          </div>
          <div>
            <a className="link" href="/compliance">
              44344343434
            </a>
          </div>
          <div>
            <a href="mailto:Hi@TerpeneBeltFarms.com">Hi@dfdfdfdfdfdfdfdfdfdf.com</a>
          </div>
          <div>
            <a href="tel:1(855)275-3336">1 (855) 275-3336</a>
          </div> */}
        </InfoSection>
        <div>
          <h5>
            <sup>+</sup> dsadssadsadsadadasdasdasdsadsadsadsadsadaadsa
            <MobileView>
              <ReadMoreAccordion className="readMoreAccordion"></ReadMoreAccordion>
            </MobileView>
          </h5>
          <WebView>
            <p>
             dfsdfdsfdsfsdfsdfsdfsdfdsfsdfsdfsdfdsfdsfsdfsdfsdfdsfdsfsdfdsfds
             fdsfdsf
             sdfdsfsdfsdfsdfdsfdsfdsdasdasdasdsadasdasdsadsadasadsadsad
             adsdadddddddddddddddddddddddddddddddddddddddddddddddddddad
            </p>
            <p className="term">dfsfdsfsfsfsdfsdfsdfdsfsdfsfsf</p>
          </WebView>
        </div>
      </Wrapper>
    </Container>
  );
};

export default Footer;
