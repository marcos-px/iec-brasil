import styled from "styled-components";

interface BgProps {
  background: string;
}

export const ProjectCardStyle = styled.div<BgProps>`
max-width: 391px;
height: 368px;
background: url(${props => props.background});
  background-position: center top;
  background-size: cover;
  display: flex;
  align-items: end;
  padding-bottom: 30px;
h4{
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
`
