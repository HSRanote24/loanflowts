import React, { useState } from "react";

import { FooterContainer, FooterElements } from "../../style/Footer/footer";

const Footer = () => {
  const [readMore, setReadMore] = useState(false);

  return (
    <>
    <FooterContainer>
      <div>
        <h1>GOOD LOANS</h1>
      </div>
      <FooterElements>
        <div>
          <h2>Company</h2>
          <br />
          <p>
            About
            <br /> <br />
            Testimonials <br /> <br />
          {/*   <Link to="/privacypage" style={{ textDecoration: "none" }}>
              Privacy policy
            </Link> */}
          </p>
        </div>
        <div>
          <h2>Region</h2>
          <br />
          <p>India</p>
        </div>
        <div>
          <h2>Help</h2>
          <br />
          <p>
            Help center <br />
            <br /> Contact <br /> <br />
            How it works
          </p>
        </div>
      </FooterElements>
    </FooterContainer>
  </>
  );
};

export default Footer;
