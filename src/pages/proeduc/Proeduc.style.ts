import styled from "styled-components";

export const Div = styled.div`
  width: 100%;
  height: 176px;
  background-color: #1ca3dd;
  display: flex;
  align-items: center;
  h2 {
    font-style: normal;
    font-weight: 700;
    font-size: 38px;
    line-height: 52px;
    text-align: center;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: white;
    margin: 0 auto;
  }
`;

export const FirstSection = styled.section`
  background-color: #FFF8F0;
  display: flex;
  justify-content: center;

  p {
    text-align: start;
    width: 1002px;
  }
`;

export const SecondSection = styled.section`

  h3 {
    font-weight: 700;
    font-size: 32px;
    line-height: 35px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: #203745;
    text-align: center;
  }
`;

export const ProjectContainer = styled.div`
    width: 1208px;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 0px;
    gap: 16px;
    flex-flow: row wrap;
`

export const ThirdSection = styled.section`
  background-color: #FFF8F0;

  h2 {
    font-weight: 700;
    font-size: 48px;
    line-height: 52px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: #1c1a41;
    text-align: center;
  }
`;

export const ObjectiveTitles = styled.div`
  display: flex;
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;

  div {
    margin: 30px 16px;
  }

  img {
    width: 391px;
    height: 390px;
    object-fit: cover;
  }

  ul {
    width: 391px;
    margin: 16px 0px;
  }

  li {
    width: 389px;
    font-weight: 400;
    font-size: 19px;
    line-height: 150%;
    color: #1e1e1e;
    margin: 0px 16px;
    list-style-type: disc;
  }
`;
