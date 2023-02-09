import BackgroundSide from "../../assets/side-bg-contact.png";
import styled from "styled-components";

export const ContactForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  color: #fff;
  padding: 14px;
  color: #000;

  .title {
    margin-bottom: 14px;
  }

  .form {
    max-width: 600px;
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  .input {
    background-color: #fff8f0;
    margin-bottom: 14px;
    height: 34px;
    border: 0;
    padding: 0 8px;
    border-bottom: 1px inset #8f8f8f;
    opacity: 30%;
    font-family: FontAwesome;
  }
  .textarea {
    margin-bottom: 14px;
    border-radius: 4px;
    border: 0;
    padding: 8px;
    height: 94px;
    resize: none;
  }

  .button {
    height: 34px;
    border-radius: 4px;
    border: 0;
    cursor: pointer;
    background-color: #0fdbff;
    font-size: 18px;
    transition: background-color, transform 0.8s;
  }

  .button:hover {
    background-color: #0fe3ff;
    transform: scale(1.01);
  }
`;

export const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  background-image: url(${BackgroundSide});
  background-size: cover;
  background-repeat: no-repeat;
  color: white;
  max-height: 100vh;
  height: 680px;
  width: 470px;
  justify-content: center;
  align-items: center;

  .info-contact-control {
    display: flex;
    max-width: 200px;
    align-items: center;
  }
  h4 {
    font-weight: 400;
  }
`;
