import styled from "styled-components";

type ObjectiveTitleProps = {
  color: string;
  shape: string;
}

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
  height: 1116px;
  clip-path: polygon(0 0, 100% 0, 100% 89%, 0% 100%);

  p {
    text-align: start;
    width: 1002px;
    margin-top: 40px;
  }

  div {
    margin-top: 54px;
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
    margin-top: 79px;
  }

`;

export const ProjectContainer = styled.div`
    width: 1208px;
    margin: 40px auto;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 0px;
    gap: 16px;
    flex-flow: row wrap;
`

export const ThirdSection = styled.section`
  background-color: #FFF8F0;
  clip-path: polygon(0 11%, 100% 0, 100% 100%, 0 100%);

  h2 {
    padding-top: 160px;
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
  margin-top: 53px;
`;

export const ObjectiveTitle = styled.div<ObjectiveTitleProps>`
    margin-left: 127px;
    width: 294px;
    height: 74px;
    background: ${(props) => props.color};
    box-shadow: inset 0px -7px 8px rgba(0, 0, 0, 0.25);
    clip-path: ${(props) => props.shape};

    h3 {
    font-weight: 700;
    font-size: 35px;
    line-height: 44px;
    text-align: center;
    text-transform: uppercase;
    color: #1c1a41;
    margin-top: 17px;
  }
`

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
