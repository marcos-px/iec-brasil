import styled from "styled-components";

interface CustomSectionProps {
  backgroundColor: string;
}

export const ColoredCardStyle = styled.div<CustomSectionProps> `
height: 305px;
max-width: 216px;
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 16px;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 20px;
background-color: ${props => props.backgroundColor};

span{
margin: 16px 0;
max-width: 150px;
font-weight: 700;
font-size: 14px;
line-height: 120%;
color: #F3F3F3;
text-transform: uppercase;
}

p{
max-width: 185px;
font-weight: 400;
font-size: 14px;
line-height: 120%;
color: #F3F3F3;
margin-bottom: 16px;
}

a{
  cursor: pointer;
}

`
