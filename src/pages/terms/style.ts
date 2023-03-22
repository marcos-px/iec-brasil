import styled from "styled-components";
import bg2 from "../../assets/hero-bottom.png";

export const TermoDeUso = styled.section`
  margin-top: -5px;
  height: 100%;
  background-image: url(${bg2});
  background-size: contain;

  h2 {
    margin: 0 auto;
    font-family: "Archivo-Condensed";
    font-style: normal;
    font-weight: 700;
    font-size: 30px;
    line-height: 120%;
    text-align: center;
    text-transform: uppercase;
    color: var(--hover);
    padding-top: 40px;
    max-width: 1064px;
  }

  .content {
    display: flex;
    margin-top: 5px;

    p {
      max-width: 630px;
      color: var(--heavy);
      line-height: 150%;
      padding-top: 30px;
      margin: 20px;
      text-indent: 10%;
      text-align: justify;
    }
  }
  .termo {
    width: 50%;
  }
`;

export const PrivacyContainer = styled.div`
  width: 100%;
  background-image: url(${bg2});
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  .privacy-section{
    margin-top: 50px !important;
    height: 100%;
    max-width: 80vh;
    margin: 0 auto;
    font-size: 18px;
  }
  .privacy-heading{
    margin-bottom: 20px;
  }
  p {
    margin-bottom: 50px;
  }

`;
