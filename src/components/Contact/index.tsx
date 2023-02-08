import { useState } from "react";
import { ContactForm } from "./ContactForm";
function FormContact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");

  return (
    <ContactForm>
      <h1 className="contact">Entre em contato</h1>
      <span>
        Entre em contato com o IEC. Nossa equipe retornará o mais rápido
        possível.
      </span>
      <form onSubmit={() => {}} className="form">
        <input
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
          onChange={(e) => setName(e.target.value)}
          value={name}
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
  );
}

export default FormContact;
