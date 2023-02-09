import { useState } from "react";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { IoLocationOutline, IoPersonOutline } from "react-icons/io5";
import { ContactForm, ContactInfo } from "../components/Contact/Contact";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");

  return (
    <div className="contact-container">
      <ContactInfo>
        <div>
          <div className="info-contact-control">
            <AiOutlineMail />
            <h4>Converse com a gente</h4>
          </div>
          <div>
            <p>email@email.com</p>1
          </div>
        </div>
        <div>
          <div className="info-contact-control">
            <IoLocationOutline />
            <h4>Onde estamos</h4>
          </div>
          <p>
            Rua Lorem ipsum, 00
            <br />
            Cidade/Estado
            <br />
            CEP 00000-000
          </p>
        </div>
        <div>
          <div className="info-contact-control">
            <AiOutlinePhone />
            <h4>Telefone</h4>
          </div>
          <p>(00)00000-0000</p>
        </div>
      </ContactInfo>
      <ContactForm>
        <h1 className="contact">Entre em contato</h1>
        <span>
          Entre em contato com o IEC. Nossa equipe retornará o mais rápido
          possível.
        </span>
        <form onSubmit={() => {}} className="form">
        <input
            style={{ fontFamily: "FontAwesome" }}
            type="text"
            className="input"
            placeholder="Nome"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />

          <input
            type="text"
            className="input"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <input
            type="text"
            className="input"
            placeholder="Telefone"
            onChange={(e) => setPhoneNumber(e.target.value)}
            value={phoneNumber}
          />

          <h1 className="subject">Assunto</h1>
          <div className="checkbox-control">
            <input
              className="checkbox"
              type="checkbox"
              id="financeiro"
              name="financeiro"
            />
            <label htmlFor="financeiro">Marketing</label>
            <input
              className="checkbox"
              type="checkbox"
              id="marketing"
              name="marketing"
            />
            <label htmlFor="marketing">marketing</label>
            <input
              className="checkbox"
              type="checkbox"
              id="juridico"
              name="juridico"
            />
            <label htmlFor="juridico">Jurídico</label>
            <input
              className="checkbox"
              type="checkbox"
              id="doacoes"
              name="doacoes"
            />
            <label htmlFor="doacoes">Doações</label>
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
            <label htmlFor="doacoes">Doações</label>
          </div>
        </form>
      </ContactForm>
    </div>
  );
}

export default Contact;
