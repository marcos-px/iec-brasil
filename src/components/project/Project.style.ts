import styled from "styled-components";

export const ProjectCard = styled.div`
  width: 290px;
  height: 307px;
  background-color: #f2f2f2;

  img {
    width: 80px;
    height: 80px;
    display: block;
    margin: 0 auto;
  }
  
  p {
    font-weight: 700;
    font-size: 24px;
    line-height: 150%;
    margin-top: 38px;
    text-align: center;
    color: #1C1A41;
  }
`;
export const NumberCard = styled.div`
  &.type--green {
    background-color: #42c076;
  }
  &.type--blue {
    background-color: #52b1c7;
  }
  &.type--red {
    background-color: #eb784c;
  }
  &.type--yellow {
    background-color: #ecbf4a;
  }
  width: 44px;
  height: 44px;
  text-align: center;
  margin: 8px;
  span {
    color: white;
    font-weight: 700;
    font-size: 30px;
    line-height: 150%;
  }
`;

export const IconCard = styled.div`
    width: 220px;
    margin: 0 auto;
`
