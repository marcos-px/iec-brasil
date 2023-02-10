import styled from "styled-components";

interface BgProps {
  background: string;
  backgroundHover:string;
}

export const ProjectCardStyle = styled.div<BgProps>`
max-width: 391px;
height: 368px;
background: url(${props => props.background});
background-position: center top;
background-size: cover;
display: flex;
flex-direction: column;
justify-content: end;
padding-bottom: 30px;

&::after{
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(30, 144, 255, 0.5);
}

&:hover{
  cursor: pointer;
  background: url(${props => props.backgroundHover});
  h4{
    transform: translateY(-180%);
    cursor: pointer;
    transition: all 0.5s ease;
  }
  h5{
    transition: all 0.5s ease;
    display: block;
  }

}
&:not(:hover) {
  h4 {
  transition: all 0.5s ease;
  transform: translateY(0);
}}

h4{

  margin-top: 37px;
  cursor: default;
  font-family: 'Archivo-extra-condensed';
  font-weight: 700;
  font-size: 32px;
  line-height: 35px;
  text-align: center;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  max-width: 350;
  color: var(--azulEscuro);

}
h5{
  display: none;
  margin: 0 auto;
  font-weight: 400;
  font-size: 20px;
  line-height: 150%;
  text-align: center;
  max-width: 375px;
}
`
