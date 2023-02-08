import styled from "styled-components";

export const ContactForm = styled.form`
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: #FFF8F0;
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
    background-color: #FFF8F0;
    margin-bottom: 14px;
    height: 34px;
    border-radius: 4px;
    border: 0;
    padding: 0 8px;
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
