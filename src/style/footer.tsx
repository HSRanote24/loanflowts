import styled from 'styled-components';

const Container = styled.div`
  background-color: #0000FF;
  position: relative;
  clear: both;
`;
const Wrapper = styled.div`
  max-width: 1396px;
  padding: 45px 35px 60px 35px;
  margin: 0 auto;
  min-height: 227px;
  display: flex;

  > div {
    flex: 1;
    color: #ffffff;
    font-family: 'robotoregular';

    h5 {
      font-family: 'robotobold';
      font-size: 15px;
      text-transform: uppercase;
      line-height: 23px;
    }
    p {
      font-size: 15px;
      line-height: 25px;
    }
    .link {
      cursor: pointer;
      text-decoration: underline;
    }
    .term {
      margin-top: 30px;
      /* text-align: center; */
    }
  }
  @media (max-width: 913px) {
    /* padding-top: 5px;  */
    flex-direction: column;
  }
  /* @media (max-width: 768px) {
    padding: 5px 28px;
  } */
`;
const MobileView = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: block;
  }
  /* .readMoreAccordion {
    display: none;
  } */
  .accordion {
    border: none;
  }
  .accordion__panel {
    padding: 5px;
    font-size: 15px;
    text-align: left;
    font-family: 'robotoregular';
    text-transform: initial;
    font-weight: normal;
    .term {
      text-align: center;
    }
  }
  .accordion__button {
    padding: 2px 0;
    font-size: 12px;
    background-color: transparent;
    color: #fff;
    text-transform: capitalize;
    /* padding-left: 208px; */
    :after {
      display: inline-block;
      content: '';
      height: 5px;
      width: 5px;
      margin-left: 5px;
      border-bottom: 2px solid currentColor;
      border-right: 2px solid currentColor;
      transform: rotate(-45deg);
    }
    :before {
      display: none;
    }
    :focus {
      outline: none;
    }
  }
  .accordion__button[aria-expanded='true']::after,
  .accordion__button[aria-selected='true']::before {
    transform: rotate(45deg);
    position: relative;
    top: -2px;
  }
`;
const WebView = styled.div`
  display: block;
  @media (max-width: 768px) {
    display: none;
  }
`;
const InfoSection = styled.div`
  /* float: left; */
  padding: 0px 25px 0 0;
  max-width: 350px;
  > div {
    display: flex;
    align-items: center;
    margin-top: 0px;
    > p {
      margin-right: 10px;
    }
    > a {
      font-size: 15px;
      line-height: 25px;
      text-decoration: underline;
      color: white;

      :hover {
        opacity: 0.8;
      }

      :active {
        opacity: 0.6;
      }
    }
  }
  .socialLink {
    margin-top: 15px;

    > a {
      margin-right: 10px;
    }
  }
`;
const ReadMoreBtn = styled.div`
  /* padding-left: 209px; */
  button {
    padding: 0;
    background: transparent;
    color: #fff;
    border: none;
    font-size: 12px;
    :focus {
      outline: none;
    }
  }
`;

const FloatingBtn = styled.div`
  cursor: pointer;
  position: absolute;
  right: 0;
  top: -7px;
  .backToSection:hover {
    opacity: 0.8;
  }
  @media (max-width: 913px) {
    text-align: center;
    position: relative;
    left: 0;
    display: flex;
    justify-content: center;
    margin-bottom: -55px;
  }
`;
const ReadMoreAccordion = styled.div``;
export {
  Container,
  Wrapper,
  WebView,
  MobileView,
  InfoSection,
  ReadMoreBtn,
  ReadMoreAccordion,
  FloatingBtn,
};
