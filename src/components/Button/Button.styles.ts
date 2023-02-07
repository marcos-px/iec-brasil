import { Link } from "react-router-dom";
import styled from "styled-components";

export const ButtonLink = styled(Link) `
  font-style: normal;
  font-size: 30px;
  color: #FFFFFF;
  background: #2C5EDE;
  border-radius: 10px;
  padding: 10px 10px 10px 10px;
  text-transform: capitalize;
  text-decoration: none;

  :hover{
    color: white;
    text-decoration: none;
  }

  :visited{
    color: white;
    text-decoration: none;
  }

  :active{
    color: white;
    text-decoration: none;
  }

  @media only screen and (max-width: 375px){
}
`
export const ButtonSubmit = styled.button `
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 0px;
  color: #FFFFFF;
  cursor: pointer;
  background: #94E7DF;
  border-radius: 10px;
  padding: 17px 125px 20px 125px;
  width: 100%;
  min-width: 100%;
  max-width: 30vw;
  margin: 10px 0px;
  text-transform: capitalize;
  text-decoration: none;
  display: flex;
  justify-content: center;

  :hover{
    color: white;
  }

  .login{
    display: grid;
    margin-top: 20px;
    font-size: 19px;
      input {
      color: red;
      width: 53vw;
      min-width: 100px;
      max-width: 300px;
    }
  }

  @media only screen and (max-width: 375px){
  }
`