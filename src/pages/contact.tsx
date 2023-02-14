import { useState } from "react";
import React from "react";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { IoLocationOutline } from "react-icons/io5";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { AiOutlineInstagram, AiFillYoutube } from "react-icons/ai";
import { ContactForm, ContactInfo } from "../components/Contact/Contact";
import Footer from "../components/Footer";
import { Header } from "../components/Header";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");

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
                <FaInstagram />
                <FaFacebookF />
                <FaLinkedinIn />
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

          <form onSubmit={() => {}} className="form">
            <input  
              type="text"
              className="input"
              placeholder="&#xf007;    Nome"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />

            <input
              type="text"
              className="input"
              placeholder="&#xf0e0;    Email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <input
              type="text"
              className="input"
              placeholder="&#xf095;    Telefone"
              onChange={(e) => setPhoneNumber(e.target.value)}
              value={phoneNumber}
            />

            <h1 className="subject">Assunto</h1>
            <div className="checkbox-control">
              <div>
                <input
                  className="checkbox"
                  type="checkbox"
                  id="financeiro"
                  name="financeiro"
                />
                <label htmlFor="financeiro">Financeiro</label>
              </div>
              <div>
                <input
                  className="checkbox"
                  type="checkbox"
                  id="marketing"
                  name="marketing"
                />
                <label htmlFor="marketing">Marketing</label>
              </div>
              <div>
                <input
                  className="checkbox"
                  type="checkbox"
                  id="juridico"
                  name="juridico"
                />
                <label htmlFor="juridico">Jurídico</label>
              </div>
              <div>
                <input
                  className="checkbox"
                  type="checkbox"
                  id="doacoes"
                  name="doacoes"
                />
                <label htmlFor="doacoes">Doações</label>
              </div>
              <div></div>
            </div>

            <textarea
              className="textarea"
              placeholder="Mensagem"
              onChange={(e) => setMessage(e.target.value)}
              value={message}
            />

            <input type="submit" className="button" value="Enviar" />

            <div>
              <input
                className="checkbox"
                type="checkbox"
                id="doacoes"
                name="doacoes"
              />
              <label htmlFor="doacoes">
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
