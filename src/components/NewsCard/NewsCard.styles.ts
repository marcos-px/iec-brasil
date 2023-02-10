import styled from "styled-components";

export const NewsCardStyle = styled.div`


max-width: 391px;
background-color: #FFFFFF;

&:hover{

  h4{
    color: var(--azul);
  }
  .zoom img{

    transform: scale(1.15);
    transition-duration: 0.2s;
    animation: flash 0.1s linear;
    transition-timing-function: steps(1, jump-start);
    transition-delay: 0.1s;
    @keyframes flash {
    0% { opacity: 0.5; }
    100% { opacity: 1; }
    }
  }

  .arrow{
    display: none;
  }
  .arrow-hover{
    display: flex;
  }
}

h4{
font-family: 'Archivo-extra-condensed';
font-size: 32px;
font-weight: 700;
line-height: 35px;
letter-spacing: 0.05em;
text-transform: uppercase;
color: var(--azulEscuro);
margin: 30px 0;
}

p{
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: var(--heavy);
  margin-bottom: 14px;
}

a{
  cursor: pointer;

  text-align: end;
}

.zoom{
  overflow: hidden;
}
span{
margin: 8px 0 10px 0;
font-family: 'Archivo';
font-style: italic;
font-weight: 400;
font-size: 12px;
line-height: 150%;
color: var(--cinza);
}

.padding{
  padding: 0px 8px 12px 8px;
}
.link{
  display: flex;
  justify-content: end;
  color: red;
}

.arrow-hover{
  display: none;
}

`
