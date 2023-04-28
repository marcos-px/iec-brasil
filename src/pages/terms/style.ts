import styled from "styled-components";
import bg2 from '../../assets/hero-bottom.png';

export const TermoDeUso = styled.section`
margin-top:-5px;
height: 100%;
background-image: url(${bg2});
background-size: contain;


h2{
  margin: 0 auto;
  font-family: 'Archivo-Condensed';
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 120%;
  text-align: center;
  text-transform: uppercase;
  color: var(--hover);
  padding-top: 40px;
  max-width: 1064px;
  @media screen and (max-width: 800px) {
  margin-left: 20px; 
  margin-right: 20px;
  font-size: 25px;
  text-align:justify;

  }
}

.content{
  display:flex;
  margin-top: 5px;
  @media screen and (max-width: 800px) {
   flex-direction:column;
    
    }
  
  
  p{
    max-width: 630px;
    color: var(--heavy);
    line-height: 150%;
    padding-top:30px;
    margin:20px;
    text-indent: 10%;
    text-align:justify;
    @media screen and (max-width: 800px) {
      
  }
  .termo{
    width:50%;
    
  }
 
`
