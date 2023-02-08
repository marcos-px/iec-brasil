import styled from "styled-components";
import bg from '../../assets/hero-top.png'
export const HomeStyle = styled.div`
margin-top: 14px;
.blank-bg{

}
`
export const HeroSectionTop = styled.section`
  margin: auto auto;
  max-width: 1336px;
  height: 568px;
  background-image: url(${bg});
  background-position: center top;
  background-size: cover;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  .display-flex{
    display: flex;
    justify-content: space-around;

  }
  .text{
    max-width: 620px;
    ul{
      color: var(--neutral);
      max-width: 432px;
      margin: 68px 0 40px 0;
      display: flex;
      justify-content: space-between;
      text-transform: uppercase;
      li{
        cursor: pointer;
      }
    }
    h1{
      font-style: normal;
      font-weight: 700;
      font-size: 48px;
      line-height: 120%;
      text-transform: uppercase;
      font-family: "Archivo-condensed";
      color: var(--marinho);
    }
    p{
      margin: 24px 0;
      font-weight: 400;
      font-size: 16px;
      line-height: 150%;
      max-width: 600px;
    }
  }
  .video{
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    border-radius: 10px;
    margin-top: 132px;
  }
`
export const HeroSectionBottom = styled.section`
`
