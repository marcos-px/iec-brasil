import styled from "styled-components";

export const FooterStyle = styled.footer`
  width: 100vw;
  height: 336px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  background: #1ca3dd;
  .RodapeFooter {
    height: 70px;
    color: #fff;
    font-weight: 700;
    font-size: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const InfoFooter = styled.div`
  width: 90%;
  height: 266px;
  border-bottom: 1px solid #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  .ContainerNavecacaoFooter {
    width: calc(50% - 5px);
    display: flex;
    justify-content: space-around;
    .ContainterLogo {
      img {
        width: 167px;
        cursor: pointer;
      }
    }
    .NavecacaoFooter {
      h3 {
        font-weight: 700;
        font-size: 20px;
        margin-bottom: 8px;
      }
      ul li {
        margin: 8px 0;
        font-weight: 400;
        font-size: 16px;
        cursor: pointer;
        :hover {
          color: #12688e;
        }
      }
    }
  }
  .ContainerContatoFooter {
    width: calc(50% - 5px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    label {
      font-weight: 700;
      font-size: 20px;
      margin-bottom: 8px;
      position: relative;
      input {
        background: none;
        border: none;
        border-bottom: 1px solid #fff;
        padding: 0 0 5px 30px;
        font-size: 16px;
        font-weight: 400;
        color: #fff;
        ::placeholder {
          color: #fff;
        }
        :focus {
          outline: 0;
          box-shadow: 0;
        }
      }
      i {
        position: absolute;
        left: 5px;
        bottom: 2px;
      }
      button {
        border: none;
        background: #fff;
        color: #1ca3dd;
        cursor: pointer;
        width: 50px;
        height: 35px;
        margin-left: 10px;
        border-radius: 5px;
        font-size: 20px;
        text-align: center;
        :hover {
          background: #f5f5f5;
          color: #12688e;
        }
      }
    }
  
    .NavegacaoRedesSociais ul {
      display: flex;
      margin-top: 30px;
      font-size: 25px;
      gap: 15px;
      li {
        margin: 0 10px;
        cursor: pointer;
        :nth-child(1) {
          margin-left: -45px;
        }
        :hover {
          color: #12688e;
        }
      }
    }
  }
`;
