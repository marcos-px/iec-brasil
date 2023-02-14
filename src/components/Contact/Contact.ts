import BackgroundSide from "../../assets/side-bg-contact.png";
import styled from "styled-components";

export const ContactForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  width: 60vh;
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
    border: 0;
    border-bottom: 1px solid #8f8f8f;
    padding: 8px;
    height: 38px;
    resize: none;
    margin-top: 20px;
    background-color: transparent;
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    overflow: hidden;
  }
  .textarea::placeholder {
    font-family: "Archivo";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
  }
  .textarea:active {
    background-color: transparent;
  }

  .button {
    left: 80%;
    top: 5%;
    position: relative;
    width: 94px;
    height: 48px;
    border-radius: 4px;
    border: 0;
    color: #fff;
    cursor: pointer;
    background-color: #1ca3dd;
    font-size: 16px;
    transition: background-color, transform 0.8s;
  }

  .button:hover {
    background-color: #0fe3ff;
    transform: scale(1.01);
  }
  .checkbox-control {
    display: flex;
    justify-content: left;
    gap: 30px;
  }

  // INPUT CHECKBOX//

  [type="checkbox"]:not(:checked),
  [type="checkbox"]:checked {
    position: absolute;
    left: -9999px;
  }
  [type="checkbox"]:not(:checked) + label,
  [type="checkbox"]:checked + label {
    position: relative;
    padding-left: 30px;
    cursor: pointer;
    margin-bottom: 24px;
    margin-top: 24px;
    display: inline-block;
    font-size: 14px;
  }
  /* checkbox aspect */
  [type="checkbox"]:not(:checked) + label:before,
  [type="checkbox"]:checked + label:before {
    content: "";
    position: absolute;
    left: 0px;
    top: -3px;
    width: 22px;
    height: 22px;
    border: 1px solid #000000;
    background: #fff8f0;
    border-radius: 4px;
    box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1);
  }
  /* checked mark aspect */
  [type="checkbox"]:not(:checked) + label:after,
  [type="checkbox"]:checked + label:after {
    content: "✔";
    position: absolute;
    top: 2px;
    left: 5px;
    font-size: 20px;
    line-height: 1.2;
    color: #0000ff;
    transition: all 0.2s;
  }
  /* checked mark aspect changes */
  [type="checkbox"]:not(:checked) + label:after {
    opacity: 0;
    transform: scale(0);
  }
  [type="checkbox"]:checked + label:after {
    opacity: 1;
    transform: scale(1);
  }
  /* disabled checkbox */
  [type="checkbox"]:disabled:not(:checked) + label:before,
  [type="checkbox"]:disabled:checked + label:before {
    box-shadow: none;
    border-color: #999999;
    background-color: #dddddd;
  }
  [type="checkbox"]:disabled:checked + label:after {
    color: #999999;
  }
  [type="checkbox"]:disabled + label {
    color: #aaaaaa;
  }
  /* accessibility */
  [type="checkbox"]:checked:focus + label:before,
  [type="checkbox"]:not(:checked):focus + label:before {
    border: 2px dotted #0000ff;
  }
  /* hover style just for information */
  label:hover:before {
    border: 2px solid #4778d9 !important;
    background: #fff8f0;
  }
`;

export const ContactInfo = styled.div`
  display: flex;
  justify-content: center;
  background-image: url(${BackgroundSide});
  background-size: cover;
  background-repeat: no-repeat;
  height: 680px;
  width: 470px;
  .title-icon {
    display: flex;
  }
  .contact-info-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
    h4 {
      margin-left: 16px;
      margin-bottom: 8px;
    }
    p {
      margin-left: 32px;
      margin-bottom: 25px;
      color: #bebebe;
    }
  }
  .info-contact-control {
    width: 200px;
  }

  .social-media {
    display: flex;
    margin-top: 120px;
    gap: 60px;
  }
`;
