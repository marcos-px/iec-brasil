import { useState } from "react";
import React from "react";
import Swal from "sweetalert2";
import InputMask from "react-input-mask";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { AiFillYoutube, AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { IoLocationOutline } from "react-icons/io5";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { ContactForm, ContactInfo } from "../components/Contact/Contact";
import emailjs from "@emailjs/browser";
import Footer from "../components/Footer";
import { Header } from "../components/Header";
import { Link } from "react-router-dom";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");
  const [subject, setSubject] = useState("");

  // const phoneRegExp = /^((\+\d{1,3}(-| )?\(?\d\)?(-| )?\d{1,3})|(\(?\d{2,3} \)?))(-| )?(\d{3,4})(-| )?(\d{4})(( x| ext)\d{1,5}){0,1} $/
  ///^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

  const schema = yup.object({
    name: yup.string().required("Digite o seu nome"),
    email: yup.string().email().required("Digite um e-mail válido"),
    phoneNumber: yup.string().required("Informe um número de telefone válido."),
    subject: yup.string().required("Informe o assunto da mensagem"),
    message: yup.string().required("Digite a sua mensagem aqui."),
  });

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  function sendEmail() {
    // e.preventDefault();
    const templateParams = {
      from_name: name,
      message: message,
      email: email,
      phone: phoneNumber,
      subject: subject,
    };
    emailjs
      .send(
        "service_du8us6g",
        "template_2elpy7c",
        templateParams,
        "yR13Du7wbMk-AWYlD"
      )
      .then(
        (response) => {
          alert("E-mail enviado com sucesso.");
          console.log("Email enviado", response.status, response.text);
          setName("");
          setEmail("");
          setPhoneNumber("");
          setMessage("");
          setSubject("");
        },
        (error) => {
          console.log("Error", error.status, error);
        }
      );
  }

  return (
    <>
      <Header />
      <div className="contact-container">
        <ContactInfo>
          <div className="contact-info-container">
            <div className="info-contact-control">
              <div className="title-icon">
                <AiOutlineMail />
                <h4>Converse com a gente</h4>
              </div>
              <div>
                <p>email@email.com</p>
              </div>
            </div>
            <div className="info-contact-control">
              <div className="title-icon">
                <IoLocationOutline />
                <h4>Onde estamos</h4>
              </div>
              <div>
                <p>
                  Rua Lorem ipsum, 00 <br />
                  Cidade/Estado <br />
                  CEP 00000-000{" "}
                </p>
              </div>
            </div>
            <div className="info-contact-control">
              <div className="title-icon">
                <AiOutlinePhone />
                <h4>Telefone</h4>
              </div>
              <div>
                <p>(00)00000-0000</p>
              </div>
              <div className="social-media">
                <Link to={"https://www.instagram.com/iecbrasil/"}>
                  <FaInstagram />
                </Link>
                <Link to={"https://www.facebook.com/iecbrasil.org"}>
                  <FaFacebookF />
                </Link>
                <Link to={"https://www.linkedin.com/company/iecbrasil/"}>
                  <FaLinkedinIn />
                </Link>
                <Link to={"https://www.youtube.com/@iecbrasil7560"}>
                  <AiFillYoutube />
                </Link>
              </div>
            </div>
          </div>
        </ContactInfo>
        <ContactForm>
          <div className="contact-title">
            <h1>Entre em contato</h1>
            <p>
              Entre em contato com o IEC. Nossa equipe retornará o mais rápido
              possível.
            </p>
          </div>

          <form
            onSubmit={handleSubmit(sendEmail)}
            className="form"
            autoComplete="off"
          >
            <input
              {...register("name")}
              type="text"
              className="input"
              placeholder="&#xf007;    Nome"
              id="name"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
            <span className="input-error">
              {errors?.name?.message as string}
            </span>

            <input
              {...register("email")}
              type="text"
              className="input"
              placeholder="&#xf0e0;    Email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <span className="input-error">
              {errors?.email?.message as string}
            </span>
            <InputMask
              mask={"(99) 9999-99999"}
              {...register("phoneNumber")}
              type="text"
              className="input"
              placeholder="&#xf095;    Telefone"
              onChange={(e) => setPhoneNumber(e.target.value)}
              value={phoneNumber}
            />
            <span className="input-error">
              {errors?.phoneNumber?.message as string}
            </span>
            <h1 className="subject">Assunto</h1>
            <input
              type="text"
              className="subject-content"
              placeholder="Informe o assunto"
              {...register("subject")}
              id="subject"
              onChange={(e) => setSubject(e.target.value)}
              value={subject}
            />
            <span className="input-error">
              {errors?.subject?.message as string}
            </span>
            <textarea
              {...register("message")}
              className="textarea"
              placeholder="Mensagem"
              onChange={(e) => setMessage(e.target.value)}
              value={message}
            />
            <span className="input-error">
              {errors?.message?.message as string}
            </span>

            <input type="submit" className="button" value="Enviar" />

            <div>
              <input
                className="checkbox"
                type="checkbox"
                id="noticias"
                name="noticias"
              />
              <label htmlFor="noticias">
                Concordo em receber notícias do IEC.
              </label>
            </div>
          </form>
        </ContactForm>
      </div>
      <Footer />
    </>
  );
}

export default Contact;
