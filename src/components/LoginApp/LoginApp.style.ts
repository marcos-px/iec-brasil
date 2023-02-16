import styled from "styled-components";

export const  TesteStyle = styled.form`
    box-sizing: border-box;
    background: #001839;
    border: 0.9875px solid #CFCFCF;
    border-radius: 15.8px;
    padding: 2% 2%;
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 23px;
    max-width: 300px;

    input{
        border-radius: 10px;
        border: #DDDFE1 solid 1px;
        max-width: 100%;
        min-width: 100%;
        min-height: 36px;
        padding-left: 17px;    
        }
    input::placeholder{
        color: #abafb3;
        font-size: 14px;
    }
    .login{
      color: white;
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

    .email   {
        display: grid;
        color: white;
        margin-top: 20px;
        font-size: 16px;        
        input   {
            max-width: 30vw;
            margin-top: 4px;
        }
    }

    .password   {
        display: grid;
        color: white;
        margin-top: 20px;
        font-size: 16px;

        input   {
            max-width: 30vw;
            margin-top: 4px;
        }
    }

    .remember   {
        display: table-row;
    }

    .title   {
        text-align: center;
    }

    .login input    {
        min-width: 10px;
        max-width: 15px;
        width: 10vw;
        min-height: 10px;
        max-height: 15px;
    }

    .logo {
        display: flex;
        justify-content: center;
    }
    
    @media only screen and (max-width: 450px){
        }
    }
`

export const  Login = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: rgba(255, 255, 200);
    margin: 50px 0px;
    img{
        cursor: pointer;
    }

    @media only screen and (max-width: 800px){
    }

    
    @media only screen and (max-width: 450px){
    }
`
